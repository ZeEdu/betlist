import { ISelection } from "./ISelection";

export interface IMarket {
  id: string;
  name: string;
  selections: ISelection[];
}
