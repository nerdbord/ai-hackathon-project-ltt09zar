import React from "react";
import { Switch } from "./ui/switch";
import { useSwitchesStore } from "@/store/store";
import Tabs from "./Tabs";
import Content from "./Content";

const Overlay = () => {
  return (
    <div className=" bottom-0 right-0 h-[100dvh] w-[380px] bg-[#F2F2F2] Overlay py-6 space-y-8 pr-4 pl-4">
      <Tabs />
      <Content/>
    </div>
  );
};

export default Overlay;
