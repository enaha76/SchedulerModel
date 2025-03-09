import { useState } from "react";
import { useLogin, useNotify } from "react-admin";
import { Button } from "@mui/material";
import "./login.scss";

const LoginForm = ({ theme }: any) => {
  const [email, setEmail] = useState("");  // Changed from username to email
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();
  const BASE_URI = process.env.REACT_APP_SERVER_URL;
  
  const submit = (e: any) => {
    e.preventDefault();
    login({ username: email, password }).catch(() =>  // Changed from username to email
      notify("Invalid email or password")
    );
  };

// Option 1: Rename the parameter to match backend
// login({ username: email, password })

// Option 2: Update GraphQL query to use email

  return (
    <form onSubmit={submit}>
      <label>
        <span>Email</span>  {/* Updated label */}

        <input
          name="email"  
          type="email" 
          value={email}  
          onChange={(e) => setEmail(e.target.value)}  
        />
      </label>
      <label>
        <span>Password</span>

        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <Button type="submit" variant="contained" color="primary">
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;