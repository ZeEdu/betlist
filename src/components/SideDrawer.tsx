import React from "react";
import { FC } from "react";
import styled, { css } from "styled-components";
import { GlobalContext } from "../Context";
import { IBetInfo } from "../interfaces/IBetInfo";
import { IBetListItem } from "../interfaces/IBetListItem";
import { IEvent } from "../interfaces/IEvent";
import DrawerListItem from "./DrawerListItem";

type DrawerProps = {
  open: boolean;
};

const Drawer = styled.div<DrawerProps>`
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 350px;
  z-index: 400;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  background: rgba(10, 11, 14, 0.25);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 0 10px 10px 0;
  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `}
`;

const List = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

type Props = {
  show: boolean;
  eventList: IEvent[];
};

const SideDrawer: FC<Props> = ({ show, eventList }) => {
  const { betList } = React.useContext(GlobalContext);

  const createBetListItem = (betItem: IBetInfo): IBetListItem | undefined => {
    // Selection Name e Market Name
    const marketName = getMarketName(betItem.marketId, betItem.eventId);
    if (marketName) {
      return {
        name: `${marketName}: ${betItem.selection.name}`,
        price: betItem.selection.price,
        eventId: betItem.eventId,
        marketId: betItem.marketId,
        selectionId: betItem.selection.id,
      };
    }
  };

  const getEvent = (eventId: string) => {
    const findEvent = eventList.find((event) => event.id === eventId);
    return findEvent;
  };

  const getMarketName = (marketId: string, eventId: string) => {
    const event = getEvent(eventId);
    if (!event) return;
    const market = event.markets.find((market) => market.id === marketId);
    if (market) return market.name;
    return;
  };

  return (
    <Drawer open={show}>
      <List>
        {betList &&
          betList.map((bet, index) => {
            const betItem = createBetListItem(bet);
            if (betItem) {
              return <DrawerListItem key={index} betItem={betItem} />;
            }
            return null;
          })}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
