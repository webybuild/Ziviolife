function TechnicalSpecificationsForm({ formData, updateFormData }) {
  const inputStyle =
    "outline-none bg-[#2A3038] text-white rounded px-2 py-1 w-full";
  const labelStyle = "font-semibold text-white text-xs mb-3 px-1";

  return (
    <div>
      {/* <div className="py-2 text-left mt-12 text-lg font-bold uppercase text-white">
        Add product variant
      </div> */}
      <div className="py-2 text-center my-8 font-semibold text-lg uppercase text-white">
        Technical Specifications
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelStyle}>Product Variant Name</label>
          <input
            className={inputStyle}
            name="name"
            value={formData.name}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>Product Code</label>
          <input
            className={inputStyle}
            name="code"
            value={formData.code}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>Wattage</label>
          <input
            className={inputStyle}
            name="wattage"
            value={formData.wattage}
            onChange={(e) => updateFormData(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelStyle}>Material</label>
          <input
            className={inputStyle}
            name="material"
            value={formData.material}
            onChange={(e) => updateFormData(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelStyle}>Lumen (lm)</label>
          <input
            className={inputStyle}
            name="lumen"
            value={formData.lumen}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>Efficacy (lm/W)</label>
          <input
            className={inputStyle}
            name="efficacy"
            value={formData.efficacy}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>Driver option</label>
          <input
            className={inputStyle}
            name="driverOption"
            value={formData.driverOption}
            onChange={(e) => updateFormData(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelStyle}>Driver</label>
          <input
            className={inputStyle}
            name="driver"
            value={formData.driver}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>Input voltage</label>
          <input
            className={inputStyle}
            name="inputVoltage"
            value={formData.inputVoltage}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>Size</label>
          <input
            className={inputStyle}
            name="size"
            value={formData.size}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>IP</label>
          <input
            className={inputStyle}
            name="ip"
            value={formData.ip}
            onChange={(e) => updateFormData(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelStyle}>Optic value</label>
          <input
            className={inputStyle}
            name="opticValues"
            value={formData.opticValues}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>CCT</label>
          <input
            className={inputStyle}
            name="cct"
            value={formData.cct}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>CRI</label>
          <input
            className={inputStyle}
            name="cri"
            value={formData.cri}
            onChange={(e) => updateFormData(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelStyle}>Dimming type</label>
          <input
            className={inputStyle}
            name="dimmingType"
            value={formData.dimmingType}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>Finish colour</label>
          <input
            className={inputStyle}
            name="finishColor"
            value={formData.finishColor}
            onChange={(e) => updateFormData(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelStyle}>Operating temperature</label>
          <input
            className={inputStyle}
            name="operatingTemperature"
            value={formData.operatingTemperature}
            onChange={(e) => updateFormData(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelStyle}>Lens / Reflector / Optic</label>
          <input
            className={inputStyle}
            name="lro"
            value={formData.lro}
            onChange={(e) => updateFormData(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelStyle}>Lifetime L80B50 (hours)</label>
          <input
            className={inputStyle}
            name="l80B50"
            value={formData.l80B50}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>Variants (On/Off)</label>
          <input
            className={inputStyle}
            name="variant"
            value={formData.variant}
            onChange={(e) => updateFormData(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelStyle}>Description</label>
          <textarea
            className={inputStyle}
            name="description"
            value={formData.description}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>Area of Application</label>
          <textarea
            className={inputStyle}
            name="applicationArea"
            value={formData.applicationArea}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>Benefits</label>
          <textarea
            className={inputStyle}
            name="benefits"
            value={formData.benefits}
            onChange={(e) => updateFormData(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default TechnicalSpecificationsForm;
