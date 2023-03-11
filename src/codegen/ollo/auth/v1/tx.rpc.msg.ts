import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgRegisterAccount, MsgRegisterAccountResponse, MsgSubmitTx, MsgSubmitTxResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  /** RegisterAccount registers an interchain account on host chain with given `connectionId` */
  registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
  /** SubmitTx submits a transaction to the host chain on behalf of interchain account */

  submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerAccount = this.registerAccount.bind(this);
    this.submitTx = this.submitTx.bind(this);
  }

  registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse> {
    const data = MsgRegisterAccount.encode(request).finish();
    const promise = this.rpc.request("ollo.auth.v1.Msg", "RegisterAccount", data);
    return promise.then(data => MsgRegisterAccountResponse.decode(new _m0.Reader(data)));
  }

  submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse> {
    const data = MsgSubmitTx.encode(request).finish();
    const promise = this.rpc.request("ollo.auth.v1.Msg", "SubmitTx", data);
    return promise.then(data => MsgSubmitTxResponse.decode(new _m0.Reader(data)));
  }

}