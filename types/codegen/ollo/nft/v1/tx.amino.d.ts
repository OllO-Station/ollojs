import { AminoMsg } from "@cosmjs/amino";
import { MsgIssueDenom, MsgTransferDenom, MsgMintNFT, MsgBurnNFT, MsgEditNFT, MsgSendNFT } from "./tx";
export interface AminoMsgIssueDenom extends AminoMsg {
    type: "/ollo.nft.v1.MsgIssueDenom";
    value: {
        id: string;
        name: string;
        schema: string;
        sender: string;
        symbol: string;
        mint_restricted: boolean;
        update_restricted: boolean;
        description: string;
        uri: string;
        uri_hash: string;
        data: string;
    };
}
export interface AminoMsgTransferDenom extends AminoMsg {
    type: "/ollo.nft.v1.MsgTransferDenom";
    value: {
        id: string;
        sender: string;
        recipient: string;
    };
}
export interface AminoMsgMintNFT extends AminoMsg {
    type: "/ollo.nft.v1.MsgMintNFT";
    value: {
        id: string;
        denom_id: string;
        name: string;
        uri: string;
        data: string;
        sender: string;
        recipient: string;
        uri_hash: string;
    };
}
export interface AminoMsgBurnNFT extends AminoMsg {
    type: "/ollo.nft.v1.MsgBurnNFT";
    value: {
        id: string;
        denom_id: string;
        sender: string;
    };
}
export interface AminoMsgEditNFT extends AminoMsg {
    type: "/ollo.nft.v1.MsgEditNFT";
    value: {
        id: string;
        denom_id: string;
        name: string;
        uri: string;
        data: string;
        sender: string;
        uri_hash: string;
    };
}
export interface AminoMsgSendNFT extends AminoMsg {
    type: "/ollo.nft.v1.MsgSendNFT";
    value: {
        id: string;
        denom_id: string;
        name: string;
        uri: string;
        data: string;
        sender: string;
        recipient: string;
        uri_hash: string;
    };
}
export declare const AminoConverter: {
    "/ollo.nft.v1.MsgIssueDenom": {
        aminoType: string;
        toAmino: ({ id, name, schema, sender, symbol, mintRestricted, updateRestricted, description, uri, uriHash, data }: MsgIssueDenom) => AminoMsgIssueDenom["value"];
        fromAmino: ({ id, name, schema, sender, symbol, mint_restricted, update_restricted, description, uri, uri_hash, data }: AminoMsgIssueDenom["value"]) => MsgIssueDenom;
    };
    "/ollo.nft.v1.MsgTransferDenom": {
        aminoType: string;
        toAmino: ({ id, sender, recipient }: MsgTransferDenom) => AminoMsgTransferDenom["value"];
        fromAmino: ({ id, sender, recipient }: AminoMsgTransferDenom["value"]) => MsgTransferDenom;
    };
    "/ollo.nft.v1.MsgMintNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, name, uri, data, sender, recipient, uriHash }: MsgMintNFT) => AminoMsgMintNFT["value"];
        fromAmino: ({ id, denom_id, name, uri, data, sender, recipient, uri_hash }: AminoMsgMintNFT["value"]) => MsgMintNFT;
    };
    "/ollo.nft.v1.MsgBurnNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, sender }: MsgBurnNFT) => AminoMsgBurnNFT["value"];
        fromAmino: ({ id, denom_id, sender }: AminoMsgBurnNFT["value"]) => MsgBurnNFT;
    };
    "/ollo.nft.v1.MsgEditNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, name, uri, data, sender, uriHash }: MsgEditNFT) => AminoMsgEditNFT["value"];
        fromAmino: ({ id, denom_id, name, uri, data, sender, uri_hash }: AminoMsgEditNFT["value"]) => MsgEditNFT;
    };
    "/ollo.nft.v1.MsgSendNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, name, uri, data, sender, recipient, uriHash }: MsgSendNFT) => AminoMsgSendNFT["value"];
        fromAmino: ({ id, denom_id, name, uri, data, sender, recipient, uri_hash }: AminoMsgSendNFT["value"]) => MsgSendNFT;
    };
};
