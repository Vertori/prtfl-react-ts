// import { currentlyLearning } from "../assets";
// import TechItem from "../components/TechItem";

const Languages = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-y-4 w-full h-full">
      {/* Languages list */}
      <div className="flex flex-col gap-y-4 bg-white border shadow-xl p-8 w-full">
        <h2 className="font-primary font-bold text-2xl">Languages</h2>
        {/* Polish */}
        <div className="flex justify-between border-b">
          <h3 className="text-lg">Polish</h3>
          <p className="text-gray-600">Native</p>
        </div>
        {/* English */}
        <div className="flex justify-between border-b">
          <h3 className="text-lg">English</h3>
          <p className="text-gray-600">Advanced</p>
        </div>
        {/* German */}
        <div className="flex justify-between border-b">
          <h3 className="text-lg">German</h3>
          <p className="text-gray-600">Basic</p>
        </div>
      </div>
      {/* Currently learning */}
     
    </div>
  );
};

export default Languages;
