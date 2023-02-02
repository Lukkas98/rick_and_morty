import styled, { keyframes } from "styled-components";
import { useState } from "react";
import validate from "./Validate.js";
import img from "../assets/Rick and Morty.jfif"

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(45deg);
  }
  66% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

 
const Div = styled.div`
    display: flex;
    justify-content: center;
`
const Formu = styled.form`
    display: flex;
    background-color: #219991e3;
    flex-direction: column;
    align-items: center;
    width: 450px;
    height: 600px;
    justify-content: center;
    margin-top: 30px;
    border-radius: 15px; 
    box-shadow: 1px -2px 20px 0px #bb7005;
    transition: all 3s;
    &:hover{
        background-color: #245991e3;
        box-shadow: 1px -2px 20px 0px #219991;
    }
`

const Label = styled.label`
    margin: 15px;
    font-weight: 600;
}
`
const Input = styled.input`
    background-color: #f5deb3;
    border-radius: 5px;
    padding: 8px;
    border: none;
    font-size: 15px;
    transition: all 1.5s;
    &:focus{
        outline: none;
        background-color: #f2ff9c;
    }
`
const Button = styled.button`
    box-shadow: -2px 2px 5px 0px #000000;
    border-radius: 5px;
    padding: 5px;
    width: 70px;
    margin-top: 25px;
    border: none;
    background-color: #f5deb3;
    transition: all 1s;
    &:hover{
        background-color: #000000;
        color: white;
        box-shadow: -2px 2px 5px 0px #f5deb3;
    }
`
const Img = styled.img`
    width: 200px;
    border-radius: 95px;
    box-shadow: 1px -5px 6px 0px #ffe72c;
    margin-bottom: 45px;
    animation: ${animation} 4s infinite;
    // transition: all 2s;
    // &:hover{
    //     transform: rotate(360deg);
    // }
`
const Error = styled.p`
    width: 280px;
    text-align: center;
    color: #f35959;
    font-weight: bold;
    font-size: 16px;
    margin: 5px 0 0 0;
`


export default function Form({ login }){
    const [userData, setUserData] = useState({
        username: '',
        password: '' 
    });

    const [ errors, setErrors ] = useState({
        username: '',
        password: '' 
    });

    const handleInputChange = (e)=>{
        setUserData({
           ...userData,
           [e.target.name] : e.target.value
        })
        setErrors((validate(userData)));
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData);
    }
    
    
    return(
        <Div>
            <Formu onSubmit={handleSubmit} >
                <Img src={img} alt="Rick and Morty" />
                <Label>Name:</Label>
                <Input type="text" name="username" value={userData.username} onChange={handleInputChange} placeholder="lucas@gmail.com"autoComplete="off"/>
                { errors.username && <Error>{errors.username}</Error> }
                <Label>Password:</Label>
                <Input type="password" name="password" value={userData.password} onChange={handleInputChange} placeholder="1password" autoComplete="off" />
                { errors.password && <Error>{errors.password}</Error> }
                <Button type="submit" >Send</Button>
            </Formu>
        </Div>
    );
}