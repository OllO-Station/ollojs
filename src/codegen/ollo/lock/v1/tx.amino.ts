import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/ollo.lock.v1.MsgCreateLockRequest": {
    aminoType: "/ollo.lock.v1.MsgCreateLockRequest",
    toAmino: ({
      depositor,
      amount,
      assetId
    }: MsgCreateLockRequest): AminoMsgCreateLockRequest["value"] => {
      return {
        depositor,
        amount,
        asset_id: assetId.toString()
      };
    },
    fromAmino: ({
      depositor,
      amount,
      asset_id
    }: AminoMsgCreateLockRequest["value"]): MsgCreateLockRequest => {
      return {
        depositor,
        amount,
        assetId: Long.fromString(asset_id)
      };
    }
  },
  "/ollo.lock.v1.MsgDepositAssetRequest": {
    aminoType: "/ollo.lock.v1.MsgDepositAssetRequest",
    toAmino: ({
      depositor,
      lockerId,
      amount,
      assetId
    }: MsgDepositAssetRequest): AminoMsgDepositAssetRequest["value"] => {
      return {
        depositor,
        locker_id: lockerId.toString(),
        amount,
        asset_id: assetId.toString()
      };
    },
    fromAmino: ({
      depositor,
      locker_id,
      amount,
      asset_id
    }: AminoMsgDepositAssetRequest["value"]): MsgDepositAssetRequest => {
      return {
        depositor,
        lockerId: Long.fromString(locker_id),
        amount,
        assetId: Long.fromString(asset_id)
      };
    }
  },
  "/ollo.lock.v1.MsgWithdrawAssetRequest": {
    aminoType: "/ollo.lock.v1.MsgWithdrawAssetRequest",
    toAmino: ({
      depositor,
      lockerId,
      amount,
      assetId
    }: MsgWithdrawAssetRequest): AminoMsgWithdrawAssetRequest["value"] => {
      return {
        depositor,
        locker_id: lockerId.toString(),
        amount,
        asset_id: assetId.toString()
      };
    },
    fromAmino: ({
      depositor,
      locker_id,
      amount,
      asset_id
    }: AminoMsgWithdrawAssetRequest["value"]): MsgWithdrawAssetRequest => {
      return {
        depositor,
        lockerId: Long.fromString(locker_id),
        amount,
        assetId: Long.fromString(asset_id)
      };
    }
  },
  "/ollo.lock.v1.MsgCloseLockRequest": {
    aminoType: "/ollo.lock.v1.MsgCloseLockRequest",
    toAmino: ({
      depositor,
      lockerId
    }: MsgCloseLockRequest): AminoMsgCloseLockRequest["value"] => {
      return {
        depositor,
        locker_id: lockerId.toString()
      };
    },
    fromAmino: ({
      depositor,
      locker_id
    }: AminoMsgCloseLockRequest["value"]): MsgCloseLockRequest => {
      return {
        depositor,
        lockerId: Long.fromString(locker_id)
      };
    }
  }
};