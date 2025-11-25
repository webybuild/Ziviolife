import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminHome from "./AdminHome";
import Login from "./Login";

const Admin = ({ onLoad }) => {

  const [ loggedIn, setLoggedIn ] = useState(window.localStorage.getItem('token') ? true : false)

  useEffect(() => {
    const delay = 2000;

    const timeoutId = setTimeout(() => {
      onLoad(false);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [onLoad]);

  

  return (
    <Routes>
      <Route path="/login" element={!loggedIn ? <Login setLoggedIn={setLoggedIn}/> : <Navigate to='/admin/add_product' />} />
      <Route path="/*" element={loggedIn ? <AdminHome loggedIn={loggedIn} /> : <Navigate to='/admin/login' />}/>
    </Routes>
  );
};

export default Admin;