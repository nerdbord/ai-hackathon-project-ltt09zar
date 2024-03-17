import Tabs from "./Tabs";
import Content from "./Content";
import Switcher from "@/switcher/Switcher";
import { useState } from "react";
import Popup from "./Popup";

const Overlay = () => {
  const [isPopupVisible, setVisibility] = useState(false);

  return !isPopupVisible ? (
    <div className="bottom-0 overflow-y-auto overflow-x-hidden right-0 h-[100dvh] w-[380px] bg-[#F2F2F2] dark:bg-[#232428] Overlay py-6 space-y-8 pr-4 pl-8 relative">
      <span className="absolute top-6 left-2 z-9">
        <Switcher />
      </span>

      <Tabs />
      <Content />

      <a className="sticky bottom-2 right-2 text-black dark:text-white" target="_blank" onClick={() => {
        setVisibility(!isPopupVisible)
      }}>
        Dont click there</a>
    </div>
  ) :
    <div className="bottom-0 overflow-y-auto overflow-x-hidden right-0 h-[100dvh] w-[380px] Overlay bg-white py-6 space-y-8 pr-4 pl-8 relative">
      <Popup />
    </div>;
};

export default Overlay;
