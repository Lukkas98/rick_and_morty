import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const AlertBox = styled.div`
    animation: animation 1.5s ease-in-out;
    z-index: 101;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffeb40bf;
    padding: 20px;
    outline: 1px solid black;
    box-shadow: rgb(51 51 51) 2px 2px 5px;
    border-radius: 35px;

    @keyframes animation{
        0% {
            transform: translate(-50%, -250%);
        }
        70%{
            transform: translate(-50%, -50%);
        }
        80% {
            transform: translate(-45%, -50%);
        }
        90%{
            transform: translate(-55%, -50%);
        }
        100%{
            transform: translate(-50%, -50%);
        }
    }
`;

const Button = styled.button`
    display: block;
    margin: 0px auto;
    padding: 5px 15px;
    color: black;
    border: 1px solid black;
    background-color: #e84747;
    font-weight: 800;
    font-size: 15px;
    transition: all 1s;
    &:hover{
        background-color: #fea9a9;
    }
`;

const P = styled.p`
    text-align: center;
    font-weight: 700;
    color: #c70000;
    text-shadow: 1px 2px 3px #ffffff;
    font-variant: small-caps;
    font-size: 20px;
    textAlign: center;
`

export default function CustomAlert({ text, showAlert }) {
    return  (
      <>
        <Overlay />
        <AlertBox>
          <P>{text}</P>
          <Button onClick={() => showAlert(false) }>OK</Button>
        </AlertBox>
      </>
    );
};

