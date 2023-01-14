import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateDenom, MsgMintDenom, MsgBurnDenom, MsgChangeDenomAdmin, MsgSetDenomMetadata, MsgForceTransfer } from "./tx";
export interface AminoMsgCreateDenom extends AminoMsg {
    type: "/ollo.reserve.v1.MsgCreateDenom";
    value: {
        sender: string;
        subdenom: string;
    };
}
export interface AminoMsgMintDenom extends AminoMsg {
    type: "/ollo.reserve.v1.MsgMintDenom";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgBurnDenom extends AminoMsg {
    type: "/ollo.reserve.v1.MsgBurnDenom";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgChangeDenomAdmin extends AminoMsg {
    type: "/ollo.reserve.v1.MsgChangeDenomAdmin";
    value: {
        sender: string;
        denom: string;
        new_admin: string;
    };
}
export interface AminoMsgSetDenomMetadata extends AminoMsg {
    type: "/ollo.reserve.v1.MsgSetDenomMetadata";
    value: {
        sender: string;
        metadata: {
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
                aliases: string[];
            }[];
            base: string;
            display: string;
            name: string;
            symbol: string;
            uri: string;
            uri_hash: string;
        };
    };
}
export interface AminoMsgForceTransfer extends AminoMsg {
    type: "/ollo.reserve.v1.MsgForceTransfer";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        };
        transferFromAddress: string;
        transferToAddress: string;
    };
}
export declare const AminoConverter: {
    "/ollo.reserve.v1.MsgCreateDenom": {
        aminoType: string;
        toAmino: ({ sender, subdenom }: MsgCreateDenom) => AminoMsgCreateDenom["value"];
        fromAmino: ({ sender, subdenom }: AminoMsgCreateDenom["value"]) => MsgCreateDenom;
    };
    "/ollo.reserve.v1.MsgMintDenom": {
        aminoType: string;
        toAmino: ({ sender, amount }: MsgMintDenom) => AminoMsgMintDenom["value"];
        fromAmino: ({ sender, amount }: AminoMsgMintDenom["value"]) => MsgMintDenom;
    };
    "/ollo.reserve.v1.MsgBurnDenom": {
        aminoType: string;
        toAmino: ({ sender, amount }: MsgBurnDenom) => AminoMsgBurnDenom["value"];
        fromAmino: ({ sender, amount }: AminoMsgBurnDenom["value"]) => MsgBurnDenom;
    };
    "/ollo.reserve.v1.MsgChangeDenomAdmin": {
        aminoType: string;
        toAmino: ({ sender, denom, newAdmin }: MsgChangeDenomAdmin) => AminoMsgChangeDenomAdmin["value"];
        fromAmino: ({ sender, denom, new_admin }: AminoMsgChangeDenomAdmin["value"]) => MsgChangeDenomAdmin;
    };
    "/ollo.reserve.v1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: ({ sender, metadata }: MsgSetDenomMetadata) => AminoMsgSetDenomMetadata["value"];
        fromAmino: ({ sender, metadata }: AminoMsgSetDenomMetadata["value"]) => MsgSetDenomMetadata;
    };
    "/ollo.reserve.v1.MsgForceTransfer": {
        aminoType: string;
        toAmino: ({ sender, amount, transferFromAddress, transferToAddress }: MsgForceTransfer) => AminoMsgForceTransfer["value"];
        fromAmino: ({ sender, amount, transferFromAddress, transferToAddress }: AminoMsgForceTransfer["value"]) => MsgForceTransfer;
    };
};
