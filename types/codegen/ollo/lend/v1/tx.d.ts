import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
export interface MsgRequestLoan {
    creator: string;
    amount: string;
    collateral: string;
    fee: string;
    deadline: string;
}
export interface MsgRequestLoanSDKType {
    creator: string;
    amount: string;
    collateral: string;
    fee: string;
    deadline: string;
}
export interface MsgRequestLoanResponse {
}
export interface MsgRequestLoanResponseSDKType {
}
export interface MsgApproveLoan {
    creator: string;
    id: Long;
}
export interface MsgApproveLoanSDKType {
    creator: string;
    id: Long;
}
export interface MsgApproveLoanResponse {
}
export interface MsgApproveLoanResponseSDKType {
}
export interface MsgRepayLoan {
    creator: string;
    id: Long;
}
export interface MsgRepayLoanSDKType {
    creator: string;
    id: Long;
}
export interface MsgRepayLoanResponse {
}
export interface MsgRepayLoanResponseSDKType {
}
export interface MsgLiquidateLoan {
    creator: string;
    id: Long;
}
export interface MsgLiquidateLoanSDKType {
    creator: string;
    id: Long;
}
export interface MsgLiquidateLoanResponse {
}
export interface MsgLiquidateLoanResponseSDKType {
}
export interface MsgCancelLoan {
    creator: string;
    id: Long;
}
export interface MsgCancelLoanSDKType {
    creator: string;
    id: Long;
}
export interface MsgCancelLoanResponse {
}
export interface MsgCancelLoanResponseSDKType {
}
export declare const MsgRequestLoan: {
    encode(message: MsgRequestLoan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestLoan;
    fromPartial(object: DeepPartial<MsgRequestLoan>): MsgRequestLoan;
};
export declare const MsgRequestLoanResponse: {
    encode(_: MsgRequestLoanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestLoanResponse;
    fromPartial(_: DeepPartial<MsgRequestLoanResponse>): MsgRequestLoanResponse;
};
export declare const MsgApproveLoan: {
    encode(message: MsgApproveLoan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveLoan;
    fromPartial(object: DeepPartial<MsgApproveLoan>): MsgApproveLoan;
};
export declare const MsgApproveLoanResponse: {
    encode(_: MsgApproveLoanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveLoanResponse;
    fromPartial(_: DeepPartial<MsgApproveLoanResponse>): MsgApproveLoanResponse;
};
export declare const MsgRepayLoan: {
    encode(message: MsgRepayLoan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayLoan;
    fromPartial(object: DeepPartial<MsgRepayLoan>): MsgRepayLoan;
};
export declare const MsgRepayLoanResponse: {
    encode(_: MsgRepayLoanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayLoanResponse;
    fromPartial(_: DeepPartial<MsgRepayLoanResponse>): MsgRepayLoanResponse;
};
export declare const MsgLiquidateLoan: {
    encode(message: MsgLiquidateLoan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateLoan;
    fromPartial(object: DeepPartial<MsgLiquidateLoan>): MsgLiquidateLoan;
};
export declare const MsgLiquidateLoanResponse: {
    encode(_: MsgLiquidateLoanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateLoanResponse;
    fromPartial(_: DeepPartial<MsgLiquidateLoanResponse>): MsgLiquidateLoanResponse;
};
export declare const MsgCancelLoan: {
    encode(message: MsgCancelLoan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelLoan;
    fromPartial(object: DeepPartial<MsgCancelLoan>): MsgCancelLoan;
};
export declare const MsgCancelLoanResponse: {
    encode(_: MsgCancelLoanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelLoanResponse;
    fromPartial(_: DeepPartial<MsgCancelLoanResponse>): MsgCancelLoanResponse;
};
