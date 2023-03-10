import React from 'react'

const Button = ({text,submit}) => {
  return (
    <button type={submit ? "submit":""} className="bg-violet-500 py-3 hover:bg-violet-600 duration-300 rounded mt-5">
    {text}
  </button>
  )
}

export default Button