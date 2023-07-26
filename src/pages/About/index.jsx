import React from "react";

import { Button, Img, List, Text } from "components";
import Header1 from "components/Header1";

const AboutPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-museo h-[1024px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_aboutone.png')" }}
      >
        <div className="flex flex-col gap-[42px] items-center justify-start mb-[184px] w-full">
          <Header1 className="bg-light_blue-500_0c flex md:flex-col md:gap-[51px] items-center justify-between md:px-5 px-[50px] py-5 shadow-bs w-full" />
          <div className="bg-black-900_05 flex flex-col items-start justify-start max-w-[1340px] mx-auto p-[50px] md:px-5 rounded-[10px] shadow-bs w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between md:ml-[0] ml-[7px] w-full">
                    <div className="flex flex-col relative w-1/2 md:w-full">
                      <div className="bg-white-A700_4c flex flex-col items-start justify-start mx-auto pb-[3px] px-[3px] rounded-[5px] w-full">
                        <Text
                          className="ml-1.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 text-shadow-ts6"
                          size="txtMuseo50032Black90099"
                        >
                          Graphic Design
                        </Text>
                      </div>
                      <Img
                        className="h-1.5 mt-[-0.32px] mx-auto z-[1]"
                        src="images/img_percentage.svg"
                        alt="percentage"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[5px] items-center justify-start w-1/2 md:w-full">
                      <Text
                        className="bg-white-A700_4c h-[41px] justify-center pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                        size="txtMuseo50032Black90099"
                      >
                        Adobe Creative Suite
                      </Text>
                      <Img
                        className="h-px"
                        src="images/img_percentage_yellow_800.svg"
                        alt="percentage_One"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[18px] items-start justify-between mt-3.5 w-full">
                    <div className="md:h-10 h-[46px] relative w-1/2 md:w-full">
                      <div className="absolute bg-white-A700_4c flex flex-col inset-x-[0] items-start justify-start mx-auto pb-0.5 px-0.5 rounded-[5px] top-[0]">
                        <Text
                          className="md:ml-[0] ml-[7px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 text-shadow-ts6"
                          size="txtMuseo50032Black90099"
                        >
                          User Research
                        </Text>
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[7px] inset-x-[0] mx-auto"
                        src="images/img_percentage.svg"
                        alt="percentage_Two"
                      />
                    </div>
                    <Text
                      className="bg-white-A700_4c h-[41px] justify-center mb-[5px] pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                      size="txtMuseo50032Black90099"
                    >
                      MS Office
                    </Text>
                  </div>
                  <div className="h-px md:ml-[0] ml-[640px] overflow-hidden relative w-[49%]">
                    <div className="w-full h-full absolute bg-yellow_800"></div>
                    <div
                      className="h-full absolute bg-light_blue_500"
                      style={{ width: "2%" }}
                    ></div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[7px] mt-[13px] w-full">
                    <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between w-full">
                      <Text
                        className="bg-white-A700_4c h-[41px] justify-center pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                        size="txtMuseo50032Black90099"
                      >
                        Prototyping
                      </Text>
                      <Text
                        className="bg-white-A700_4c h-[41px] justify-center pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                        size="txtMuseo50032Black90099"
                      >
                        Corel draw
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between mt-[5px] w-full">
                      <Img
                        className="h-px"
                        src="images/img_percentage_yellow_800.svg"
                        alt="percentage_Four"
                      />
                      <Img
                        className="h-px"
                        src="images/img_percentage_yellow_800.svg"
                        alt="percentage_Five"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between mt-[13px] w-full">
                      <Text
                        className="bg-white-A700_4c h-10 justify-center pb-0.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                        size="txtMuseo50032Black90099"
                      >
                        Video Editing
                      </Text>
                      <Text
                        className="bg-white-A700_4c h-[41px] justify-center pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                        size="txtMuseo50032Black90099"
                      >
                        Figma
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between mt-[5px] w-full">
                      <Img
                        className="h-px"
                        src="images/img_percentage_yellow_800.svg"
                        alt="percentage_Six"
                      />
                      <Img
                        className="h-px"
                        src="images/img_percentage_yellow_800.svg"
                        alt="percentage_Seven"
                      />
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[18px] grid md:grid-cols-1 grid-cols-2 justify-center mt-3.5 w-full"
                      orientation="horizontal"
                    >
                      <div className="h-[41px] relative w-full">
                        <div className="absolute bg-white-A700_4c flex flex-col h-full inset-[0] items-start justify-center m-auto pb-[3px] px-[3px] rounded-[5px] w-full">
                          <Text
                            className="ml-1.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 text-shadow-ts6"
                            size="txtMuseo50032Black90099"
                          >
                            Brand & Marketing Strategy
                          </Text>
                        </div>
                        <Img
                          className="absolute bottom-[0] h-px inset-x-[0] mx-auto"
                          src="images/img_percentage_yellow_800.svg"
                          alt="percentage"
                        />
                      </div>
                      <div className="h-[41px] relative w-full">
                        <div className="absolute bg-white-A700_4c flex flex-col h-full inset-[0] items-start justify-center m-auto pb-[3px] px-[3px] rounded-[5px] w-full">
                          <Text
                            className="ml-1.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 text-shadow-ts6"
                            size="txtMuseo50032Black90099"
                          >
                            Lunacy
                          </Text>
                        </div>
                        <Img
                          className="absolute bottom-[0] h-px inset-x-[0] mx-auto"
                          src="images/img_percentage_yellow_800.svg"
                          alt="percentage"
                        />
                      </div>
                    </List>
                    <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between mt-[18px] w-full">
                      <div className="bg-white-A700_4c flex flex-col items-start justify-start pb-[3px] px-[3px] rounded-[5px]">
                        <Text
                          className="ml-1.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 text-shadow-ts6"
                          size="txtMuseo50032Black90099"
                        >
                          Event Planning and Management
                        </Text>
                      </div>
                      <div className="bg-white-A700_4c flex flex-col items-start justify-start pb-[3px] px-[3px] rounded-[5px]">
                        <Text
                          className="ml-1.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 text-shadow-ts6"
                          size="txtMuseo50032Black90099"
                        >
                          Sony Vegas
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between w-full">
                      <Img
                        className="h-px"
                        src="images/img_percentage_yellow_800.svg"
                        alt="percentage_Eight"
                      />
                      <Img
                        className="h-px"
                        src="images/img_percentage_yellow_800.svg"
                        alt="percentage_Nine"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between mt-[19px] w-full">
                      <Text
                        className="bg-white-A700_4c h-10 justify-center pb-0.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                        size="txtMuseo50032Black90099"
                      >
                        Advertising
                      </Text>
                      <Text
                        className="bg-white-A700_4c h-[41px] justify-center pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                        size="txtMuseo50032Black90099"
                      >
                        HTML & CSS
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between mt-1 w-full">
                      <Img
                        className="h-px"
                        src="images/img_percentage_yellow_800.svg"
                        alt="percentage_Ten"
                      />
                      <Img
                        className="h-px"
                        src="images/img_percentage_yellow_800.svg"
                        alt="percentage_Eleven"
                      />
                    </div>
                    <Text
                      className="bg-white-A700_4c h-[41px] justify-center mt-3.5 pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                      size="txtMuseo50032Black90099"
                    >
                      Research & Insights
                    </Text>
                    <Img
                      className="h-px mt-[5px]"
                      src="images/img_percentage_yellow_800.svg"
                      alt="percentage_Twelve"
                    />
                    <Text
                      className="bg-white-A700_4c h-10 justify-center mt-3.5 pb-0.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                      size="txtMuseo50032Black90099"
                    >
                      Web Content Development
                    </Text>
                    <Img
                      className="h-px mt-[5px]"
                      src="images/img_percentage_yellow_800.svg"
                      alt="percentage_Thirteen"
                    />
                    <Text
                      className="bg-white-A700_4c h-[41px] justify-center mt-[13px] pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                      size="txtMuseo50032Black90099"
                    >
                      Social Media Management
                    </Text>
                    <Img
                      className="h-px mt-[5px]"
                      src="images/img_percentage_yellow_800.svg"
                      alt="percentage_Fourteen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
