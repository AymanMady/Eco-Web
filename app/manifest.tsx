import { MetadataRoute } from "next";

export const appName = "Green IT";
export const description = "Green IT – Simulateur ludique pour découvrir l'éco-conception web.";
export const appUrl = "http://localhost:3000";
export const themeColor = "#101323";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: appName,
    short_name: appName,
    description: description,
    start_url: "/",
    display: "standalone",
    background_color: themeColor,
    theme_color: themeColor,
    icons: [
      {
        src: `${appUrl}/favicon.ico`,
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

