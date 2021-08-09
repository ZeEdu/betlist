import React, { FC } from "react";
import styled, { css } from "styled-components";
import { GlobalContext } from "../Context";
import { IBetInfo } from "../interfaces/IBetInfo";
import { ISelection } from "../interfaces/ISelection";

type WrapperTypes = {
  isSelected: boolean;
};

const Wrapper = styled.div<WrapperTypes>`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
  /* flex-wrap: wrap; */
  &:hover {
    cursor: pointer;
  }
  &:first-child {
    /* padding-left: 8px; */
    margin-left: 8px;
  }
  &:last-child {
    /* padding-right: 8px; */
    margin-right: 8px;
  }
  @media (min-width: 420px) {
    max-width: 360px;
    padding: 0.5rem 3rem;
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      background: #f05454;
      color: #ddd;
    `}
`;

interface Props {
  selection: ISelection;
  eventId: string;
  marketId: string;
}
const Selection: FC<Props> = ({ selection, eventId, marketId }) => {
  const { betList, setBetList } = React.useContext(GlobalContext);
  const handleClick = (): void => {
    const newBet: IBetInfo = {
      selection,
      eventId,
      marketId,
    };

    setBetList((prvState) => {
      const filteredState = prvState.filter((bet) => bet.marketId !== marketId);
      return [...filteredState, newBet];
    });
  };

  const isBetSelected = (): boolean => {
    const findResult = betList.find((bet) => bet.selection.id === selection.id);
    if (findResult) return true;
    return false;
  };

  return (
    <Wrapper onClick={handleClick} isSelected={isBetSelected()}>
      <p>{selection.name}</p>
      <p>{selection.price}</p>
    </Wrapper>
  );
};

export default Selection;
