"use client";

import Header from "@/components/common/Header";
import Searchbar from "@/components/common/Searchbar";
import ProfileInformation from "@/components/PersonalInformation";
import ProfilePhotoUploadCard from "@/components/ProfilePhotoUploadCard";
import SearchSection from "@/sections/SearchSection";
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
    </div>
  );
}
