import React, { useEffect, useState } from "react";

const Filter = ({ variants }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('var',variants)
    setData(variants);
  }, [variants]);

  // // useEffect(() => {
  // //   if (variants) {
  // //     const newData = [];
  // //     variants.forEach((variant) => newData.push(JSON.parse(variant)));
  // //     setData(newData);
  // //   }
  // // }, []);

  // Extract unique values for each category
  const uniqueLumen = [...new Set(data?.map((item) => item.lumen))];
  const uniqueOptic = [...new Set(data?.map((item) => item.optic))];
  const uniqueOpticValue = [...new Set(data?.map((item) => item.opticValue))];
  const uniqueCct = [...new Set(data?.map((item) => item.cct))];
  const uniqueDimming = [...new Set(data?.map((item) => item.dimmingType))];

  const [selectedLumen, setSelectedLumen] = useState("");
  const [selectedOptic, setSelectedOptic] = useState("");
  const [selectedOpticvalue, setSelectedOpticvalue] = useState("");
  const [selectedCct, setSelectedCct] = useState("");
  const [selectedDimming, setSelectedDimming] = useState("");

  const filteredData = data?.filter((item) => {
    return (
      (selectedLumen === "" || item.lumen === selectedLumen) &&
      (selectedOptic === "" || item.optic === selectedOptic) &&
      (selectedOpticvalue === "" || item.opticValue === selectedOpticvalue) &&
      (selectedCct === "" || item.cct === selectedCct) &&
      (selectedDimming === "" || item.dimmingType === selectedDimming)
    );
  });

  return (
    <div className=" mx-auto">
      <div className="bg-[#092635] py-11 px-24">
        <div>
          <h1 className="text-white text-2xl font-bold uppercase pb-8">
            Code Finder
          </h1>
        </div>
        <div className="flex space-x-4">
          {/* Dropdown for fruits */}
          <div className="border px-3 py-0 bg-white text-gray-500 w-[18%]">
            <h1>Lumen (lm)</h1>
            <select
              className="text-xs font-bold text-[#092635] w-full border-none outline-none"
              value={selectedLumen}
              onChange={(e) => setSelectedLumen(e.target.value)}
            >
              <option value="">Select</option>
              {uniqueLumen.map((fruit) => (
                <option key={fruit} value={fruit}>
                  {fruit}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown for vegetables */}
          <div className="border px-3 py-0 bg-white text-gray-500 w-[18%]">
            <h1>Optic</h1>
            <select
              className="text-xs font-bold text-[#092635] w-full border-none outline-none"
              value={selectedOptic}
              onChange={(e) => setSelectedOptic(e.target.value)}
            >
              <option value="">Select</option>
              {uniqueOptic.map((veg) => (
                <option key={veg} value={veg}>
                  {veg}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown for non-vegetarian items */}
          <div className="border px-3 py-0 bg-white text-gray-500 w-[18%]">
            <h1>Optic value</h1>
            <select
              className="text-xs font-bold text-[#092635] w-full border-none outline-none"
              value={selectedOpticvalue}
              onChange={(e) => setSelectedOpticvalue(e.target.value)}
            >
              <option value="">Select</option>
              {uniqueOpticValue.map((nonVeg) => (
                <option key={nonVeg} value={nonVeg}>
                  {nonVeg}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown for non-vegetarian items */}
          <div className="border px-3 py-0 bg-white text-gray-500 w-[18%]">
            <h1>CCT / CRI</h1>
            <select
              className="text-xs font-bold text-[#092635] w-full border-none outline-none"
              value={selectedCct}
              onChange={(e) => setSelectedCct(e.target.value)}
            >
              <option value="">Select</option>
              {uniqueCct.map((nonVeg) => (
                <option key={nonVeg} value={nonVeg}>
                  {nonVeg}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown for non-vegetarian items */}
          <div className="border px-3 py-0 bg-white text-gray-500 w-[18%]">
            <h1>Dimming type</h1>
            <select
              className="text-xs font-bold text-[#092635] w-full border-none outline-none"
              value={selectedDimming}
              onChange={(e) => setSelectedDimming(e.target.value)}
            >
              <option value="">Select</option>
              {uniqueDimming.map((nonVeg) => (
                <option key={nonVeg} value={nonVeg}>
                  {nonVeg}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="backgroundBodyThree">
        <div className="pt-4 max-w-5xl mx-auto min-h-[350px]">
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-lg">
              <thead>
                <tr>
                  <th className="border p-2">Variant</th>
                  <th className="border p-2">Lumen</th>
                  <th className="border p-2">Optic</th>
                  <th className="border p-2">Optic Value</th>
                  <th className="border p-2">CCT</th>
                  <th className="border p-2">Dimming</th>
                </tr>
              </thead>
              <tbody>
                {filteredData?.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="border p-2 text-center">
                      Matching data is not available.
                    </td>
                  </tr>
                ) : (
                  filteredData?.map((item, index) => (
                    <tr key={index}>
                      <td className="border p-2">{item.variantCode}</td>
                      <td className="border p-2">{item.lumen}</td>
                      <td className="border p-2">{item.optic}</td>
                      <td className="border p-2">{item.opticValue}</td>
                      <td className="border p-2">{item.cct}</td>
                      <td className="border p-2">{item.dimmingType}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
