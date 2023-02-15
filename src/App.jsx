import React from "react";
import "./App.css";

const App = () => {
  const name = "Rikir";
  const arr = ["a", "b", "c", "d"];
  const info = () => {
    console.log("this is function");
  };
  // info();

  return (
    <>
      {arr.map((item) => (
        <div className="card">
          <img src="https://i.imgur.com/bGuWlhS.png" alt="" width = "200px" />
          <h1 className="heading">Card Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aut esse quas quasi commodi enim adipisci aperiam, fugiat
            distinctio. Qui, nostrum quo facilis ut recusandae id porro
            explicabo asperiores assumenda.
          </p>
        </div>
      ))}
    </>
  );
};

export default App;
