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
