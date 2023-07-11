import "./chat.css";
import styled, { css } from "styled-components";
import { Button, Layout } from "antd";


const { Header, Sider, Content } = Layout;

export const ThemeVariable = css`
  margin: 0.5px;
  background-color: ${(props) => `${props.theme.bg} !important`};
  color: ${(props) => props.theme.fontColor};
`;

export const CustomHeader = styled(Header)`
  ${ThemeVariable}
  border-radius:  10px 1px 1px  10px;
 
`;



export const CustomContent = styled(Content)`
  ${ThemeVariable}
  border-radius:  10px 1px 1px  10px;
`;
export const CustomSider = styled(Sider)`
  ${ThemeVariable}
  border-radius:   1px 10px 10px  1px;
`;

export const UI = styled.div``;

export const InputSection = styled.input`
  border-radius: 15px 0px 0px 10px;
  height: 45px;
  outline: none;
  text-decoration: none;
  border-radius: 5px;
  min-width: 100%;
  padding: 5px;
  border: none;

  background-color: ${(props) => `${props.theme.inputColor} !important`};
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

export const StyledButton = styled(Button)`
  border: none;

  background-color: ${(props) => `${props.theme.LogOutBtn} !important`};
`;

export const UL = styled.ul`
  padding:0
  word-wrap: break-word;

   height: 83vh;
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

export const Input = styled.div`
  width: 700px;
`;

export const UserName = styled.div`

margin-top: 10px;
  ${({ isUser }) =>
    isUser
      ? css`
          &.user-right {
            text-align: right;
            max-width: 290px;
            inline-size: max-content;
            margin-left: auto;
            font-size: medium;
            margin-right: 34px;
          }
        `
      : css`
          &.user-left {
            text-align: left;
            inline-size: max-content;
            font-size: medium;
          }
        `}
`;

export const UserMsg = styled.div`
  ${({ isUserSender }) =>
    isUserSender
      ? css`
          &.message-right {
            border-radius: 10px 10px 0 10px;
            background: rgb(255, 250, 250);
            width: min-content;
            box-shadow: rgb(0 0 0 / 25%) 0px 2px 5px 2px;
            padding: 10px;
            background-color: ${(props) =>
              `${props.theme.Primary} !important`};

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
            background-color: ${(props) => `${props.theme.Secondary} !important`};

            box-shadow: rgb(0 0 0 / 25%) 0px 5px 5px 2px;
            overflow: hidden;
            max-width: 290px;
            inline-size: max-content;
        `}
`;

export const ChatHead = styled.div`
  display: flex;
`;

