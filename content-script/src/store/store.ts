import { create } from "zustand";
export type SwitchesFields = {
  switches: {
    sales: boolean;
    hideInfo: boolean;
    hideComments: boolean;
  };
};

interface Switches extends SwitchesFields {
  switches: {
    sales: boolean;
    hideInfo: boolean;
    hideComments: boolean;
  };
  setSwitches: (switches: {
    sales: boolean;
    hideInfo: boolean;
    hideComments: boolean;
  }) => void;
}

export const useSwitchesStore = create<Switches>((set) => ({
  switches: {
    sales: false,
    hideInfo: false,
    hideComments: false,
  },
  setSwitches: (switches) => set({ switches }),
}));

type ActiveTab = {
  activeTab: "list" | "chat" | "switches";
  setActiveTab: (tab: "list" | "chat" | "switches") => void;
};

export const useActiveTabStore = create<ActiveTab>((set) => ({
  activeTab: "list",
  setActiveTab: (activeTab) => set({ activeTab }),
}));
