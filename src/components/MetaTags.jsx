import { Helmet } from "react-helmet-async";

const MetaTags = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogUrl,
  ogType,
  ogImage,
  twitterCard,
  twitterTitle,
  twitterDescription,
  twitterImage,
}) => (
  <Helmet>
    {/* Primary Meta Tags */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />

    {/* Open Graph / Facebook */}
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={ogDescription} />
    <meta property="og:url" content={ogUrl} />
    <meta property="og:type" content={ogType} />
    <meta property="og:image" content={ogImage} />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content={twitterCard} />
    <meta name="twitter:title" content={twitterTitle} />
    <meta name="twitter:description" content={twitterDescription} />
    <meta name="twitter:image" content={twitterImage} />
  </Helmet>
);

export default MetaTags;
