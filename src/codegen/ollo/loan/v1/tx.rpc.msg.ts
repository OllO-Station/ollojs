import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgRequestLoan, MsgRequestLoanResponse, MsgApproveLoan, MsgApproveLoanResponse, MsgRepayLoan, MsgRepayLoanResponse, MsgLiquidateLoan, MsgLiquidateLoanResponse, MsgCancelLoan, MsgCancelLoanResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  /** RequestLoan requests a loan for an ollo address */
  requestLoan(request: MsgRequestLoan): Promise<MsgRequestLoanResponse>;
  /** ApproveLoan approves a loan */

  approveLoan(request: MsgApproveLoan): Promise<MsgApproveLoanResponse>;
  /** RepayLoan repays an existing loan principal */

  repayLoan(request: MsgRepayLoan): Promise<MsgRepayLoanResponse>;
  /** LiquidateLoan liquidates an existing loan */

  liquidateLoan(request: MsgLiquidateLoan): Promise<MsgLiquidateLoanResponse>;
  /** CancelLoan cancels an existing loan */

  cancelLoan(request: MsgCancelLoan): Promise<MsgCancelLoanResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.requestLoan = this.requestLoan.bind(this);
    this.approveLoan = this.approveLoan.bind(this);
    this.repayLoan = this.repayLoan.bind(this);
    this.liquidateLoan = this.liquidateLoan.bind(this);
    this.cancelLoan = this.cancelLoan.bind(this);
  }

  requestLoan(request: MsgRequestLoan): Promise<MsgRequestLoanResponse> {
    const data = MsgRequestLoan.encode(request).finish();
    const promise = this.rpc.request("ollo.loan.v1.Msg", "RequestLoan", data);
    return promise.then(data => MsgRequestLoanResponse.decode(new _m0.Reader(data)));
  }

  approveLoan(request: MsgApproveLoan): Promise<MsgApproveLoanResponse> {
    const data = MsgApproveLoan.encode(request).finish();
    const promise = this.rpc.request("ollo.loan.v1.Msg", "ApproveLoan", data);
    return promise.then(data => MsgApproveLoanResponse.decode(new _m0.Reader(data)));
  }

  repayLoan(request: MsgRepayLoan): Promise<MsgRepayLoanResponse> {
    const data = MsgRepayLoan.encode(request).finish();
    const promise = this.rpc.request("ollo.loan.v1.Msg", "RepayLoan", data);
    return promise.then(data => MsgRepayLoanResponse.decode(new _m0.Reader(data)));
  }

  liquidateLoan(request: MsgLiquidateLoan): Promise<MsgLiquidateLoanResponse> {
    const data = MsgLiquidateLoan.encode(request).finish();
    const promise = this.rpc.request("ollo.loan.v1.Msg", "LiquidateLoan", data);
    return promise.then(data => MsgLiquidateLoanResponse.decode(new _m0.Reader(data)));
  }

  cancelLoan(request: MsgCancelLoan): Promise<MsgCancelLoanResponse> {
    const data = MsgCancelLoan.encode(request).finish();
    const promise = this.rpc.request("ollo.loan.v1.Msg", "CancelLoan", data);
    return promise.then(data => MsgCancelLoanResponse.decode(new _m0.Reader(data)));
  }

}