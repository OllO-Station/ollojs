import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Loans {
    id: Long;
    amount: string;
    fee: string;
    collateral: string;
    deadline: string;
    state: string;
    borrower: string;
    lender: string;
}
export interface LoansSDKType {
    id: Long;
    amount: string;
    fee: string;
    collateral: string;
    deadline: string;
    state: string;
    borrower: string;
    lender: string;
}
export declare const Loans: {
    encode(message: Loans, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Loans;
    fromPartial(object: DeepPartial<Loans>): Loans;
};
