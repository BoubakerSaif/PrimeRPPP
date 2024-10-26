import React, { useEffect } from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const CookiesPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#010101] h-auto text-white font-Poppins relative">
      <main className="flex flex-col gap-20">
        <div className="text-center gap-8 flex flex-col ">
          <h1 className="text-3xl font-semibold mt-12">
            Welcome to Prime Roleplay!
          </h1>
          <h2 className="text-lg lg:w-[950px] mx-auto flex flex-col  ">
            At Prime Roleplay, we use cookies to make your gaming experience
            smoother and more personalized. Here’s a quick rundown of what
            cookies are, how we use them, and your choices regarding cookies.
            <span>
              What are Cookies? Cookies are tiny pieces of data stored on your
              device that help websites remember information about your visit.
              They can help make your next visit easier and the site more useful
              to you.
            </span>
            Why Do We Use Cookies?
          </h2>
        </div>
        <div className="flex justify-center ">
          <div className=" flex flex-col  gap-4 w-fit  text-sm     ">
            <div className="flex items-center lg:w-[1000px]   group hover:cursor-pointer ">
              <p className="flex flex-col w-auto ">
                <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                  To Enhance Functionality:
                </span>
                Cookies help us remember your settings and preferences, like
                language or volume settings, so you don’t have to set them up
                every time you visit.
              </p>
            </div>
            <div className="flex items-center lg:w-[1000px]   group hover:cursor-pointer">
              <p className="flex flex-col w-auto ">
                <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                  To Improve Performance:
                </span>
                We analyze how you interact with our site, which helps us fix
                bugs and improve performance.
              </p>
            </div>
            <div className="flex items-center lg:w-[1000px]   group hover:cursor-pointer">
              <p className="flex flex-col w-auto ">
                <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                  To Enable Services:
                </span>
                Some services, like chatting or forums, need cookies to work
                properly.
              </p>
            </div>
            <div className="flex items-center lg:w-[1000px]   group hover:cursor-pointer">
              <p className="flex flex-col w-auto ">
                <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                  To Personalize Experience:
                </span>
                We might use cookies to show you relevant content and ads that
                match your interests.
              </p>
            </div>
            <div className="flex items-center lg:w-[1000px]   group hover:cursor-pointer">
              <p className="flex flex-col w-auto ">
                <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                  Your Choices Regarding Cookies
                </span>
                You have the right to decide whether to accept or reject
                cookies. Most web browsers automatically accept cookies, but you
                can usually modify your browser settings to decline cookies if
                you prefer. Here’s how you can manage your cookie settings:
                Browser Settings: Check your browser’s help menu to learn how to
                change your cookie preferences.
              </p>
            </div>
            <div className="flex items-center lg:w-[1000px]   group hover:cursor-pointer">
              <p className="flex flex-col w-auto ">
                <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                  Third-Party Tools:
                </span>
                You can also use third-party tools to manage cookies and
                tracking technologies.
              </p>
            </div>
            <div className="flex items-center lg:w-[1000px]   group hover:cursor-pointer">
              <p className="flex flex-col w-auto ">
                <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                  Please Note:
                </span>
                Disabling cookies might affect the functionality and features of
                our site. If you block or reject cookies, not all of the
                tracking described here will stop. Consent
              </p>
            </div>
            <div className="flex items-center lg:w-[1000px]   group hover:cursor-pointer">
              <p className="flex flex-col w-auto ">
                <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                  Using Prime Roleplay
                </span>
                By using Prime Roleplay, you consent to the use of cookies
                unless you have adjusted your browser settings to reject
                cookies. Changes to Our Cookies Policy We may update this policy
                from time to time to reflect changes to our practices or for
                other operational, legal, or regulatory reasons. We’ll notify
                you about significant changes by updating the date of this
                policy.
              </p>
            </div>
            <div className="flex items-center lg:w-[1000px]   group hover:cursor-pointer">
              <p className="flex flex-col w-auto ">
                <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                  Got Questions?
                </span>
                If you have any questions about our use of cookies, please get
                in touch with us at ------. We hope this policy helps you
                understand how we use cookies to make our service better for
                you. Enjoy your time around Prime Roleplay!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CookiesPolicy;
