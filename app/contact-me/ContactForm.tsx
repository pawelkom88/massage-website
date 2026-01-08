"use client";

import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { contactFormSchema } from "./schema";

// Web3Forms hCaptcha sitekey (from docs: https://docs.web3forms.com/getting-started/customizations/spam-protection/hcaptcha)
const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
const WEB3FORMS_KEY = "d5076a2c-294c-401a-8757-40caaeced8a3";

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [captchaToken, setCaptchaToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const captchaRef = useRef<HCaptcha>(null);

  const onHCaptchaChange = (token: string) => {
    setCaptchaToken(token);
    setErrors((prev) => ({ ...prev, "h-captcha-response": "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      "h-captcha-response": captchaToken,
    };

    // Validate with Zod
    const result = contactFormSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Submit to Web3Forms
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "New message from your website",
          ...data,
        }),
      });

      if (response.ok) {
        window.location.href = "/success";
      } else {
        setErrors({ form: "Something went wrong. Please try again." });
        captchaRef.current?.resetCaptcha();
        setCaptchaToken("");
      }
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
      captchaRef.current?.resetCaptcha();
      setCaptchaToken("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto lg:w-2/3 space-y-6 my-12">
      {errors.form && (
        <p className="text-red-500 text-sm text-center">{errors.form}</p>
      )}

      <div className="flex flex-col">
        <label className="mb-1 font-bold uppercase" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="mt-1 w-full border-2 border-x-0 border-t-0 border-gray-200 px-4 py-2 focus:border-[color:var(--secondary-clr)]"
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-bold uppercase" htmlFor="email">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="mt-1 w-full border-2 border-x-0 border-t-0 border-gray-200 px-4 py-2 focus:border-[color:var(--secondary-clr)]"
          placeholder="john@doe.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-bold uppercase" htmlFor="message">
          Message
        </label>
        <textarea
          rows={8}
          name="message"
          id="message"
          className="mt-1 w-full border-2 border-x-0 border-t-0 border-gray-200 px-4 py-2 focus:border-[color:var(--secondary-clr)]"
          placeholder="What can we help you with?"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <div className="flex flex-col">
        <HCaptcha
          ref={captchaRef}
          sitekey={HCAPTCHA_SITEKEY}
          reCaptchaCompat={false}
          onVerify={onHCaptchaChange}
        />
        {errors["h-captcha-response"] && (
          <p className="text-red-500 text-sm mt-1">{errors["h-captcha-response"]}</p>
        )}
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="border border-[color:var(--primary-clr)] bg-[color:var(--primary-clr)] px-12 py-3 font-bold uppercase text-white hover:border hover:bg-transparent hover:text-[color:var(--primary-clr)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
}
