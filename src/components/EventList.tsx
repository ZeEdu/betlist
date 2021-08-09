import { FC } from "react";
import { IEvent } from "../interfaces/IEvent";
import EventItem from "./EventItem";

interface Props {
  events: IEvent[];
}

const EventList: FC<Props> = ({ events }) => {
  return (
    <>
      {events.map((event) => {
        if (event.markets.length <= 0) return null;
        return <EventItem key={event.id} event={event} />;
      })}
    </>
  );
};

export default EventList;
