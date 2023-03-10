import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateRequest, MsgCreateResponse, MsgDepositRequest, MsgDepositResponse, MsgWithdrawRequest, MsgWithdrawResponse, MsgDrawRequest, MsgDrawResponse, MsgRepayRequest, MsgRepayResponse, MsgCloseRequest, MsgCloseResponse } from "./tx";
export interface Msg {
  msgCreate(request: MsgCreateRequest): Promise<MsgCreateResponse>;
  msgDeposit(request: MsgDepositRequest): Promise<MsgDepositResponse>;
  msgWithdraw(request: MsgWithdrawRequest): Promise<MsgWithdrawResponse>;
  msgDraw(request: MsgDrawRequest): Promise<MsgDrawResponse>;
  msgRepay(request: MsgRepayRequest): Promise<MsgRepayResponse>;
  msgClose(request: MsgCloseRequest): Promise<MsgCloseResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.msgCreate = this.msgCreate.bind(this);
    this.msgDeposit = this.msgDeposit.bind(this);
    this.msgWithdraw = this.msgWithdraw.bind(this);
    this.msgDraw = this.msgDraw.bind(this);
    this.msgRepay = this.msgRepay.bind(this);
    this.msgClose = this.msgClose.bind(this);
  }

  msgCreate(request: MsgCreateRequest): Promise<MsgCreateResponse> {
    const data = MsgCreateRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.vault.v1.Msg", "MsgCreate", data);
    return promise.then(data => MsgCreateResponse.decode(new _m0.Reader(data)));
  }

  msgDeposit(request: MsgDepositRequest): Promise<MsgDepositResponse> {
    const data = MsgDepositRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.vault.v1.Msg", "MsgDeposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

  msgWithdraw(request: MsgWithdrawRequest): Promise<MsgWithdrawResponse> {
    const data = MsgWithdrawRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.vault.v1.Msg", "MsgWithdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new _m0.Reader(data)));
  }

  msgDraw(request: MsgDrawRequest): Promise<MsgDrawResponse> {
    const data = MsgDrawRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.vault.v1.Msg", "MsgDraw", data);
    return promise.then(data => MsgDrawResponse.decode(new _m0.Reader(data)));
  }

  msgRepay(request: MsgRepayRequest): Promise<MsgRepayResponse> {
    const data = MsgRepayRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.vault.v1.Msg", "MsgRepay", data);
    return promise.then(data => MsgRepayResponse.decode(new _m0.Reader(data)));
  }

  msgClose(request: MsgCloseRequest): Promise<MsgCloseResponse> {
    const data = MsgCloseRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.vault.v1.Msg", "MsgClose", data);
    return promise.then(data => MsgCloseResponse.decode(new _m0.Reader(data)));
  }

}