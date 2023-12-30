import React from "react";
import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <span className="flex justify-center items-center ml-2">
      <Oval
        height={30}
        width={30}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </span>
  );
}

export default Loader;
