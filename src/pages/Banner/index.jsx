import React from "react";

import { Img } from "components";

const BannerPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <Img
          className="h-[360px] sm:h-auto object-cover w-full"
          src="images/img_linkedinbanner2.png"
          alt="linkedinbannerTwo"
        />
      </div>
    </>
  );
};

export default BannerPage;
