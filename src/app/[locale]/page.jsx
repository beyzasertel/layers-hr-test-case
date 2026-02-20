import Footer from "@/components/common/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import HeroSection from "@/sections/HeroSection";
import PopularSearch from "@/sections/PopularSearchSection";
import { setRequestLocale } from "next-intl/server";

export default async function HomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages =
    locale === "en"
      ? (await import("../../messages/en.json")).default
      : (await import("../../messages/tr.json")).default;

  return (
    <main className="">
      <HeroSection />
      <PopularSearch />
      <Footer />
    </main>
  );
}
