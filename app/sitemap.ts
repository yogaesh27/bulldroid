import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bulldroid.in",
      lastModified: new Date(),
    },
    {
      url: "https://bulldroid.in/products",
      lastModified: new Date(),
    },
    {
      url: "https://bulldroid.in/about",
      lastModified: new Date(),
    },
    {
      url: "https://bulldroid.in/contact",
      lastModified: new Date(),
    },
    {
      url: "https://bulldroid.in/application",
      lastModified: new Date(),
    },
  ];
}