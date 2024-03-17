import { ReactComponent as ChatWhite } from "../assets/ChatWhite.svg";
import { ReactComponent as ListWhite } from "../assets/ListWhite.svg";
import { ReactComponent as SwitchesWhite } from "../assets/SwitchesWhite.svg";
import { ReactComponent as ChatGreen } from "../assets/ChatGreen.svg";
import { ReactComponent as ChatGreenDark } from "../assets/ChatGreenDark.svg";
import { ReactComponent as ListGreen } from "../assets/ListGreen.svg";
import { ReactComponent as SwitchesGreen } from "../assets/SwitchesGreen.svg";
import { ReactComponent as SwitchesGreenDark } from "../assets/SwitchesGreenDark.svg";
import { ReactComponent as ListGreenDark } from "../assets/ListGreenDark.svg";
import { useActiveTabStore, useDarkSideStore } from "@/store/store";

const Tabs = () => {
  const { activeTab, setActiveTab } = useActiveTabStore();
  const { themeStore } = useDarkSideStore();
  const whiteClassName = "w-8 h-8 opacity-50";
  const greenClassName =
    " w-[70px] h-[70px] flex justify-center items-center hover:bg-[#E5E5E5]";
  return (
    <div className="flex w-[340px] h-[73px] mx-auto justify-evenly items-center [&>*]:cursor-pointer">
      {activeTab === "list" ? (
        <div className="w-[70px] h-[70px] flex justify-center items-center flex-col">
          {themeStore === "light" ? (
            <ListGreen className="w-8 h-8" />
          ) : (
            <ListGreenDark className="w-8 h-8" />
          )}

          <p>Check list</p>
        </div>
      ) : (
        <div className={greenClassName} onClick={() => setActiveTab("list")}>
          <ListWhite className={whiteClassName} />
        </div>
      )}
      <span className="h-full w-[1px] bg-black dark:bg-white opacity-30"></span>
      {activeTab === "chat" ? (
        <div className="w-[70px] h-[70px] flex justify-center items-center flex-col">
        {themeStore === 'light' ?  <ChatGreen className="w-8 h-8" /> : <ChatGreenDark className="w-8 h-8" />}

          <p>Chat</p>
        </div>
      ) : (
        <div className={greenClassName} onClick={() => setActiveTab("chat")}>
          <ChatWhite className={whiteClassName} />
        </div>
      )}
      <span className="h-full w-[1px] bg-black dark:bg-white opacity-30"></span>
      {activeTab === "switches" ? (
        <div className="w-[70px] h-[70px] flex justify-center items-center flex-col">
        {themeStore === 'light' ? <SwitchesGreen className="w-8 h-8" /> : <SwitchesGreenDark className="w-8 h-8" />}

          <p>Setting</p>
        </div>
      ) : (
        <div
          className={greenClassName}
          onClick={() => setActiveTab("switches")}
        >
          <SwitchesWhite className={whiteClassName} />
        </div>
      )}
    </div>
  );
};

export default Tabs;
