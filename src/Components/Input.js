import React, { useState, useEffect } from "react";
import Listcomponent from "./Listcomponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import gsap from "gsap";
const List = styled.div`
  border-radius: 20px;
  ${List}::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    margin-left:10px;
  }
  ${List}::-webkit-scrollbar-thumb {
    background: linear-gradient(to right, #141e30, #243b55);
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }
  ${List}::-webkit-scrollbar-track {
    // background: linear-gradient(
    //   90deg,
    //   #201c29,
    //   #201c29 1px,
    //   #17141d 0,
    //   #17141d
    // );
  }
`;
const Input = () => {
  let m;
  const [data, setData] = useState([]);
  const [string, setString] = useState("");
  useEffect(() => {
    gsap.fromTo(
      ".Form",
      { opacity: 0, yPercent: -100 },
      { opacity: 1, yPercent: 0, duration: 1.5, ease: "Power2.out" }
    );
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (string == "") {
      toast("Add atleast one task ");
      return;
    }
    m = [...data];
    m.unshift(string);
    setData(m);
    setString("");
  };
  return (
    <div className="flex flex-col items-center w-full h-full">
      <form
        className="Form m-4 flex justify-center md:w-1/3 w-4/5"
        onSubmit={(e) => handleSubmit(e)}
        style={{ marginTop: 50 }}
      >
        <input
          className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-2/3 outline-none"
          placeholder="New Task"
          value={string}
          autoFocus
          onChange={(e) => {
            setString(e.target.value);
          }}
        />
        <button
          className="flex px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r w-1/3 text-xs md:text-lg"
          type="submit"
          style={{ minWidth: "100px" }}
        >
          ➕ Add Task{" "}
        </button>
      </form>

      {data.length !== 0 ? (
        <List className="flex flex-col bg-blue-200 p-4 m-10 mx-auto max-h-full justify-evenly items-center w-4/5 md:w-1/3 shadow-2xl">
          {data.map((item, index) => (
            <Listcomponent
              data={item}
              key={index}
              onClick={() => {
                var x = [...data];
                x.splice(index, 1);
                setData(x);
              }}
            />
          ))}
        </List>
      ) : null}
      <ToastContainer position={"top-center"} type="dark" />
    </div>
  );
};

export default Input;
