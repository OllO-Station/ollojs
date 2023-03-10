import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreateLockRequest {
  depositor: string;
  amount: string;
  assetId: Long;
}
export interface MsgCreateLockRequestSDKType {
  depositor: string;
  amount: string;
  asset_id: Long;
}
export interface MsgCreateLockResponse {}
export interface MsgCreateLockResponseSDKType {}
export interface MsgDepositAssetRequest {
  depositor: string;
  lockerId: Long;
  amount: string;
  assetId: Long;
}
export interface MsgDepositAssetRequestSDKType {
  depositor: string;
  locker_id: Long;
  amount: string;
  asset_id: Long;
}
export interface MsgDepositAssetResponse {}
export interface MsgDepositAssetResponseSDKType {}
export interface MsgWithdrawAssetRequest {
  depositor: string;
  lockerId: Long;
  amount: string;
  assetId: Long;
}
export interface MsgWithdrawAssetRequestSDKType {
  depositor: string;
  locker_id: Long;
  amount: string;
  asset_id: Long;
}
export interface MsgWithdrawAssetResponse {}
export interface MsgWithdrawAssetResponseSDKType {}
export interface MsgCloseLockRequest {
  depositor: string;
  lockerId: Long;
}
export interface MsgCloseLockRequestSDKType {
  depositor: string;
  locker_id: Long;
}
export interface MsgCloseLockResponse {}
export interface MsgCloseLockResponseSDKType {}

function createBaseMsgCreateLockRequest(): MsgCreateLockRequest {
  return {
    depositor: "",
    amount: "",
    assetId: Long.UZERO
  };
}

export const MsgCreateLockRequest = {
  encode(message: MsgCreateLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    if (!message.assetId.isZero()) {
      writer.uint32(24).uint64(message.assetId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLockRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        case 3:
          message.assetId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateLockRequest>): MsgCreateLockRequest {
    const message = createBaseMsgCreateLockRequest();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount ?? "";
    message.assetId = object.assetId !== undefined && object.assetId !== null ? Long.fromValue(object.assetId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCreateLockResponse(): MsgCreateLockResponse {
  return {};
}

export const MsgCreateLockResponse = {
  encode(_: MsgCreateLockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLockResponse();

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

  fromPartial(_: DeepPartial<MsgCreateLockResponse>): MsgCreateLockResponse {
    const message = createBaseMsgCreateLockResponse();
    return message;
  }

};

function createBaseMsgDepositAssetRequest(): MsgDepositAssetRequest {
  return {
    depositor: "",
    lockerId: Long.UZERO,
    amount: "",
    assetId: Long.UZERO
  };
}

export const MsgDepositAssetRequest = {
  encode(message: MsgDepositAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }

    if (!message.lockerId.isZero()) {
      writer.uint32(16).uint64(message.lockerId);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    if (!message.assetId.isZero()) {
      writer.uint32(32).uint64(message.assetId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositAssetRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;

        case 2:
          message.lockerId = (reader.uint64() as Long);
          break;

        case 3:
          message.amount = reader.string();
          break;

        case 4:
          message.assetId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDepositAssetRequest>): MsgDepositAssetRequest {
    const message = createBaseMsgDepositAssetRequest();
    message.depositor = object.depositor ?? "";
    message.lockerId = object.lockerId !== undefined && object.lockerId !== null ? Long.fromValue(object.lockerId) : Long.UZERO;
    message.amount = object.amount ?? "";
    message.assetId = object.assetId !== undefined && object.assetId !== null ? Long.fromValue(object.assetId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgDepositAssetResponse(): MsgDepositAssetResponse {
  return {};
}

export const MsgDepositAssetResponse = {
  encode(_: MsgDepositAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositAssetResponse();

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

  fromPartial(_: DeepPartial<MsgDepositAssetResponse>): MsgDepositAssetResponse {
    const message = createBaseMsgDepositAssetResponse();
    return message;
  }

};

function createBaseMsgWithdrawAssetRequest(): MsgWithdrawAssetRequest {
  return {
    depositor: "",
    lockerId: Long.UZERO,
    amount: "",
    assetId: Long.UZERO
  };
}

export const MsgWithdrawAssetRequest = {
  encode(message: MsgWithdrawAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }

    if (!message.lockerId.isZero()) {
      writer.uint32(16).uint64(message.lockerId);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    if (!message.assetId.isZero()) {
      writer.uint32(32).uint64(message.assetId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAssetRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;

        case 2:
          message.lockerId = (reader.uint64() as Long);
          break;

        case 3:
          message.amount = reader.string();
          break;

        case 4:
          message.assetId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgWithdrawAssetRequest>): MsgWithdrawAssetRequest {
    const message = createBaseMsgWithdrawAssetRequest();
    message.depositor = object.depositor ?? "";
    message.lockerId = object.lockerId !== undefined && object.lockerId !== null ? Long.fromValue(object.lockerId) : Long.UZERO;
    message.amount = object.amount ?? "";
    message.assetId = object.assetId !== undefined && object.assetId !== null ? Long.fromValue(object.assetId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgWithdrawAssetResponse(): MsgWithdrawAssetResponse {
  return {};
}

export const MsgWithdrawAssetResponse = {
  encode(_: MsgWithdrawAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAssetResponse();

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

  fromPartial(_: DeepPartial<MsgWithdrawAssetResponse>): MsgWithdrawAssetResponse {
    const message = createBaseMsgWithdrawAssetResponse();
    return message;
  }

};

function createBaseMsgCloseLockRequest(): MsgCloseLockRequest {
  return {
    depositor: "",
    lockerId: Long.UZERO
  };
}

export const MsgCloseLockRequest = {
  encode(message: MsgCloseLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }

    if (!message.lockerId.isZero()) {
      writer.uint32(16).uint64(message.lockerId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLockRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;

        case 2:
          message.lockerId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCloseLockRequest>): MsgCloseLockRequest {
    const message = createBaseMsgCloseLockRequest();
    message.depositor = object.depositor ?? "";
    message.lockerId = object.lockerId !== undefined && object.lockerId !== null ? Long.fromValue(object.lockerId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCloseLockResponse(): MsgCloseLockResponse {
  return {};
}

export const MsgCloseLockResponse = {
  encode(_: MsgCloseLockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLockResponse();

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

  fromPartial(_: DeepPartial<MsgCloseLockResponse>): MsgCloseLockResponse {
    const message = createBaseMsgCloseLockResponse();
    return message;
  }

};