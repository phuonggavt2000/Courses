const root = document.querySelector("#root");
let h1React = React.createElement(
  "h1",
  {
    className: "heading",
    title: "Hello",
  },
  "Hello guys!"
);

ReactDOM.render(h1React, root);

let divReact = React.createElement(
  "div",
  {
    className: "post-item",
    style: {
      "font-size": "50px",
      color: "blue",
    },
  },
  React.createElement("h2", { title: "Học React tại F8" }, "Học ReactJs"),
  React.createElement("p", null, "Học ReactJs từ nâng cao đến cơ bản")
);

ReactDOM.render(divReact, root);
