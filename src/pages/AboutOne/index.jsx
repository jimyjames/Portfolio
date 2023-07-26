import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const AboutOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-museo h-[1024px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_aboutone.png')" }}
      >
        <Img
          className="absolute h-[1024px] inset-y-[0] my-auto object-cover right-[0] w-[54%]"
          src="images/img_me.png"
          alt="me"
        />
        <div className="absolute bg-light_blue-500_0c flex flex-row inset-x-[0] items-center justify-between max-w-[1439px] mx-auto md:px-10 sm:px-5 px-[50px] py-5 shadow-bs top-[0] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1340px] w-full">
            <Img
              className="sm:flex-1 h-[65px] md:h-auto object-cover w-[67px] sm:w-full"
              src="images/img_afrowhite1.png"
              alt="afrowhiteOne"
            />
            <div className="flex flex-row gap-5 items-center justify-center p-2.5 shadow-bs1 w-auto">
              <Text
                className="common-pointer text-white-A700 text-xl w-auto"
                size="txtMuseo50020"
                onClick={() => navigate("/homenine")}
              >
                Home
              </Text>
              <Text
                className="text-light_blue-500 text-xl w-auto"
                size="txtMuseo70020"
              >
                About
              </Text>
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtMuseo50020"
              >
                My Work
              </Text>
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtMuseo50020"
              >
                Services
              </Text>
            </div>
            <Button className="border border-light_blue-600 border-solid cursor-pointer h-10 leading-[normal] py-2 rounded-[5px] shadow-bs1 text-center text-light_blue-600 text-xl w-[200px]">
              Get In Touch
            </Button>
          </div>
        </div>
        <div className="absolute flex flex-col gap-2.5 items-start justify-start left-[4%] md:px-5 top-[17%] w-auto">
          <div className="flex flex-col h-[116px] md:h-auto items-start justify-between px-2.5 w-auto sm:w-full">
            <Text
              className="md:text-5xl text-[80px] text-shadow-ts5 text-yellow-700 w-auto"
              size="txtMuseo70080Yellow700"
            >
              Hi There?
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start px-2.5 w-auto sm:w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900_cc text-shadow-ts6 w-auto"
              size="txtMuseo50048"
            >
              I’m Ngugi Ngigi.
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start p-2.5 w-auto md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-500_cc text-shadow-ts6"
              size="txtMuseo50032"
            >
              <span className="text-light_blue-500_cc font-museo text-left font-normal">
                A passionate{" "}
              </span>
              <span className="md:text-[34px] sm:text-[32px] text-light_blue-500_cc font-museo text-left text-4xl font-semibold">
                Creative designer
              </span>
              <span className="text-light_blue-500_cc font-museo text-left font-normal">
                <>
                  {" "}
                  with over a decade’s <br />
                  experience in{" "}
                </>
              </span>
              <span className="text-light_blue-500_cc font-museo text-left font-semibold">
                Graphic design
              </span>
              <span className="text-light_blue-500_cc font-museo text-left font-normal">
                {" "}
                and{" "}
              </span>
              <span className="text-light_blue-500_cc font-museo text-left font-semibold">
                Digital marketing
              </span>
              <span className="text-light_blue-500_cc font-museo text-left font-normal">
                <>
                  .<br />I design and produce in both print & web and <br />
                  well abled in overseeing projects from <br />
                  conception to publishing.
                </>
              </span>
            </Text>
          </div>
          <Button
            className="common-pointer bg-light_blue-500_99 cursor-pointer h-[60px] leading-[normal] py-[15px] rounded-[5px] shadow-bs2 text-2xl md:text-[22px] text-center text-white-A700_cc sm:text-xl w-[280px]"
            onClick={() => navigate("/about")}
          >
            Skills & Tools
          </Button>
        </div>
      </div>
    </>
  );
};

export default AboutOnePage;
