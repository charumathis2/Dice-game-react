import styled from "styled-components"
export const Button =styled.button`
    margin:0 auto;
    display:flex;
    flex-direction: column;
    background-color: black;
    color:white;
    height:44px;
    min-width:220px;
    padding: 10px 18px;
    border-radius: 5px;
    
    border: none;
    gap:10px;
    align-items:center;
    justify-content:center;
    font-size:16px;
    transition: 0.4s background ease-in;
    cursor: pointer;
    /* &--parent selector in this case, the button */
    &:hover{
      background-color:white;
      border: 1px solid black;
      color: black;
      transition: 0.3s background ease-in;
    }
`;
export const OutlineButton =styled(Button)`
background-color:white;
border: 1px solid black;
color:black;
    &:hover{
      background-color:black;
      border: 1px solid transparent;
      color: white;
    }
`;