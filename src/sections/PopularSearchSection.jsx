"use client";
import { useTranslations } from "next-intl";

import Button from "@/components/common/Button";

export default function PopularSearch() {
  const t = useTranslations("common");

  return (
    <section className="w-full bg-[#6b7998]/5 py-6">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-10">
          <p className="text-gray-500 text-lg whitespace-nowrap">
            {t("popular_search")}
          </p>

          <div className="relative w-full md:max-w-4xl">
            <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap pr-14 justify-start md:justify-center scroll-smooth">
              <Button variant="pill">UX designer</Button>
              <Button variant="pill">UI designer</Button>
              <Button variant="pill">Front-end developer</Button>
              <Button variant="pill">Back-end developer</Button>
              <Button variant="pill">iOS developer</Button>
            </div>

            <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l via-white/80 to-transparent md:w-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
