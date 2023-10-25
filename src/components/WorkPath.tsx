import { BsCalendar3 } from "react-icons/bs";

const WorkPath = (): JSX.Element => {
  return (
    <>
      {/* Work Container */}
      <div>
        {/* Work data 1 */}
        <div className="grid grid-cols-[1fr,max-content,1fr]">
          <div className="text-center px-2 flex flex-col">
            <h3 className="font-medium text-base">IT Application Analyst</h3>
            <p className="text-sm mb-4">Wrzeciono Sp. z o. o.</p>
            <div className="text-sm text-gray-400 flex items-center justify-center gap-x-2">
              <BsCalendar3 />
              <p>2022 - 2023</p>
            </div>
          </div>
          <div>
            <p className="inline-block w-[13px] h-[13px] rounded-full bg-[#89cff0]"></p>
            <p className="block w-[1px] h-full bg-[#89cff0] translate-x-[6px] -translate-y-[7px]"></p>
          </div>
        </div>
           {/* Work data 2 */}
           <div className="grid grid-cols-[1fr,max-content,1fr]">
          <div></div>

          <div>
            <span className="inline-block w-[13px] h-[13px] rounded-full bg-[#89cff0]"></span>
            <span className="block w-[1px] h-full bg-[#89cff0] translate-x-[6px] -translate-y-[7px]"></span>
          </div>

          <div className="text-center px-2 flex flex-col">
          <h3 className="font-medium text-base">Quality Controller</h3>
            <p className="text-sm mb-4">Wrzeciono Sp. z o. o.</p>
            <div className="text-sm text-gray-400 flex items-center justify-center gap-x-2">
              <BsCalendar3 />
              <span>2019 - 2022</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkPath;
