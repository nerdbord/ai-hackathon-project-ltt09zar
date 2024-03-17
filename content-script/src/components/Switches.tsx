import { Switch } from "./ui/switch";
import { useSwitchesStore } from "@/store/store";
import Header from "./Header";

const DarkPattern = () => {
  return (
    <div className="space-y-4">
      <div className="w-full bg-black rounded-[94px] bg-gradient-to-r from-[#FF9900] to-[#FAFF00] py-4">
        <h1 className="text-black dark:text-white text-lg font-bold text-center">
          Dark patterns identified!
        </h1>
      </div>
      <p className="text-[14px]">But don't worry, with us, you can take control 😎</p>
    </div>
  );
};
const Switches = () => {
  const { switches, setSwitches } = useSwitchesStore();
  return (
    <>
      <Header pattern={<DarkPattern />} />
      <div className="flex flex-col items-start space-y-4">
        <div className="flex gap-2 justify-center items-center">
          <Switch
            onClick={() => setSwitches({ ...switches, sales: !switches.sales })}
            switchState={switches.sales}
          />
          <p>Hide information about sales.</p>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <Switch
            onClick={() =>
              setSwitches({ ...switches, hideInfo: !switches.hideInfo })
            }
            switchState={switches.hideInfo}
          />
          <p>Hide details about free shipping.</p>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <Switch
            onClick={() =>
              setSwitches({ ...switches, hideComments: !switches.hideComments })
            }
            switchState={switches.hideComments}
          />
          <p>Exclude generated comments.</p>
        </div>
      </div>
    </>
  );
};

export default Switches;
