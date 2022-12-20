import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface MsgBuyName {
  creator: string;
  name: string;
  bidderAddr: string;
  bid: string;
}
export interface MsgBuyNameSDKType {
  creator: string;
  name: string;
  bidderAddr: string;
  bid: string;
}
export interface MsgBuyNameResponse {}
export interface MsgBuyNameResponseSDKType {}
export interface MsgSellName {
  creator: string;
  name: string;
  sellerAddr: string;
  offer: string;
}
export interface MsgSellNameSDKType {
  creator: string;
  name: string;
  sellerAddr: string;
  offer: string;
}
export interface MsgSellNameResponse {}
export interface MsgSellNameResponseSDKType {}
export interface MsgSetName {
  creatorAddr: string;
  name: string;
  value: string;
}
export interface MsgSetNameSDKType {
  creatorAddr: string;
  name: string;
  value: string;
}
export interface MsgDeleteName {
  creatorAddr: string;
  name: string;
}
export interface MsgDeleteNameSDKType {
  creatorAddr: string;
  name: string;
}
export interface MsgDeleteNameResponse {}
export interface MsgDeleteNameResponseSDKType {}
export interface MsgSetNameResponse {}
export interface MsgSetNameResponseSDKType {}
export interface MsgAddThread {
  creator: string;
  name: string;
  thread: string;
  addr: string;
  offer: string;
}
export interface MsgAddThreadSDKType {
  creator: string;
  name: string;
  thread: string;
  addr: string;
  offer: string;
}
export interface MsgAddThreadResponse {}
export interface MsgAddThreadResponseSDKType {}
export interface MsgDeleteThread {
  creator: string;
  name: string;
  thread: string;
  addr: string;
}
export interface MsgDeleteThreadSDKType {
  creator: string;
  name: string;
  thread: string;
  addr: string;
}
export interface MsgDeleteThreadResponse {}
export interface MsgDeleteThreadResponseSDKType {}

function createBaseMsgBuyName(): MsgBuyName {
  return {
    creator: "",
    name: "",
    bidderAddr: "",
    bid: ""
  };
}

