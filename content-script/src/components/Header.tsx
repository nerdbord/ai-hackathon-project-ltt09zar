import { HeaderProps } from "@/ts/types";

const Header = ({ text, pattern }: HeaderProps) => {
  return (
    <div className="border-y border-gray-300 justify-center flex items-center py-10 my-6">
      <h1 className="text-black dark:text-white text-lg text-center font-bold">{text}</h1>
      {pattern}
    </div>
  );
};

export default Header;
