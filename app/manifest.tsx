import { MetadataRoute } from "next";

export const appName = "EcoWeb";
export const description = "Restez green avec EcoWeb";
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

