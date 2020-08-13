import React from "react";
import styled from "styled-components";

const ToggleButton = ({nightMode, setNightMode}) => {
  return (
      <div>
      <CheckBoxWrapper>
        <CheckBox 
        id="checkbox" 
        type="checkbox" 
        checked={nightMode}
        onChange={() => setNightMode(!nightMode)}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
      </div>

  );
};

const CheckBoxWrapper = styled.div`
  display:flex;
  flex:1 1 auto;
  justify-content:flex-end;
`;
const CheckBoxLabel = styled.label`
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #272525;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #d08e43;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #eee7ca;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
    /* &:before {
      content:'☾';
      font-size:19px;
      color:#d08e43;
      position:absolute;
    } */
  }
`;

export default ToggleButton;

