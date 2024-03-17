import React from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App";
import "./input.css";

const body = document.querySelector("body");

const app = document.createElement("div");

// Make sure the element that you want to mount the app to has loaded. You can
// also use `append` or insert the app using another method:
// https://developer.mozilla.org/en-US/docs/Web/API/Element#methods

// Also control when the content script is injected from the manifest.json:
// https://developer.chrome.com/docs/extensions/mv3/content_scripts/#run_time
if (body) {
  body.prepend(app);
}

const link = document.createElement('link');
link.href = './output.css';
link.rel = 'stylesheet';

document.head.appendChild(link);


const root = createRoot(app!);

root.render(<App />);
