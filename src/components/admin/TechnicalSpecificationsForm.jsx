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
          <label className={labelStyle}>Dimensions</label>
          <input
            className={inputStyle}
            name="dimension"
            value={formData.dimension}
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
        <div>
          <label className={labelStyle}>Light Source</label>
          <input
            className={inputStyle}
            name="lightSource"
            value={formData.lightSource}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>Power (W)</label>
          <input
            className={inputStyle}
            name="power"
            value={formData.power}
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
          <label className={labelStyle}>Optic</label>
          <input
            className={inputStyle}
            name="optic"
            value={formData.optic}
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
          <label className={labelStyle}>CCT / CRI</label>
          <input
            className={inputStyle}
            name="cct"
            value={formData.cct}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>Bug</label>
          <input
            className={inputStyle}
            name="bug"
            value={formData.bug}
            onChange={(e) => updateFormData(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelStyle}>ULR</label>
          <input
            className={inputStyle}
            name="ulr"
            value={formData.ulr}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>ULOR</label>
          <input
            className={inputStyle}
            name="ulor"
            value={formData.ulor}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>CIE flux code nº3</label>
          <input
            className={inputStyle}
            name="cie"
            value={formData.cie}
            onChange={(e) => updateFormData(e)}
          />
        </div>
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
          <label className={labelStyle}>Product colours</label>
          <input
            className={inputStyle}
            name="productColors"
            value={formData.productColors}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>Weight</label>
          <input
            className={inputStyle}
            name="weight"
            value={formData.weight}
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
        <div>
          <label className={labelStyle}>Cable</label>
          <input
            className={inputStyle}
            name="cable"
            value={formData.cable}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>Through wiring</label>
          <input
            className={inputStyle}
            name="throughWiring"
            value={formData.throughWiring}
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
        <div>
          <label className={labelStyle}>MacAdam Ellipse</label>
          <input
            className={inputStyle}
            name="macadamEllipse"
            value={formData.macadamEllipse}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div>
          <label className={labelStyle}>Lifetime L90B10 (hours)</label>
          <input
            className={inputStyle}
            name="l90B10"
            value={formData.l90B10}
            onChange={(e) => updateFormData(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelStyle}>Lifetime L80B10 (hours)</label>
          <input
            className={inputStyle}
            name="l80B10"
            value={formData.l80B10}
            onChange={(e) => updateFormData(e)}
          />
        </div>
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
    </div>
  );
}

export default TechnicalSpecificationsForm;
