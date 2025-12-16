import { useState } from "react";
import { useRecoilState } from "recoil";
import categoryIdAtom from "../../atoms/categoryIdAtom";
import subCategoryIdAtom from "../../atoms/subCategoryIdAtom";
import mainProductIdAtom from "../../atoms/mainProductIdAtom";

function CategoryForm({
  categories,
  subCategories,
  mainProducts,
  formData,
  setShowCategoryModal,
  setShowSubCategoryModal,
  setShowMainProductModal,
  updateFormData,
}) {
  const [categoryId, setCategoryId] = useRecoilState(categoryIdAtom);
  const [subCategoryId, setSubCategoryId] = useRecoilState(subCategoryIdAtom);
  const [mainProductId, setMainProductId] = useRecoilState(mainProductIdAtom);

  const selectStyle =
    "outline-none text-sm rounded-md px-4 py-2 w-full bg-white cursor-pointer";
  const inputStyle = "outline-none rounded-md px-2 py-1 w-full cursor-pointer";
  const labelStyle =
    "font-semibold text-white text-sm py-1 px-2 cursor-pointer";

  return (
    <div>
      <div>
        <div className="flex justify-between mb-4">
          <div>
            <div className="mb-3">
              <label className={labelStyle}>Category</label>
              <button
                onClick={() => setShowCategoryModal(true)}
                className="px-6 py-1 text-white text-sm text-center ml-4 bg-[#1b4242] cursor-pointer"
              >
                + New
              </button>
            </div>
            <div>
              <select
                name="category"
                className={selectStyle}
                onChange={(e) => setCategoryId(e.target.value)}
                value={categoryId}
              >
                <option>--- Select Category ---</option>
                {categories.map((cat, ind) => (
                  <option key={ind} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div className="mb-3">
              <label className={labelStyle}>Sub-Category</label>
              <button
                onClick={() => setShowSubCategoryModal(true)}
                className="px-6 py-1 text-white text-sm text-center ml-4 bg-[#1b4242] cursor-pointer"
              >
                + New
              </button>
            </div>
            <div>
              <select
                name="subCategory"
                className={selectStyle}
                onChange={(e) => setSubCategoryId(e.target.value)}
                value={subCategoryId}
              >
                <option>--- Select Sub-Category ---</option>
                {subCategories
                  .filter((sc) => sc.categoryId === +categoryId)
                  .map((scat, ind) => (
                    <option key={ind} value={scat.id}>
                      {scat.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div>
            <div className="mb-3">
              <label className={labelStyle}>Main Product</label>
              <button
                onClick={() => setShowMainProductModal(true)}
                className="px-6 py-1 text-white text-sm text-center ml-4 bg-[#1b4242]"
              >
                + New
              </button>
            </div>
            <div>
              <select
                name="mainProductId"
                className={selectStyle}
                onChange={(e) => updateFormData(e)}
                value={mainProductId}
              >
                <option>--- Select Product ---</option>
                {mainProducts
                  .filter((mp) => mp.subCategoryId === +subCategoryId)
                  .map((prd, ind) => (
                    <option key={ind} value={prd.id} className="cursor-pointer">
                      {prd.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryForm;
