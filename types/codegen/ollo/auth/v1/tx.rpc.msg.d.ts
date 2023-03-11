import { Rpc } from "../../../helpers";
import { MsgRegisterAccount, MsgRegisterAccountResponse, MsgSubmitTx, MsgSubmitTxResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** RegisterAccount registers an interchain account on host chain with given `connectionId` */
    registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
    /** SubmitTx submits a transaction to the host chain on behalf of interchain account */
    submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
    submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
}
