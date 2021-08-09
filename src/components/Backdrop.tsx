import React, { FC } from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

type Props = {
  handleClick: () => void;
};

const Backdrop: FC<Props> = ({ handleClick }) => (
  <Background onClick={handleClick} />
);

export default Backdrop;
