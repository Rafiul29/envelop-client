import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import FromControl from "../components/FromControl";
import SectionTitle  from "../components/SectionTitle";
import { useSignup } from "../hooks/useSignup";

const Register = () => {

  const [formFields, setFromFields] = useState({
    name: "",
    email: "",
    password: "",
  });
const {signup,isLoading,error}=useSignup()

  const handleRegister = async(e) => {
    e.preventDefault();
  
   await signup(formFields.name,formFields.email,formFields.password)

    setFromFields({
      name:"",
      email:"",
      password:""
    })
    
  };

  return (
    <div className="register flex flex-col justify-center items-center mt-20">
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <SectionTitle title={"Register ......"} />

        <FromControl
          label="name"
          labelInner="Name"
          inputType="text"
          placeholder="Write your name ?"
          formFields={formFields}
          setFromFields={setFromFields}
        />
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

      <Button text={isLoading ? "Registering..": "Register"} submit/>
      {error && <ErrorMessage error={error}/>}
      </form>
    </div>
  );
};

export default React.memo(Register);
