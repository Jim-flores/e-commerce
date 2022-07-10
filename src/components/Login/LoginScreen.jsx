import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import Form from "./Form";
import './style/loginScreen.css'
import UserLogged from "./UserLogged";

const LoginScreen = () => {

  const [token, setToken] = useState('')
  const navigate = useNavigate()
  const changedToken = localStorage.getItem('token')

  function logOut (){
    localStorage.clear();
    navigate('/login')
  }
  useEffect(() => {

    setToken(changedToken)
  }, [changedToken])

  return (
    <div className="login">
      {
        token ?
          <UserLogged logOut = {logOut}/>
        :
          <Form />
      }
    </div>
  );
};

export default LoginScreen;