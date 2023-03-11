import { Rpc } from "../../../helpers";
import { MsgRequestLoan, MsgRequestLoanResponse, MsgApproveLoan, MsgApproveLoanResponse, MsgRepayLoan, MsgRepayLoanResponse, MsgLiquidateLoan, MsgLiquidateLoanResponse, MsgCancelLoan, MsgCancelLoanResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    requestLoan(request: MsgRequestLoan): Promise<MsgRequestLoanResponse>;
    approveLoan(request: MsgApproveLoan): Promise<MsgApproveLoanResponse>;
    repayLoan(request: MsgRepayLoan): Promise<MsgRepayLoanResponse>;
    liquidateLoan(request: MsgLiquidateLoan): Promise<MsgLiquidateLoanResponse>;
    cancelLoan(request: MsgCancelLoan): Promise<MsgCancelLoanResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    requestLoan(request: MsgRequestLoan): Promise<MsgRequestLoanResponse>;
    approveLoan(request: MsgApproveLoan): Promise<MsgApproveLoanResponse>;
    repayLoan(request: MsgRepayLoan): Promise<MsgRepayLoanResponse>;
    liquidateLoan(request: MsgLiquidateLoan): Promise<MsgLiquidateLoanResponse>;
    cancelLoan(request: MsgCancelLoan): Promise<MsgCancelLoanResponse>;
}
