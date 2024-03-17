import { filterComments } from "./comments";
import { phrases } from "./constants";

export function handleHideSales() {
  localStorage.setItem("areDarkPatternsIncluded", JSON.stringify(false));

  const popupAd: HTMLElement | null = document.querySelector(
    ".drogue-poplayer-modal"
  );
  const banner: HTMLElement | null = document.querySelector(
    '[data-spm="sale_pc_top_banner"]'
  );
  const row: HTMLElement | null = document.querySelector('div[data-component-id="5801448"]');
  const top_img: HTMLElement | null = document.querySelector('.pc2023-site-info--site-image--kWOv6EV');
  const choice: HTMLElement | null = document.querySelector('.af2023-choice-slider--titleWrap--2ozVNsy');
  const rax_text = document.querySelectorAll('.rax-text-v2--singleline');
  const rax_view = document.querySelectorAll('.AIC-II-container');
  const annual = document.querySelectorAll('[class^="rc-modules--img"]');
  const spans = document.querySelectorAll("span");
  const rc_modules = document.querySelectorAll('[class^="rc-modules--text"]');
  const base_card_discount = document.querySelectorAll(
    '[class^="base-card--discount"]'
  );

  filterComments()
  if (row) {
    row.style.setProperty('display', 'none', 'important');
  }
  if (top_img) {
    top_img.style.setProperty('display', 'none', 'important');
  }
  if (choice) {
    choice.style.setProperty('display', 'none', 'important');
  }
 
  if (annual) {
    annual.forEach((element) => {
      (element as HTMLElement).style.display = "none";
    });

    localStorage.setItem("areDarkPatternsIncluded", JSON.stringify(true));
  }
  if (popupAd) {
    popupAd.style.display = "none";

    localStorage.setItem("areDarkPatternsIncluded", JSON.stringify(true));
  }
  if (banner) {
    banner.style.display = "none";

    localStorage.setItem("areDarkPatternsIncluded", JSON.stringify(true));
  }

  spans.forEach((element: HTMLElement) => {
    const text = element?.textContent?.trim();

    if (text?.includes("Extra") && text?.includes("% off with coins")) {
      element.style.display = "none";
    }
  });

  spans.forEach((element: HTMLElement) => {
    const text = element?.textContent?.trim();

    if (text?.includes("Only") && text?.includes("left")) {
      element.style.display = "none";
    }
  });

  rc_modules.forEach((element) => {
    (element as HTMLElement).style.display = "none";
  });

  base_card_discount.forEach((element) => {
    (element as HTMLElement).style.display = "none";
  });
  rax_text.forEach((element) => {
    (element as HTMLElement).style.display = "none";
  });
  rax_view.forEach((element) => {
    (element as HTMLElement).style.display = "none";
  });
}

export function handleHideShipping() {
  const spans = document.querySelectorAll("span");

  spans.forEach((span) => {
    const text = span?.textContent?.trim().toLowerCase();
    if (phrases.some((phrase) => text?.includes(phrase.toLowerCase()))) {
      span.style.display = "none";
    }
  });
}

// TODO: ogarnac to przez AI
export function handleComments() {
  const comment = document.querySelectorAll(".ae-evaluateList-card-content");
}

// TODO: przemyslec
export function cashbackPolicy() {
  const spans = document.querySelectorAll("span");

  spans.forEach((span) => { });
}
