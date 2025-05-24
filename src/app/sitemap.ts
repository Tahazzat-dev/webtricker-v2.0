import { MetadataRoute } from "next";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const blogSiteMap: MetadataRoute.Sitemap = blogList.map((blog) => ({
  //   url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.permalink}`,
  // }));

  // const careerSiteMap: MetadataRoute.Sitemap = careerData.map((career) => ({
  //   url: `${process.env.NEXT_PUBLIC_BASE_URL}/career/${career.parmalink}`,
  // }));

  // const coursesSiteMap: MetadataRoute.Sitemap = couesesItemData.map(
  //   (coueses) => ({
  //     url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses/${coueses.courseLink}`,
  //   })
  // );

  // const servicesSiteMap: MetadataRoute.Sitemap = ourServiceList.map(
  //   (services) => ({
  //     url: `${process.env.NEXT_PUBLIC_BASE_URL}/service/${services.permalink}`,
  //   })
  // );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    }, 
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
    // {
    //   url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    // },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/404`,
    },
  ];
}
