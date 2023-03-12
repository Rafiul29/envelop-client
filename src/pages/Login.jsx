import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import FromControl from "../components/FromControl";
import SectionTitle from "../components/SectionTitle";
import { useLogin } from "../hooks/useLogin";

const Login = () => {

  const [formFields, setFromFields] = useState({
    email: "",
    password: "",
  });

const {login,isLoading,error}=useLogin()

  const handleLogin = async(e) => {
    e.preventDefault();
    console.log(formFields)

    await login(formFields.email,formFields.password)
    setFromFields({
      email:"",
      password:""
    })
  };

  return (
    <div className="login flex flex-col justify-center items-center mt-20">
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <SectionTitle title={"Login ......"} />

    
        <FromControl
          label="email"
          labelInner="Email"
          inputType="eamil"
          placeholder="Write your email ?"
          formFields={formFields}
          setFromFields={setFromFields}
        />
        <FromControl
          label="password"
          labelInner="Password"
          inputType="password"
          placeholder="Write your password ?"
          formFields={formFields}
          setFromFields={setFromFields}
        />

      <Button text={isLoading ? "logging..." : "Login"} submit/>
      {error && <ErrorMessage error={error}/>}
      </form>
    </div>
  );
};

export default React.memo(Login);
