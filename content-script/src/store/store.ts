import { create } from "zustand";
export type SwitchesFields = {
  switches: {
    sales: boolean;
    hideInfo: boolean;
    hideComments: boolean;
    hideCartInfo: boolean;
  };
};

interface Switches extends SwitchesFields {
  switches: {
    sales: boolean;
    hideInfo: boolean;
    hideComments: boolean;
    hideCartInfo: boolean;
  };
  setSwitches: (switches: {
    sales: boolean;
    hideInfo: boolean;
    hideComments: boolean;
    hideCartInfo: boolean;
  }) => void;
}

const getStorageSwitchValue = (val: string) => {
  let valueObj = localStorage.getItem("switchesValues");

  return valueObj ? JSON.parse(valueObj)[val] : false;
}

export const useSwitchesStore = create<Switches>((set) => ({
  switches: {
    sales: getStorageSwitchValue('sales'),
    hideInfo: getStorageSwitchValue("hideInfo"),
    hideComments: getStorageSwitchValue("hideComments"),
    hideCartInfo: getStorageSwitchValue("hideCartInfo"),
  },
  setSwitches: (switches) => {
    set({ switches });
    localStorage.setItem("switchesValues", JSON.stringify(switches));
  },
}));

type ActiveTab = {
  activeTab: "list" | "chat" | "switches";
  setActiveTab: (tab: "list" | "chat" | "switches") => void;
};

export const useActiveTabStore = create<ActiveTab>((set) => ({
  activeTab: "list",
  setActiveTab: (activeTab) => set({ activeTab }),
}));
