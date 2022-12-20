import { Rpc } from "../../helpers";
import { MsgPricesData, MsgPricesDataResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    pricesData(request: MsgPricesData): Promise<MsgPricesDataResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    pricesData(request: MsgPricesData): Promise<MsgPricesDataResponse>;
}
