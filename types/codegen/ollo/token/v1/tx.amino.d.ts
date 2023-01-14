import { AminoMsg } from "@cosmjs/amino";
import { MsgIssueToken, MsgEditToken, MsgMintToken, MsgBurnToken, MsgTransferTokenOwner } from "./tx";
export interface AminoMsgIssueToken extends AminoMsg {
    type: "/ollo.token.v1.MsgIssueToken";
    value: {
        symbol: string;
        name: string;
        scale: number;
        min_unit: string;
        initial_supply: string;
        max_supply: string;
        mintable: boolean;
        owner: string;
    };
}
export interface AminoMsgEditToken extends AminoMsg {
    type: "/ollo.token.v1.MsgEditToken";
    value: {
        symbol: string;
        name: string;
        max_supply: string;
        mintable: string;
        owner: string;
    };
}
export interface AminoMsgMintToken extends AminoMsg {
    type: "/ollo.token.v1.MsgMintToken";
    value: {
        symbol: string;
        amount: string;
        to: string;
        owner: string;
    };
}
export interface AminoMsgBurnToken extends AminoMsg {
    type: "/ollo.token.v1.MsgBurnToken";
    value: {
        symbol: string;
        amount: string;
        sender: string;
    };
}
export interface AminoMsgTransferTokenOwner extends AminoMsg {
    type: "/ollo.token.v1.MsgTransferTokenOwner";
    value: {
        src_owner: string;
        dst_owner: string;
        symbol: string;
    };
}
export declare const AminoConverter: {
    "/ollo.token.v1.MsgIssueToken": {
        aminoType: string;
        toAmino: ({ symbol, name, scale, minUnit, initialSupply, maxSupply, mintable, owner }: MsgIssueToken) => AminoMsgIssueToken["value"];
        fromAmino: ({ symbol, name, scale, min_unit, initial_supply, max_supply, mintable, owner }: AminoMsgIssueToken["value"]) => MsgIssueToken;
    };
    "/ollo.token.v1.MsgEditToken": {
        aminoType: string;
        toAmino: ({ symbol, name, maxSupply, mintable, owner }: MsgEditToken) => AminoMsgEditToken["value"];
        fromAmino: ({ symbol, name, max_supply, mintable, owner }: AminoMsgEditToken["value"]) => MsgEditToken;
    };
    "/ollo.token.v1.MsgMintToken": {
        aminoType: string;
        toAmino: ({ symbol, amount, to, owner }: MsgMintToken) => AminoMsgMintToken["value"];
        fromAmino: ({ symbol, amount, to, owner }: AminoMsgMintToken["value"]) => MsgMintToken;
    };
    "/ollo.token.v1.MsgBurnToken": {
        aminoType: string;
        toAmino: ({ symbol, amount, sender }: MsgBurnToken) => AminoMsgBurnToken["value"];
        fromAmino: ({ symbol, amount, sender }: AminoMsgBurnToken["value"]) => MsgBurnToken;
    };
    "/ollo.token.v1.MsgTransferTokenOwner": {
        aminoType: string;
        toAmino: ({ srcOwner, dstOwner, symbol }: MsgTransferTokenOwner) => AminoMsgTransferTokenOwner["value"];
        fromAmino: ({ src_owner, dst_owner, symbol }: AminoMsgTransferTokenOwner["value"]) => MsgTransferTokenOwner;
    };
};
