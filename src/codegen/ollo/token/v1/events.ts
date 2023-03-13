import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventTokenIssued {
  name: string;
  symbol: string;
  owner: string;
}
export interface EventTokenIssuedSDKType {
  name: string;
  symbol: string;
  owner: string;
}
export interface EventTokenBurned {
  name: string;
  symbol: string;
  owner: string;
}
export interface EventTokenBurnedSDKType {
  name: string;
  symbol: string;
  owner: string;
}
export interface EventTokenMinted {
  name: string;
  symbol: string;
  owner: string;
}
export interface EventTokenMintedSDKType {
  name: string;
  symbol: string;
  owner: string;
}
export interface EventTokenEdit {
  name: string;
  symbol: string;
  owner: string;
}
export interface EventTokenEditSDKType {
  name: string;
  symbol: string;
  owner: string;
}
export interface EventTokenTransferredOwner {
  name: string;
  symbol: string;
  owner: string;
}
export interface EventTokenTransferredOwnerSDKType {
  name: string;
  symbol: string;
  owner: string;
}

function createBaseEventTokenIssued(): EventTokenIssued {
  return {
    name: "",
    symbol: "",
    owner: ""
  };
}

export const EventTokenIssued = {
  encode(message: EventTokenIssued, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenIssued {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTokenIssued();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.symbol = reader.string();
          break;

        case 3:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventTokenIssued>): EventTokenIssued {
    const message = createBaseEventTokenIssued();
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseEventTokenBurned(): EventTokenBurned {
  return {
    name: "",
    symbol: "",
    owner: ""
  };
}

export const EventTokenBurned = {
  encode(message: EventTokenBurned, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenBurned {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTokenBurned();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.symbol = reader.string();
          break;

        case 3:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventTokenBurned>): EventTokenBurned {
    const message = createBaseEventTokenBurned();
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseEventTokenMinted(): EventTokenMinted {
  return {
    name: "",
    symbol: "",
    owner: ""
  };
}

export const EventTokenMinted = {
  encode(message: EventTokenMinted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenMinted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTokenMinted();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.symbol = reader.string();
          break;

        case 3:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventTokenMinted>): EventTokenMinted {
    const message = createBaseEventTokenMinted();
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseEventTokenEdit(): EventTokenEdit {
  return {
    name: "",
    symbol: "",
    owner: ""
  };
}

export const EventTokenEdit = {
  encode(message: EventTokenEdit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenEdit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTokenEdit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.symbol = reader.string();
          break;

        case 3:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventTokenEdit>): EventTokenEdit {
    const message = createBaseEventTokenEdit();
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseEventTokenTransferredOwner(): EventTokenTransferredOwner {
  return {
    name: "",
    symbol: "",
    owner: ""
  };
}

export const EventTokenTransferredOwner = {
  encode(message: EventTokenTransferredOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenTransferredOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTokenTransferredOwner();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.symbol = reader.string();
          break;

        case 3:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventTokenTransferredOwner>): EventTokenTransferredOwner {
    const message = createBaseEventTokenTransferredOwner();
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};