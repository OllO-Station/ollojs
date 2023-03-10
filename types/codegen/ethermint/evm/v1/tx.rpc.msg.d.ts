import { Rpc } from "../../../helpers";
import { MsgEthereumTx, MsgEthereumTxResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the evm Msg service. */
export interface Msg {
    /** EthereumTx defines a method submitting Ethereum transactions. */
    ethereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse>;
    /**
     * UpdateParams defined a governance operation for updating the x/evm module parameters.
     * The authority is hard-coded to the Cosmos SDK x/gov module account
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ethereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
