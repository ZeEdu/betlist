import React, { FC } from "react";
import styled from "styled-components";
import { GlobalContext } from "../Context";
import { IBetListItem } from "../interfaces/IBetListItem";

const Wrapper = styled.li`
  display: flex;
  padding-bottom: 1rem;
  flex-direction: column;
  &:first-child {
    margin-top: 56px;
  }
`;

const ListItemCard = styled.div`
  text-align: center;
  p {
    margin-bottom: 0.5rem;
  }
`;
const Button = styled.button`
  margin: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  align-self: center;
  border-radius: 0.5rem;
  border: none;
  background-color: #f05454;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: #f37676;
  }
`;

type Props = {
  betItem: IBetListItem;
};

const DrawerListItem: FC<Props> = ({ betItem }) => {
  const { setBetList } = React.useContext(GlobalContext);

  const deleteBet = () => {
    setBetList((prvState) => {
      const filtered = prvState.filter(
        (bet) => bet.selection.id !== betItem.selectionId
      );
      return [...filtered];
    });
  };

  return (
    <Wrapper>
      <ListItemCard>
        <p>{betItem.name}</p>
        <p>{betItem.price}</p>
      </ListItemCard>
      <Button type="button" onClick={deleteBet}>
        Delete
      </Button>
    </Wrapper>
  );
};

export default DrawerListItem;
