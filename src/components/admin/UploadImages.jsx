import { useState } from "react";

function UploadImages({ images, setImages, id, width, title, textColor }) {
  const [imgUrls, setImgUrls] = useState([]);

  function selectImages(e) {
    const files = [...e.target.files];
    const uploadableFiles = [];
    files.forEach(file => {
      if(file.size <= 1000000) {
        uploadableFiles.push(file)
      }
    })
    setImages(uploadableFiles);
    const urls = [];
    uploadableFiles.forEach((file) => {
      urls.push(URL.createObjectURL(file));
    });
    setImgUrls(urls);
    console.log(files);
  }

  function cancelImages() {
    setImages([]);
    setImgUrls([]);
  }

  return (
    <div>
      {/* <div className="py-4 font-semibold text-center text-white">{`${
        title?.toUpperCase() || ""
      } IMAGES`}</div> */}
      <div className={`py-4 font-semibold text-center ${textColor} `}>{`${
        title?.toUpperCase() || ""
      }`}</div>
      <div className="border border-gray-500 border-dotted min-h-36 h-auto flex flex-col justify-between gap-4 p-3">
        <div>
          {imgUrls.length > 0 && (
            <div className="bg-white py-5 flex justify-center flex-wrap gap-2">
              {imgUrls.map((image, ind) => (
                <img
                  className="border p-2"
                  src={image}
                  key={ind}
                  width={width || "100px"}
                  height={width || "100px"}
                />
              ))}
            </div>
          )}
          {images.length === 0 && (
            <div className="text-center h-36 flex justify-center items-center">
              <label
                htmlFor={id}
                className={`border ${textColor} text-sm border-gray-400 py-2 px-6 rounded-lg cursor-pointer`}
              >
                Select Images
              </label>
            </div>
          )}
          <input
            id={id}
            className="hidden"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => selectImages(e)}
          />
        </div>
        {images.length > 0 && (
          <div className="text-center">
            <button
              className={`py-1 px-6 ${textColor} border text-sm`}
              onClick={() => cancelImages()}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadImages;
