import { phrases } from "./constants";

export function handleHideSales() {
  const popupAd: HTMLElement | null = document.querySelector(
    ".drogue-poplayer-modal"
  );
  const banner: HTMLElement | null = document.querySelector(
    '[data-spm="sale_pc_top_banner"]'
  );
  // const vertical_big_card: HTMLElement | null = document.querySelector(
  //   '[class^="vertical-big-card"]'
  // );
  // const horizontal_big_card: HTMLElement | null = document.querySelector(
  //   '[class^="horizontal-big-card"]'
  // );
  // const horizontal_small_card: HTMLElement | null = document.querySelector(
  //   '[class^="horizontal-small-card"]'
  // );
  // const vertical_normal_card: HTMLElement | null = document.querySelector(
  //   '[class^="vertical-normal-card"]'
  // );
  const annual = document.querySelectorAll('[class^="rc-modules--img"]');
  const spans = document.querySelectorAll("span");
  const rc_modules = document.querySelectorAll('[class^="rc-modules--text"]');
  const base_card_discount = document.querySelectorAll(
    '[class^="base-card--discount"]'
  );

  // if (vertical_big_card) {
  //   vertical_big_card.style.display = "none";
  // }
  // if (horizontal_big_card) {
  //   horizontal_big_card.style.display = "none";
  // }
  // if (horizontal_small_card) {
  //   horizontal_small_card.style.display = "none";
  // }
  // if (vertical_normal_card) {
  //   vertical_normal_card.style.display = "none";
  // }

  if (annual) {
    annual.forEach((element) => {
      (element as HTMLElement).style.display = "none";
    });
  }
  if (popupAd) {
    popupAd.style.display = "none";
  }
  if (banner) {
    banner.style.display = "none";
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

  spans.forEach((span) => {});
}
