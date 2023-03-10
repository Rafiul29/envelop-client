import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import FromControl from "../components/FromControl";
import { SectionTitle } from "../components/SectionTitle";

const Register = () => {
  const [formFields, setFromFields] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(formFields)

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

      <Button text="Register" submit/>
      </form>
    </div>
  );
};

export default Register;
