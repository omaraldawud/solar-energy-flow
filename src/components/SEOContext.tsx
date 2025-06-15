import { createContext, useContext, ReactNode } from "react";

// Define the shape of SEO metadata
interface SEOData {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
}

// Create the context with a default empty object
const SEOContext = createContext<SEOData | null>(null);

// Define the provider props type
interface SEOProviderProps {
  children: ReactNode;
}

export const SEOProvider = ({ children }: SEOProviderProps) => {
  const defaultSEO: SEOData = {
    title: "Solar Energy Flow | Efficient Solar Energy Solutions",
    description: "Solar Energy Flow provides efficient and affordable solar energy solutions for homes and businesses.",
    keywords: "solar energy, solar panels, renewable energy, solar solutions, solar power",
    image: "/images/social-share-image.jpg",
    url: "https://solarenergyflow.net",
  };

  return <SEOContext.Provider value={defaultSEO}>{children}</SEOContext.Provider>;
};

// Custom hook to access SEO context
export const useSEO = () => {
  const context = useContext(SEOContext);
  if (!context) {
    throw new Error("useSEO must be used within an SEOProvider");
  }
  return context;
};