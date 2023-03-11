import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** MsgRegisterAccount defines the request message for MsgRegisterAccount */

export interface MsgRegisterAccount {
  /** owner represents the owner of the interchain account */
  owner: string;
  /** connectionId represents the IBC `connectionId` of the host chain */

  connectionId: string;
  /** version represents the version of the ICA channel */

  version: string;
}
/** MsgRegisterAccount defines the request message for MsgRegisterAccount */

export interface MsgRegisterAccountSDKType {
  owner: string;
  connectionId: string;
  version: string;
}
/** MsgRegisterAccountResponse defines the response message for MsgRegisterAccount */

export interface MsgRegisterAccountResponse {}
/** MsgRegisterAccountResponse defines the response message for MsgRegisterAccount */

export interface MsgRegisterAccountResponseSDKType {}
/** MsgSubmitTx defines the request message for MsgSubmitTx */

export interface MsgSubmitTx {
  /** owner represents the owner of the interchain account */
  owner: string;
  /** connectionId represents the IBC `connectionId` of the host chain */

  connectionId: string;
  /** msgs represents the transactions to be submitted to the host chain */

  msgs: Any[];
  /** timeoutDuration represents the timeout duration for the IBC packet from last block */

  timeoutDuration?: Duration;
}
/** MsgSubmitTx defines the request message for MsgSubmitTx */

export interface MsgSubmitTxSDKType {
  owner: string;
  connectionId: string;
  msgs: AnySDKType[];
  timeoutDuration?: DurationSDKType;
}
/** MsgSubmitTxResponse defines the response message for MsgSubmitTx */

export interface MsgSubmitTxResponse {}
/** MsgSubmitTxResponse defines the response message for MsgSubmitTx */

export interface MsgSubmitTxResponseSDKType {}

function createBaseMsgRegisterAccount(): MsgRegisterAccount {
  return {
    owner: "",
    connectionId: "",
    version: ""
  };
}

export const MsgRegisterAccount = {
  encode(message: MsgRegisterAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }

    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.connectionId = reader.string();
          break;

        case 3:
          message.version = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRegisterAccount>): MsgRegisterAccount {
    const message = createBaseMsgRegisterAccount();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.version = object.version ?? "";
    return message;
  }

};

function createBaseMsgRegisterAccountResponse(): MsgRegisterAccountResponse {
  return {};
}

export const MsgRegisterAccountResponse = {
  encode(_: MsgRegisterAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse {
    const message = createBaseMsgRegisterAccountResponse();
    return message;
  }

};

function createBaseMsgSubmitTx(): MsgSubmitTx {
  return {
    owner: "",
    connectionId: "",
    msgs: [],
    timeoutDuration: undefined
  };
}

export const MsgSubmitTx = {
  encode(message: MsgSubmitTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }

    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.timeoutDuration !== undefined) {
      Duration.encode(message.timeoutDuration, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.connectionId = reader.string();
          break;

        case 3:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;

        case 4:
          message.timeoutDuration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSubmitTx>): MsgSubmitTx {
    const message = createBaseMsgSubmitTx();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    message.timeoutDuration = object.timeoutDuration !== undefined && object.timeoutDuration !== null ? Duration.fromPartial(object.timeoutDuration) : undefined;
    return message;
  }

};

function createBaseMsgSubmitTxResponse(): MsgSubmitTxResponse {
  return {};
}

export const MsgSubmitTxResponse = {
  encode(_: MsgSubmitTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitTxResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgSubmitTxResponse>): MsgSubmitTxResponse {
    const message = createBaseMsgSubmitTxResponse();
    return message;
  }

};