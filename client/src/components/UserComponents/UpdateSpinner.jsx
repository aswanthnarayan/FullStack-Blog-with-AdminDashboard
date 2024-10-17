import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";


const UpdateSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <PacmanLoader color="#53B7B9" size={40} />
        <p>Please wait UserData Updating</p>
    </div>
  )
}

export default UpdateSpinner