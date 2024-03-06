/*import React,{useState} from React;

export default App(){
  const [data,setData] = useState("");
  const [isEmpty,setIsEmpty] = useState(false);
  const handleSubmit = () =>{
     if(data === ''){
           setIsEmpty(true);
     }
     else{
       //if(data )
     }
  }
  return(
    <>
      <h1>Task Two</h1>
      <p>Storing input textbox value into an array, displaying the separate Number Array and String Array Using Javascript</p>
      <br />
      <p>Task Value *</p>
      <input onChange={(e)=>{setData(e.target.value),setIsEmpty(false)}}/>
      {
        isEmpty ? <p style={{color:"red"}}>The Task Value field is required.</p> : null
      }
      <button onClick={() => handleSubmit()}>Submit</button>
    </>
  )
}*/

import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [newArray, setNewArray] = useState([]);
  const [newArray1, setNewArray1] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const handleSubmit = () => {
    if (data === "") {
      setIsEmpty(true);
    } else {
      //if(data.)
      //console.log(typeof data);
      //setNewArray([...newArray, data]);

      const parsedValue = parseInt(data, 10);

      if (!isNaN(parsedValue)) {
        setNewArray1((prevArray) => [...prevArray, parsedValue]);
      } else {
        setNewArray((prevArray) => [...prevArray, data]);
      }

      setIsEmpty(false);
      setData("");
    }
  };

  console.log(newArray);
  return (
    <>
      <h1>Task Two</h1>
      <p>
        Storing input textbox value into an array, displaying the separate
        Number Array and String Array Using Javascript
      </p>
      <br />
      <p>Task Value *</p>

      <input
        onChange={(e) => {
          setData(e.target.value), setIsEmpty(false);
        }}
        value={data}
      />

      {isEmpty ? (
        <p style={{ color: "red" }}>The Task Value field is required.</p>
      ) : (
        <>
          <br />
          <br />
        </>
      )}

      <button onClick={() => handleSubmit()}>Submit</button>

      <h1>Output Fields:</h1>

      <h2>String Array</h2>
      <ul>
        {newArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Number Array</h2>
      <ul>
        {newArray1.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
