import ProductsSection from "../components/ProductsSection";
import ContactSection from "../components/ContactSection";
import ProjectsSection from "../components/ProjectSection";
import DesignBalanceSection from "../components/DesignBalanceSection";
import DetailsSection from "../components/DetailsSection";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import ProductGridSection from "../components/ProductGridSection";
import ImpactBanner from "../components/ImpactBannerSection";
import ImpactSliderSection from "../components/ImpactSliderSection";
import DownloadsSection from "../components/DownloadsSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection></HeroSection>

      {/* Intro Statement */}
      <IntroSection></IntroSection>

      {/* Product Grid */}
      <ProductGridSection></ProductGridSection>

      {/* Impact Banner Section */}
      <ImpactBanner></ImpactBanner>

      {/*Impact Slider Section*/}
      <ImpactSliderSection></ImpactSliderSection>

      {/* Design Balance Section */}
      <DesignBalanceSection></DesignBalanceSection>

      {/* Products Section Tab */}
      <ProductsSection></ProductsSection>

      {/* Project Section */}
      <ProjectsSection></ProjectsSection>

      {/* Details Section */}
      <DetailsSection></DetailsSection>

      {/* Downloads Section */}
      <DownloadsSection></DownloadsSection>

      {/* CTA Section */}
      <ContactSection></ContactSection>
    </div>
  );
}
