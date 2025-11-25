import icon1 from "../../assets/download_icons/family_spect_sheet.png";
import icon2 from "../../assets/download_icons/product_spect_sheet.png";
import icon3 from "../../assets/download_icons/installation_manual.png";
import icon4 from "../../assets/download_icons/technical_drawing.png";
import icon5 from "../../assets/download_icons/2d_cad.png";
import icon6 from "../../assets/download_icons/bim_ifc.png";
import icon7 from "../../assets/download_icons/dialux_uld.png";
import icon8 from "../../assets/download_icons/ies.png";
import icon9 from "../../assets/download_icons/3d.png";
import icon10 from "../../assets/download_icons/ar_tracker.png";
import icon11 from "../../assets/download_icons/ce.png";
import { toast } from "react-toastify";

function DownloadList({ downloads, setDownloads }) {
  const labelStyle = "font-semibold text-white text-sm py-1 px-2";

  function updatePdf(e) {
    const { name, files } = e.target;
    const data = { ...downloads };
    if(files[0].size > 5000000) {
      return toast.error('PDF size can not exceed 5mb!', { autoClose: 2000 })
    }
    data[name] = files[0];
    setDownloads(data);
  }

  return (
    <div>
      <div className="py-8 font-semibold text-center text-white">DOWNLOADS</div>
      <div>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col">
            <div className="flex">
              <span>
                <img src={icon1} alt="icon" />
              </span>
              <label className={labelStyle}>Family spec sheet</label>
            </div>
            <label
              htmlFor="family-spec"
              className="ml-8 text-xs font-semibold cursor-pointer text-gray-300"
            >
              {downloads["family-spec"]?.name || "Upload File"}
            </label>
            <input
              className="hidden"
              id="family-spec"
              accept="application/pdf"
              name="family-spec"
              type="file"
              onChange={(e) => updatePdf(e)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span>
                <img src={icon2} alt="icon" />
              </span>
              <label className={labelStyle}>Product spec sheet</label>
            </div>
            <label
              htmlFor="product-spec"
              className="ml-8 text-xs font-semibold cursor-pointer text-gray-300"
            >
              {downloads["product-spec"]?.name || "Upload File"}
            </label>
            <input
              className="hidden"
              type="file"
              id="product-spec"
              accept="application/pdf"
              name="product-spec"
              onChange={(e) => updatePdf(e)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span>
                <img src={icon3} alt="icon" />
              </span>
              <label className={labelStyle}>Installation manual</label>
            </div>
            <label
              htmlFor="install-manual"
              className="ml-8 text-xs font-semibold cursor-pointer text-gray-300"
            >
              {downloads["install-manual"]?.name || "Upload File"}
            </label>
            <input
              className="hidden"
              type="file"
              id="install-manual"
              accept="application/pdf"
              name="install-manual"
              onChange={(e) => updatePdf(e)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span>
                <img src={icon4} alt="icon" />
              </span>
              <label className={labelStyle}>Technical drawing</label>
            </div>
            <label
              htmlFor="tech-drawing"
              className="ml-8 text-xs font-semibold cursor-pointer text-gray-300"
            >
              {downloads["tech-drawing"]?.name || "Upload File"}
            </label>
            <input
              className="hidden"
              type="file"
              id="tech-drawing"
              accept="application/pdf"
              name="tech-drawing"
              onChange={(e) => updatePdf(e)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span>
                <img src={icon5} alt="icon" />
              </span>
              <label className={labelStyle}>2D - CAD</label>
            </div>
            <label
              htmlFor="2d-cad"
              className="ml-8 text-xs font-semibold cursor-pointer text-gray-300"
            >
              {downloads["2d-cad"]?.name || "Upload File"}
            </label>
            <input
              className="hidden"
              type="file"
              id="2d-cad"
              accept="application/pdf"
              name="2d-cad"
              onChange={(e) => updatePdf(e)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span>
                <img src={icon6} alt="icon" />
              </span>
              <label className={labelStyle}>BIM - IFC</label>
            </div>
            <label
              htmlFor="bim"
              className="ml-8 text-xs font-semibold cursor-pointer text-gray-300"
            >
              {downloads["bim"]?.name || "Upload File"}
            </label>
            <input
              className="hidden"
              type="file"
              id="bim"
              accept="application/pdf"
              name="bim"
              onChange={(e) => updatePdf(e)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span>
                <img src={icon7} alt="icon" />
              </span>
              <label className={labelStyle}>DIALux - ULD</label>
            </div>
            <label
              htmlFor="dialux"
              className="ml-8 text-xs font-semibold cursor-pointer text-gray-300"
            >
              {downloads["dialux"]?.name || "Upload File"}
            </label>
            <input
              className="hidden"
              type="file"
              id="dialux"
              accept="application/pdf"
              name="dialux"
              onChange={(e) => updatePdf(e)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span>
                <img src={icon8} alt="icon" />
              </span>
              <label className={labelStyle}>IES</label>
            </div>
            <label
              htmlFor="ies"
              className="ml-8 text-xs font-semibold cursor-pointer text-gray-300"
            >
              {downloads["ies"]?.name || "Upload File"}
            </label>
            <input
              className="hidden"
              type="file"
              id="ies"
              accept="application/pdf"
              name="ies"
              onChange={(e) => updatePdf(e)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span>
                <img src={icon9} alt="icon" />
              </span>
              <label className={labelStyle}>3D view link</label>
            </div>
            <label
              htmlFor="3d-view"
              className="ml-8 text-xs font-semibold cursor-pointer text-gray-300"
            >
              {downloads["3d-view"]?.name || "Upload File"}
            </label>
            <input
              className="hidden"
              type="file"
              id="3d-view"
              accept="application/pdf"
              name="3d-view"
              onChange={(e) => updatePdf(e)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span>
                <img src={icon10} alt="icon" />
              </span>
              <label className={labelStyle}>AR Tracker</label>
            </div>
            <label
              htmlFor="ar"
              className="ml-8 text-xs font-semibold cursor-pointer text-gray-300"
            >
              {downloads["ar"]?.name || "Upload File"}
            </label>
            <input
              className="hidden"
              type="file"
              id="ar"
              accept="application/pdf"
              name="ar"
              onChange={(e) => updatePdf(e)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span>
                <img src={icon11} alt="icon" />
              </span>
              <label className={labelStyle}>CE document</label>
            </div>
            <label
              htmlFor="ce"
              className="ml-8 text-xs font-semibold cursor-pointer text-gray-300"
            >
              {downloads["ce"]?.name || "Upload File"}
            </label>
            <input
              className="hidden"
              type="file"
              id="ce"
              accept="application/pdf"
              name="ce"
              onChange={(e) => updatePdf(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadList;
