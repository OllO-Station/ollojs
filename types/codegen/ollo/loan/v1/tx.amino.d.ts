import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/ollo.loan.v1.MsgRequestLoan": {
        aminoType: string;
        toAmino: ({ creator, amount, fee, collateral, deadline }: MsgRequestLoan) => AminoMsgRequestLoan["value"];
        fromAmino: ({ creator, amount, fee, collateral, deadline }: AminoMsgRequestLoan["value"]) => MsgRequestLoan;
    };
    "/ollo.loan.v1.MsgApproveLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgApproveLoan) => AminoMsgApproveLoan["value"];
        fromAmino: ({ creator, id }: AminoMsgApproveLoan["value"]) => MsgApproveLoan;
    };
    "/ollo.loan.v1.MsgRepayLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgRepayLoan) => AminoMsgRepayLoan["value"];
        fromAmino: ({ creator, id }: AminoMsgRepayLoan["value"]) => MsgRepayLoan;
    };
    "/ollo.loan.v1.MsgLiquidateLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgLiquidateLoan) => AminoMsgLiquidateLoan["value"];
        fromAmino: ({ creator, id }: AminoMsgLiquidateLoan["value"]) => MsgLiquidateLoan;
    };
    "/ollo.loan.v1.MsgCancelLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgCancelLoan) => AminoMsgCancelLoan["value"];
        fromAmino: ({ creator, id }: AminoMsgCancelLoan["value"]) => MsgCancelLoan;
    };
};
