import ProductsSection from "../home_components/ProductsSection";
import ContactSection from "../home_components/ContactSection";
import ProjectsSection from "../home_components/ProjectSection";
import DesignBalanceSection from "../home_components/DesignBalanceSection";
import DetailsSection from "../home_components/DetailsSection";
import HeroSection from "../home_components/HeroSection";
import IntroSection from "../home_components/IntroSection";
import ProductGridSection from "../home_components/ProductGridSection";
import ImpactBanner from "../home_components/ImpactBannerSection";
import ImpactSliderSection from "../home_components/ImpactSliderSection";
import DownloadsSection from "../home_components/DownloadsSection";

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
