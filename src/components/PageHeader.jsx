import React from "react";
import { Link } from "react-router-dom";

export default function PageHeader({
  title,
  subtitle,
  bgImage,
  highlight,
  className,
}) {
  // Render title and highlight the first occurrence of `highlight` if provided

  const renderTitle = () => {
    if (!highlight) return title;
    const idx = title.indexOf(highlight);
    if (idx === -1) return title;
    const before = title.slice(0, idx);
    const after = title.slice(idx + highlight.length);
    return (
      <>
        {before}
        <span className="text-[#C68C07]">{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <header
      className={"relative w-full overflow-hidden " + className}
      aria-label={title}
    >
      {/* Background image */}
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Logo Section */}
        <div className="absolute top-4 left-6 md:top-4 md:left-10">
          <Link to="/">
            <img
              src={"/Zivio-logo-bgdark.svg"}
              alt="Logo"
              className="h-10 md:h-16 object-contain"
            />
          </Link>
        </div>
        {/* Overlay to improve contrast */}
        <div className="w-full bg-black/60">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-36">
            <div className="flex items-center">
              <div className="w-full md:w-2/3 lg:w-1/2">
                <h1 className="text-white text-3xl md:text-5xl font-arsenal font-bold tracking-tight">
                  {renderTitle()}
                </h1>
                <p className="mt-4 text-white/90 text-base md:text-normal leading-relaxed font-arimo">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
