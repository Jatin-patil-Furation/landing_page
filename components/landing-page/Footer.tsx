import { footerPayment, footerSecurity } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[url('/assets/footer/footer-background.svg')] text-white bg-no-repeat bg-cover">
      <div className="footer-conatainer">
        <div className="footer-information px-8 pt-28 text-center">
          <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl expl-text">
            Sikka Play
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 py-14">
            Welcome to Sikkha Play, your ultimate destination for thrilling card
            games and endless entertainment. Immerse yourself in world of
            classic Indian card games, where strategy meets excitement. At
            Sikkha Play, we take pride in bringing you two of the most beloved
            card games – Teen Patti and Marriage. Whether you're a seasoned card
            player or just starting out, Sikkha Play offers a platform where you
            can challenge your friends, connect with players from around the
            world, and showcase your skills. With a user-friendly interface,
            stunning graphics, and smooth gameplay, Sikkha Play ensures that
            every hand you play is a memorable one.
            <span className="text-white block pt-8">
              Thank you for choosing us as your gaming companion. Let the cards
              fall in your favor!
            </span>
          </p>
        </div>
        <div className="footer-payment-info flex justify-center items-canter pt-14">
          <hr className=" w-[27%] my-auto" />
          <p className="w-[38%] text-center expl-text text-base sm:text-lg md:text-xl lg:text-2xl">
            Your money is safe with us
          </p>
          <hr className=" w-[27%] my-auto" />
        </div>
        <div className="footer-payment-container flex flex-wrap justify-between py-20 px-14">
          <div className="payment-security basis-full md:basis-[40%]">
            <h3 className="text-2xl py-5 text-center ">
              Security & certificates
            </h3>
            <div className="footer-payment-security-images flex justify-around gap-3">
              {footerSecurity.length > 0 &&
                footerSecurity.map((image) => (
                  <img
                    src={image.image}
                    alt="image"
                    key={image.id}
                    className=""
                  />
                ))}
            </div>
          </div>
          <div className="footer-payment-images basis-full md:basis-[40%]">
            <h3 className="text-2xl  py-5 text-center">Payment Partners</h3>
            <div className="footer-payment-images flex justify-around gap-3">
              {footerPayment.length > 0 &&
                footerPayment.map((image) => (
                  <img
                    src={image.image}
                    alt="image"
                    key={image.id}
                    className=""
                  />
                ))}
            </div>
          </div>
        </div>

        <div className=" p-5	text-center text-base relative ">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-100 opacity-10 z-0"></div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            This game involves an element of financial risk and may be
            addictive. Please play responsibly and at your own risk. T&C Apply
          </p>
        </div>

        <div className="footer-container flex flex-wrap justify-between px-10 py-10 text-sm gap-6">
          <div className="left-footer basis-full sm:basis-[30%] text-sm md:text-base lg:text-lg ">
            <div className="address py-5 text-center">
              <h4>Address:</h4>
              <p>Level 1, 12 Sample St, Nepal</p>
            </div>
            <div className="Contact-us text-center">
              <h4>Contact:</h4>
              <a href="#" className="underline block">
                1800 123 4567{" "}
              </a>
              <a href="#" className="underline block">
                info@relume.io
              </a>
            </div>
          </div>
          <div className="right-footer flex flex-wrap  basis-full sm:basis-[30%] text-sm md:text-base lg:text-lg justify-evenly ">
            <a href="#" className="basis-1/2 text-center">
              Link 1
            </a>
            <a href="#" className="basis-1/2 text-center">
              Link 2
            </a>
            <a href="#" className="basis-1/2 text-center">
              Link 3
            </a>
            <a href="#" className="basis-1/2 text-center">
              Link 4
            </a>
            <a href="#" className="basis-1/2 text-center">
              Link 5
            </a>
            <a href="#" className="basis-1/2 text-center">
              Link 6
            </a>
            <a href="#" className="basis-1/2 text-center">
              Link 7
            </a>
            <a href="#" className="basis-1/2 text-center">
              Link 8
            </a>
          </div>
        </div>

        <hr className="w-[95%] mx-auto bg-slate-400" />
        <h3 className="text-sm text-center py-8">
          © 2023 Relume. All rights reserved.
        </h3>
        <div className="footer-links flex justify-around px-10 w-[50%] mx-auto text-sm pb-8 flex-wrap">
          <a href="#" className="underline text-center test-sm">
            Privacy Policy
          </a>
          <a href="#" className="underline text-center test-sm">
            Terms of Service
          </a>
          <a href="#" className="underline text-center test-sm">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