export const MsgBuyName = {
  encode(message: MsgBuyName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.bidderAddr !== "") {
      writer.uint32(26).string(message.bidderAddr);
    }

    if (message.bid !== "") {
      writer.uint32(34).string(message.bid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyName();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.bidderAddr = reader.string();
          break;

        case 4:
          message.bid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBuyName>): MsgBuyName {
    const message = createBaseMsgBuyName();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.bidderAddr = object.bidderAddr ?? "";
    message.bid = object.bid ?? "";
    return message;
  }

};

function createBaseMsgBuyNameResponse(): MsgBuyNameResponse {
  return {};
}

export const MsgBuyNameResponse = {
  encode(_: MsgBuyNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyNameResponse();

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

  fromPartial(_: DeepPartial<MsgBuyNameResponse>): MsgBuyNameResponse {
    const message = createBaseMsgBuyNameResponse();
    return message;
  }

};

function createBaseMsgSellName(): MsgSellName {
  return {
    creator: "",
    name: "",
    sellerAddr: "",
    offer: ""
  };
}

export const MsgSellName = {
  encode(message: MsgSellName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.sellerAddr !== "") {
      writer.uint32(26).string(message.sellerAddr);
    }

    if (message.offer !== "") {
      writer.uint32(34).string(message.offer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellName();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.sellerAddr = reader.string();
          break;

        case 4:
          message.offer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSellName>): MsgSellName {
    const message = createBaseMsgSellName();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.sellerAddr = object.sellerAddr ?? "";
    message.offer = object.offer ?? "";
    return message;
  }

};

function createBaseMsgSellNameResponse(): MsgSellNameResponse {
  return {};
}

export const MsgSellNameResponse = {
  encode(_: MsgSellNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellNameResponse();

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

  fromPartial(_: DeepPartial<MsgSellNameResponse>): MsgSellNameResponse {
    const message = createBaseMsgSellNameResponse();
    return message;
  }

};

function createBaseMsgSetName(): MsgSetName {
  return {
    creatorAddr: "",
    name: "",
    value: ""
  };
}

export const MsgSetName = {
  encode(message: MsgSetName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creatorAddr !== "") {
      writer.uint32(10).string(message.creatorAddr);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetName();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creatorAddr = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetName>): MsgSetName {
    const message = createBaseMsgSetName();
    message.creatorAddr = object.creatorAddr ?? "";
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseMsgDeleteName(): MsgDeleteName {
  return {
    creatorAddr: "",
    name: ""
  };
}

export const MsgDeleteName = {
  encode(message: MsgDeleteName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creatorAddr !== "") {
      writer.uint32(10).string(message.creatorAddr);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteName();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creatorAddr = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDeleteName>): MsgDeleteName {
    const message = createBaseMsgDeleteName();
    message.creatorAddr = object.creatorAddr ?? "";
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseMsgDeleteNameResponse(): MsgDeleteNameResponse {
  return {};
}

export const MsgDeleteNameResponse = {
  encode(_: MsgDeleteNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteNameResponse();

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

  fromPartial(_: DeepPartial<MsgDeleteNameResponse>): MsgDeleteNameResponse {
    const message = createBaseMsgDeleteNameResponse();
    return message;
  }

};

function createBaseMsgSetNameResponse(): MsgSetNameResponse {
  return {};
}

export const MsgSetNameResponse = {
  encode(_: MsgSetNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNameResponse();

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

  fromPartial(_: DeepPartial<MsgSetNameResponse>): MsgSetNameResponse {
    const message = createBaseMsgSetNameResponse();
    return message;
  }

};

function createBaseMsgAddThread(): MsgAddThread {
  return {
    creator: "",
    name: "",
    thread: "",
    addr: "",
    offer: ""
  };
}

export const MsgAddThread = {
  encode(message: MsgAddThread, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.thread !== "") {
      writer.uint32(26).string(message.thread);
    }

    if (message.addr !== "") {
      writer.uint32(34).string(message.addr);
    }

    if (message.offer !== "") {
      writer.uint32(42).string(message.offer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddThread {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddThread();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.thread = reader.string();
          break;

        case 4:
          message.addr = reader.string();
          break;

        case 5:
          message.offer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddThread>): MsgAddThread {
    const message = createBaseMsgAddThread();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.thread = object.thread ?? "";
    message.addr = object.addr ?? "";
    message.offer = object.offer ?? "";
    return message;
  }

};

function createBaseMsgAddThreadResponse(): MsgAddThreadResponse {
  return {};
}

export const MsgAddThreadResponse = {
  encode(_: MsgAddThreadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddThreadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddThreadResponse();

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

  fromPartial(_: DeepPartial<MsgAddThreadResponse>): MsgAddThreadResponse {
    const message = createBaseMsgAddThreadResponse();
    return message;
  }

};

function createBaseMsgDeleteThread(): MsgDeleteThread {
  return {
    creator: "",
    name: "",
    thread: "",
    addr: ""
  };
}

export const MsgDeleteThread = {
  encode(message: MsgDeleteThread, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.thread !== "") {
      writer.uint32(26).string(message.thread);
    }

    if (message.addr !== "") {
      writer.uint32(34).string(message.addr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteThread {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteThread();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.thread = reader.string();
          break;

        case 4:
          message.addr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDeleteThread>): MsgDeleteThread {
    const message = createBaseMsgDeleteThread();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.thread = object.thread ?? "";
    message.addr = object.addr ?? "";
    return message;
  }

};

function createBaseMsgDeleteThreadResponse(): MsgDeleteThreadResponse {
  return {};
}

export const MsgDeleteThreadResponse = {
  encode(_: MsgDeleteThreadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteThreadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteThreadResponse();

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

  fromPartial(_: DeepPartial<MsgDeleteThreadResponse>): MsgDeleteThreadResponse {
    const message = createBaseMsgDeleteThreadResponse();
    return message;
  }

};