export function filterComments() {
const comment: HTMLElement[] = Array.from(document.querySelectorAll(".ae-evaluateList-box"));

const comment_text: HTMLElement[] = Array.from(document.querySelectorAll(
    ".ae-evaluateList-card-content"
));

comment_text?.forEach((element: HTMLElement, index) => {
    const words = element.innerText.split(" ");
    if (words.length <= 3) {
        comment[index].style.display = "none";
    }
});


}
