import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    requestLoan(request: MsgRequestLoan): Promise<MsgRequestLoanResponse>;
    approveLoan(request: MsgApproveLoan): Promise<MsgApproveLoanResponse>;
    repayLoan(request: MsgRepayLoan): Promise<MsgRepayLoanResponse>;
    liquidateLoan(request: MsgLiquidateLoan): Promise<MsgLiquidateLoanResponse>;
    cancelLoan(request: MsgCancelLoan): Promise<MsgCancelLoanResponse>;
}
