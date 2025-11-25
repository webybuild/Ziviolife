import cross from "../../assets/basic_icons/cross.png";

function Modal({ setShowModal, Component, width }) {
  return (
    <div className="flex justify-center items-center bg-black p-8 fixed top-0 left-0 h-screen w-screen bg-opacity-60 z-10">
      {/* <div
        className={`border border-black bg-white rounded-md p-4 w-${
          width || "1/3"
        }`}
      > */}
      <div
        className={`${width} border border-black bg-white rounded-md p-4
        `}
      >
        <div className="px-2 flex justify-end">
          <img
            src={cross}
            alt="x"
            className="cursor-pointer"
            width={"20px"}
            height={"20px"}
            onClick={() => setShowModal(false)}
          />
        </div>
        {<Component setShowModal={setShowModal} />}
      </div>
    </div>
  );
}

export default Modal;
