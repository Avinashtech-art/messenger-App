
import "./chat.css";
import styled, { css } from "styled-components";

export const UI = styled.div`

`;

export const InputSection = styled.input`

  border-radius: 15px 0px 0px 10px;
  height: 40px;
  outline: none;
  text-decoration: none;
  border-radius: 5px;
  min-width: 100%;
  padding: 5px;
  border: none;
  background-color: #b4b9c0fd;
`;

export const SendBtn = styled.button`
  border: none;
  height: 39px;
  background-color: #135faf;
  color: rgb(15, 15, 15);
  border-radius: 16px;
  padding: 5px 10px;
  cursor: pointer;

  margin: 4px;
`;

export const UL = styled.ul`
  padding:0
  word-wrap: break-word;

  height: 602px;
  overflow-y: scroll;

  
`;

export const MessageContainer = styled.div`
 
  margin-bottom: 10px;
  max-width: 100%;
  word-wrap: break-word;
  display: flex;
`;

export const FormContainer = styled.div`
  display: flex;


  padding-left: 19px;
`;

export const Input =styled.div`
width: 700px;`



 export const UserName = styled.div`

  ${({ isUser,isDarkTheme }) =>
    isUser
      ? css`
          &.user-right {
            text-align: right;
            max-width: 290px;
            inline-size: max-content;
            margin-left: auto;
            font-size: medium;
            margin-right: 34px;
          color: ${props => (isDarkTheme ? `black` : `white`)};
          }
        `
      : css`
          &.user-left {
            text-align: left;
            inline-size: max-content;
            font-size: medium;
             color: ${props => (isDarkTheme ? `black` : `white`)};
          }
          
        `
        
      }
`




export const UserMsg = styled.div`

  ${({ isUserSender }) =>
  isUserSender
      ? css`
          &.message-right{
            
            border-radius: 10px 10px 0 10px;
            background: rgb(255, 250, 250);
            width: min-content;
            box-shadow: rgb(0 0 0 / 25%) 0px 2px 5px 2px;
            padding: 10px;
            margin-left: auto;
            overflow: hidden;
            max-width: 290px;
            inline-size: max-content;
          }
        `
      : css`
          &.message-left{
            border-radius: 0 10px 10px 10px;
            background: rgb(255, 255, 255);
            background: linear-gradient(
              90deg,
              rgb(34, 162, 231) 100%,n
              rgb(34, 162, 231) 100%,
              rgb(34, 162, 231) 100%,
              rgb(34, 162, 231) 100%
            );
            padding: 10px;
            width: min-content;
            color: #0c0b0b;
            box-shadow: rgb(0 0 0 / 25%) 0px 5px 5px 2px;
            overflow: hidden;
            max-width: 290px;
            inline-size: max-content;
        `}
        
`


export const ChatHead =styled.div`
display: flex;`


