import styled from "styled-components";

export const ToolTipContainer = styled.div`
  display: flex;
 position: relative;
    
    &:hover span {
    visibility: visible;
    }
`;


export const ToolTipText = styled.span`
visibility: hidden;
  
  background-color: ${({ theme }) => theme.colors["grey-800"]};
  min-width: max-content;
  overflow-wrap: break-word;


  color: ${({ theme }) => theme.colors["text-base"]};
  text-align: center;

  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
   &:after {
 
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent
  }
   
`;