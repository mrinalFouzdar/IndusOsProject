import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
const Div = styled.div`
margin-top:50px;
position:relative ;
.inputbox{
  margin:10px ;
  width: auto;
  height:auto ;
  border: 1px solid red ;
  border-radius: 2px ;
  font-size:20px ;
  resize: none;
  resize: vertical;
}


.inputbox:hover{
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;  
  -moz-box-shadow:  3px 3px 5px 6px #ccc;  
    box-shadow: 3px 3px 5px 6px #ccc;
    border-color:red ;
}

.inputbox:focus{
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;  
  -moz-box-shadow:  3px 3px 5px 6px #ccc;  
    box-shadow: 3px 3px 5px 6px #ccc;
    border-color:red ;
}

.inputbox::-webkit-scrollbar{
    width:4px ;
}

.inputbox::-webkit-scrollbar-track{
  --webkit--bx-shadow:inset 0 0 10px blue;
}

.inputbox::-webkit-scrollbar-thumb{
  width: 3px;
  background-color:red ;
}

.button{
  position: absolute;
    top: 20px;
    right: 30em;
    color: white;
    background-color: black;
    padding: 10px;
    border: none;
    border-radius: 10%;
    cursor: pointer;
    font-size: 16px;

}
.button:hover{
  box-shadow: 3px 3px 5px 6px #ccc;

}

`


export default function Emojis() {
    const obj ={
        sad:"😭",
        happy:"😃",
        smiley:"😄"
    }
    const [text,setText]=useState("")
    const [show,setShow]=useState("")
    const navigate = useNavigate()
    
    const handleadd=(e)=>{
        setText(e.target.value)
        const a =  text.split(" ").map(word => obj[word.toLowerCase()]|| word).join(" ")
        setShow(a)
    }

    const PostData = ()=>{
      fetch(`/user`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data:show
        })
      })
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>console.log(err))
      .finally(()=>{
        setText("")
        navigate("/list");
    }

      )
    }
  return (
    <Div>
        <textarea type="text" onInput={(e)=>handleadd(e)}  value={text} className="inputbox" rows={6} cols={30}></textarea>
       <button onClick={PostData} className="button">Submit</button>
        <h1>{show}</h1> 
    </Div>
  )
}
