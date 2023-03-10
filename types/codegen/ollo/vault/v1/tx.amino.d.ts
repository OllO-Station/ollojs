import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateRequest, MsgDepositRequest, MsgWithdrawRequest, MsgDrawRequest, MsgRepayRequest, MsgCloseRequest } from "./tx";
export interface AminoMsgCreateRequest extends AminoMsg {
    type: "/ollo.vault.v1.MsgCreateRequest";
    value: {
        from: string;
        amount_in: string;
        amount_out: string;
    };
}
export interface AminoMsgDepositRequest extends AminoMsg {
    type: "/ollo.vault.v1.MsgDepositRequest";
    value: {
        from: string;
        user_vault_id: string;
        amount: string;
    };
}
export interface AminoMsgWithdrawRequest extends AminoMsg {
    type: "/ollo.vault.v1.MsgWithdrawRequest";
    value: {
        from: string;
        user_vault_id: string;
        amount: string;
    };
}
export interface AminoMsgDrawRequest extends AminoMsg {
    type: "/ollo.vault.v1.MsgDrawRequest";
    value: {
        from: string;
        user_vault_id: string;
        amount: string;
    };
}
export interface AminoMsgRepayRequest extends AminoMsg {
    type: "/ollo.vault.v1.MsgRepayRequest";
    value: {
        from: string;
        user_vault_id: string;
        amount: string;
    };
}
export interface AminoMsgCloseRequest extends AminoMsg {
    type: "/ollo.vault.v1.MsgCloseRequest";
    value: {
        from: string;
        user_vault_id: string;
    };
}
export declare const AminoConverter: {
    "/ollo.vault.v1.MsgCreateRequest": {
        aminoType: string;
        toAmino: ({ from, amountIn, amountOut }: MsgCreateRequest) => AminoMsgCreateRequest["value"];
        fromAmino: ({ from, amount_in, amount_out }: AminoMsgCreateRequest["value"]) => MsgCreateRequest;
    };
    "/ollo.vault.v1.MsgDepositRequest": {
        aminoType: string;
        toAmino: ({ from, userVaultId, amount }: MsgDepositRequest) => AminoMsgDepositRequest["value"];
        fromAmino: ({ from, user_vault_id, amount }: AminoMsgDepositRequest["value"]) => MsgDepositRequest;
    };
    "/ollo.vault.v1.MsgWithdrawRequest": {
        aminoType: string;
        toAmino: ({ from, userVaultId, amount }: MsgWithdrawRequest) => AminoMsgWithdrawRequest["value"];
        fromAmino: ({ from, user_vault_id, amount }: AminoMsgWithdrawRequest["value"]) => MsgWithdrawRequest;
    };
    "/ollo.vault.v1.MsgDrawRequest": {
        aminoType: string;
        toAmino: ({ from, userVaultId, amount }: MsgDrawRequest) => AminoMsgDrawRequest["value"];
        fromAmino: ({ from, user_vault_id, amount }: AminoMsgDrawRequest["value"]) => MsgDrawRequest;
    };
    "/ollo.vault.v1.MsgRepayRequest": {
        aminoType: string;
        toAmino: ({ from, userVaultId, amount }: MsgRepayRequest) => AminoMsgRepayRequest["value"];
        fromAmino: ({ from, user_vault_id, amount }: AminoMsgRepayRequest["value"]) => MsgRepayRequest;
    };
    "/ollo.vault.v1.MsgCloseRequest": {
        aminoType: string;
        toAmino: ({ from, userVaultId }: MsgCloseRequest) => AminoMsgCloseRequest["value"];
        fromAmino: ({ from, user_vault_id }: AminoMsgCloseRequest["value"]) => MsgCloseRequest;
    };
};
