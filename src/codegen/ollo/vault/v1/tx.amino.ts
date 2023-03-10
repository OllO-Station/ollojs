import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/ollo.vault.v1.MsgCreateRequest": {
    aminoType: "/ollo.vault.v1.MsgCreateRequest",
    toAmino: ({
      from,
      amountIn,
      amountOut
    }: MsgCreateRequest): AminoMsgCreateRequest["value"] => {
      return {
        from,
        amount_in: amountIn,
        amount_out: amountOut
      };
    },
    fromAmino: ({
      from,
      amount_in,
      amount_out
    }: AminoMsgCreateRequest["value"]): MsgCreateRequest => {
      return {
        from,
        amountIn: amount_in,
        amountOut: amount_out
      };
    }
  },
  "/ollo.vault.v1.MsgDepositRequest": {
    aminoType: "/ollo.vault.v1.MsgDepositRequest",
    toAmino: ({
      from,
      userVaultId,
      amount
    }: MsgDepositRequest): AminoMsgDepositRequest["value"] => {
      return {
        from,
        user_vault_id: userVaultId.toString(),
        amount
      };
    },
    fromAmino: ({
      from,
      user_vault_id,
      amount
    }: AminoMsgDepositRequest["value"]): MsgDepositRequest => {
      return {
        from,
        userVaultId: Long.fromString(user_vault_id),
        amount
      };
    }
  },
  "/ollo.vault.v1.MsgWithdrawRequest": {
    aminoType: "/ollo.vault.v1.MsgWithdrawRequest",
    toAmino: ({
      from,
      userVaultId,
      amount
    }: MsgWithdrawRequest): AminoMsgWithdrawRequest["value"] => {
      return {
        from,
        user_vault_id: userVaultId.toString(),
        amount
      };
    },
    fromAmino: ({
      from,
      user_vault_id,
      amount
    }: AminoMsgWithdrawRequest["value"]): MsgWithdrawRequest => {
      return {
        from,
        userVaultId: Long.fromString(user_vault_id),
        amount
      };
    }
  },
  "/ollo.vault.v1.MsgDrawRequest": {
    aminoType: "/ollo.vault.v1.MsgDrawRequest",
    toAmino: ({
      from,
      userVaultId,
      amount
    }: MsgDrawRequest): AminoMsgDrawRequest["value"] => {
      return {
        from,
        user_vault_id: userVaultId.toString(),
        amount
      };
    },
    fromAmino: ({
      from,
      user_vault_id,
      amount
    }: AminoMsgDrawRequest["value"]): MsgDrawRequest => {
      return {
        from,
        userVaultId: Long.fromString(user_vault_id),
        amount
      };
    }
  },
  "/ollo.vault.v1.MsgRepayRequest": {
    aminoType: "/ollo.vault.v1.MsgRepayRequest",
    toAmino: ({
      from,
      userVaultId,
      amount
    }: MsgRepayRequest): AminoMsgRepayRequest["value"] => {
      return {
        from,
        user_vault_id: userVaultId.toString(),
        amount
      };
    },
    fromAmino: ({
      from,
      user_vault_id,
      amount
    }: AminoMsgRepayRequest["value"]): MsgRepayRequest => {
      return {
        from,
        userVaultId: Long.fromString(user_vault_id),
        amount
      };
    }
  },
  "/ollo.vault.v1.MsgCloseRequest": {
    aminoType: "/ollo.vault.v1.MsgCloseRequest",
    toAmino: ({
      from,
      userVaultId
    }: MsgCloseRequest): AminoMsgCloseRequest["value"] => {
      return {
        from,
        user_vault_id: userVaultId.toString()
      };
    },
    fromAmino: ({
      from,
      user_vault_id
    }: AminoMsgCloseRequest["value"]): MsgCloseRequest => {
      return {
        from,
        userVaultId: Long.fromString(user_vault_id)
      };
    }
  }
};