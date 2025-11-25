import { Puff } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center items-center bg-black p-8 fixed top-0 left-0 h-screen w-screen bg-opacity-60 z-20">
      <div className="flex flex-col justify-center">
        <div className="preloader">
          <Puff color="silver" />
        </div>
        <div className="text-white text-center font-semibold mt-32">
          Loading. Please wait...
        </div>
      </div>
    </div>
  );
}

export default Loader;
