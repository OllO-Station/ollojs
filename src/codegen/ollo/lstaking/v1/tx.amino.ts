import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgLiquidStake, MsgLiquidUnstake } from "./tx";
export interface AminoMsgLiquidStake extends AminoMsg {
  type: "/ollo.lstaking.v1.MsgLiquidStake";
  value: {
    delegator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgLiquidUnstake extends AminoMsg {
  type: "/ollo.lstaking.v1.MsgLiquidUnstake";
  value: {
    delegator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/ollo.lstaking.v1.MsgLiquidStake": {
    aminoType: "/ollo.lstaking.v1.MsgLiquidStake",
    toAmino: ({
      delegatorAddress,
      amount
    }: MsgLiquidStake): AminoMsgLiquidStake["value"] => {
      return {
        delegator_address: delegatorAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator_address,
      amount
    }: AminoMsgLiquidStake["value"]): MsgLiquidStake => {
      return {
        delegatorAddress: delegator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/ollo.lstaking.v1.MsgLiquidUnstake": {
    aminoType: "/ollo.lstaking.v1.MsgLiquidUnstake",
    toAmino: ({
      delegatorAddress,
      amount
    }: MsgLiquidUnstake): AminoMsgLiquidUnstake["value"] => {
      return {
        delegator_address: delegatorAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator_address,
      amount
    }: AminoMsgLiquidUnstake["value"]): MsgLiquidUnstake => {
      return {
        delegatorAddress: delegator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  }
};