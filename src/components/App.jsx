import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CeateArea";

function App() {

  const [finalData, setFinalData] = useState([]);

  function SubmitData(data){
    setFinalData((prevVal)=>{
      return [...prevVal, data]
    });
    console.log(finalData);
  }

  function DeleteData(id){
    // console.log("delete a data", id);
    setFinalData((prevVal)=>{
      return prevVal.filter((items, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea submitedata={SubmitData}/>
      {
        finalData.map((x, index)=>{
          return <Note title={x.title} content={x.content} delete={DeleteData} key={index} id={index}/>
        })
      }
      <Footer />
    </div>
  );
}

export default App;
