import React from "react";
import { Switch } from "./ui/switch";
import {  useSwitchesStore } from "@/store/store";

const Overlay = () => {
  const { switches, setSwitches } = useSwitchesStore();


  return (
    <div className=" bottom-0 right-0 h-[100dvh] w-[380px] bg-[#F2F2F2] Overlay py-6 px-12">
      <div className="flex flex-col items-start space-y-4">
        <div className="flex gap-2 justify-center items-center">
          <Switch onClick={() => setSwitches({...switches, sales: !switches.sales})}  switchState={switches.sales}/>
          <p>Hide information about sales.</p>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <Switch onClick={() => setSwitches({...switches, hideInfo: !switches.hideInfo})}  switchState={switches.hideInfo}/>
          <p>Hide details about free shipping.</p>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <Switch onClick={() => setSwitches({...switches, hideComments: !switches.hideComments})}  switchState={switches.hideComments}/>
          <p>Exclude generated comments.</p>
        </div>
        
      </div>
    
    </div>
  );
};

export default Overlay;
