"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-dark-grey text-white text-sm">
      <div className="mx-auto max-w-7xl px-6 py-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <p className="whitespace-nowrap">®2020 Finddeveloper.net</p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#">{t("privacy_center")}</a>
            <span>|</span>
            <a href="#">{t("cookies")}</a>
            <span>|</span>
            <a href="#">{t("privacy_policy")}</a>
            <span>|</span>
            <a href="#">{t("terms")}</a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#">{t("careers_at_finddeveloper")}</a>
            <span>|</span>
            <a href="#">{t("about_us")}</a>
            <span>|</span>
            <a href="#">{t("help_center")}</a>
          </div>

          <LanguageSwitcher></LanguageSwitcher>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src="/images/iskur-logo.png"
            alt="İŞKUR"
            className="w-20 shrink-0"
          />

          <p className="leading-relaxed text-gray-200 max-w-xl">
            {t("find_talent_footer")}
          </p>
        </div>
      </div>
    </footer>
  );
}
