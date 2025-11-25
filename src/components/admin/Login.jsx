import { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import { url2 } from "../../utils/config";
import { toast } from "react-toastify";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function login() {
    try {
      if(email && email.length > 0 && password && password.length > 0) {
        const res = await axios.post(url2 + '/login', {email, password});
        console.log(res)
        window.localStorage.setItem('token', res.data.token);
        props.setLoggedIn(true);
      } else {
        toast.error('Email & Password is required!', { autoClose: 3000 })
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.message || error.message, {
        autoClose: 3000,
      });
    }
  }

  return (
    <div className="w-full h-screen flex flex-col gap-2 justify-center items-center login-bg">
      <div className="text-center">
        <h1 className="text-white text-2xl lg:text-5xl uppercase font-extrabold tracking-[5px]">
          Artizelite
        </h1>
        <h5 className="text-white my-4 text-lg lg:text-2xl font-semibold">
          Admin Panel
        </h5>
      </div>
      <div className="w-11/12 sm:w-1/2 lg:w-1/3 h-1/3 rounded-lg opacity-0.2 flex items-center justify-center bg-white">
        <div className="flex flex-col gap-6 w-4/5 lg:w-3/5">
          <div className="flex justify-center w-full items-center font-semibold text-base text-[#263D42]">
            <h1>Sign in</h1>
          </div>
          <div className="flex border px-3">
            <input
              className="py-4 h-6 w-full outline-none text-xs lg:text-base"
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <span className="text-gray-400">
              <EmailIcon sx={{ width: "23px" }} />
            </span>
          </div>

          <div className="flex border px-3">
            <input
              className="py-4 h-6 w-full outline-none text-sm lg:text-base"
              placeholder="Password"
              type="password"
              name="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="text-gray-400">
              <LockIcon />
            </span>
          </div>
          <button
            className="w-[30%] navbar text-white py-2 flex justify-center items-center hover:scale-95 text-xs lg:text-sm font-semibold"
            onClick={() => login()}
          >
            Login
          </button>
        </div>
      </div>
      <div className="text-center">
        <p className="text-white text-sm lg:text-base  my-4 font-semibold tracking-wider">
          Artizelite Pvt. Ltd. | All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
