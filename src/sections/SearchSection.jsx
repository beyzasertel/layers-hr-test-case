"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";

import Searchbar from "@/components/common/Searchbar";
import Button from "@/components/common/Button";

export default function SearchSection() {
  const t = useTranslations("Common");
  const locale = useLocale();
  const router = useRouter();

  const [query, setQuery] = useState("");

  const handleSearch = (value) => {
    const q = value || query;

    if (!q) return;

    router.push(`/${locale}/jobs?search=${encodeURIComponent(q)}`);
  };

  return (
    <section className="w-full bg-light-blue">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
          <div className="w-full md:max-w-3xl">
            <Searchbar
              variant="header"
              placeholder={t("search_placeholder")}
              onSearch={(val) => {
                setQuery(val);
                handleSearch(val);
              }}
              fullWidth
            />
          </div>

          <div className="flex justify-center">
            <Button variant="search-image">&nbsp;</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
