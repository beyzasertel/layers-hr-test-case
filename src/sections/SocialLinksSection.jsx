"use client";

import Link from "next/link";
import Image from "next/image";
import data from "@/data/socialLinks.json";
import { useTranslations } from "next-intl";

export default function SocialLinksSection() {
  const t = useTranslations("Profile");

  return (
    <section className="space-y-2">
      <h3 className="text-2xl text-blue">{t("website")}</h3>

      <div className="flex flex-wrap items-center">
        {data.items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            title={item.label}
            aria-label={item.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:opacity-90"
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={22}
              height={22}
              className="object-contain"
            />
          </a>
        ))}
      </div>

      <Link
        href="/profile/edit/social"
        className="inline-block text-blue underline"
      >
        {t("edit")}
      </Link>
    </section>
  );
}
