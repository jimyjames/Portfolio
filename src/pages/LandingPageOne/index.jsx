import React from "react";

import { Img, Text } from "components";

const LandingPageOnePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-museo h-[1024px] items-center justify-end mx-auto py-[50px] w-full"
        style={{ backgroundImage: "url('images/img_landingpagefive.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[156px] items-center justify-start mt-[333px] w-full">
          <Img
            className="h-[257px] md:h-auto object-cover w-[19%]"
            src="images/img_afrowhite3.png"
            alt="afrowhiteThree"
          />
          <footer className="flex h-[178px] md:h-auto items-center justify-between md:px-5 px-[50px] py-2.5 w-full">
            <div className="flex flex-col gap-2.5 items-center justify-center w-[36%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-5 h-[100px] md:h-auto items-center justify-start w-auto sm:w-full">
                <Text
                  className="md:text-5xl text-[70px] text-shadow-ts3 text-white-A700 w-auto"
                  size="txtMuseo70070"
                >
                  Niaje?
                </Text>
                <Text
                  className="md:text-5xl text-[70px] text-shadow-ts3 text-white-A700 w-auto"
                  size="txtMuseo70070"
                >
                  Karibu!
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-shadow-ts4 text-white-A700 w-auto"
                  size="txtMuseo50040"
                >
                  Beautiful Graphics
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LandingPageOnePage;
