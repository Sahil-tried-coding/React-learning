// <div id="parent">
//      <div id="child">
//          <h1>this is the heading</h1>
//      </div>
// </div>
//
//
//
//
//
//
//
//

//this is for react code

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "this is the randi heading of core react"
    ),
    React.createElement(
      "h1",
      { id: "heading" },
      "this is the randi heading of core react"
    ),
  ]),React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "this is the randi heading of core react"
    ),
    React.createElement(
      "h1",
      { id: "heading" },
      "this is the randi heading of core react"
    ),
  ])]
);
//this is totally for dom to manipulate things
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
