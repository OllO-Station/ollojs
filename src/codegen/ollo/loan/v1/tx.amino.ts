import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgRequestLoan, MsgApproveLoan, MsgRepayLoan, MsgLiquidateLoan, MsgCancelLoan } from "./tx";
export interface AminoMsgRequestLoan extends AminoMsg {
  type: "/ollo.loan.v1.MsgRequestLoan";
  value: {
    creator: string;
    amount: string;
    fee: string;
    collateral: string;
    deadline: string;
  };
}
export interface AminoMsgApproveLoan extends AminoMsg {
  type: "/ollo.loan.v1.MsgApproveLoan";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgRepayLoan extends AminoMsg {
  type: "/ollo.loan.v1.MsgRepayLoan";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgLiquidateLoan extends AminoMsg {
  type: "/ollo.loan.v1.MsgLiquidateLoan";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgCancelLoan extends AminoMsg {
  type: "/ollo.loan.v1.MsgCancelLoan";
  value: {
    creator: string;
    id: string;
  };
}
export const AminoConverter = {
  "/ollo.loan.v1.MsgRequestLoan": {
    aminoType: "/ollo.loan.v1.MsgRequestLoan",
    toAmino: ({
      creator,
      amount,
      fee,
      collateral,
      deadline
    }: MsgRequestLoan): AminoMsgRequestLoan["value"] => {
      return {
        creator,
        amount,
        fee,
        collateral,
        deadline
      };
    },
    fromAmino: ({
      creator,
      amount,
      fee,
      collateral,
      deadline
    }: AminoMsgRequestLoan["value"]): MsgRequestLoan => {
      return {
        creator,
        amount,
        fee,
        collateral,
        deadline
      };
    }
  },
  "/ollo.loan.v1.MsgApproveLoan": {
    aminoType: "/ollo.loan.v1.MsgApproveLoan",
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
  "/ollo.loan.v1.MsgRepayLoan": {
    aminoType: "/ollo.loan.v1.MsgRepayLoan",
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
  "/ollo.loan.v1.MsgLiquidateLoan": {
    aminoType: "/ollo.loan.v1.MsgLiquidateLoan",
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
  "/ollo.loan.v1.MsgCancelLoan": {
    aminoType: "/ollo.loan.v1.MsgCancelLoan",
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