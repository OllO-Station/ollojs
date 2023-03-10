import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
export interface MsgCreateRequest {
    from: string;
    amountIn: string;
    amountOut: string;
}
export interface MsgCreateRequestSDKType {
    from: string;
    amount_in: string;
    amount_out: string;
}
export interface MsgCreateResponse {
}
export interface MsgCreateResponseSDKType {
}
export interface MsgDepositRequest {
    from: string;
    userVaultId: Long;
    amount: string;
}
export interface MsgDepositRequestSDKType {
    from: string;
    user_vault_id: Long;
    amount: string;
}
export interface MsgDepositResponse {
}
export interface MsgDepositResponseSDKType {
}
export interface MsgWithdrawRequest {
    from: string;
    userVaultId: Long;
    amount: string;
}
export interface MsgWithdrawRequestSDKType {
    from: string;
    user_vault_id: Long;
    amount: string;
}
export interface MsgWithdrawResponse {
}
export interface MsgWithdrawResponseSDKType {
}
export interface MsgDrawRequest {
    from: string;
    userVaultId: Long;
    amount: string;
}
export interface MsgDrawRequestSDKType {
    from: string;
    user_vault_id: Long;
    amount: string;
}
export interface MsgDrawResponse {
}
export interface MsgDrawResponseSDKType {
}
export interface MsgRepayRequest {
    from: string;
    userVaultId: Long;
    amount: string;
}
export interface MsgRepayRequestSDKType {
    from: string;
    user_vault_id: Long;
    amount: string;
}
export interface MsgRepayResponse {
}
export interface MsgRepayResponseSDKType {
}
export interface MsgCloseRequest {
    from: string;
    userVaultId: Long;
}
export interface MsgCloseRequestSDKType {
    from: string;
    user_vault_id: Long;
}
export interface MsgCloseResponse {
}
export interface MsgCloseResponseSDKType {
}
export declare const MsgCreateRequest: {
    encode(message: MsgCreateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRequest;
    fromPartial(object: DeepPartial<MsgCreateRequest>): MsgCreateRequest;
};
export declare const MsgCreateResponse: {
    encode(_: MsgCreateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse;
    fromPartial(_: DeepPartial<MsgCreateResponse>): MsgCreateResponse;
};
export declare const MsgDepositRequest: {
    encode(message: MsgDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositRequest;
    fromPartial(object: DeepPartial<MsgDepositRequest>): MsgDepositRequest;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse;
    fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse;
};
export declare const MsgWithdrawRequest: {
    encode(message: MsgWithdrawRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRequest;
    fromPartial(object: DeepPartial<MsgWithdrawRequest>): MsgWithdrawRequest;
};
export declare const MsgWithdrawResponse: {
    encode(_: MsgWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse;
    fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse;
};
export declare const MsgDrawRequest: {
    encode(message: MsgDrawRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawRequest;
    fromPartial(object: DeepPartial<MsgDrawRequest>): MsgDrawRequest;
};
export declare const MsgDrawResponse: {
    encode(_: MsgDrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawResponse;
    fromPartial(_: DeepPartial<MsgDrawResponse>): MsgDrawResponse;
};
export declare const MsgRepayRequest: {
    encode(message: MsgRepayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayRequest;
    fromPartial(object: DeepPartial<MsgRepayRequest>): MsgRepayRequest;
};
export declare const MsgRepayResponse: {
    encode(_: MsgRepayResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayResponse;
    fromPartial(_: DeepPartial<MsgRepayResponse>): MsgRepayResponse;
};
export declare const MsgCloseRequest: {
    encode(message: MsgCloseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseRequest;
    fromPartial(object: DeepPartial<MsgCloseRequest>): MsgCloseRequest;
};
export declare const MsgCloseResponse: {
    encode(_: MsgCloseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseResponse;
    fromPartial(_: DeepPartial<MsgCloseResponse>): MsgCloseResponse;
};
