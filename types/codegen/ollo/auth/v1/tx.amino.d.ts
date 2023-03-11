import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterAccount, MsgSubmitTx } from "./tx";
export interface AminoMsgRegisterAccount extends AminoMsg {
    type: "/ollo.auth.v1.MsgRegisterAccount";
    value: {
        owner: string;
        connectionId: string;
        version: string;
    };
}
export interface AminoMsgSubmitTx extends AminoMsg {
    type: "/ollo.auth.v1.MsgSubmitTx";
    value: {
        owner: string;
        connectionId: string;
        msgs: {
            type_url: string;
            value: Uint8Array;
        }[];
        timeoutDuration: {
            seconds: string;
            nanos: number;
        };
    };
}
export declare const AminoConverter: {
    "/ollo.auth.v1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: ({ owner, connectionId, version }: MsgRegisterAccount) => AminoMsgRegisterAccount["value"];
        fromAmino: ({ owner, connectionId, version }: AminoMsgRegisterAccount["value"]) => MsgRegisterAccount;
    };
    "/ollo.auth.v1.MsgSubmitTx": {
        aminoType: string;
        toAmino: ({ owner, connectionId, msgs, timeoutDuration }: MsgSubmitTx) => AminoMsgSubmitTx["value"];
        fromAmino: ({ owner, connectionId, msgs, timeoutDuration }: AminoMsgSubmitTx["value"]) => MsgSubmitTx;
    };
};
