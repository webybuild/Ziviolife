import PageHeader from "../home_components/PageHeader";
import aboutBg from "../../src/assets/About/about.jpeg";
import topImg from "../../src/assets/About/topImg.png";
import philImg from "../../src/assets/About/phil.png";
import trustImg from "../../src/assets/About/collage.png";
import bannerSqr from "../../src/assets/banner/designBg.png";
import ValuesGridSection from "../home_components/ValuesGridSection";
import PartnersSection from "../home_components/PartnersSection";
import TeamSection from "../home_components/TeamSection";
import TestimonialsSection from "../home_components/TestimonialsSection";
import ContactSection from "../home_components/ContactSection";

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle={
          <>
            ZIVIO combines <strong>precision</strong> engineering and{" "}
            <strong>timeless</strong> design to shape a brighter, more{" "}
            <strong>sustainable</strong> world.
          </>
        }
        bgImage={aboutBg}
        highlight="Us"
      ></PageHeader>
      {/* Page Content */}
      <div className="max-w-7xl mx-auto">
        {" "}
        {/* Top section */}
        <section className="bg-white font-arimo">
          <div className="py-12">
            {/* Breadcrumbs (static) */}
            <div className="flex items-center gap-2 mb-8">
              {/* Home breadcrumb */}
              <div className="flex items-center gap-2 bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-sm">
                <span className="w-2.5 h-2.5 bg-gray-500 rounded-full"></span>
                <span>Home</span>
              </div>

              {/* Divider arrow */}
              <span className="text-gray-400 text-lg">{">"}</span>

              {/* About breadcrumb (active) */}
              <div className="flex items-center gap-2 border border-gray-200 px-4 py-1.5 rounded-full text-sm">
                <span className="w-2.5 h-2.5 bg-[#c68c07] rounded-full"></span>
                <span className="font-medium text-black">About</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start py-12">
              {/* LEFT: Framed image */}
              <div className="flex justify-start">
                <div className="relative w-[85%] md:w-[80%] lg:w-[100%] max-w-[600px] mx-auto">
                  {/* Decorative outer frame — slightly overlapping the image */}
                  <div className="absolute -top-3 -left-3 w-full h-full border-2 border-gray-300 pointer-events-none z-10"></div>

                  {/* Image container */}
                  <div className="relative">
                    <img
                      src={topImg}
                      alt="Architectural lighting"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT: Content */}
              <div className="flex flex-col justify-center items-center text-gray-700 h-full gap-6 font-arimo">
                <p>
                  <strong>ZIVIO</strong> Life by <strong>Artize</strong> stands
                  as a global benchmark in architectural outdoor lighting, a
                  name synonymous with innovation, precision, and timeless
                  design. Every luminaire we create is born from a deep
                  understanding of light as both an art and a science, merging
                  form and function to enhance the spaces it touches.
                </p>
                <p>
                  Our journey is driven by a singular vision, to craft lighting
                  solutions that transcend utility and become expressions of
                  creativity, sustainability, and human connection. From concept
                  to creation, we uphold uncompromising standards of quality and
                  detail, ensuring that our products not only perform flawlessly
                  but also inspire a sense of beauty and belonging.
                </p>
                <p>
                  With a global network of designers, engineers, and
                  visionaries, ZIVIO continues to redefine what it means to
                  illuminate the world responsibly, intelligently, and artfully.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Philosophy section */}
        <section className="relative bg-white overflow-hidden">
          <div className="px-6 py-24">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* BIG OUTLINE WORD, placed absolutely and behind content */}
              <h2
                aria-hidden="true"
                className="absolute -top-5 -translate-y-1/2 right-0 sm:right-0 text-[3rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] font-bold text-outline pointer-events-none select-none whitespace-nowrap font-arimo leading-none z-0"
              >
                Philosophy
              </h2>

              {/* LEFT: Image, sits above outline */}
              <div className="flex justify-start z-10">
                <div className="relative w-full max-w-[420px]">
                  <div className="relative overflow-hidden rounded">
                    <img
                      src={philImg}
                      alt="Outdoor lighting scene"
                      className="w-full max-h-[550px] object-cover block shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT: Content, above outline */}
              <div className="z-20">
                <h3 className="text-6xl text-black mb-12 -ml-1.5 font-arsenal">
                  Our Philosophy
                </h3>

                <div className="text-gray-600 leading-relaxed space-y-8 max-w-xl font-arimo">
                  <p>
                    At ZIVIO, we believe that exceptional lighting should not
                    only enhance the lives of individuals but also protect the
                    planet. This guiding principle drives our pursuit of ethical
                    and environmentally sustainable practices. We are dedicated
                    to preserving natural resources, developing human-centric
                    lighting solutions, and ensuring that future generations
                    inherit a brighter, more sustainable world.
                  </p>

                  <p>
                    Our approach balances craftsmanship, research, and
                    thoughtful material choices. We design with longevity and
                    responsibility in mind, so every product contributes
                    positively to the built environment, while minimizing
                    environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Sustainability section */}
        <section className="relative bg-white overflow-hidden">
          <div className="px-6 py-24">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* BIG OUTLINE WORD, placed absolutely and behind content */}
              <h2
                aria-hidden="true"
                className="absolute -top-5 -translate-y-1/2 left-0 sm:left-0 text-[3rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] font-bold text-outline pointer-events-none select-none whitespace-nowrap font-arimo leading-none z-0"
              >
                Sustainability
              </h2>

              {/* Left: Content, above outline */}
              <div className="z-20">
                <h3 className="text-6xl text-black mb-12 -ml-1.5 font-arsenal">
                  Commitment to Sustainability
                </h3>

                <div className="text-gray-600 leading-relaxed space-y-8 max-w-xl font-arimo">
                  <p>
                    At ZIVIO, we believe that exceptional lighting should not
                    only enhance the lives of individuals but also protect the
                    planet. This guiding principle drives our pursuit of ethical
                    and environmentally sustainable practices. We are dedicated
                    to preserving natural resources, developing human-centric
                    lighting solutions, and ensuring that future generations
                    inherit a brighter, more sustainable world.
                  </p>

                  <p>
                    Our approach balances craftsmanship, research, and
                    thoughtful material choices. We design with longevity and
                    responsibility in mind, so every product contributes
                    positively to the built environment, while minimizing
                    environmental impact.
                  </p>
                </div>
              </div>

              {/* Right: Image, sits above outline */}
              <div className="flex justify-end z-10">
                <div className="relative w-full max-w-[420px]">
                  <div className="relative overflow-hidden rounded">
                    <img
                      src={philImg}
                      alt="Outdoor lighting scene"
                      className="w-full max-h-[550px] object-cover block shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Philosophy section */}
        <section className="relative bg-white overflow-hidden">
          <div className="px-6 py-24">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* BIG OUTLINE WORD, placed absolutely and behind content */}
              <h2
                aria-hidden="true"
                className="absolute -top-5 -translate-y-1/2 left-20 sm:left-50 text-[3rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] font-bold text-outline pointer-events-none select-none whitespace-nowrap font-arimo leading-none z-0"
              >
                Vision
              </h2>

              {/* LEFT: Image, sits above outline */}
              <div className="flex justify-start z-10">
                <div className="relative w-full max-w-[420px]">
                  <div className="relative overflow-hidden rounded">
                    <img
                      src={philImg}
                      alt="Outdoor lighting scene"
                      className="w-full max-h-[550px] object-cover block shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT: Content, above outline */}
              <div className="z-20">
                <h3 className="text-6xl text-black mb-12 -ml-1.5 font-arsenal">
                  Our Vision
                </h3>

                <div className="text-gray-600 leading-relaxed space-y-8 max-w-xl font-arimo">
                  <p>
                    At ZIVIO, we believe that exceptional lighting should not
                    only enhance the lives of individuals but also protect the
                    planet. This guiding principle drives our pursuit of ethical
                    and environmentally sustainable practices. We are dedicated
                    to preserving natural resources, developing human-centric
                    lighting solutions, and ensuring that future generations
                    inherit a brighter, more sustainable world.
                  </p>

                  <p>
                    Our approach balances craftsmanship, research, and
                    thoughtful material choices. We design with longevity and
                    responsibility in mind, so every product contributes
                    positively to the built environment, while minimizing
                    environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="w-full bg-white my-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT: Single image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <img
              src={trustImg}
              alt="Why thousands trust ZIVIO"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* RIGHT: Dark panel */}
          <div className="relative bg-black text-white flex items-center justify-center px-6 py-16 md:py-20 lg:py-28">
            {/* Decorative diamond outlines */}

            {/* Background Squares */}
            <div className="absolute top-4 inset-0 overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-30"
                src={bannerSqr}
                alt="Banner-Background"
              />
            </div>

            {/* TEXT CONTENT */}
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl -ml-1 md:text-4xl lg:text-6xl font-medium leading-tight mb-6 font-arsenal">
                Why thousands trust{" "}
                <span className="font-extrabold text-white">ZIVIO</span>?
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-arimo">
                For us, lighting is about more than visibility, it’s about
                responsibility. From sustainable innovation to uncompromising
                quality, <strong>ZIVIO</strong> is the partner of choice for
                those who demand design, reliability, and a brighter future.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ValuesGridSection></ValuesGridSection>
      <PartnersSection></PartnersSection>
      <TeamSection></TeamSection>
      <TestimonialsSection></TestimonialsSection>
      <ContactSection></ContactSection>
    </>
  );
}
