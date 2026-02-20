import Footer from "@/components/common/Footer";
import HeroCardsSection from "@/sections/HeroCardsSection";
import HeroSection from "@/sections/HeroSection";
import PartnersSection from "@/sections/PartnersSections";
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
      <HeroCardsSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}
