"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import headerData from "@/data/headerMenu.json";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const withLocale = (href) => `/${locale}${href}`;

  return (
    <header className="w-full bg-[#4361ee]">
      <div className="mx-auto flex h-[86px] max-w-7xl items-center justify-between px-6">
        <Link href={withLocale("/")} className="flex items-center gap-3">
          <span className="text-2xl text-white">
            {t(headerData.brand.labelKey.replace("Header.", ""))}
          </span>
        </Link>

        <div ref={menuRef} className="relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-3 rounded-full px-2 py-1 text-left text-white hover:bg-white/10"
          >
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium">
                  {headerData.user.name}
                </span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div className="text-xs text-white/70 text-end">
                {t("userTitle")}
              </div>
            </div>

            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/40 bg-white">
              <Image
                src={headerData.user.avatar}
                alt="User"
                fill
                className="object-cover"
              />
            </div>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden">
              <div className="px-4 py-3">
                <p className="text-sm font-medium text-gray-900">
                  {headerData.user.name}
                </p>
                <p className="text-xs text-grey">{t("userTitle")}</p>
              </div>

              <div className="h-px bg-gray-100" />

              <nav className="py-2">
                {headerData.menu.map((item) => (
                  <MenuItem
                    key={item.key}
                    href={withLocale(item.href)}
                    onClick={() => setOpen(false)}
                  >
                    {t(item.labelKey.replace("Header.", ""))}
                  </MenuItem>
                ))}

                <div className="my-2 h-px bg-gray-100" />

                <button
                  onClick={() => {
                    setOpen(false);
                    console.log("logout");
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                >
                  {t("menu.logout")}
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function MenuItem({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-2 text-sm text-grey hover:bg-gray-50"
    >
      {children}
    </Link>
  );
}
