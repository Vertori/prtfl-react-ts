import { MdLocationOn } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = (): JSX.Element => {
  return (
    <section className="section bg-[#FCFCFC]">
      <div className="container mx-auto min-h-full pt-52 px-4 pb-28">
        {/* Page title */}
        <div className="text-center">
          <h1 className="h1">Contact</h1>
          <h2 className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
            Get in touch with me
          </h2>
        </div>
        {/* Contact info container*/}
        <div className="flex flex-col sm:flex-row justify-center gap-x-12 gap-y-4 sm:gap-y-0 mb-8">
          {/* E-mail */}
          <div className="flex items-center gap-x-4 justify-center">
            <FiMail className="text-2xl" />
            <div>
              <h3 className="text-xl">E-mail</h3>
              <p className="text-base text-gray-600">rafue9@gmail.com</p>
            </div>
          </div>
          {/* Phone Number */}
          <div className="flex items-center gap-x-4 justify-center">
            <BsTelephoneFill className="text-2xl" />
            <div>
              <h3 className="text-xl">Phone</h3>
              <p className="text-base text-gray-600">+48 123-456-789</p>
            </div>
          </div>
          {/* Location */}
          <div className="flex items-center gap-x-4 justify-center">
            <MdLocationOn className="text-2xl" />
            <div>
              <h3 className="text-xl">Location</h3>
              <p className="text-base text-gray-600">Opole, Wrocław / Poland</p>
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="w-full bg-white border shadow-xl p-12  xl:p-4 relative">
          <form className="flex flex-col gap-8 mt-8">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name" className="font-primary text-lg font-bold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="bg-gray-100 py-4 px-6  text-primary rounded-lg outline-none border-none font-medium"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="font-primary text-lg font-bold">
                Your E-mail
              </label>
              <input
                type="email"
                name=""
                id="email"
                placeholder="E-mail"
                className="bg-gray-100 py-4 px-6  text-primary rounded-lg outline-none border-none font-medium"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="message"
                className="font-primary text-lg font-bold"
              >
                Your Message
              </label>
              <textarea
                id="message"
                cols={30}
                rows={10}
                placeholder="Message"
                className="bg-gray-100 py-4 px-6  text-primary rounded-lg outline-none border-none font-medium"
              ></textarea>
            </div>
            <button className="btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
