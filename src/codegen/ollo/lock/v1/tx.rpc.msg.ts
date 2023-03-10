import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateLockRequest, MsgCreateLockResponse, MsgDepositAssetRequest, MsgDepositAssetResponse, MsgWithdrawAssetRequest, MsgWithdrawAssetResponse, MsgCloseLockRequest, MsgCloseLockResponse } from "./tx";
export interface Msg {
  msgCreateLock(request: MsgCreateLockRequest): Promise<MsgCreateLockResponse>;
  msgDepositAsset(request: MsgDepositAssetRequest): Promise<MsgDepositAssetResponse>;
  msgWithdrawAsset(request: MsgWithdrawAssetRequest): Promise<MsgWithdrawAssetResponse>;
  msgCloseLock(request: MsgCloseLockRequest): Promise<MsgCloseLockResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.msgCreateLock = this.msgCreateLock.bind(this);
    this.msgDepositAsset = this.msgDepositAsset.bind(this);
    this.msgWithdrawAsset = this.msgWithdrawAsset.bind(this);
    this.msgCloseLock = this.msgCloseLock.bind(this);
  }

  msgCreateLock(request: MsgCreateLockRequest): Promise<MsgCreateLockResponse> {
    const data = MsgCreateLockRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.lock.v1.Msg", "MsgCreateLock", data);
    return promise.then(data => MsgCreateLockResponse.decode(new _m0.Reader(data)));
  }

  msgDepositAsset(request: MsgDepositAssetRequest): Promise<MsgDepositAssetResponse> {
    const data = MsgDepositAssetRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.lock.v1.Msg", "MsgDepositAsset", data);
    return promise.then(data => MsgDepositAssetResponse.decode(new _m0.Reader(data)));
  }

  msgWithdrawAsset(request: MsgWithdrawAssetRequest): Promise<MsgWithdrawAssetResponse> {
    const data = MsgWithdrawAssetRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.lock.v1.Msg", "MsgWithdrawAsset", data);
    return promise.then(data => MsgWithdrawAssetResponse.decode(new _m0.Reader(data)));
  }

  msgCloseLock(request: MsgCloseLockRequest): Promise<MsgCloseLockResponse> {
    const data = MsgCloseLockRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.lock.v1.Msg", "MsgCloseLock", data);
    return promise.then(data => MsgCloseLockResponse.decode(new _m0.Reader(data)));
  }

}