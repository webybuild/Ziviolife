import { useState } from "react";
import Modal from "./Modal";
import AddVariantForm from "./AddVariantForm";
import cross from "../../assets/basic_icons/cross.png";

function AddVariants({ variants, setVariants }) {
  const [showVariantForm, setShowVariantForm] = useState(false);

  function deleteVariant(ind) {
    const data = [...variants];
    data.splice(ind, 1);
    setVariants(data);
  }

  return (
    <div>
      <div className="py-4 font-semibold text-white text-center">VARIANTS</div>
      <div className="border border-gray-500 px-2">
        <table className="w-full px-4">
          <thead>
            <tr className="border-b border-b-gray-500">
              <th className="text-left text-white py-1">Variant Code</th>
              <th className="text-left text-white py-1">Luman (lm)</th>
              <th className="text-left text-white py-1">Optic</th>
              <th className="text-left text-white py-1">Optic Value</th>
              <th className="text-left text-white py-1">CCT / CRI</th>
              <th className="text-left text-white py-1">Dimming Type</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((vari, ind) => (
              <tr key={ind}>
                <td className="py-1 text-white">{vari.variantCode}</td>
                <td className="py-1 text-white">{vari.lumen}</td>
                <td className="py-1 text-white">{vari.optic}</td>
                <td className="py-1 text-white">{vari.opticValue}</td>
                <td className="py-1 text-white">{vari.cct}</td>
                <td className="py-1 text-white">{vari.dimmingType}</td>
                <td>
                  <img
                    src={cross}
                    width={"20px"}
                    height={"20px"}
                    className="cursor-pointer"
                    onClick={() => deleteVariant(ind)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end py-2">
        <button
          onClick={() => setShowVariantForm(true)}
          className="text-white py-1 px-6 bg-[#1b4242]"
        >
          {variants.length === 0 ? "Add Variant" : "Add More Variants"}
        </button>
      </div>
      {showVariantForm && (
        <Modal
          setShowModal={setShowVariantForm}
          Component={AddVariantForm}
          width={"w-1/3"}
        />
      )}
    </div>
  );
}

export default AddVariants;
