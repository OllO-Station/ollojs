import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Token, TokenSDKType } from "./token";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventIssueToken {
  denom: string;
  creator: string;
}
export interface EventIssueTokenSDKType {
  denom: string;
  creator: string;
}
export interface EventMintToken {
  creator: string;
  amount?: Coin;
}
export interface EventMintTokenSDKType {
  creator: string;
  amount?: CoinSDKType;
}
export interface EventBurnToken {
  creator: string;
  amount?: Coin;
}
export interface EventBurnTokenSDKType {
  creator: string;
  amount?: CoinSDKType;
}
export interface EventEditToken {
  denom: string;
  creator: string;
  newTokenInfo?: Token;
}
export interface EventEditTokenSDKType {
  denom: string;
  creator: string;
  new_token_info?: TokenSDKType;
}
export interface EventTransferTokenOwner {
  denom: string;
  oldOwner: string;
  newOwner: string;
}
export interface EventTransferTokenOwnerSDKType {
  denom: string;
  old_owner: string;
  new_owner: string;
}

function createBaseEventIssueToken(): EventIssueToken {
  return {
    denom: "",
    creator: ""
  };
}

export const EventIssueToken = {
  encode(message: EventIssueToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventIssueToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventIssueToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventIssueToken>): EventIssueToken {
    const message = createBaseEventIssueToken();
    message.denom = object.denom ?? "";
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseEventMintToken(): EventMintToken {
  return {
    creator: "",
    amount: undefined
  };
}

export const EventMintToken = {
  encode(message: EventMintToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMintToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMintToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventMintToken>): EventMintToken {
    const message = createBaseEventMintToken();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseEventBurnToken(): EventBurnToken {
  return {
    creator: "",
    amount: undefined
  };
}

export const EventBurnToken = {
  encode(message: EventBurnToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurnToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventBurnToken>): EventBurnToken {
    const message = createBaseEventBurnToken();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseEventEditToken(): EventEditToken {
  return {
    denom: "",
    creator: "",
    newTokenInfo: undefined
  };
}

export const EventEditToken = {
  encode(message: EventEditToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    if (message.newTokenInfo !== undefined) {
      Token.encode(message.newTokenInfo, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEditToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEditToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.newTokenInfo = Token.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventEditToken>): EventEditToken {
    const message = createBaseEventEditToken();
    message.denom = object.denom ?? "";
    message.creator = object.creator ?? "";
    message.newTokenInfo = object.newTokenInfo !== undefined && object.newTokenInfo !== null ? Token.fromPartial(object.newTokenInfo) : undefined;
    return message;
  }

};

function createBaseEventTransferTokenOwner(): EventTransferTokenOwner {
  return {
    denom: "",
    oldOwner: "",
    newOwner: ""
  };
}

export const EventTransferTokenOwner = {
  encode(message: EventTransferTokenOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.oldOwner !== "") {
      writer.uint32(18).string(message.oldOwner);
    }

    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTransferTokenOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransferTokenOwner();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.oldOwner = reader.string();
          break;

        case 3:
          message.newOwner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventTransferTokenOwner>): EventTransferTokenOwner {
    const message = createBaseEventTransferTokenOwner();
    message.denom = object.denom ?? "";
    message.oldOwner = object.oldOwner ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  }

};