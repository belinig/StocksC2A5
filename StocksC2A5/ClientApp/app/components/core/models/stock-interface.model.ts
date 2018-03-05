import { IState } from "./state-interface.model";
import { IId } from "./id-number-interface.model";

export interface IStock extends IState, IId
{
    symbol: string;
    exchangeAbbr: string | null;

    [key: string]: any;
}
