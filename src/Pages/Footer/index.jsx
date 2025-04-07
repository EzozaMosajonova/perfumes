import { Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
   const { t } = useTranslation();
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="container max-w-[1260px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Section */}
        <div className="mb-6 md:mb-0 md:text-left text-center">
          <h3 className="text-lg font-semibold">{t("footer.logo")}</h3>
          <a href="tel:+998901234567">
            <p className="flex items-center gap-2 mt-2">
              <Phone className="w-5 h-5" /> +971 52 133 0070
            </p></a>
          <a href="#email">
            <p className="flex items-center gap-2 mt-2">
              <Mail className="w-5 h-5" /> info@luxlineuae.com
            </p>
          </a>
          <a href="/">
            <p className="flex items-center gap-2 mt-2">
              <Mail className="w-5 h-5" /> bakhti@luxlineuae.com
            </p></a>
        </div>

        {/* About Section */}
        <div className="text-center md:text-left max-w-md">
          <p>{t("footer.desc")}</p>
        </div>

        {/* Best Products Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">{t("footer.desc2")}</h3>
          <p className="mt-2">{t("footer.desc3")}</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p>{t("footer.bt")}</p>
      </div>
    </footer>
  );
}
