import { Rpc } from "../../../helpers";
import { MsgCreateLockRequest, MsgCreateLockResponse, MsgDepositAssetRequest, MsgDepositAssetResponse, MsgWithdrawAssetRequest, MsgWithdrawAssetResponse, MsgCloseLockRequest, MsgCloseLockResponse } from "./tx";
export interface Msg {
    msgCreateLock(request: MsgCreateLockRequest): Promise<MsgCreateLockResponse>;
    msgDepositAsset(request: MsgDepositAssetRequest): Promise<MsgDepositAssetResponse>;
    msgWithdrawAsset(request: MsgWithdrawAssetRequest): Promise<MsgWithdrawAssetResponse>;
    msgCloseLock(request: MsgCloseLockRequest): Promise<MsgCloseLockResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    msgCreateLock(request: MsgCreateLockRequest): Promise<MsgCreateLockResponse>;
    msgDepositAsset(request: MsgDepositAssetRequest): Promise<MsgDepositAssetResponse>;
    msgWithdrawAsset(request: MsgWithdrawAssetRequest): Promise<MsgWithdrawAssetResponse>;
    msgCloseLock(request: MsgCloseLockRequest): Promise<MsgCloseLockResponse>;
}
