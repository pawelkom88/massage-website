import Link from "next/link";
import Button, { ButtonType } from "../button/Button";

export default function CallToAction({children} :  {children: React.ReactNode}) {
  return (
    <>
      {" "}
      <Link href="contact-me" className={`${ButtonType.primary} hidden lg:block`}>
        {children}
      </Link>
      <Button
        href="tel:07525431743"
        isButton={false}
        type="primary"
        additionalClasses="lg:hidden block">
        {children}
      </Button>
    </>
  );
}
