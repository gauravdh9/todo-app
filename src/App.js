import React from "react";
import Input from "./Components/Input";
const data = [
  {
    link: "https://github.com/gauravdh9/todo-app",
    css: {
      position: "fixed",
      top: 0,
      left: 0,
    },
  },
];
const App = () => {
  return (
    <div className="flex flex-col text-center w-full bg-red-500 p-8">
      <div className="text-center text-6xl leading-none tracking-tight fonts">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
          MY TODO APP
        </span>
      </div>
      {data.map((item, index) => (
        <a href={item.link} key={index}>
          <img
            src={require("./Images/github-corner-left.svg")}
            style={item.css}
            alt="Fork me on GitHub"
          />
        </a>
      ))}
      <Input />
    </div>
  );
};
export default App;
