import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/ollo.auth.v1.MsgRegisterAccount": {
    aminoType: "/ollo.auth.v1.MsgRegisterAccount",
    toAmino: ({
      owner,
      connectionId,
      version
    }: MsgRegisterAccount): AminoMsgRegisterAccount["value"] => {
      return {
        owner,
        connectionId,
        version
      };
    },
    fromAmino: ({
      owner,
      connectionId,
      version
    }: AminoMsgRegisterAccount["value"]): MsgRegisterAccount => {
      return {
        owner,
        connectionId,
        version
      };
    }
  },
  "/ollo.auth.v1.MsgSubmitTx": {
    aminoType: "/ollo.auth.v1.MsgSubmitTx",
    toAmino: ({
      owner,
      connectionId,
      msgs,
      timeoutDuration
    }: MsgSubmitTx): AminoMsgSubmitTx["value"] => {
      return {
        owner,
        connectionId,
        msgs: msgs.map(el0 => ({
          type_url: el0.typeUrl,
          value: el0.value
        })),
        timeoutDuration: (timeoutDuration * 1_000_000_000).toString()
      };
    },
    fromAmino: ({
      owner,
      connectionId,
      msgs,
      timeoutDuration
    }: AminoMsgSubmitTx["value"]): MsgSubmitTx => {
      return {
        owner,
        connectionId,
        msgs: msgs.map(el0 => ({
          typeUrl: el0.type_url,
          value: el0.value
        })),
        timeoutDuration: {
          seconds: Long.fromNumber(Math.floor(parseInt(timeoutDuration) / 1_000_000_000)),
          nanos: parseInt(timeoutDuration) % 1_000_000_000
        }
      };
    }
  }
};