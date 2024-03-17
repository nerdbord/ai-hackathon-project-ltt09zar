import Tabs from "./Tabs";
import Content from "./Content";
import Switcher from '@/switcher/Switcher';
import { useState } from "react";
import Popup from "./Popup";

const Overlay = () => {
  const [isPopupVisible, setVisibility] = useState(false)

  return (
    <div className="bottom-0 overflow-auto right-0 h-[100dvh] w-[380px] bg-[#F2F2F2] dark:bg-[#232428] Overlay py-6 space-y-8 pr-4 pl-8 relative">
      <span className="absolute top-6 left-2 z-9">
        <Switcher />
      </span>

      <Tabs />
      <Content />

      <span className="absolute bottom-0 right-2">
        <a className="text-black" target="_blank" onClick={() => {
          setVisibility(!isPopupVisible)
        }}>
          Dont click there</a>

        {isPopupVisible && (
          <Popup />
        )}
      </span>
    </div>
  );
};

export default Overlay;
