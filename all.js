const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

// 點擊空白處時關閉 dialog
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) { // 判斷是否點擊到 <dialog> 本身（背景區域）
    dialog.close();
  }
});