import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";
import { getMetaForPath } from "../routes";
import { BASE_URL, SITE_NAME, SITE_DESCRIPTION } from "../config";

export default function SEO() {
  const [pathname] = useLocation();
  const meta = getMetaForPath(pathname);

  const title = meta?.title ?? `${SITE_NAME} | ${SITE_DESCRIPTION}`;
  const description = meta?.description ?? SITE_DESCRIPTION;
  const canonical = `${BASE_URL}${pathname === "/" ? "" : pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
