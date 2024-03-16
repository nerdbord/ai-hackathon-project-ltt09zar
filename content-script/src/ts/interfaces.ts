import { SwitchesFields } from "./types"

export default interface Switches extends SwitchesFields {
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