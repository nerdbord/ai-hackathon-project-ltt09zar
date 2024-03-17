import Tabs from "./Tabs";
import Content from "./Content";
import Switcher from "@/switcher/Switcher";
import { useState } from "react";
import Popup from "./Popup";

const Overlay = () => {
  const [isPopupVisible, setVisibility] = useState(false);

  return (
    <div className="bottom-0 overflow-y-auto overflow-x-hidden right-0 h-[100dvh] w-[380px] bg-[#F2F2F2] dark:bg-[#232428] Overlay py-6 space-y-8 pr-4 pl-4 relative">
      <span className="absolute top-6 right-6  z-9">
        <Switcher />
      </span>

      <Tabs />
      <Content />

      <span className="w-full flex justify-end ">
        <a
          className="text-black dark:text-white"
          target="_blank"
          onClick={() => {
            setVisibility(!isPopupVisible);
          }}
        >
          Don't click there
        </a>
      </span>



      {isPopupVisible && <Popup setVisibility={setVisibility} />}
    </div>
  );
};

export default Overlay;
