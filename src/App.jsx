import React from "react";
import Navbar from "./Navbar";
import Quote from "./Quote";
import Form from "./Form";
import ListGroup from "./ListGroup";


const App = () => {
  return (
    <>
      <Navbar />
      <Quote />
      <div className="container p-5">
         <Form/>
        <ListGroup />
      </div>
    </>
  );
};

export default App;