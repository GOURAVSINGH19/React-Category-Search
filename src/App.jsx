import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./component/Home";
import Details from "./component/Details";
function App() {
  return (
    <>
      <div className="w-full h-screen flex">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/details/:id" element={<Details/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
