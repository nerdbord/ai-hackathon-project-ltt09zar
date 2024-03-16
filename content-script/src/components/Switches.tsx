import React from "react";
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
        <p>Ukryj informacje o promocjach</p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <Switch
          onClick={() =>
            setSwitches({ ...switches, hideInfo: !switches.hideInfo })
          }
          switchState={switches.hideInfo}
        />
        <p>Wyklucz wygenerowane komentarze</p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <Switch
          onClick={() =>
            setSwitches({ ...switches, hideComments: !switches.hideComments })
          }
          switchState={switches.hideComments}
        />
        <p>Ukryj informacje o darmowej dostawie</p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <Switch
          onClick={() =>
            setSwitches({ ...switches, hideCartInfo: !switches.hideCartInfo })
          }
          switchState={switches.hideCartInfo}
        />
        <p>Pokaż informacje o warunkach sprzedaży i polityce zwrotów w koszyku</p>
      </div>
    </div>
  );
};

export default Switches;
