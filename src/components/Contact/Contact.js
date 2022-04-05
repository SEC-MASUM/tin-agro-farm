import React from "react";
import contact from "../../Assets/images/contact.png";
import { AiFillFacebook } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
const Contact = ({ setShow }) => {
  setShow(true);
  return (
    <div>
      <div class="py-4  text-gray-600">
        <div class="container mx-auto flex flex-col md:flex-row my-12 md:my-16">
          <div class="flex flex-col w-full lg:w-2/5 p-8">
            <p class="text-3xl md:text-5xl text-fuchsia-700 my-4 leading-relaxed md:leading-snug">
              Contact our team
            </p>
            <p class="font-sans text-sm md:text-lg my-2 md:my-4">
              <MdLocationOn class="inline-block fill-current mr-2 text-3xl"></MdLocationOn>
              Shalthi Gopalpur, Choupathi Market, Mitha Pukur, Rangpur
            </p>
            <p class="font-sans text-sm md:text-lg my-2 md:my-4">
              <AiFillFacebook class="inline-block fill-current mr-2 text-3xl"></AiFillFacebook>
              facebook.com/tinagrofarm
            </p>
            <p class="font-sans text-sm md:text-lg my-2 md:my-4">
              <IoCallSharp
                className="
                inline-block
                fill-current
                mr-2
                text-3xl"
              ></IoCallSharp>

              +880 1735-938171
            </p>
          </div>
          <div class=" flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
            <div class="container">
              <div class="relative flex flex-col min-w-0 break-words w-full">
                <div class="flex-auto p-5 lg:p-10">
                  <img className="w-4/5" src={contact} alt="contact image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
