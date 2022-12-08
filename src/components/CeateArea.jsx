import React from "react";
import { useState } from "react";

function CreateArea(props) {

  const [data, setData] = useState({
    title: "",
    content: ""
  }) ;

  function HandleChange(events){
    const {name, value}  = events.target;
 
    setData((prevValue)=>{
      return {...prevValue, [name]: value}
    }) 
  }

  function SubmitNote(e){
    props.submitedata(data);
    setData({
      title: "",
      content: ""
    });
    e.preventDefault();
  }


  return (
    <div>
      <form >
        <input name="title" value={data.title} placeholder="Title" onChange={HandleChange}/>
        <textarea name="content" value={data.content} placeholder="Take a note..." rows="3" onChange={HandleChange}/>
        <button onClick={SubmitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
