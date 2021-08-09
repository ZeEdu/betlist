import { css } from "styled-components";

export const TitleMixin = () => css`
  font-size: 1rem;
`;

export const ContainerMixin = () => css`
  width: 100%;
  padding: 0 16px;
  margin: auto;
  @media (min-width: 576px) {
    max-width: 376px;
  }
  @media (min-width: 768px) {
    max-width: 568px;
  }
  @media (min-width: 992px) {
    max-width: 792px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
  @media (min-width: 1400px) {
    max-width: 1200px;
  }
`;
