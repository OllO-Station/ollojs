import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgRequestLoan, MsgApproveLoan, MsgRepayLoan, MsgLiquidateLoan, MsgCancelLoan } from "./tx";
export interface AminoMsgRequestLoan extends AminoMsg {
  type: "/ollo.loan.MsgRequestLoan";
  value: {
    creator: string;
    amount: string;
    fee: string;
    collateral: string;
    deadline: string;
  };
}
export interface AminoMsgApproveLoan extends AminoMsg {
  type: "/ollo.loan.MsgApproveLoan";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgRepayLoan extends AminoMsg {
  type: "/ollo.loan.MsgRepayLoan";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgLiquidateLoan extends AminoMsg {
  type: "/ollo.loan.MsgLiquidateLoan";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgCancelLoan extends AminoMsg {
  type: "/ollo.loan.MsgCancelLoan";
  value: {
    creator: string;
    id: string;
  };
}
export const AminoConverter = {
  "/ollo.loan.MsgRequestLoan": {
    aminoType: "/ollo.loan.MsgRequestLoan",
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
  "/ollo.loan.MsgApproveLoan": {
    aminoType: "/ollo.loan.MsgApproveLoan",
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
  "/ollo.loan.MsgRepayLoan": {
    aminoType: "/ollo.loan.MsgRepayLoan",
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
  "/ollo.loan.MsgLiquidateLoan": {
    aminoType: "/ollo.loan.MsgLiquidateLoan",
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
  "/ollo.loan.MsgCancelLoan": {
    aminoType: "/ollo.loan.MsgCancelLoan",
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