import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventNameExpired {}
export interface EventNameExpiredSDKType {}
export interface EventNameListed {}
export interface EventNameListedSDKType {}
export interface EventNameListingCanceled {}
export interface EventNameListingCanceledSDKType {}
export interface EventNameUnlisted {}
export interface EventNameUnlistedSDKType {}
export interface EventNamePurchased {}
export interface EventNamePurchasedSDKType {}
export interface EventNameTransferred {}
export interface EventNameTransferredSDKType {}
export interface EventNameRenewed {}
export interface EventNameRenewedSDKType {}
export interface EventNameAddThread {}
export interface EventNameAddThreadSDKType {}
export interface EventNameRemoveThread {}
export interface EventNameRemoveThreadSDKType {}

function createBaseEventNameExpired(): EventNameExpired {
  return {};
}

export const EventNameExpired = {
  encode(_: EventNameExpired, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameExpired {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameExpired();

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

  fromPartial(_: DeepPartial<EventNameExpired>): EventNameExpired {
    const message = createBaseEventNameExpired();
    return message;
  }

};

function createBaseEventNameListed(): EventNameListed {
  return {};
}

export const EventNameListed = {
  encode(_: EventNameListed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameListed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameListed();

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

  fromPartial(_: DeepPartial<EventNameListed>): EventNameListed {
    const message = createBaseEventNameListed();
    return message;
  }

};

function createBaseEventNameListingCanceled(): EventNameListingCanceled {
  return {};
}

export const EventNameListingCanceled = {
  encode(_: EventNameListingCanceled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameListingCanceled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameListingCanceled();

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

  fromPartial(_: DeepPartial<EventNameListingCanceled>): EventNameListingCanceled {
    const message = createBaseEventNameListingCanceled();
    return message;
  }

};

function createBaseEventNameUnlisted(): EventNameUnlisted {
  return {};
}

export const EventNameUnlisted = {
  encode(_: EventNameUnlisted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameUnlisted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameUnlisted();

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

  fromPartial(_: DeepPartial<EventNameUnlisted>): EventNameUnlisted {
    const message = createBaseEventNameUnlisted();
    return message;
  }

};

function createBaseEventNamePurchased(): EventNamePurchased {
  return {};
}

export const EventNamePurchased = {
  encode(_: EventNamePurchased, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNamePurchased {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNamePurchased();

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

  fromPartial(_: DeepPartial<EventNamePurchased>): EventNamePurchased {
    const message = createBaseEventNamePurchased();
    return message;
  }

};

function createBaseEventNameTransferred(): EventNameTransferred {
  return {};
}

export const EventNameTransferred = {
  encode(_: EventNameTransferred, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameTransferred {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameTransferred();

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

  fromPartial(_: DeepPartial<EventNameTransferred>): EventNameTransferred {
    const message = createBaseEventNameTransferred();
    return message;
  }

};

function createBaseEventNameRenewed(): EventNameRenewed {
  return {};
}

export const EventNameRenewed = {
  encode(_: EventNameRenewed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameRenewed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameRenewed();

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

  fromPartial(_: DeepPartial<EventNameRenewed>): EventNameRenewed {
    const message = createBaseEventNameRenewed();
    return message;
  }

};

function createBaseEventNameAddThread(): EventNameAddThread {
  return {};
}

export const EventNameAddThread = {
  encode(_: EventNameAddThread, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameAddThread {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameAddThread();

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

  fromPartial(_: DeepPartial<EventNameAddThread>): EventNameAddThread {
    const message = createBaseEventNameAddThread();
    return message;
  }

};

function createBaseEventNameRemoveThread(): EventNameRemoveThread {
  return {};
}

export const EventNameRemoveThread = {
  encode(_: EventNameRemoveThread, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNameRemoveThread {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNameRemoveThread();

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

  fromPartial(_: DeepPartial<EventNameRemoveThread>): EventNameRemoveThread {
    const message = createBaseEventNameRemoveThread();
    return message;
  }

};