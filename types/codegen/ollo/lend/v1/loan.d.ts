import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum LoanStatus {
    LOAN_STATUS_UNSPECIFIED = 0,
    LOAN_STATUS_ACTIVE = 1,
    LOAN_STATUS_REPAID = 2,
    LOAN_STATUS_CANCELLED = 3,
    LOAN_STATUS_REQUESTED = 4,
    UNRECOGNIZED = -1
}
export declare const LoanStatusSDKType: typeof LoanStatus;
export declare function loanStatusFromJSON(object: any): LoanStatus;
export declare function loanStatusToJSON(object: LoanStatus): string;
export interface Loan {
    id: Long;
    borrower: string;
    lender: string;
    amount: string;
    collateral: string;
    fee: string;
    deadline: string;
    status: string;
}
export interface LoanSDKType {
    id: Long;
    borrower: string;
    lender: string;
    amount: string;
    collateral: string;
    fee: string;
    deadline: string;
    status: string;
}
export interface LoanEntry {
    lender: string;
    createdAt?: Date;
    amountIn?: Coin;
    assetId: Long;
}
export interface LoanEntrySDKType {
    lender: string;
    created_at?: Date;
    amount_in?: CoinSDKType;
    asset_id: Long;
}
export declare const Loan: {
    encode(message: Loan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Loan;
    fromPartial(object: DeepPartial<Loan>): Loan;
};
export declare const LoanEntry: {
    encode(message: LoanEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoanEntry;
    fromPartial(object: DeepPartial<LoanEntry>): LoanEntry;
};
