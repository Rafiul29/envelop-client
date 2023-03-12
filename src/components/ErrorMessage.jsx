import React from 'react'

const ErrorMessage = ({error}) => {
  return (
    <p className="bg-rose-50 p-5 border border-rose-500 text-rose-500 rounded">{error}</p>
  )
}

export default ErrorMessage