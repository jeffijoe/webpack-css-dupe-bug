import styles from "./ViewOne.sass";

export function ViewOne() {
  const node = document.createElement("div");
  node.innerHTML = `
    <button class="${styles.button}">
      View One (Should be Red, but is Blue)
    </button>
  `;
  return node;
}
