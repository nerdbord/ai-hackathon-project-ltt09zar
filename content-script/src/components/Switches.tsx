import { Switch } from "./ui/switch";
import { useSwitchesStore } from "@/store/store";

const Switches = () => {
  const { switches, setSwitches } = useSwitchesStore();
  return (
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
  );
};

export default Switches;
