import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Backdrop from "./components/Backdrop";
import EventList from "./components/EventList";
import Header from "./components/Header";
import SideDrawer from "./components/SideDrawer";
import { GlobalStorage } from "./Context";
import { IEvent } from "./interfaces/IEvent";
import { ContainerMixin } from "./styledComponents/Mixins";

type ResponseType = IEvent[];

export const Container = styled.main`
  /* ${ContainerMixin} */
  width: 100%;
  padding: 0 16px;
  margin: auto;
  @media (min-width: 576px) {
    max-width: 376px;
  }
  @media (min-width: 768px) {
    max-width: 568px;
  }
`;

function App() {
  const [activeDrawer, setActiveDrawer] = useState<boolean>(false);
  const [eventList, setEventList] = useState<IEvent[]>([]);
  const [betList, setBetList] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleActiveDrawer = () => {
    setActiveDrawer((prvState) => !prvState);
  };

  const handleBackdropClick = () => {
    setActiveDrawer(false);
  };

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      setError(null);
      fetch("http://www.mocky.io/v2/59f08692310000b4130e9f71")
        .then((res) => res.json())
        .then((json: ResponseType) => setEventList([...json]))
        .catch((err) => {
          console.error(err);
          setError("Something Went Wrong");
        })
        .finally(() => setLoading(false));
    }
    fetchEvents();
  }, []);

  // if (error) return <p>{error}</p>;
  // if (loading) return <p>Carregando...</p>;

  return (
    <GlobalStorage>
      <Header handleClick={handleActiveDrawer} />
      {activeDrawer && <Backdrop handleClick={handleBackdropClick} />}
      <SideDrawer show={activeDrawer} eventList={eventList} />
      <Container>
        <EventList events={eventList} />
      </Container>
    </GlobalStorage>
  );
}

export default App;
