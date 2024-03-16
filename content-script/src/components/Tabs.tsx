import React from "react";
import { ReactComponent as ChatWhite } from "../assets/ChatWhite.svg";
import { ReactComponent as ListWhite } from "../assets/ListWhite.svg";
import { ReactComponent as SwitchesWhite } from "../assets/SwitchesWhite.svg";
import { ReactComponent as ChatGreen } from "../assets/ChatGreen.svg";
import { ReactComponent as ListGreen } from "../assets/ListGreen.svg";
import { ReactComponent as SwitchesGreen } from "../assets/SwitchesGreen.svg";
import { useActiveTabStore } from "@/store/store";
const Tabs = () => {
  const { activeTab, setActiveTab } = useActiveTabStore();
  return (
    <div className="flex w-[340px] h-[73px] mx-auto justify-evenly items-center [&>*]:cursor-pointer">
      {activeTab === "list" ? (
        <div className="w-[70px] h-[70px] flex justify-center items-center ">
          <ListGreen className="w-8 h-8" />
        </div>
      ) : (
        <div
          className="w-[70px] h-[70px] flex justify-center items-center hover:bg-[#E5E5E5]"
          onClick={() => setActiveTab("list")}
        >
          <ListWhite className="w-8 h-8" />
        </div>
      )}
      <span className="h-full w-[1px] bg-black opacity-30"></span>
      {activeTab === "chat" ? (
        <div className="w-[70px] h-[70px] flex justify-center items-center ">
          <ChatGreen className="w-8 h-8" />
        </div>
      ) : (
        <div
          className="w-[70px] h-[70px] flex justify-center items-center hover:bg-[#E5E5E5]"
          onClick={() => setActiveTab("chat")}
        >
          <ChatWhite className="w-8 h-8" />
        </div>
      )}
      <span className="h-full w-[1px] bg-black opacity-30"></span>
      {activeTab === "switches" ? (
        <div className="w-[70px] h-[70px] flex justify-center items-center ">
          <SwitchesGreen className="w-8 h-8" />
        </div>
      ) : (
        <div
          className="w-[70px] h-[70px] flex justify-center items-center hover:bg-[#E5E5E5]"
          onClick={() => setActiveTab("switches")}
        >
          <SwitchesWhite className="w-8 h-8" />
        </div>
      )}
    </div>
  );
};

export default Tabs;
