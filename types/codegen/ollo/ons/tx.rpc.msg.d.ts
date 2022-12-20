import { Rpc } from "../../helpers";
import { MsgBuyName, MsgBuyNameResponse, MsgSellName, MsgSellNameResponse, MsgSetName, MsgSetNameResponse, MsgDeleteName, MsgDeleteNameResponse, MsgAddThread, MsgAddThreadResponse, MsgDeleteThread, MsgDeleteThreadResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    buyName(request: MsgBuyName): Promise<MsgBuyNameResponse>;
    sellName(request: MsgSellName): Promise<MsgSellNameResponse>;
    setName(request: MsgSetName): Promise<MsgSetNameResponse>;
    deleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse>;
    addThread(request: MsgAddThread): Promise<MsgAddThreadResponse>;
    deleteThread(request: MsgDeleteThread): Promise<MsgDeleteThreadResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    buyName(request: MsgBuyName): Promise<MsgBuyNameResponse>;
    sellName(request: MsgSellName): Promise<MsgSellNameResponse>;
    setName(request: MsgSetName): Promise<MsgSetNameResponse>;
    deleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse>;
    addThread(request: MsgAddThread): Promise<MsgAddThreadResponse>;
    deleteThread(request: MsgDeleteThread): Promise<MsgDeleteThreadResponse>;
}
