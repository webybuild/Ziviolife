import React, { useState } from "react";
import Preloader from "./components/preloader/Preloader";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./components/admin/Admin";
import LandingPage from "./pages/LandingPage";
import { useRecoilState } from "recoil";
import Loader from "./components/Loader";
import loaderState from "./atoms/loaderStateAtom";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [loader, setLoader] = useRecoilState(loaderState);

  return (
    <>
      {isLoading ? <Preloader /> : null}
      {loader && <Loader />}
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/*" element={<LandingPage onLoad={setIsLoading} />} />
          <Route path="/admin/*" element={<Admin onLoad={setIsLoading} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
