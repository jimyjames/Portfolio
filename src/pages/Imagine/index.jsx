import React from "react";

import { Img } from "components";

const ImaginePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <Img
          className="h-[300px] sm:h-auto object-cover w-full"
          src="images/img_pexelsphotogra.png"
          alt="pexelsphotogra"
        />
      </div>
    </>
  );
};

export default ImaginePage;
