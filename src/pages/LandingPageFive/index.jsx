import React from "react";

import Home from "components/Home";

const LandingPageFivePage = () => {
  return (
    <>
      <Home
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[1024px] items-start justify-end mx-auto md:pr-10 sm:pr-5 pr-[50px] py-[50px] w-full"
        style={{ backgroundImage: "url('images/img_landingpagefive.png')" }}
      />
    </>
  );
};

export default LandingPageFivePage;
