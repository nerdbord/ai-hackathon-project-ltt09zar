import { create } from "zustand";
import Switches from "@/ts/interfaces";
import { ActiveTab } from "@/ts/types"

const getStorageSwitchValue = (objectKey: string, property: string) => {
  let valueObj = localStorage.getItem(objectKey);

  return valueObj ? JSON.parse(valueObj)[property] : true;
}

export const useSwitchesStore = create<Switches>((set) => ({
  switches: {
    sales: getStorageSwitchValue('switchValues', 'sales'),
    hideInfo: getStorageSwitchValue('switchValues', "hideInfo"),
    hideComments: getStorageSwitchValue('switchValues', "hideComments"),
  },

  setSwitches: (switches) => {
    set({ switches });
    localStorage.setItem("switchesValues", JSON.stringify(switches));
  },
}));

export const useActiveTabStore = create<ActiveTab>((set) => ({
  activeTab: "list",
  setActiveTab: (activeTab) => set({ activeTab }),
}));
