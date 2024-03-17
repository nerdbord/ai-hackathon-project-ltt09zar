// Filename - Components/Switcher.js

import { useDarkSideStore } from "@/store/store";
import useDarkSide from "./useDarkSide";
import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const {setThemeStore } = useDarkSideStore()

    const toggleDarkMode = (checked: boolean) => {
        setThemeStore(colorTheme)
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <DarkModeSwitch
                style={{ marginBottom: "2rem" }}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
            />
        </>
    );
}