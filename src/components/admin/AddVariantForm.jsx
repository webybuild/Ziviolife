import { useState } from "react";
import variantState from "../../atoms/variantsStateAtom";
import { useRecoilState } from "recoil";

function AddVariantForm({ setShowModal }) {
  const [formData, setFormData] = useState({});
  const [variants, setVariants] = useRecoilState(variantState);
  const inputStyle =
    "outline-none border border-gray-300 rounded-md px-2 py-1 w-full";
  const labelStyle = "font-semibold text-gray-700 text-sm py-1 px-2";

  function updateFormData(e) {
    const { name, value } = e.target;
    const data = { ...formData };
    data[name] = value;
    setFormData(data);
  }

  function updateVariants() {
    const data = [...variants];
    data.push(formData);
    setVariants(data);
    setFormData({});
    setShowModal(false);
  }

  return (
    <div>
      <div className="text-center text-gray-700 font-semibold py-2">
        Add New Variant
      </div>
      <div className="flex flex-col">
        <label className={labelStyle}>Variant Code</label>
        <input
          className={inputStyle}
          name="variantCode"
          value={formData.variantCode}
          onChange={(e) => updateFormData(e)}
        />
        <label className={labelStyle}>Luman (lm)</label>
        <input
          className={inputStyle}
          name="lumen"
          value={formData.lumen}
          onChange={(e) => updateFormData(e)}
        />
        <label className={labelStyle}>Optic</label>
        <input
          className={inputStyle}
          name="optic"
          value={formData.optic}
          onChange={(e) => updateFormData(e)}
        />
        <label className={labelStyle}>Optic Value</label>
        <input
          className={inputStyle}
          name="opticValue"
          value={formData.opticValue}
          onChange={(e) => updateFormData(e)}
        />
        <label className={labelStyle}>CCT / CRI</label>
        <input
          className={inputStyle}
          name="cct"
          value={formData.cct}
          onChange={(e) => updateFormData(e)}
        />
        <label className={labelStyle}>Dimming Type</label>
        <input
          className={inputStyle}
          name="dimmingType"
          value={formData.dimmingType}
          onChange={(e) => updateFormData(e)}
        />
      </div>
      <div className="flex justify-center py-2">
        <button
          className="py-1 px-6 text-white bg-[#1b4242]"
          onClick={() => updateVariants()}
        >
          Add Variant
        </button>
      </div>
    </div>
  );
}

export default AddVariantForm;
