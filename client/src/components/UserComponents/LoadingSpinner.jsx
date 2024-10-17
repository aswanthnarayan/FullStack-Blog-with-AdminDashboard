
import {CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <HashLoader color="#ffb700"/>
    </div>
  )
}

export default LoadingSpinner