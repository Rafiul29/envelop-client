import React from "react";

const Button = ({ text, submit, logout ,handeLogout}) => {
  return (
    <button
    onClick={handeLogout ? handeLogout:null}
      type={submit ? "submit" : ""}
      className={`bg-violet-500 py-3duration-300 rounded  px-5 py-3 ${
        logout
          ? "bg-rose-500 hover:bg-rose-600" 
          : "bg-violet-500  hover:bg-violet-600 mt-5"
      }`}
    >
      {text}
    </button>
  );
};

export default React.memo(Button);
