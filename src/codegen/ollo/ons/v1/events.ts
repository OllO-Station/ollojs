import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventNameExpired {
  name: string;
  owner: string;
}
export interface EventNameExpiredSDKType {
  name: string;
  owner: string;
}
export interface EventNameListed {
  name: string;
  owner: string;
}
export interface EventNameListedSDKType {
  name: string;
  owner: string;
}
export interface EventNameListingCanceled {
  name: string;
  owner: string;
}
export interface EventNameListingCanceledSDKType {
  name: string;
  owner: string;
}
export interface EventNameUnlisted {
  name: string;
  owner: string;
}
export interface EventNameUnlistedSDKType {
  name: string;
  owner: string;
}
export interface EventNameBought {
  name: string;
  buyer: string;
}
export interface EventNameBoughtSDKType {
  name: string;
  buyer: string;
}
export interface EventNameTransferred {
  name: string;
  owner: string;
  recipient: string;
}
export interface EventNameTransferredSDKType {
  name: string;
  owner: string;
  recipient: string;
}
export interface EventNameRenewed {
  name: string;
  owner: string;
}
export interface EventNameRenewedSDKType {
  name: string;
  owner: string;
}
export interface EventNameAddThread {
  name: string;
  owner: string;
}
export interface EventNameAddThreadSDKType {
  name: string;
  owner: string;
}
export interface EventNameRemoveThread {
  name: string;
  owner: string;
}
export interface EventNameRemoveThreadSDKType {
  name: string;
  owner: string;
}

function createBaseEventNameExpired(): EventNameExpired {
  return {
    name: "",
    owner: ""
  };
}

export const EventNameExpired = {
  encode(message: EventNameExpired, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameExpired {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameExpired();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventNameExpired>): EventNameExpired {
    const message = createBaseEventNameExpired();
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseEventNameListed(): EventNameListed {
  return {
    name: "",
    owner: ""
  };
}

export const EventNameListed = {
  encode(message: EventNameListed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameListed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameListed();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventNameListed>): EventNameListed {
    const message = createBaseEventNameListed();
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseEventNameListingCanceled(): EventNameListingCanceled {
  return {
    name: "",
    owner: ""
  };
}

export const EventNameListingCanceled = {
  encode(message: EventNameListingCanceled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameListingCanceled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameListingCanceled();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventNameListingCanceled>): EventNameListingCanceled {
    const message = createBaseEventNameListingCanceled();
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseEventNameUnlisted(): EventNameUnlisted {
  return {
    name: "",
    owner: ""
  };
}

export const EventNameUnlisted = {
  encode(message: EventNameUnlisted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameUnlisted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameUnlisted();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventNameUnlisted>): EventNameUnlisted {
    const message = createBaseEventNameUnlisted();
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseEventNameBought(): EventNameBought {
  return {
    name: "",
    buyer: ""
  };
}

export const EventNameBought = {
  encode(message: EventNameBought, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.buyer !== "") {
      writer.uint32(18).string(message.buyer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameBought {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameBought();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.buyer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventNameBought>): EventNameBought {
    const message = createBaseEventNameBought();
    message.name = object.name ?? "";
    message.buyer = object.buyer ?? "";
    return message;
  }

};

function createBaseEventNameTransferred(): EventNameTransferred {
  return {
    name: "",
    owner: "",
    recipient: ""
  };
}

export const EventNameTransferred = {
  encode(message: EventNameTransferred, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameTransferred {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameTransferred();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.recipient = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventNameTransferred>): EventNameTransferred {
    const message = createBaseEventNameTransferred();
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  }

};

function createBaseEventNameRenewed(): EventNameRenewed {
  return {
    name: "",
    owner: ""
  };
}

export const EventNameRenewed = {
  encode(message: EventNameRenewed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameRenewed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameRenewed();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventNameRenewed>): EventNameRenewed {
    const message = createBaseEventNameRenewed();
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseEventNameAddThread(): EventNameAddThread {
  return {
    name: "",
    owner: ""
  };
}

export const EventNameAddThread = {
  encode(message: EventNameAddThread, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameAddThread {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameAddThread();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventNameAddThread>): EventNameAddThread {
    const message = createBaseEventNameAddThread();
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseEventNameRemoveThread(): EventNameRemoveThread {
  return {
    name: "",
    owner: ""
  };
}

export const EventNameRemoveThread = {
  encode(message: EventNameRemoveThread, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameRemoveThread {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameRemoveThread();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventNameRemoveThread>): EventNameRemoveThread {
    const message = createBaseEventNameRemoveThread();
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};