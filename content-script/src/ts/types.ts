
export type ActiveTab = {
    activeTab: "list" | "chat" | "switches";
    setActiveTab: (tab: "list" | "chat" | "switches") => void;
};

export type SwitchesFields = {
    switches: {
        sales: boolean;
        hideInfo: boolean;
        hideComments: boolean;
    };
};

export type OverlayIconProps = {
    isOverlayVisible: boolean;
    setIsOverlayVisible: React.Dispatch<React.SetStateAction<boolean>>;
};