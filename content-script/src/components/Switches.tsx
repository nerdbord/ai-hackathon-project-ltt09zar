import { Switch } from "./ui/switch";
import { useSwitchesStore } from "@/store/store";
import Header from "./Header";
import { useEffect } from "react";
import { detectDarkPatterns } from "@/helpers/hide";

const DarkPattern = () => {
  useEffect(() => {
    detectDarkPatterns();
  }, []);

  return window.localStorage.getItem("areDarkPatternsIncluded") !== "true" ? (
    <div className="space-y-4">
      <div className="w-full py-4">
        <h1 className="text-black dark:text-white text-lg font-bold text-center">
          The site doesn’t contain dark patterns  🙌
        </h1>
      </div>
    </div>
  ) :
    (<div className="space-y-4">
      <div className="w-full py-4">
        <h1 className="text-black dark:text-white text-lg font-bold text-center">
          Dark patterns identified!
        </h1>
        <h1 className="text-black dark:text-white text-lg font-bold text-center">
          But worry not, with us, you can take control  😎
        </h1>      </div>
    </div>)
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
