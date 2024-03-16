import Tabs from "./Tabs";
import Content from "./Content";
import Switcher from '@/switcher/Switcher';

const Overlay = () => {
  return (
    <div className="bottom-0 right-0 h-[100dvh] w-[380px] bg-[#F2F2F2] dark:bg-[#232428] Overlay py-6 space-y-8 pr-4 pl-8 relative">
      <span className="absolute top-6 left-2">
        <Switcher />
      </span>

      <Tabs />
      <Content />
    </div>
  );
};

export default Overlay;
