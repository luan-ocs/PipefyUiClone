import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: calc(25vh - 50px);
  left: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 500px;
  z-index: 2;
  background: var(--primary-color);
  border: 1px solid rgba(0,0,0,0.2);
  align-items: center;
  border-radius: 15px;
  padding: 15px;
  > form {
      display: flex;
      flex-direction: column;
      align-items: center;
    > input {
      border: solid 1px var(--secondary-color);
      margin-top: 10px;
      margin-bottom: 15px;
      width: 300px;
      outline: 0;
      padding: 5px;
      border-radius: 10px;
    }
    > input#TaskColor {
        width: 25px;
        height: 25px;
        border: 0;
        outline: 0;
    }
  }
`;
export const CloseButton = styled.button`
  > svg {
    width: 15px;
    height: 15px;
  }
  &:hover {
    cursor: pointer;
    svg {
        fill: red;
    }
  }
  position: absolute;
  right: 10px;
  top: 5px;
  outline: 0;
  border: 0;
  background: transparent;

`;
export const Button = styled.button`
    display: block;
    width: 200px;
    background: var(--secondary-color);
    color: var(list-colors);
    padding: 10px;
    border: 0;
    outline: 0;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        background: #1A913C;;
    }
`;
