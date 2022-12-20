import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/ollo.loan.MsgRequestLoan": {
        aminoType: string;
        toAmino: ({ creator, amount, fee, collateral, deadline }: MsgRequestLoan) => AminoMsgRequestLoan["value"];
        fromAmino: ({ creator, amount, fee, collateral, deadline }: AminoMsgRequestLoan["value"]) => MsgRequestLoan;
    };
    "/ollo.loan.MsgApproveLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgApproveLoan) => AminoMsgApproveLoan["value"];
        fromAmino: ({ creator, id }: AminoMsgApproveLoan["value"]) => MsgApproveLoan;
    };
    "/ollo.loan.MsgRepayLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgRepayLoan) => AminoMsgRepayLoan["value"];
        fromAmino: ({ creator, id }: AminoMsgRepayLoan["value"]) => MsgRepayLoan;
    };
    "/ollo.loan.MsgLiquidateLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgLiquidateLoan) => AminoMsgLiquidateLoan["value"];
        fromAmino: ({ creator, id }: AminoMsgLiquidateLoan["value"]) => MsgLiquidateLoan;
    };
    "/ollo.loan.MsgCancelLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgCancelLoan) => AminoMsgCancelLoan["value"];
        fromAmino: ({ creator, id }: AminoMsgCancelLoan["value"]) => MsgCancelLoan;
    };
};
