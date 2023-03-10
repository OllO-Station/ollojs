import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateRequest, MsgDepositRequest, MsgWithdrawRequest, MsgDrawRequest, MsgRepayRequest, MsgCloseRequest } from "./tx";
export interface AminoMsgCreateRequest extends AminoMsg {
  type: "/ollo.emissions.v1.MsgCreateRequest";
  value: {
    from: string;
    amount_in: string;
    amount_out: string;
  };
}
export interface AminoMsgDepositRequest extends AminoMsg {
  type: "/ollo.emissions.v1.MsgDepositRequest";
  value: {
    from: string;
    user_emission_id: string;
    amount: string;
  };
}
export interface AminoMsgWithdrawRequest extends AminoMsg {
  type: "/ollo.emissions.v1.MsgWithdrawRequest";
  value: {
    from: string;
    user_emission_id: string;
    amount: string;
  };
}
export interface AminoMsgDrawRequest extends AminoMsg {
  type: "/ollo.emissions.v1.MsgDrawRequest";
  value: {
    from: string;
    user_emission_id: string;
    amount: string;
  };
}
export interface AminoMsgRepayRequest extends AminoMsg {
  type: "/ollo.emissions.v1.MsgRepayRequest";
  value: {
    from: string;
    user_emission_id: string;
    amount: string;
  };
}
export interface AminoMsgCloseRequest extends AminoMsg {
  type: "/ollo.emissions.v1.MsgCloseRequest";
  value: {
    from: string;
    user_emission_id: string;
  };
}
export const AminoConverter = {
  "/ollo.emissions.v1.MsgCreateRequest": {
    aminoType: "/ollo.emissions.v1.MsgCreateRequest",
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
  "/ollo.emissions.v1.MsgDepositRequest": {
    aminoType: "/ollo.emissions.v1.MsgDepositRequest",
    toAmino: ({
      from,
      userEmissionId,
      amount
    }: MsgDepositRequest): AminoMsgDepositRequest["value"] => {
      return {
        from,
        user_emission_id: userEmissionId.toString(),
        amount
      };
    },
    fromAmino: ({
      from,
      user_emission_id,
      amount
    }: AminoMsgDepositRequest["value"]): MsgDepositRequest => {
      return {
        from,
        userEmissionId: Long.fromString(user_emission_id),
        amount
      };
    }
  },
  "/ollo.emissions.v1.MsgWithdrawRequest": {
    aminoType: "/ollo.emissions.v1.MsgWithdrawRequest",
    toAmino: ({
      from,
      userEmissionId,
      amount
    }: MsgWithdrawRequest): AminoMsgWithdrawRequest["value"] => {
      return {
        from,
        user_emission_id: userEmissionId.toString(),
        amount
      };
    },
    fromAmino: ({
      from,
      user_emission_id,
      amount
    }: AminoMsgWithdrawRequest["value"]): MsgWithdrawRequest => {
      return {
        from,
        userEmissionId: Long.fromString(user_emission_id),
        amount
      };
    }
  },
  "/ollo.emissions.v1.MsgDrawRequest": {
    aminoType: "/ollo.emissions.v1.MsgDrawRequest",
    toAmino: ({
      from,
      userEmissionId,
      amount
    }: MsgDrawRequest): AminoMsgDrawRequest["value"] => {
      return {
        from,
        user_emission_id: userEmissionId.toString(),
        amount
      };
    },
    fromAmino: ({
      from,
      user_emission_id,
      amount
    }: AminoMsgDrawRequest["value"]): MsgDrawRequest => {
      return {
        from,
        userEmissionId: Long.fromString(user_emission_id),
        amount
      };
    }
  },
  "/ollo.emissions.v1.MsgRepayRequest": {
    aminoType: "/ollo.emissions.v1.MsgRepayRequest",
    toAmino: ({
      from,
      userEmissionId,
      amount
    }: MsgRepayRequest): AminoMsgRepayRequest["value"] => {
      return {
        from,
        user_emission_id: userEmissionId.toString(),
        amount
      };
    },
    fromAmino: ({
      from,
      user_emission_id,
      amount
    }: AminoMsgRepayRequest["value"]): MsgRepayRequest => {
      return {
        from,
        userEmissionId: Long.fromString(user_emission_id),
        amount
      };
    }
  },
  "/ollo.emissions.v1.MsgCloseRequest": {
    aminoType: "/ollo.emissions.v1.MsgCloseRequest",
    toAmino: ({
      from,
      userEmissionId
    }: MsgCloseRequest): AminoMsgCloseRequest["value"] => {
      return {
        from,
        user_emission_id: userEmissionId.toString()
      };
    },
    fromAmino: ({
      from,
      user_emission_id
    }: AminoMsgCloseRequest["value"]): MsgCloseRequest => {
      return {
        from,
        userEmissionId: Long.fromString(user_emission_id)
      };
    }
  }
};