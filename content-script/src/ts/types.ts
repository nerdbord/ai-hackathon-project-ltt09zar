import { Dispatch, SetStateAction } from "react";

export type ChatInputProps = {
    addMessage: (question: string) => void;
}

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

export type MessagesProps = {
    messages: string[];
}

export type HeaderProps = {
    text?: string;
    pattern?: JSX.Element;
};

export type MessagesAreaPops = {
    addMessage: (question: string) => void;
    messages: string[];
}

export type PopupProps = {
    setVisibility: Dispatch<SetStateAction<boolean>>;
};

export type QuestionsProps = {
    addQuestion: (question: string) => void;
}

export type DarkSideProps = {
    themeStore: 'light' | 'dark';
    setThemeStore: (themeStore: 'light' | 'dark') => void;
}