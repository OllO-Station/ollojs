import { Rpc } from "../../../helpers";
import { MsgCreateRequest, MsgCreateResponse, MsgDepositRequest, MsgDepositResponse, MsgWithdrawRequest, MsgWithdrawResponse, MsgDrawRequest, MsgDrawResponse, MsgRepayRequest, MsgRepayResponse, MsgCloseRequest, MsgCloseResponse } from "./tx";
export interface Msg {
    msgCreate(request: MsgCreateRequest): Promise<MsgCreateResponse>;
    msgDeposit(request: MsgDepositRequest): Promise<MsgDepositResponse>;
    msgWithdraw(request: MsgWithdrawRequest): Promise<MsgWithdrawResponse>;
    msgDraw(request: MsgDrawRequest): Promise<MsgDrawResponse>;
    msgRepay(request: MsgRepayRequest): Promise<MsgRepayResponse>;
    msgClose(request: MsgCloseRequest): Promise<MsgCloseResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    msgCreate(request: MsgCreateRequest): Promise<MsgCreateResponse>;
    msgDeposit(request: MsgDepositRequest): Promise<MsgDepositResponse>;
    msgWithdraw(request: MsgWithdrawRequest): Promise<MsgWithdrawResponse>;
    msgDraw(request: MsgDrawRequest): Promise<MsgDrawResponse>;
    msgRepay(request: MsgRepayRequest): Promise<MsgRepayResponse>;
    msgClose(request: MsgCloseRequest): Promise<MsgCloseResponse>;
}
