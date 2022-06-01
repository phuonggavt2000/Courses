function start({ content, title, desc }) {
  var main = document.querySelector("#toast");
  if (main) {
    var toasts = document.createElement("div");
    var icons = {
      success: "fa-circle-check",
      error: "fa-circle-exclamatio",
      info: "fa-circle-info",
    };
    toasts.classList.add("toast", `toast--${content}`);
    toasts.innerHTML = `
      <div class="toast__check">
        <i class="fa-solid fa-circle-check"></i>
      </div>

      <div class="toast__body">
        <h3 class="toast__tittle">${title}</h3>
        <p class="toast__desc">${desc}</p>
      </div>

      <div class="toast__close">
        <i class="fa-solid fa-xmark"></i>
      </div> 
      `;

    main.appendChild(toasts);
  }
}

function clickSuccess() {
    start({
  content: "success",
  title: "Success",
  desc: "Bạn đã thành công chúc mừng bạn!",
});

}

function clickError() {
    start({
        content: "info",
        title: "info",
        desc: "Bạn đã thành công chúc mừng bạn!",
      });
}

function clickInfo() {
    start({
        content: "info",
        title: "info",
        desc: "Bạn đã thành công chúc mừng bạn!",
      });
}

