"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import data from "@/data/jobsForYou.json";

export default function JobsForYouSection() {
  const t = useTranslations();

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-3xl font-medium text-gray">
          {t(data.titleKey)}
        </h2>

        <div className="grid gap-12 md:grid-cols-4">
          {data.columns.map((col, i) => (
            <div key={i}>
              <h3 className="mb-4 text-lg font-medium text-gray">
                {t(col.headingKey)}
              </h3>

              <ul className="space-y-2 text-gray-500">
                {col.items.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className="hover:text-gray-800">
                      {t(item.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
