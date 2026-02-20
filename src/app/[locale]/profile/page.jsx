"use client";

import Header from "@/components/common/Header";
import Searchbar from "@/components/common/Searchbar";
import ProfileInformation from "@/components/PersonalInformation";
import ProfilePhotoUploadCard from "@/components/ProfilePhotoUploadCard";
import DocumentsSection from "@/sections/DocumentsSection";
import SearchSection from "@/sections/SearchSection";
import SocialLinksSection from "@/sections/SocialLinksSection";
import { useTranslations, useLocale } from "next-intl";

export default function ProfilePage() {
  const t = useTranslations("Common");
  return (
    <div>
      <Header></Header>
      <div className="bg-light-blue">
        <SearchSection />
      </div>
      <ProfilePhotoUploadCard />
      <ProfileInformation />
      <SocialLinksSection />
      <DocumentsSection
        title="Dokümanlarım"
        files={["eraycv.docx", "eraycv--eng.pdf", "mcpd-cert.pdf"]}
      />
    </div>
  );
}
