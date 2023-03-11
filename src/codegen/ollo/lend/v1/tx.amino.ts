import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgRequestLoan, MsgApproveLoan, MsgRepayLoan, MsgLiquidateLoan, MsgCancelLoan } from "./tx";
export interface AminoMsgRequestLoan extends AminoMsg {
  type: "/ollo.lend.v1.MsgRequestLoan";
  value: {
    creator: string;
    amount: string;
    collateral: string;
    fee: string;
    deadline: string;
  };
}
export interface AminoMsgApproveLoan extends AminoMsg {
  type: "/ollo.lend.v1.MsgApproveLoan";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgRepayLoan extends AminoMsg {
  type: "/ollo.lend.v1.MsgRepayLoan";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgLiquidateLoan extends AminoMsg {
  type: "/ollo.lend.v1.MsgLiquidateLoan";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgCancelLoan extends AminoMsg {
  type: "/ollo.lend.v1.MsgCancelLoan";
  value: {
    creator: string;
    id: string;
  };
}
export const AminoConverter = {
  "/ollo.lend.v1.MsgRequestLoan": {
    aminoType: "/ollo.lend.v1.MsgRequestLoan",
    toAmino: ({
      creator,
      amount,
      collateral,
      fee,
      deadline
    }: MsgRequestLoan): AminoMsgRequestLoan["value"] => {
      return {
        creator,
        amount,
        collateral,
        fee,
        deadline
      };
    },
    fromAmino: ({
      creator,
      amount,
      collateral,
      fee,
      deadline
    }: AminoMsgRequestLoan["value"]): MsgRequestLoan => {
      return {
        creator,
        amount,
        collateral,
        fee,
        deadline
      };
    }
  },
  "/ollo.lend.v1.MsgApproveLoan": {
    aminoType: "/ollo.lend.v1.MsgApproveLoan",
    toAmino: ({
      creator,
      id
    }: MsgApproveLoan): AminoMsgApproveLoan["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: AminoMsgApproveLoan["value"]): MsgApproveLoan => {
      return {
        creator,
        id: Long.fromString(id)
      };
    }
  },
  "/ollo.lend.v1.MsgRepayLoan": {
    aminoType: "/ollo.lend.v1.MsgRepayLoan",
    toAmino: ({
      creator,
      id
    }: MsgRepayLoan): AminoMsgRepayLoan["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: AminoMsgRepayLoan["value"]): MsgRepayLoan => {
      return {
        creator,
        id: Long.fromString(id)
      };
    }
  },
  "/ollo.lend.v1.MsgLiquidateLoan": {
    aminoType: "/ollo.lend.v1.MsgLiquidateLoan",
    toAmino: ({
      creator,
      id
    }: MsgLiquidateLoan): AminoMsgLiquidateLoan["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: AminoMsgLiquidateLoan["value"]): MsgLiquidateLoan => {
      return {
        creator,
        id: Long.fromString(id)
      };
    }
  },
  "/ollo.lend.v1.MsgCancelLoan": {
    aminoType: "/ollo.lend.v1.MsgCancelLoan",
    toAmino: ({
      creator,
      id
    }: MsgCancelLoan): AminoMsgCancelLoan["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: AminoMsgCancelLoan["value"]): MsgCancelLoan => {
      return {
        creator,
        id: Long.fromString(id)
      };
    }
  }
};