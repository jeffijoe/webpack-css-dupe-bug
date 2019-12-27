import styles from "./ViewTwo.sass";

export function ViewTwo() {
  const node = document.createElement("div");
  node.innerHTML = `
    <button class="${styles.button}">
      View Two (Green)
    </button>
  `;
  return node;
}
