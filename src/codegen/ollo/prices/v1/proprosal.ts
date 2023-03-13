import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface ProprosalAddDenomFeed {
  title: string;
  description: string;
  denomIds: string[];
}
export interface ProprosalAddDenomFeedSDKType {
  title: string;
  description: string;
  denom_ids: string[];
}
export interface ProprosalRemoveDenomFeed {
  title: string;
  description: string;
  denomIds: string[];
}
export interface ProprosalRemoveDenomFeedSDKType {
  title: string;
  description: string;
  denom_ids: string[];
}

function createBaseProprosalAddDenomFeed(): ProprosalAddDenomFeed {
  return {
    title: "",
    description: "",
    denomIds: []
  };
}

export const ProprosalAddDenomFeed = {
  encode(message: ProprosalAddDenomFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.denomIds) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProprosalAddDenomFeed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProprosalAddDenomFeed();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.denomIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ProprosalAddDenomFeed>): ProprosalAddDenomFeed {
    const message = createBaseProprosalAddDenomFeed();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denomIds = object.denomIds?.map(e => e) || [];
    return message;
  }

};

function createBaseProprosalRemoveDenomFeed(): ProprosalRemoveDenomFeed {
  return {
    title: "",
    description: "",
    denomIds: []
  };
}

export const ProprosalRemoveDenomFeed = {
  encode(message: ProprosalRemoveDenomFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.denomIds) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProprosalRemoveDenomFeed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProprosalRemoveDenomFeed();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.denomIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ProprosalRemoveDenomFeed>): ProprosalRemoveDenomFeed {
    const message = createBaseProprosalRemoveDenomFeed();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denomIds = object.denomIds?.map(e => e) || [];
    return message;
  }

};