import React, { Dispatch, SetStateAction } from "react";

type PopupProps = {
  setVisibility: Dispatch<SetStateAction<boolean>>;
};
const Popup = ({ setVisibility }: PopupProps) => {
  return (
    <div className="top-0 left-0 h-full w-[380px] absolute bg-white dark:bg-darkGray  z-50 flex px-6 justify-center items-center popup">
      <div className="space-y-10 flex flex-col justify-center items-center">
        <h1 className="text-[90px] font-bold text-darkGray dark:text-white">Oops!</h1>
        <p className="font-bold text-center text-lg text-balance">
          It looks like you clicked on "Don't click here" button. 👀
        </p>
        <p className="text-sm text-center text-darkGray">
          We get it, curiosity can be tempting! But beaware, clicking on unknown
          button can lead to dangerous consequences.
        </p>
        <div className="bg-gradient-to-r from-yellow to-green w-full p-4 rounded-[28px] flex justify-center items-center">
          <span className="font-bold">Your safety is important to us! 🤗</span>
        </div>
      </div>

      <span className="absolute bottom-5 left-50 translate-x-1/2 cursor-pointer text-darkGray dark:text-white" onClick={() => setVisibility(prev=>!prev)}>
        Cancel X
      </span>
    </div>
  );
};

export default Popup;
