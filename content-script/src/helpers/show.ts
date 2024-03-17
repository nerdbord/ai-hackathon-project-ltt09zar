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
  // const vertical_big_card: HTMLElement | null = document.querySelector(
  //   '[class^="vertical-big-card"]'
  // );
  // const horizontal_big_card: HTMLElement | null = document.querySelector(
  //   '["class^="horizontal-big-card"]'
  // );
  // const horizontal_small_card: HTMLElement | null = document.querySelector(
  //   '["class^="horizontal-small-card"]'
  // );
  // const vertical_normal_card: HTMLElement | null = document.querySelector(
  //   '["class^="vertical-normal-card"]'
  // );

  // if (vertical_big_card) {
  //   vertical_big_card.style.display = "block";
  // }
  // if (horizontal_big_card) {
  //   horizontal_big_card.style.display = "block";
  // }
  // if (horizontal_small_card) {
  //   horizontal_small_card.style.display = "block";
  // }
  // if (vertical_normal_card) {
  //   vertical_normal_card.style.display = "block";
  // }




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
