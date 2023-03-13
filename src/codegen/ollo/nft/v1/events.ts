import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventMintNft {
  id: string;
  denomId: string;
  data: Uint8Array;
  creator: string;
}
export interface EventMintNftSDKType {
  id: string;
  denom_id: string;
  data: Uint8Array;
  creator: string;
}
export interface EventSendNft {
  id: string;
  denomId: string;
  data: Uint8Array;
  creator: string;
  recipient: string;
}
export interface EventSendNftSDKType {
  id: string;
  denom_id: string;
  data: Uint8Array;
  creator: string;
  recipient: string;
}
export interface EventBurnNft {
  id: string;
  denomId: string;
  creator: string;
}
export interface EventBurnNftSDKType {
  id: string;
  denom_id: string;
  creator: string;
}
export interface EventCreateDenom {
  id: string;
  name: string;
  denom: string;
  creator: string;
}
export interface EventCreateDenomSDKType {
  id: string;
  name: string;
  denom: string;
  creator: string;
}
export interface EventUpdateDenom {
  id: string;
  name: string;
  denom: string;
  creator: string;
}
export interface EventUpdateDenomSDKType {
  id: string;
  name: string;
  denom: string;
  creator: string;
}
export interface EventTransferDenom {
  id: string;
  name: string;
  denom: string;
  creator: string;
}
export interface EventTransferDenomSDKType {
  id: string;
  name: string;
  denom: string;
  creator: string;
}

function createBaseEventMintNft(): EventMintNft {
  return {
    id: "",
    denomId: "",
    data: new Uint8Array(),
    creator: ""
  };
}

export const EventMintNft = {
  encode(message: EventMintNft, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }

    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }

    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMintNft {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMintNft();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.denomId = reader.string();
          break;

        case 3:
          message.data = reader.bytes();
          break;

        case 4:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventMintNft>): EventMintNft {
    const message = createBaseEventMintNft();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.data = object.data ?? new Uint8Array();
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseEventSendNft(): EventSendNft {
  return {
    id: "",
    denomId: "",
    data: new Uint8Array(),
    creator: "",
    recipient: ""
  };
}

export const EventSendNft = {
  encode(message: EventSendNft, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }

    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }

    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }

    if (message.recipient !== "") {
      writer.uint32(42).string(message.recipient);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSendNft {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSendNft();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.denomId = reader.string();
          break;

        case 3:
          message.data = reader.bytes();
          break;

        case 4:
          message.creator = reader.string();
          break;

        case 5:
          message.recipient = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventSendNft>): EventSendNft {
    const message = createBaseEventSendNft();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.data = object.data ?? new Uint8Array();
    message.creator = object.creator ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  }

};

function createBaseEventBurnNft(): EventBurnNft {
  return {
    id: "",
    denomId: "",
    creator: ""
  };
}

export const EventBurnNft = {
  encode(message: EventBurnNft, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }

    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnNft {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurnNft();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.denomId = reader.string();
          break;

        case 3:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventBurnNft>): EventBurnNft {
    const message = createBaseEventBurnNft();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseEventCreateDenom(): EventCreateDenom {
  return {
    id: "",
    name: "",
    denom: "",
    creator: ""
  };
}

export const EventCreateDenom = {
  encode(message: EventCreateDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCreateDenom>): EventCreateDenom {
    const message = createBaseEventCreateDenom();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.denom = object.denom ?? "";
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseEventUpdateDenom(): EventUpdateDenom {
  return {
    id: "",
    name: "",
    denom: "",
    creator: ""
  };
}

export const EventUpdateDenom = {
  encode(message: EventUpdateDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventUpdateDenom>): EventUpdateDenom {
    const message = createBaseEventUpdateDenom();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.denom = object.denom ?? "";
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseEventTransferDenom(): EventTransferDenom {
  return {
    id: "",
    name: "",
    denom: "",
    creator: ""
  };
}

export const EventTransferDenom = {
  encode(message: EventTransferDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTransferDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransferDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventTransferDenom>): EventTransferDenom {
    const message = createBaseEventTransferDenom();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.denom = object.denom ?? "";
    message.creator = object.creator ?? "";
    return message;
  }

};