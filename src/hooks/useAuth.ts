import{ useState } from "react";

function useAuth() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return { 
    email, 
    password,
    setEmail, 
    setPassword};
}

export default useAuth;
