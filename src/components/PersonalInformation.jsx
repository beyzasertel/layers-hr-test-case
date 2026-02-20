"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ProfileInfo() {
  const t = useTranslations("Profile");

  return (
    <div className="space-y-2 text-dark-gray">
      <h2 className="text-2xl text-blue">Nesil AKSOY</h2>

      <p>UX Designer</p>

      <p>{t("location")}</p>

      <p>
        <a
          href="https://eray_karakullukcu.neyasis.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          eray_karakullukcu.neyasis.com
        </a>
      </p>

      <p>+90 555 66 44</p>

      <a
        href="/cv/BEYZA-CAN-SERTEL-CV.pdf"
        download="beyza-can-sertel-CV.pdf"
        className="inline-flex items-center gap-2 font-medium text-black hover:underline text-xs"
      >
        <Download size={18} />
        {t("download")}
      </a>

      <Link href="/profile/edit" className="block text-blue underline">
        {t("editProfile")}
      </Link>
    </div>
  );
}
