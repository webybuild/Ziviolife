import ReactPlayer from "react-player";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Hero = ({ onLoad }) => {
  return (
    <div className="relative">
      <div className="w-full h-[100vh] lg:h-[150vh] absolute -z-10">
        <ReactPlayer
          className="object-cover !h-[85vh] lg:!h-[150vh] backgroundBodyalt"
          width={"100%"}
          url="https://dl.dropboxusercontent.com/scl/fi/wjevplc3opzdzrf86f8c3/globe.mp4?rlkey=5kffjgmcdqszey0653c6l3h97&dl=0"
          playing={true}
          loop={true}
          muted={true}
          onReady={() => {
            setTimeout(() => {
              onLoad(false);
            }, 1000);
          }}
        />
      </div>
      <div className="background-gradiant h-[85vh] lg:h-[150vh]">
        <div className="h-[85vh] lg:h-[100vh] sticky top-0">
          <div className="w-full absolute top-28 lg:top-40 flex flex-col justify-center items-end text-white px-4 lg:px-16">
            <h1 className="py-0 text-2xl lg:py-0 lg:text-5xl font-light">
              Illuminating the World
            </h1>
            <h1 className="py-0 text-2xl lg:py-0 lg:text-7xl">
              A Global <span className="font-light">Lighting</span> Endeavor
            </h1>
            <p className="font-light text-xs lg:text-base py-4 text-right ">
              Empowering Progress and Connectivity Through Illumination in Every
              Corner of the Globe.
            </p>
            <div>
              <button className="m-2">Products</button>
              <button className="m-2">Downloads</button>
            </div>
          </div>
          <div className="w-full absolute bottom-5 text-white flex flex-col lg:flex-row px-4 lg:px-12">
            <div className="w-full lg:justify-around flex flex-col-reverse gap-5 lg:flex-row lg:py-4 lg:items-start">
              <div className="lg:flex gap-1 hidden justify-center items-end">
                <CopyrightIcon sx={{ fontSize: "2rem" }} />
                <p className="text-3xl">2024</p>
              </div>
              <div className="max-w-[28rem]">
                <p className="text-white text-xs text-justify font-extralight lg:text-sm normal-case">
                  We're on a mission to make the world brighter, cozier, and
                  more connected. From stylish designs to energy-smart
                  solutions, we illuminate every corner of the globe, fostering
                  a future where light sparks progress and brings people
                  together.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between lg:justify-around lg:items-start py-4">
              <div className="flex flex-col gap-1 justify-end">
                <p className="text-xs lg:text-sm">For Enquiry</p>
                <p className="text-xs lg:text-sm">admin@artizelite.com</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs lg:text-sm">LinkedIn</p>
                <p className="text-xs lg:text-sm">Facebook</p>
                <p className="text-xs lg:text-sm">Instagram</p>
                <p className="text-xs lg:text-sm">TwitterX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
