import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const Metadata: React.FC<MetadataProps> = ({
  title = "PT.Radian Aspal Beton",
  description = "Deskripsi default untuk aplikasi",
  keywords = ["default", "keywords"],
  ogTitle,
  ogDescription,
  ogImage,
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />

        {/* OpenGraph Tags */}
        <meta property="og:title" content={ogTitle || title} />
        <meta
          property="og:description"
          content={ogDescription || description}
        />
        {ogImage && <meta property="og:image" content={ogImage} />}

        {/* Twitter Tags (opsional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle || title} />
        <meta
          name="twitter:description"
          content={ogDescription || description}
        />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
      </Helmet>
    </HelmetProvider>
  );
};
