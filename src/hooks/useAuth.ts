import React, { useState, useContext } from "react";
import api from "../api/api";
import {AuthContext} from '../context/AuthContext'

function useAuth() {
  const { setIsAuth } = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
        const response = await api.post("/auth/login", { email, password });
    
        const { user, token} = response.data;
    
        if(user)  {
            return setIsAuth(true);
        }
    } catch (err) {
        return err
    }


    
  }

  function handleLogout(){
    return setIsAuth(false)
  }

  return {email, password, handleLogin, setEmail, setPassword, handleLogout};
}

export default useAuth;
