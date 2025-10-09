import React from "react";
import PDFViewer from "../components/PDFViewer";

export default function Downloads() {
  return (
    <>
      <div className="relative bg-[#0f1724] text-white">
        <div className="px-8 py-20 max-w-6xl mx-auto">
          <h1 className="text-4xl font-semibold">Discover BlockGems</h1>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full h-36 md:h-48"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="
        M0,0
        H980            /* straight to 980 */
        L1220,90        /* diagonal line to (1220,90) */
        Q1330,120 1440,100  /* quadratic curve (rounded) to right edge */
        V200
        H0
        Z
      "
          />
        </svg>
      </div>

      <div className="flex flex-wrap gap-12 justify-center items-center">
        <PDFViewer
          fileId="1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism"
          title="ZIVIO Product Catalogue 2025"
        ></PDFViewer>
        <PDFViewer
          fileId="17087cBuJJW0AZKFDlMvn6b4g9AqenCCD"
          title="ZIVIO Product Catalogue 2025"
        ></PDFViewer>
        <PDFViewer
          fileId="1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism"
          title="ZIVIO Product Catalogue 2025"
        ></PDFViewer>
        <PDFViewer
          fileId="1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism"
          title="ZIVIO Product Catalogue 2025"
        ></PDFViewer>
        <PDFViewer
          fileId="1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism"
          title="ZIVIO Product Catalogue 2025"
        ></PDFViewer>
        <PDFViewer
          fileId="1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism"
          title="ZIVIO Product Catalogue 2025"
        ></PDFViewer>
        <PDFViewer
          fileId="1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism"
          title="ZIVIO Product Catalogue 2025"
        ></PDFViewer>
        <PDFViewer
          fileId="1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism"
          title="ZIVIO Product Catalogue 2025"
        ></PDFViewer>
        <PDFViewer
          fileId="1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism"
          title="ZIVIO Product Catalogue 2025"
        ></PDFViewer>
        <PDFViewer
          fileId="1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism"
          title="ZIVIO Product Catalogue 2025"
        ></PDFViewer>
        <PDFViewer
          fileId="1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism"
          title="ZIVIO Product Catalogue 2025"
        ></PDFViewer>
        <PDFViewer
          fileId="1UEH0e6B-PEE5gFYBwUv6PcadsRXC1ism"
          title="ZIVIO Product Catalogue 2025"
        ></PDFViewer>
      </div>
    </>
  );
}
