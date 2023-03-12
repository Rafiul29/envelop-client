import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import FromControl from "../components/FromControl";
import { SectionTitle } from "../components/SectionTitle";

const Login = () => {
  const [formFields, setFromFields] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formFields)

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

      <Button text="Login" submit/>
      </form>
    </div>
  );
};

export default React.memo(Login);
