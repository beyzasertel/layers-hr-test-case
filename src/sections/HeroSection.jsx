"use client";

import Button from "@/components/common/Button";
import SearchBar from "@/components/common/Searchbar";
import { useMessages, useLocale, useTranslations } from "next-intl";

export default function HeroSection() {
  const locale = useLocale();
  const messages = useMessages();
  const t = useTranslations("HomePage");

  return (
    <div className="bg-hero bg-cover py-4">
      <div className="container w-full flex justify-end items-center gap-2 md:gap-4 px-2 md:px-0 py-4">
        <Button>{t("sign_up")}</Button>
        <Button>{t("sign_in")}</Button>
      </div>

      <div className="flex items-center flex-col gap-2 p-12">
        <img src="/images/logo-find-developer.svg" alt="logo" />
        <img src="/images/logo-find-teammate.svg" alt="logo" />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4">
          <div className="flex-1 min-w-0">
            <SearchBar placeholder={t("search_placeholder")} />
          </div>

          <div className="flex flex-col items-center">
            <Button variant="image">&nbsp;</Button>

            <a href="#" className="mt-2 text-sm text-white underline">
              {t("advanced_search")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
