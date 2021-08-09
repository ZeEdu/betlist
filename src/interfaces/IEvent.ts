import { IMarket } from "./IMarket";

export interface IEvent {
  id: string;
  name: string;
  markets: IMarket[];
}
