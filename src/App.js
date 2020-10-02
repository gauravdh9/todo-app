import React from "react";
import Input from "./Components/Input";
const data = [
  {
    link: "https://github.com/gauravdh9",
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
      <div class="text-center text-6xl leading-none tracking-tight" style={{fontFamily:"SF Collegiate"}}>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
          MY TODO APP
        </span>
      </div>
      {data.map((item) => (
        <a href={item.link}>
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
