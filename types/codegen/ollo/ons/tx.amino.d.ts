import { AminoMsg } from "@cosmjs/amino";
import { MsgBuyName, MsgSellName, MsgSetName, MsgDeleteName, MsgAddThread, MsgDeleteThread } from "./tx";
export interface AminoMsgBuyName extends AminoMsg {
    type: "/ollo.ons.MsgBuyName";
    value: {
        creator: string;
        name: string;
        bidderAddr: string;
        bid: string;
    };
}
export interface AminoMsgSellName extends AminoMsg {
    type: "/ollo.ons.MsgSellName";
    value: {
        creator: string;
        name: string;
        sellerAddr: string;
        offer: string;
    };
}
export interface AminoMsgSetName extends AminoMsg {
    type: "/ollo.ons.MsgSetName";
    value: {
        creatorAddr: string;
        name: string;
        value: string;
    };
}
export interface AminoMsgDeleteName extends AminoMsg {
    type: "/ollo.ons.MsgDeleteName";
    value: {
        creatorAddr: string;
        name: string;
    };
}
export interface AminoMsgAddThread extends AminoMsg {
    type: "/ollo.ons.MsgAddThread";
    value: {
        creator: string;
        name: string;
        thread: string;
        addr: string;
        offer: string;
    };
}
export interface AminoMsgDeleteThread extends AminoMsg {
    type: "/ollo.ons.MsgDeleteThread";
    value: {
        creator: string;
        name: string;
        thread: string;
        addr: string;
    };
}
export declare const AminoConverter: {
    "/ollo.ons.MsgBuyName": {
        aminoType: string;
        toAmino: ({ creator, name, bidderAddr, bid }: MsgBuyName) => AminoMsgBuyName["value"];
        fromAmino: ({ creator, name, bidderAddr, bid }: AminoMsgBuyName["value"]) => MsgBuyName;
    };
    "/ollo.ons.MsgSellName": {
        aminoType: string;
        toAmino: ({ creator, name, sellerAddr, offer }: MsgSellName) => AminoMsgSellName["value"];
        fromAmino: ({ creator, name, sellerAddr, offer }: AminoMsgSellName["value"]) => MsgSellName;
    };
    "/ollo.ons.MsgSetName": {
        aminoType: string;
        toAmino: ({ creatorAddr, name, value }: MsgSetName) => AminoMsgSetName["value"];
        fromAmino: ({ creatorAddr, name, value }: AminoMsgSetName["value"]) => MsgSetName;
    };
    "/ollo.ons.MsgDeleteName": {
        aminoType: string;
        toAmino: ({ creatorAddr, name }: MsgDeleteName) => AminoMsgDeleteName["value"];
        fromAmino: ({ creatorAddr, name }: AminoMsgDeleteName["value"]) => MsgDeleteName;
    };
    "/ollo.ons.MsgAddThread": {
        aminoType: string;
        toAmino: ({ creator, name, thread, addr, offer }: MsgAddThread) => AminoMsgAddThread["value"];
        fromAmino: ({ creator, name, thread, addr, offer }: AminoMsgAddThread["value"]) => MsgAddThread;
    };
    "/ollo.ons.MsgDeleteThread": {
        aminoType: string;
        toAmino: ({ creator, name, thread, addr }: MsgDeleteThread) => AminoMsgDeleteThread["value"];
        fromAmino: ({ creator, name, thread, addr }: AminoMsgDeleteThread["value"]) => MsgDeleteThread;
    };
};
