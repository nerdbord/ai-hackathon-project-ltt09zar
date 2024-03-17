import { phrases } from "./constants";

export function handleShowSales() {
  const popupAd: HTMLElement | null = document.querySelector(
    ".drogue-poplayer-modal"
  );
  const banner: HTMLElement | null = document.querySelector(
    '[data-spm="sale_pc_top_banner"]'
  );
  const annual = document.querySelectorAll('[class^="rc-modules--img"]');
  const spans = document.querySelectorAll("span");
  const rc_modules = document.querySelectorAll('[class^="rc-modules--text"]');
  const base_card_discount = document.querySelectorAll('[class^="base-card--discount"]')
  const row: HTMLElement | null = document.querySelector('div[data-component-id="5801448"]');
  const top_img: HTMLElement | null = document.querySelector('.pc2023-site-info--site-image--kWOv6EV');
  const choice: HTMLElement | null = document.querySelector('.af2023-choice-slider--titleWrap--2ozVNsy');

  if (row) {
    row.style.setProperty('display', 'block', 'important');
  }
  if (top_img) {
    top_img.style.setProperty('display', 'block', 'important');
  }
  if (choice) {
    choice.style.setProperty('display', 'block', 'important');
  }

  if (annual) {
    annual.forEach((element) => {
      (element as HTMLElement).style.display = "block";
    });
  }
  if (popupAd) {
    popupAd.style.display = "block";
  }
  if (banner) {
    banner.style.display = "block";
  }

  spans.forEach((element) => {
    const text = element?.textContent?.trim();
    if (text?.includes("Extra") && text?.includes("% off with coins")) {
      element.style.display = "block";
    }
  });

  annual.forEach((element) => {
    (element as HTMLElement).style.display = "block";
  });
  rc_modules.forEach((element) => {
    (element as HTMLElement).style.display = "block";
  });
  base_card_discount.forEach((element) => {
    (element as HTMLElement).style.display = "block";
  });
}

export function handleShowShipping() {
  const spans = document.querySelectorAll("span");

  spans.forEach((span) => {
    const text = span?.textContent?.trim().toLowerCase();
    if (phrases.some((phrase) => text?.includes(phrase.toLowerCase()))) {
      span.style.display = "block";
    }
  });
}
