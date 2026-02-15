import icon2 from "../../assets/download_icons/product_spect_sheet.png";
import icon3 from "../../assets/download_icons/installation_manual.png";
import icon5 from "../../assets/download_icons/2d_cad.png";
import icon8 from "../../assets/download_icons/ies.png";
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
                <img src={icon2} alt="icon" />
              </span>
              <label className={labelStyle}>Product Data Sheet</label>
            </div>
            <label
              htmlFor="product-data"
              className="ml-8 text-xs font-semibold cursor-pointer text-gray-300"
            >
              {downloads["product-data"]?.name || "Upload File"}
            </label>
            <input
              className="hidden"
              type="file"
              id="product-data"
              accept="application/pdf"
              name="product-data"
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
                <img src={icon5} alt="icon" />
              </span>
              <label className={labelStyle}>2D Image</label>
            </div>
            <label
              htmlFor="2d-image"
              className="ml-8 text-xs font-semibold cursor-pointer text-gray-300"
            >
              {downloads["2d-image"]?.name || "Upload File"}
            </label>
            <input
              className="hidden"
              type="file"
              id="2d-image"
              accept="application/pdf"
              name="2d-image"
              onChange={(e) => updatePdf(e)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span>
                <img src={icon3} alt="icon" />
              </span>
              <label className={labelStyle}>Installation Manual</label>
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
        </div>
      </div>
    </div>
  );
}

export default DownloadList;
