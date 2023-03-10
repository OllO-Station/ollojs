import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateLockRequest, MsgDepositAssetRequest, MsgWithdrawAssetRequest, MsgCloseLockRequest } from "./tx";
export interface AminoMsgCreateLockRequest extends AminoMsg {
    type: "/ollo.lock.v1.MsgCreateLockRequest";
    value: {
        depositor: string;
        amount: string;
        asset_id: string;
    };
}
export interface AminoMsgDepositAssetRequest extends AminoMsg {
    type: "/ollo.lock.v1.MsgDepositAssetRequest";
    value: {
        depositor: string;
        locker_id: string;
        amount: string;
        asset_id: string;
    };
}
export interface AminoMsgWithdrawAssetRequest extends AminoMsg {
    type: "/ollo.lock.v1.MsgWithdrawAssetRequest";
    value: {
        depositor: string;
        locker_id: string;
        amount: string;
        asset_id: string;
    };
}
export interface AminoMsgCloseLockRequest extends AminoMsg {
    type: "/ollo.lock.v1.MsgCloseLockRequest";
    value: {
        depositor: string;
        locker_id: string;
    };
}
export declare const AminoConverter: {
    "/ollo.lock.v1.MsgCreateLockRequest": {
        aminoType: string;
        toAmino: ({ depositor, amount, assetId }: MsgCreateLockRequest) => AminoMsgCreateLockRequest["value"];
        fromAmino: ({ depositor, amount, asset_id }: AminoMsgCreateLockRequest["value"]) => MsgCreateLockRequest;
    };
    "/ollo.lock.v1.MsgDepositAssetRequest": {
        aminoType: string;
        toAmino: ({ depositor, lockerId, amount, assetId }: MsgDepositAssetRequest) => AminoMsgDepositAssetRequest["value"];
        fromAmino: ({ depositor, locker_id, amount, asset_id }: AminoMsgDepositAssetRequest["value"]) => MsgDepositAssetRequest;
    };
    "/ollo.lock.v1.MsgWithdrawAssetRequest": {
        aminoType: string;
        toAmino: ({ depositor, lockerId, amount, assetId }: MsgWithdrawAssetRequest) => AminoMsgWithdrawAssetRequest["value"];
        fromAmino: ({ depositor, locker_id, amount, asset_id }: AminoMsgWithdrawAssetRequest["value"]) => MsgWithdrawAssetRequest;
    };
    "/ollo.lock.v1.MsgCloseLockRequest": {
        aminoType: string;
        toAmino: ({ depositor, lockerId }: MsgCloseLockRequest) => AminoMsgCloseLockRequest["value"];
        fromAmino: ({ depositor, locker_id }: AminoMsgCloseLockRequest["value"]) => MsgCloseLockRequest;
    };
};
