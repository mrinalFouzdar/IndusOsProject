import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Div = styled.div`
width:auto ;
height:5em ;
background-color:black ;
display:flex ;
align-items:center ;
padding-left:30px;
div{
    width:500px ;
    display:flex ;
    justify-content:space-around;
}
`
const LINK = styled(Link)`
    text-decoration:none ;
    color:red ;
    font-family: "Soehne web buch", sans-serif;
    font-size: large;
    font-weight:bolder;

`
export default function Navbar() {
  return (
    <Div>
        <div>
        <LINK to="/">Home</LINK>
        <LINK to="/list">List</LINK>
        </div>
    </Div>
  )
}
