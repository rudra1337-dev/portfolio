import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin"],
            },
        ],
        sitemap: "https://rudra-dev.onrender.com/sitemap.xml",
        host: "https://rudra-dev.onrender.com",
    };
}
