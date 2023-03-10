import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreateLockRequest {
    depositor: string;
    amount: string;
    assetId: Long;
}
export interface MsgCreateLockRequestSDKType {
    depositor: string;
    amount: string;
    asset_id: Long;
}
export interface MsgCreateLockResponse {
}
export interface MsgCreateLockResponseSDKType {
}
export interface MsgDepositAssetRequest {
    depositor: string;
    lockerId: Long;
    amount: string;
    assetId: Long;
}
export interface MsgDepositAssetRequestSDKType {
    depositor: string;
    locker_id: Long;
    amount: string;
    asset_id: Long;
}
export interface MsgDepositAssetResponse {
}
export interface MsgDepositAssetResponseSDKType {
}
export interface MsgWithdrawAssetRequest {
    depositor: string;
    lockerId: Long;
    amount: string;
    assetId: Long;
}
export interface MsgWithdrawAssetRequestSDKType {
    depositor: string;
    locker_id: Long;
    amount: string;
    asset_id: Long;
}
export interface MsgWithdrawAssetResponse {
}
export interface MsgWithdrawAssetResponseSDKType {
}
export interface MsgCloseLockRequest {
    depositor: string;
    lockerId: Long;
}
export interface MsgCloseLockRequestSDKType {
    depositor: string;
    locker_id: Long;
}
export interface MsgCloseLockResponse {
}
export interface MsgCloseLockResponseSDKType {
}
export declare const MsgCreateLockRequest: {
    encode(message: MsgCreateLockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLockRequest;
    fromPartial(object: DeepPartial<MsgCreateLockRequest>): MsgCreateLockRequest;
};
export declare const MsgCreateLockResponse: {
    encode(_: MsgCreateLockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLockResponse;
    fromPartial(_: DeepPartial<MsgCreateLockResponse>): MsgCreateLockResponse;
};
export declare const MsgDepositAssetRequest: {
    encode(message: MsgDepositAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositAssetRequest;
    fromPartial(object: DeepPartial<MsgDepositAssetRequest>): MsgDepositAssetRequest;
};
export declare const MsgDepositAssetResponse: {
    encode(_: MsgDepositAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositAssetResponse;
    fromPartial(_: DeepPartial<MsgDepositAssetResponse>): MsgDepositAssetResponse;
};
export declare const MsgWithdrawAssetRequest: {
    encode(message: MsgWithdrawAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAssetRequest;
    fromPartial(object: DeepPartial<MsgWithdrawAssetRequest>): MsgWithdrawAssetRequest;
};
export declare const MsgWithdrawAssetResponse: {
    encode(_: MsgWithdrawAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAssetResponse;
    fromPartial(_: DeepPartial<MsgWithdrawAssetResponse>): MsgWithdrawAssetResponse;
};
export declare const MsgCloseLockRequest: {
    encode(message: MsgCloseLockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLockRequest;
    fromPartial(object: DeepPartial<MsgCloseLockRequest>): MsgCloseLockRequest;
};
export declare const MsgCloseLockResponse: {
    encode(_: MsgCloseLockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLockResponse;
    fromPartial(_: DeepPartial<MsgCloseLockResponse>): MsgCloseLockResponse;
};
