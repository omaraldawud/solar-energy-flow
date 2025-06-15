import { Helmet } from "react-helmet-async";
import { useSEO } from "./SEOContext"; // Import context

const SEO = ({ title, description, keywords, image, url }: Partial<SEOData>) => {
  const globalSEO = useSEO(); // Get default SEO values

  return (
    <Helmet>
      {/* Standard SEO Tags */}
      <title>{title || globalSEO.title}</title>
      <meta name="description" content={description || globalSEO.description} />
      <meta name="keywords" content={keywords || globalSEO.keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title || globalSEO.title} />
      <meta property="og:description" content={description || globalSEO.description} />
      <meta property="og:image" content={image || globalSEO.image} />
      <meta property="og:url" content={url || globalSEO.url} />

      {/* Twitter Card */}
      <meta name="twitter:title" content={title || globalSEO.title} />
      <meta name="twitter:description" content={description || globalSEO.description} />
      <meta name="twitter:image" content={image || globalSEO.image} />
    </Helmet>
  );
};

export default SEO;