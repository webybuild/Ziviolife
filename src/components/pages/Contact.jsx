import React from "react";
import world from "../../assets/worldmap.png";
import LocationIcon from "@mui/icons-material/EditLocationAlt";
import EmailIcon from "@mui/icons-material/AttachEmail";
import SupportIcon from "@mui/icons-material/SupportAgent";
// import bottomImg from "../../assets/footerBg.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
// import TwtiterIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Contact = () => {
  return (
    <div>
      <div className="backgroundBodyThree py-16">
        <div className=" px-8 py-8 bg-white text-[#074260]">
          <h5 className="text-sm">Contacts</h5>
          <h1 className="font-light text-3xl uppercase ">
            Get In <span className="font-bold">Touch</span>
          </h1>
          <h5 className="text-sm">
            Let’s Connect! See Below for Our Phone Number, Address & Other
            Contact Info
          </h5>
        </div>
        <div className="">
          <div className="flex flex-col lg:flex-row px-8 mx-auto max-w-screen-2xl mb-8">
            <div className="bg-contact flex-1 p-6 lg:p-12 text-white">
              <div>
                <h1 className="text-3xl font-bold">Let's Get Started</h1>
                <h5 className="font-light py-8">
                  Have any queries or lighting requirements? Give us a call or
                  drop by anytime! We endeavour to answer all inquiries within
                  24 hours on business days. We will be happy to serve you!
                </h5>
              </div>
              <div className="flex gap-4 py-8 border p-4">
                <div className="icon">
                  <LocationIcon sx={{ fontSize: "2rem" }} />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold pb-2">Address</h3>
                  <h2 className="text-base">Artizelite Pvt. Limited</h2>
                  <h5 className="text-sm">
                    D-234, Sec-63, Mumbai, Maharastra - 201305, India
                  </h5>
                </div>
              </div>
              <div className="flex gap-4 py-8 border p-4 my-4">
                <div className="icon flex items-start">
                  <EmailIcon sx={{ fontSize: "2rem" }} />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold pb-2">Email</h3>
                  <h5 className="text-sm tracking-widest">
                    admin@artizelite.com
                  </h5>
                  <h5 className="text-sm tracking-widest">
                    akshayb@artizelite.com
                  </h5>
                </div>
              </div>
              <div className="flex gap-4 py-8 border p-4">
                <div className="icon">
                  <SupportIcon sx={{ fontSize: "2rem" }} />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold pb-2">Phone</h3>
                  <h5 className="text-sm">+91-9999999999, +91-9999999999</h5>
                </div>
              </div>
            </div>
            <div className="flex-[3]">
              <div className="flex-1 py-8 lg:py-8 px-4 lg:px-12 bg-[#f9f9f9] rounded-r-3xl">
                {/* <h2 className="mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900">
                  Contact Us
                </h2> */}
                <p className="text-xs md:text-sm lg:text-3xl py-1 font-bold text-center text-[#074260]">
                  Looking for a unique lighting product or component?
                </p>
                <p className="text-xs md:text-sm lg:text-base mb-8 pt-1 lg:mb-16 font-normal text-center text-gray-500">
                  Artizelite Lighting Limited can help. Reach out to us for your
                  next lighting project!
                </p>
                <form id="contact-form" action="#" className="space-y-8">
                  <div className="flex w-full gap-8">
                    <div className="w-full">
                      <label
                        for="name"
                        className="block mb-2 text-xs md:text-sm font-medium text-[#818181]"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="block p-3 w-full text-xs md:text-sm text-gray-900 bg-white rounded-lg shadow-lg focus:ring-primary-500 focus:border-primary-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label
                        for="email"
                        className="block mb-2 text-xs md:text-sm font-medium text-[#818181]"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="block p-3 w-full text-xs md:text-sm text-gray-900 bg-white rounded-lg border shadow-lg focus:ring-primary-500 focus:border-primary-500"
                        placeholder="name@email.com"
                        required
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="flex w-full gap-8">
                    <div className="w-full">
                      <label
                        for="email"
                        className="block mb-2 text-xs md:text-sm font-medium text-[#818181]"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="block p-3 w-full text-xs md:text-sm text-gray-900 bg-white rounded-lg border shadow-lg focus:ring-primary-500 focus:border-primary-500"
                        placeholder=""
                        required
                        name="phone"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        for="help"
                        className="block mb-2 text-xs md:text-sm font-medium text-[#818181]"
                      >
                        How we can assist?
                      </label>
                      <div className="flex items-center">
                        <select
                          name="helpType"
                          id="Project_menu"
                          className="block p-3 w-full text-xs md:text-sm text-gray-900 bg-white rounded-lg border shadow-lg focus:ring-primary-500 focus:border-primary-500"
                        >
                          <option value="Project Discussion">
                            Project Discussion
                          </option>
                          <option value=" General Question">
                            General Question
                          </option>
                          <option value="Complain">Complain</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Job / Career">Job / Career</option>
                          <option value="Legal">Legal</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      for="subject"
                      className="block mb-2 text-xs md:text-sm font-medium text-[#818181]"
                    >
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-xs md:text-sm text-gray-900 bg-white rounded-lg border shadow-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter the name of your company or brand"
                      required
                      name="company"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      for="message"
                      className="block mb-2 text-xs md:text-sm font-medium text-[#818181]"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      className="block p-2.5 w-full text-xs md:text-sm text-gray-900 bg-white rounded-lg shadow-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Leave a comment..."
                      required
                      name="message"
                    ></textarea>
                  </div>
                  <div className="">
                    <div className="flex gap-6 items-center">
                      <input
                        type="checkbox"
                        id="terms"
                        className="form-checkbox text-primary-500 h-5 w-5 rounded-md border-2 border-primary-500 focus:ring-2 ring-primary-500 focus:ring-offset-0 dark:text-primary-500 dark:focus:ring-primary-500 dark:ring-offset-0"
                        required
                      />
                      <label
                        for="terms"
                        className="block text-sm font-medium text-[#686868]"
                      >
                        I have read the{" "}
                        <a
                          href="/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#074260]"
                        >
                          privacy policy
                        </a>{" "}
                        and agree to the processing of my data.
                      </label>
                    </div>

                    <p className="text-xs mt-5 text-center lg:text-left">
                      We will not spam or bother you, we may contact you for any
                      further questions.
                    </p>
                  </div>
                  <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                    <button
                      type="submit"
                      value="Send"
                      className="block cursor-pointer py-2 px-4 text-white bg-[#074260] border font-medium gradient-border-button  hover:bg-[#0C2D48] text-center lg:text-left"
                    >
                      Send Message
                    </button>
                    <a
                      className="block py-2 px-4 text-white bg-[#074260] hover:bg-[#0C2D48] font-medium duration-150  border text-center lg:text-left"
                      href="https://wa.me/918809867438"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Whatsapp Us
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="world-map w-full max-w-[1100px] my-0 mx-auto p-4 relative">
            <img
              className="w-full h-full object-contain"
              src={world}
              alt="map"
              srcset=""
            />
            <div className="pin usa absolute w-3 h-3 rounded-full">
              <span>United States</span>
            </div>
            <div className="pin UnitedKingdom absolute w-3 h-3 rounded-full">
              <span>United Kingdom</span>
            </div>
            <div className="pin Sweden absolute w-3 h-3 rounded-full">
              <span>Sweden</span>
            </div>
            <div className="pin AbuDhabi absolute w-3 h-3 rounded-full">
              <span>Abu Dhabi</span>
            </div>
            <div className="pin India absolute w-3 h-3 rounded-full">
              <span>India</span>
            </div>
          </div>
        </div>
        <div className="flex bg-bottom justify-around my-16">
          <div className="img">
            <div>
              <h1 className="uppercase text-2xl font-bold mb-3 text-[#074260]">
                Social
              </h1>
            </div>
            <div className="flex gap-4">
              <FacebookIcon sx={{ fontSize: "3rem" }} />
              <InstagramIcon sx={{ fontSize: "3rem" }} />
              {/* <TwtiterIcon /> */}
              <LinkedInIcon sx={{ fontSize: "3rem" }} />
              <YouTubeIcon sx={{ fontSize: "3rem" }} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="uppercase font-bold text-2xl text-[#074260]">
              Newsletter
            </h5>
            <div>
              <input
                className="py-1 px-8"
                type="text"
                placeholder="Your Email"
              />
              <button className="uppercase bg-[#074260] hover:bg-[#0C2D48] text-white  py-1 px-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
