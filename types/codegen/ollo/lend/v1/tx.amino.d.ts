import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/ollo.lend.v1.MsgRequestLoan": {
        aminoType: string;
        toAmino: ({ creator, amount, collateral, fee, deadline }: MsgRequestLoan) => AminoMsgRequestLoan["value"];
        fromAmino: ({ creator, amount, collateral, fee, deadline }: AminoMsgRequestLoan["value"]) => MsgRequestLoan;
    };
    "/ollo.lend.v1.MsgApproveLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgApproveLoan) => AminoMsgApproveLoan["value"];
        fromAmino: ({ creator, id }: AminoMsgApproveLoan["value"]) => MsgApproveLoan;
    };
    "/ollo.lend.v1.MsgRepayLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgRepayLoan) => AminoMsgRepayLoan["value"];
        fromAmino: ({ creator, id }: AminoMsgRepayLoan["value"]) => MsgRepayLoan;
    };
    "/ollo.lend.v1.MsgLiquidateLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgLiquidateLoan) => AminoMsgLiquidateLoan["value"];
        fromAmino: ({ creator, id }: AminoMsgLiquidateLoan["value"]) => MsgLiquidateLoan;
    };
    "/ollo.lend.v1.MsgCancelLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgCancelLoan) => AminoMsgCancelLoan["value"];
        fromAmino: ({ creator, id }: AminoMsgCancelLoan["value"]) => MsgCancelLoan;
    };
};
