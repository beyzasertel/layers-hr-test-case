import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = routing.locales.includes(locale)
    ? locale
    : routing.defaultLocale;

  return {
    locale: safeLocale,
  };
});
