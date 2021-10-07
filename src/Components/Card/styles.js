import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  font-weight: 500;
  line-height: 20px;
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  ${(props) =>
    props.isDragging &&
    css`
      border: dashed 1px rgba(0, 0, 0, 0.2);
      padding-top: 31px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;

      p,
      img,
      header {
        opacity: 0;
      }
    `}
`;
export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${(props) => props.color};
  display: inline-block;
`;
