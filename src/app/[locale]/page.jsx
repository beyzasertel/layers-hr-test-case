import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function HomePage({ params }) {
  const { locale } = await params;

  // ✅ locale’e göre server cache ayrımı
  setRequestLocale(locale);

  // ✅ hook yok: server fonksiyonu
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return (
    <main className="min-h-screen p-10 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <LanguageSwitcher />
      </div>

      <p className="text-lg">{t("desc")}</p>
    </main>
  );
}
