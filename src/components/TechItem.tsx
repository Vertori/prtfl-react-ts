import { TechItemType } from "../types";

type Props = {
  item: TechItemType;
};

const TechItem = ({ item }: Props): JSX.Element => {
  const { name, image } = item;
  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-2">
      <img className="w-14 sm:w-18 h-full" src={image} alt={name} />
      <p className="text-sm sm:text-base whitespace-nowrap">{name}</p>
    </div>
  );
};

export default TechItem;
