"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname(); // locale'siz route handle eder

  return (
    <div className="flex gap-2">
      <Link
        href={pathname}
        locale="tr"
        className={`px-3 py-2 rounded border ${locale === "tr" ? "font-bold" : ""}`}
      >
        TR
      </Link>

      <Link
        href={pathname}
        locale="en"
        className={`px-3 py-2 rounded border ${locale === "en" ? "font-bold" : ""}`}
      >
        EN
      </Link>
    </div>
  );
}
