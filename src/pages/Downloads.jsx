import React, { useState, useEffect } from "react";
import PDFViewer from "../components/PDFViewer";
import PageHeader from "../components/PageHeader";
import headBg from "../../src/assets/Downloads/headBg.jpeg";
import FullScreenLoader from "../components/FullScreenLoader";

export default function Downloads() {
  const pdfs = [
    {
      fileId: "1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism",
      title: "ZIVIO Product Catalogue 2025",
    },
    {
      fileId: "17087cBuJJW0AZKFDlMvn6b4g9AqenCCD",
      title: "ZIVIO Product Catalogue 2025",
    },
    {
      fileId: "1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism",
      title: "ZIVIO Product Catalogue 2025",
    },
    {
      fileId: "1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism",
      title: "ZIVIO Product Catalogue 2025",
    },
    {
      fileId: "1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism",
      title: "ZIVIO Product Catalogue 2025",
    },
    {
      fileId: "1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism",
      title: "ZIVIO Product Catalogue 2025",
    },
    {
      fileId: "1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism",
      title: "ZIVIO Product Catalogue 2025",
    },
    {
      fileId: "1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism",
      title: "ZIVIO Product Catalogue 2025",
    },
  ];

  const [loading, setLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  // Called every time one PDF iframe finishes loading
  const handlePdfLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  // Once all PDFs are loaded, hide the loader
  useEffect(() => {
    if (loadedCount >= pdfs.length) {
      const timer = setTimeout(() => setLoading(false), 400);
      return () => clearTimeout(timer);
    }
  }, [loadedCount, pdfs.length]);

  return (
    <>
      {loading && <FullScreenLoader />}

      <PageHeader
        title="Downloads"
        subtitle={
          <>
            ZIVIO combines <strong>precision</strong> engineering and{" "}
            <strong>timeless</strong> design to shape a brighter, more{" "}
            <strong>sustainable</strong> world.
          </>
        }
        bgImage={headBg}
        highlight="loads"
      />

      <div className="flex flex-wrap justify-center items-start gap-10 px-4 py-12">
        {pdfs.map((pdf, index) => (
          <PDFViewer
            key={index}
            fileId={pdf.fileId}
            title={pdf.title}
            onLoad={handlePdfLoad} // 👈 receive load callback
          />
        ))}
      </div>
    </>
  );
}
