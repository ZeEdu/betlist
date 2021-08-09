import { FC } from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;
const Line = styled.div`
  width: 30px;
  height: 2px;
  background: white;
`;

type Props = {
  handleClick: () => void;
};

const DrawerToggleButton: FC<Props> = ({ handleClick }) => {
  return (
    <Button onClick={handleClick}>
      <Line />
      <Line />
      <Line />
    </Button>
  );
};

export default DrawerToggleButton;
