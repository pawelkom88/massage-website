import FooterLinks from "./FooterLinks";
import SocialMedia from "@/components/social-media/SocialMedia";

export default function Footer() {
  return (
    <footer className="bg-teriary-clr max-full px-4 text-white">
      <h2 className="text-heading2 text-center pt-12 pb-4">Get in touch</h2>
      <div className="max-w-[85rem] mx-auto lg:grid lg:grid-cols-4 lg:gap-12 place-items-center py-8">
        <div className="w-full block lg:col-span-2 h-96">
          <iframe
            title="google map"
            className="h-full w-full border-none"
            width="400"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=51.591812,-3.0086796`}></iframe>
        </div>

        <div className="w-full lg:col-span-2 mt-12 lg:mt-0">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-heading3">Contact me</h3>
              <a href="tel:07525431743" className="block font-medium  hover:text-primary-clr">
                07525431743
              </a>
              <a
                href="mailto:info@healthymuscles.co.uk"
                className="block font-medium  hover:text-primary-clr">
                info@healthymuscles.co.uk
              </a>
              <br />
              <SocialMedia />
            </div>

            <div>
              <h3 className="text-heading3 mb-2">Working Hours:</h3>
              <ul className="mt-4 space-y-1">
                <li>Mondays 10am - 2pm & 5pm - 8pm</li>
                <li>Tuesdays 5pm - 8pm</li>
                <li>Wednesdays 10am - 2pm & 5pm - 8pm</li>
                <li>Thursdays 5pm - 8pm</li>
                <li>Friday 5pm - 8pm</li>
                <li>Saturday 9.30am - 1pm</li>
              </ul>
            </div>
          </div>
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
}
