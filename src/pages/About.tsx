import avatar2 from "../assets/avatar2.webp";
import {techList} from "../assets"
import Qualification from "../components/Qualification";
import TechItem from "../components/TechItem";
import Languages from "../components/Languages";

const About = (): JSX.Element => {
  return (
    <section className="section">
      <div className="container mx-auto min-h-full pt-52 px-4 flex flex-col gap-y-12 pb-8">
        {/* About me */}
        <div className="w-full bg-white border shadow-xl p-12  xl:p-4 relative">
          <img
            className="absolute right-[50%] -top-24 translate-x-1/2 lg:translate-x-0 lg:right-0 lg:-top-20 max-w-[140px] lg:max-w-[160px] lg:rotate-12"
            src={avatar2}
            alt="avatar"
          />
          <h1 className="h1 mb-4 text-center lg:text-start">About Me</h1>
          <p className="text-[20px] text-primary text-center lg:text-start">
            I'm Rafał, a 24 years old ambitious, passionate and self-taught
            Frontend Developer who spends every single day learning new things
            along with solutions, best practices and developing his programming
            skills. I'm always focusing on creating responsive and user-friendly
            websites. Besides, I am an IT technician and a student of IT in
            business and I definitely enjoy discovering new technologies.
          </p>
        </div>

        {/* slider container */}
        <div className="container mx-auto h-max">
          <h1 className="font-primary font-bold text-2xl mb-2">
            Technologies I've been using
          </h1>
          <div className="bg-white border shadow-xl py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6   ">
            {techList.map((item) => {
              return <TechItem item={item} key={item.id} />;
            })}
          </div>
        </div>

        {/* Qualification section */}
        <div className="flex flex-col lg:flex-row gap-y-12 mb-12 gap-x-12">
          <Qualification />

          {/* Languages container */}
          <Languages />
        </div>

        {/* Languages */}
      </div>
    </section>
  );
};

export default About;
