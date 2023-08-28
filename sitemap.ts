import { MetadataRoute } from "next";
import { subLinks1 } from "./components/navigation/drop-down-menu/DropDownLinks";
import { routes } from "./components/navigation/drop-down-menu/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicRoutes = subLinks1.map(({ href }) => {
    return {
      url: href,
      lastModified: new Date(),
    };
  });

  const staticRoutes = routes.map(route => {
    return {
      url: baseUrl + route,
      lastModified: new Date(),
    };
  });

  const baseUrl = "https://healthymuscles.co.uk/";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...staticRoutes,
    ...dynamicRoutes,
  ];
}
