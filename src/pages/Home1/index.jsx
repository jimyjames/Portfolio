import React from "react";

import { Button, Img, Input, Text, TextArea } from "components";

const Home1Page = () => {
  return (
    <>
      <div className="bg-white-A700 font-museo h-[5235px] mx-auto pb-10 relative w-full">
        <div className="absolute bottom-[1%] h-[4490px] inset-x-[0] mx-auto md:px-5 w-full">
          <Img
            className="h-[952px] mb-[undefinedpx] mt-auto object-cover z-[1]"
            src="images/img_group3.png"
            alt="groupFive_One"
          />
          <Img
            className="h-[952px] mb-[-199.03px] object-cover z-[1]"
            src="images/img_group3.png"
            alt="groupOne"
          />
          <div className="md:h-[1944px] h-[3737px] mt-auto mx-auto w-full">
            <div className="md:h-[1944px] h-[3737px] m-auto w-full">
              <div className="md:h-[1944px] h-[3737px] m-auto w-full">
                <div className="absolute flex flex-col md:gap-10 gap-[1833px] h-full inset-y-[0] justify-start my-auto right-[0] w-[94%]">
                  <Img
                    className="h-[952px] md:ml-[0] ml-[93px]"
                    src="images/img_group2.svg"
                    alt="groupTwo"
                  />
                  <Img
                    className="h-[952px] mr-[93px]"
                    src="images/img_group2.svg"
                    alt="groupFive"
                  />
                </div>
                <Img
                  className="absolute bottom-[22%] h-[1162px] inset-x-[0] mx-auto object-cover w-full"
                  src="images/img_4498952.png"
                  alt="4498952"
                />
              </div>
              <Img
                className="absolute h-[952px] left-[0] object-cover top-[4%]"
                src="images/img_group3.png"
                alt="groupThree"
              />
            </div>
            <Img
              className="absolute h-[952px] object-cover right-[0] top-[21%]"
              src="images/img_group3.png"
              alt="groupFour"
            />
          </div>
        </div>
        <div className="absolute h-[1024px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <Img
            className="h-[1024px] m-auto object-cover w-full"
            src="images/img_pexelsantonytrivet13348192.png"
            alt="pexelsantonytri"
          />
          <div className="absolute bottom-[2%] flex flex-col md:gap-10 gap-[630px] inset-x-[0] justify-start mx-auto w-[90%]">
            <div className="flex flex-col items-center justify-start mr-12 w-[97%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-center w-[39%] md:w-full">
                <Text
                  className="md:text-5xl text-[64px] text-white-A700"
                  size="txtMuseo70064"
                >
                  NIAJE?
                </Text>
                <Text
                  className="md:text-5xl text-[64px] text-white-A700"
                  size="txtMuseo70064"
                >
                  KARIBU!
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start pt-[3px] w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900_7f"
                  size="txtMuseo50040Black9007f"
                >
                  I Create Satisfying and Compelling Experiences For Clients &
                  Users
                </Text>
              </div>
            </div>
            <div className="bg-black-900_7f flex flex-col h-20 items-center justify-start md:ml-[0] ml-[1212px] pl-[3px] pt-[3px] rounded-[10px] shadow-bs4 w-20">
              <Img
                className="h-[77px] md:h-auto object-cover w-[77px]"
                src="images/img_arrowdown.png"
                alt="arrowdown"
              />
            </div>
          </div>
        </div>
        <div className="absolute bg-black-900_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-start mx-auto pb-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[360px] sm:h-auto object-cover w-full"
                  src="images/img_linkedinbanner2.png"
                  alt="linkedinbannerTwo"
                />
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[536px] mt-[148px] pb-[17px] md:px-5">
                <Text
                  className="md:text-5xl text-[80px] text-orange-500 text-shadow-ts10"
                  size="txtMuseo70080Orange500"
                >
                  Hi There?
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[537px] mt-5 md:px-5">
                <Text
                  className="mb-2.5 text-5xl sm:text-[38px] md:text-[44px] text-light_blue-500 text-shadow-ts10"
                  size="txtMuseo50048Lightblue500"
                >
                  I’m Ngugi Ngigi.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start max-w-[907px] mt-5 mx-auto md:px-5 w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_7f text-center text-shadow-ts6"
                  size="txtMuseo50032Black9007f"
                >
                  <>
                    A passionate user experience designer with a background in{" "}
                    <br />
                    Graphic design, Web design and Digital marketing.
                    <br />I design and produce in print and web with <br />
                    experience to oversee projects from <br />
                    conception to publishing.
                  </>
                </Text>
              </div>
              <Button className="bg-black-900_7f cursor-pointer font-semibold leading-[normal] min-w-[1440px] md:min-w-full mt-[104px] py-[18px] text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700">
                Skills & Tools
              </Button>
              <div className="flex flex-col items-center justify-start max-w-[1330px] mt-[125px] mx-auto md:px-5 w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                    <Text
                      className="bg-white-A700_0c flex-1 h-11 justify-center max-w-[655px] md:max-w-full pb-1.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-full"
                      size="txtMuseo50032Black90099"
                    >
                      Graphic Design
                    </Text>
                    <Text
                      className="bg-white-A700_0c flex-1 h-11 justify-center max-w-[655px] md:max-w-full pb-1.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-full"
                      size="txtMuseo50032Black90099"
                    >
                      Adobe Creative Suite
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-between mt-1.5 w-full">
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-[15px] w-full">
                    <Text
                      className="bg-white-A700_0c flex-1 h-[43px] justify-center max-w-[655px] md:max-w-full pb-[5px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-full"
                      size="txtMuseo50032Black90099"
                    >
                      User Research
                    </Text>
                    <Text
                      className="bg-white-A700_0c flex-1 h-11 justify-center max-w-[655px] md:max-w-full pb-1.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-full"
                      size="txtMuseo50032Black90099"
                    >
                      MS Office
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-between mt-1.5 w-full">
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-3.5 w-full">
                    <Text
                      className="bg-white-A700_0c flex-1 h-11 justify-center max-w-[655px] md:max-w-full pb-1.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-full"
                      size="txtMuseo50032Black90099"
                    >
                      Prototyping
                    </Text>
                    <Text
                      className="bg-white-A700_0c flex-1 h-11 justify-center max-w-[655px] md:max-w-full pb-1.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-full"
                      size="txtMuseo50032Black90099"
                    >
                      Corel draw
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-between mt-1.5 w-full">
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-3.5 w-full">
                    <Text
                      className="bg-white-A700_0c flex-1 h-[43px] justify-center max-w-[655px] md:max-w-full pb-[5px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-full"
                      size="txtMuseo50032Black90099"
                    >
                      Video Editing
                    </Text>
                    <Text
                      className="bg-white-A700_0c flex-1 h-11 justify-center max-w-[655px] md:max-w-full pb-1.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-full"
                      size="txtMuseo50032Black90099"
                    >
                      Figma
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-between mt-1.5 w-full">
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[15px] w-full">
                    <div className="bg-white-A700_0c flex flex-1 flex-col gap-1.5 justify-start rounded-[5px] w-full">
                      <Text
                        className="ml-2.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 text-shadow-ts6"
                        size="txtMuseo50032Black90099"
                      >
                        Brand & Marketing Strategy
                      </Text>
                      <div className="h-px overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-yellow_800"></div>
                        <div
                          className="h-full absolute bg-light_blue_500"
                          style={{ width: "79%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white-A700_0c flex flex-1 flex-col gap-1.5 justify-start rounded-[5px] w-full">
                      <Text
                        className="ml-2.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 text-shadow-ts6"
                        size="txtMuseo50032Black90099"
                      >
                        Lunacy
                      </Text>
                      <div className="h-px overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-yellow_800"></div>
                        <div
                          className="h-full absolute bg-light_blue_500"
                          style={{ width: "79%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white-A700_0c flex flex-1 flex-col gap-1.5 justify-start rounded-[5px] w-full">
                      <Text
                        className="ml-2.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 text-shadow-ts6"
                        size="txtMuseo50032Black90099"
                      >
                        Event Planning and Management
                      </Text>
                      <div className="h-px overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-yellow_800"></div>
                        <div
                          className="h-full absolute bg-light_blue_500"
                          style={{ width: "79%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white-A700_0c flex flex-1 flex-col gap-1.5 justify-start rounded-[5px] w-full">
                      <Text
                        className="ml-2.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 text-shadow-ts6"
                        size="txtMuseo50032Black90099"
                      >
                        Sony Vegas
                      </Text>
                      <div className="h-px overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-yellow_800"></div>
                        <div
                          className="h-full absolute bg-light_blue_500"
                          style={{ width: "79%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-[21px] w-full">
                    <Text
                      className="bg-white-A700_0c flex-1 h-[43px] justify-center max-w-[655px] md:max-w-full pb-[5px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-full"
                      size="txtMuseo50032Black90099"
                    >
                      Advertising
                    </Text>
                    <Text
                      className="bg-white-A700_0c flex-1 h-11 justify-center max-w-[655px] md:max-w-full pb-1.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-full"
                      size="txtMuseo50032Black90099"
                    >
                      HTML & CSS
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-between mt-[5px] w-full">
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                  </div>
                  <Text
                    className="bg-white-A700_0c h-11 justify-center max-w-[655px] md:max-w-full mt-[15px] pb-1.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-full"
                    size="txtMuseo50032Black90099"
                  >
                    Research & Insights
                  </Text>
                  <div className="h-px mt-1.5 overflow-hidden relative w-1/2">
                    <div className="w-full h-full absolute bg-yellow_800"></div>
                    <div
                      className="h-full absolute bg-light_blue_500"
                      style={{ width: "79%" }}
                    ></div>
                  </div>
                  <Text
                    className="bg-white-A700_0c h-[43px] justify-center max-w-[655px] md:max-w-full mt-[15px] pb-[5px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-full"
                    size="txtMuseo50032Black90099"
                  >
                    Web Content Development
                  </Text>
                  <div className="h-px mt-1.5 overflow-hidden relative w-1/2">
                    <div className="w-full h-full absolute bg-yellow_800"></div>
                    <div
                      className="h-full absolute bg-light_blue_500"
                      style={{ width: "79%" }}
                    ></div>
                  </div>
                  <Text
                    className="bg-white-A700_0c h-11 justify-center max-w-[655px] md:max-w-full mt-[15px] pb-1.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-full"
                    size="txtMuseo50032Black90099"
                  >
                    Social Media Management
                  </Text>
                  <div className="h-px mt-1.5 overflow-hidden relative w-1/2">
                    <div className="w-full h-full absolute bg-yellow_800"></div>
                    <div
                      className="h-full absolute bg-light_blue_500"
                      style={{ width: "79%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="bg-black-900_7f flex flex-col h-20 items-center justify-start md:ml-[0] ml-[15px] mr-[1345px] mt-[89px] pb-[3px] pr-[3px] md:px-5 rotate-[180deg] rounded-[10px] shadow-bs4 w-20">
                <Img
                  className="h-[77px] md:h-auto object-cover w-[77px]"
                  src="images/img_arrowup_white_a700.png"
                  alt="arrowup"
                />
              </div>
              <Button className="bg-black-900_7f cursor-pointer font-semibold leading-[normal] min-w-[1440px] md:min-w-full mt-[420px] py-[18px] text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700">
                Portfolio
              </Button>
              <div className="bg-light_blue-500_19 flex flex-col items-center justify-start mt-[100px] p-[11px] shadow-bs5 w-full">
                <div className="flex flex-col items-center justify-start max-w-[1396px] mb-[11px] mt-[38px] mx-auto md:px-5 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover"
                        src="images/img_logo1.png"
                        alt="logoOne"
                      />
                      <Img
                        className="h-[200px] md:h-auto object-cover"
                        src="images/img_computech301.png"
                        alt="computech301"
                      />
                      <Img
                        className="h-[200px] md:h-auto object-cover"
                        src="images/img_denisbussiness.png"
                        alt="denisbussiness"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-[95%] md:w-full">
                      <Img
                        className="h-[200px] sm:h-auto object-cover w-1/4 md:w-full"
                        src="images/img_echonovecommunication.png"
                        alt="echonovecommuni"
                      />
                      <div className="flex relative w-[74%] md:w-full">
                        <Img
                          className="h-[200px] my-auto object-cover w-[68%]"
                          src="images/img_femissbeautytrends.png"
                          alt="femissbeautytre"
                        />
                        <Img
                          className="h-[200px] ml-[-38.74px] my-auto object-cover w-[37%] z-[1]"
                          src="images/img_leadwelloiland.png"
                          alt="leadwelloiland"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Img
                        className="md:flex-1 h-[200px] sm:h-auto mb-10 object-cover w-[22%] md:w-full"
                        src="images/img_pressedmerch.png"
                        alt="pressedmerch"
                      />
                      <Img
                        className="md:flex-1 h-[200px] sm:h-auto mb-10 ml-5 md:ml-[0] object-cover w-[16%] md:w-full"
                        src="images/img_zoeziarena.png"
                        alt="zoeziarena"
                      />
                      <div className="bg-black-900_7f flex flex-col h-20 items-center justify-start md:ml-[0] ml-[766px] md:mt-0 mt-40 pb-[3px] pr-[3px] rotate-[180deg] rounded-[10px] shadow-bs4 w-20">
                        <Img
                          className="h-[77px] w-[77px]"
                          src="images/img_arrowup.svg"
                          alt="arrowup_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700_19 flex flex-col items-center justify-start mt-[7px] p-[13px] shadow-bs6 w-full">
                <div className="flex flex-col items-center justify-start md:px-5 w-[8%] md:w-full">
                  <Img
                    className="h-[107px] md:h-auto object-cover w-full"
                    src="images/img_afrowhite1_107x111.png"
                    alt="afrowhiteOne"
                  />
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[347px] mt-[51px] md:text-3xl sm:text-[28px] text-[32px] text-light_blue-500 text-shadow-ts9"
                size="txtMuseo50032Lightblue500"
              >
                Hello, reach out on any of the platforms below.
              </Text>
              <Input
                name="name"
                placeholder="Your Name"
                className="leading-[normal] p-0 placeholder:text-black-900_33 sm:pr-5 text-[13px] text-black-900_33 text-left w-full"
                wrapClassName="bg-white-A700_19 mt-[62px] mx-auto pl-2.5 pr-[35px] py-[11px] shadow-bs3 w-[35%]"
                type="text"
              ></Input>
              <Input
                name="email"
                placeholder="Your Email"
                className="leading-[normal] p-0 placeholder:text-black-900_33 sm:pr-5 text-[13px] text-black-900_33 text-left w-full"
                wrapClassName="bg-white-A700_19 mt-2.5 mx-auto pl-2.5 pr-[35px] py-[11px] shadow-bs3 w-[35%]"
                type="email"
              ></Input>
              <Input
                name="subject"
                placeholder="Subject"
                className="leading-[normal] p-0 placeholder:text-black-900_33 sm:pr-5 text-[13px] text-black-900_33 text-left w-full"
                wrapClassName="bg-white-A700_19 mt-2.5 mx-auto pl-2.5 pr-[35px] py-[11px] shadow-bs3 w-[35%]"
              ></Input>
              <TextArea
                className="bg-white-A700_19 leading-[normal] mt-2.5 mx-auto pb-[35px] pl-2.5 sm:pr-5 pr-[35px] pt-2 shadow-bs3 text-[13px] placeholder:text-black-900_33 text-black-900_33 text-left w-[35%] sm:w-full"
                name="message"
                placeholder="Message"
                name="message"
                placeholder="Message"
              ></TextArea>
              <Text
                className="bg-light_blue-500_cc h-5 justify-center md:ml-[0] ml-[870px] mr-[470px] mt-2.5 px-[7px] text-[13px] text-shadow-ts11 text-white-A700_cc w-[100px]"
                size="txtMuseo50013"
              >
                Send Message
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-5 md:ml-[0] mt-[46px] md:px-5 w-[55%] md:w-full">
                <div className="bg-black-900_7f flex flex-col h-20 items-center justify-start md:mt-0 mt-[37px] pb-[3px] pr-[3px] rotate-[180deg] rounded-[10px] shadow-bs4 w-20">
                  <Img
                    className="h-[77px] md:h-auto object-cover w-[77px]"
                    src="images/img_arrowup_white_a700.png"
                    alt="arrowup_Two"
                  />
                </div>
                <Img
                  className="h-[76px] md:ml-[0] ml-[534px] w-[76px]"
                  src="images/img_whatsapp.svg"
                  alt="whatsapp"
                />
                <div className="flex flex-col h-[76px] items-center justify-start md:ml-[0] ml-[19px] w-[76px]">
                  <Img
                    className="h-[76px] w-[76px]"
                    src="images/img_mail.svg"
                    alt="mail"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="absolute bg-black-900_7f bottom-[1%] h-[75px] inset-x-[0] justify-center max-w-[1440px] md:max-w-full mx-auto sm:px-5 px-[35px] py-[25px] text-white-A700 text-xl w-max"
          size="txtMuseo50020"
        >
          <span className="text-white-A700 font-museo text-left font-normal">
            Designed by{" "}
          </span>
          <span className="text-light_blue-500 font-museo text-left font-normal">
            Ngugi Ngigi
          </span>
          <span className="text-white-A700 font-museo text-left font-normal">
            . All Rights Reserved
          </span>
        </Text>
        <div className="absolute bg-white-A700_19 flex flex-row inset-x-[0] items-center justify-center mx-auto p-[13px] shadow-bs6 top-[26%] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:px-5 w-[62%]">
            <Img
              className="h-[76px] w-[76px]"
              src="images/img_whatsapp.svg"
              alt="whatsapp_One"
            />
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[77px]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-shadow-ts12 text-white-A700"
                size="txtMuseo70036WhiteA700"
              >
                Portfolio
              </Text>
            </div>
            <Img
              className="h-[107px] sm:h-auto md:ml-[0] ml-[77px] object-cover w-[13%] md:w-full"
              src="images/img_afrowhite1_107x111.png"
              alt="afrowhiteOne_One"
            />
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[41px]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-shadow-ts12 text-white-A700"
                size="txtMuseo70036WhiteA700"
              >
                Skills & Tools
              </Text>
            </div>
            <div className="flex flex-col h-[76px] items-center justify-start md:ml-[0] ml-[41px] w-[76px]">
              <Img
                className="h-[76px] w-[76px]"
                src="images/img_mail.svg"
                alt="mail_One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
