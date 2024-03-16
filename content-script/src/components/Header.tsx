import React from "react";

type HeaderProps = {
  text?: string;
  pattern?: JSX.Element;
};

const Header = ({ text, pattern }: HeaderProps) => {
  return (
    <div className=" border-y border-gray-300 justify-center flex items-center py-10 px-2 my-6">
      <h1 className="text-lg text-center font-bold">{text}</h1>
      {pattern}
    </div>
  );
};

export default Header;
