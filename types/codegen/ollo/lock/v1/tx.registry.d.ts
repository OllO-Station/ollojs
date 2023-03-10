import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateLockRequest, MsgDepositAssetRequest, MsgWithdrawAssetRequest, MsgCloseLockRequest } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        msgCreateLock(value: MsgCreateLockRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        msgDepositAsset(value: MsgDepositAssetRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        msgWithdrawAsset(value: MsgWithdrawAssetRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        msgCloseLock(value: MsgCloseLockRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        msgCreateLock(value: MsgCreateLockRequest): {
            typeUrl: string;
            value: MsgCreateLockRequest;
        };
        msgDepositAsset(value: MsgDepositAssetRequest): {
            typeUrl: string;
            value: MsgDepositAssetRequest;
        };
        msgWithdrawAsset(value: MsgWithdrawAssetRequest): {
            typeUrl: string;
            value: MsgWithdrawAssetRequest;
        };
        msgCloseLock(value: MsgCloseLockRequest): {
            typeUrl: string;
            value: MsgCloseLockRequest;
        };
    };
    fromPartial: {
        msgCreateLock(value: MsgCreateLockRequest): {
            typeUrl: string;
            value: MsgCreateLockRequest;
        };
        msgDepositAsset(value: MsgDepositAssetRequest): {
            typeUrl: string;
            value: MsgDepositAssetRequest;
        };
        msgWithdrawAsset(value: MsgWithdrawAssetRequest): {
            typeUrl: string;
            value: MsgWithdrawAssetRequest;
        };
        msgCloseLock(value: MsgCloseLockRequest): {
            typeUrl: string;
            value: MsgCloseLockRequest;
        };
    };
};
