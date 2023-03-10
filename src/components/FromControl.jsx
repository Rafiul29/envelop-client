import React from "react";

const FromControl = ({
  label,
  labelInner,
  inputType,
  placeholder,
  formFields,

  setFromFields,
}) => {
  return (
    <div className="form-control flex flex-col ga-2">
      <label htmlFor={label} className="cursor-pointer">
        {" "}
        {labelInner}
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        id="name"
        value={formFields["label"]}
        onChange={(e) =>
          setFromFields({ ...formFields, [label]: e.target.value })
        }
        className="border py-3 px-5 w-[25rem] rounded outline-none focus:border-violet-500"
      />
    </div>
  );
};

export default FromControl;
