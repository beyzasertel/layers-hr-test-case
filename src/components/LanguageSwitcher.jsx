"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

import { Select, MenuItem } from "@mui/material";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (event) => {
    const newLocale = event.target.value;

    router.push(pathname, { locale: newLocale });
  };

  return (
    <Select
      value={locale}
      onChange={handleChange}
      variant="standard"
      disableUnderline
      sx={{
        color: "white",
        fontSize: "14px",
        fontWeight: 500,

        "&:before": {
          borderBottom: "none",
        },
        "&:after": {
          borderBottom: "none",
        },

        "& .MuiSvgIcon-root": {
          color: "white",
          fontSize: "20px",
        },

        "& .MuiSelect-select": {
          paddingRight: "24px !important",
        },
      }}
    >
      <MenuItem value="tr">Türkçe</MenuItem>
      <MenuItem value="en">English</MenuItem>
    </Select>
  );
}
