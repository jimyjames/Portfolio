import React from "react";

import { Button, Img, Input, Text, TextArea } from "components";
import Header1 from "components/Header1";

const GetInTouchPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-museo h-[1024px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_aboutone.png')" }}
      >
        <div className="flex flex-col items-center justify-start mb-[367px] w-full">
          <Header1 className="bg-light_blue-500_0c flex md:flex-col md:gap-[51px] items-center justify-between md:px-5 px-[50px] py-5 shadow-bs w-full" />
          <Text
            className="mt-[161px] md:text-3xl sm:text-[28px] text-[32px] text-light_blue-500 text-shadow-ts9"
            size="txtMuseo50032Lightblue500"
          >
            Hello, reach out on any of the platforms below.
          </Text>
          <div className="flex flex-col gap-2.5 items-start justify-start mt-[62px] md:px-5 w-[35%] md:w-full">
            <Input
              name="yourname"
              placeholder="Your Name"
              className="leading-[normal] p-0 placeholder:text-black-900_33 sm:pr-5 text-[13px] text-black-900_33 text-left w-full"
              wrapClassName="bg-white-A700_19 pl-2.5 pr-[35px] py-[11px] shadow-bs3 w-full"
              type="text"
            ></Input>
            <Input
              name="youremail"
              placeholder="Your Email"
              className="leading-[normal] p-0 placeholder:text-black-900_33 sm:pr-5 text-[13px] text-black-900_33 text-left w-full"
              wrapClassName="bg-white-A700_19 pl-2.5 pr-[35px] py-[11px] shadow-bs3 w-full"
              type="email"
            ></Input>
            <Input
              name="subject"
              placeholder="Subject"
              className="leading-[normal] p-0 placeholder:text-black-900_33 sm:pr-5 text-[13px] text-black-900_33 text-left w-full"
              wrapClassName="bg-white-A700_19 pl-2.5 pr-[35px] py-[11px] shadow-bs3 w-full"
            ></Input>
            <TextArea
              className="bg-white-A700_19 leading-[normal] pb-[35px] pl-2.5 sm:pr-5 pr-[35px] pt-2 shadow-bs3 text-[13px] placeholder:text-black-900_33 text-black-900_33 text-left w-full"
              name="message"
              placeholder="Message"
              name="message"
              placeholder="Message"
            ></TextArea>
            <Button className="bg-light_blue-500_7f cursor-pointer h-[30px] leading-[normal] md:ml-[0] ml-[350px] py-[5px] rounded-[5px] shadow-bs1 text-base text-center text-white-A700_cc w-[150px]">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouchPage;
