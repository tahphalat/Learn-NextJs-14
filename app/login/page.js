'use client'
import { LoginAction } from "./loginAction";
import { useFormState } from "react-dom";

export default function Login() {
  const initState = {
    message: ''
  };
  const [state, stateLoginAciton] = useFormState(LoginAction, initState)
  return (
    <form action={stateLoginAciton}>
      <div style={{ marginBottom: "12px" }}>
        Email{" "}
        <input 
          name="email"
          type="text"
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "250px",
          }}
        />
      </div>
      <div style={{ marginBottom: "12px" }}>
        Password{" "}
        <input
          name="password"
          type="password"
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "250px",
          }}
        />
      </div>
      <div>
        Message : {state.message}
      </div>
      <div>
        <button 
          style={{
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </form>
  );
}
