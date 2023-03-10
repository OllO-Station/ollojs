import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
export interface MsgCreateRequest {
  from: string;
  amountIn: string;
  amountOut: string;
}
export interface MsgCreateRequestSDKType {
  from: string;
  amount_in: string;
  amount_out: string;
}
export interface MsgCreateResponse {}
export interface MsgCreateResponseSDKType {}
export interface MsgDepositRequest {
  from: string;
  userVaultId: Long;
  amount: string;
}
export interface MsgDepositRequestSDKType {
  from: string;
  user_vault_id: Long;
  amount: string;
}
export interface MsgDepositResponse {}
export interface MsgDepositResponseSDKType {}
export interface MsgWithdrawRequest {
  from: string;
  userVaultId: Long;
  amount: string;
}
export interface MsgWithdrawRequestSDKType {
  from: string;
  user_vault_id: Long;
  amount: string;
}
export interface MsgWithdrawResponse {}
export interface MsgWithdrawResponseSDKType {}
export interface MsgDrawRequest {
  from: string;
  userVaultId: Long;
  amount: string;
}
export interface MsgDrawRequestSDKType {
  from: string;
  user_vault_id: Long;
  amount: string;
}
export interface MsgDrawResponse {}
export interface MsgDrawResponseSDKType {}
export interface MsgRepayRequest {
  from: string;
  userVaultId: Long;
  amount: string;
}
export interface MsgRepayRequestSDKType {
  from: string;
  user_vault_id: Long;
  amount: string;
}
export interface MsgRepayResponse {}
export interface MsgRepayResponseSDKType {}
export interface MsgCloseRequest {
  from: string;
  userVaultId: Long;
}
export interface MsgCloseRequestSDKType {
  from: string;
  user_vault_id: Long;
}
export interface MsgCloseResponse {}
export interface MsgCloseResponseSDKType {}

function createBaseMsgCreateRequest(): MsgCreateRequest {
  return {
    from: "",
    amountIn: "",
    amountOut: ""
  };
}

export const MsgCreateRequest = {
  encode(message: MsgCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }

    if (message.amountOut !== "") {
      writer.uint32(26).string(message.amountOut);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.amountIn = reader.string();
          break;

        case 3:
          message.amountOut = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateRequest>): MsgCreateRequest {
    const message = createBaseMsgCreateRequest();
    message.from = object.from ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    return message;
  }

};

function createBaseMsgCreateResponse(): MsgCreateResponse {
  return {};
}

export const MsgCreateResponse = {
  encode(_: MsgCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResponse();

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

  fromPartial(_: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    return message;
  }

};

function createBaseMsgDepositRequest(): MsgDepositRequest {
  return {
    from: "",
    userVaultId: Long.UZERO,
    amount: ""
  };
}

export const MsgDepositRequest = {
  encode(message: MsgDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.userVaultId.isZero()) {
      writer.uint32(16).uint64(message.userVaultId);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.userVaultId = (reader.uint64() as Long);
          break;

        case 3:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDepositRequest>): MsgDepositRequest {
    const message = createBaseMsgDepositRequest();
    message.from = object.from ?? "";
    message.userVaultId = object.userVaultId !== undefined && object.userVaultId !== null ? Long.fromValue(object.userVaultId) : Long.UZERO;
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}

export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();

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

  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  }

};

function createBaseMsgWithdrawRequest(): MsgWithdrawRequest {
  return {
    from: "",
    userVaultId: Long.UZERO,
    amount: ""
  };
}

export const MsgWithdrawRequest = {
  encode(message: MsgWithdrawRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.userVaultId.isZero()) {
      writer.uint32(16).uint64(message.userVaultId);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.userVaultId = (reader.uint64() as Long);
          break;

        case 3:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgWithdrawRequest>): MsgWithdrawRequest {
    const message = createBaseMsgWithdrawRequest();
    message.from = object.from ?? "";
    message.userVaultId = object.userVaultId !== undefined && object.userVaultId !== null ? Long.fromValue(object.userVaultId) : Long.UZERO;
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}

export const MsgWithdrawResponse = {
  encode(_: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();

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

  fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  }

};

function createBaseMsgDrawRequest(): MsgDrawRequest {
  return {
    from: "",
    userVaultId: Long.UZERO,
    amount: ""
  };
}

export const MsgDrawRequest = {
  encode(message: MsgDrawRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.userVaultId.isZero()) {
      writer.uint32(16).uint64(message.userVaultId);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDrawRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.userVaultId = (reader.uint64() as Long);
          break;

        case 3:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDrawRequest>): MsgDrawRequest {
    const message = createBaseMsgDrawRequest();
    message.from = object.from ?? "";
    message.userVaultId = object.userVaultId !== undefined && object.userVaultId !== null ? Long.fromValue(object.userVaultId) : Long.UZERO;
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgDrawResponse(): MsgDrawResponse {
  return {};
}

export const MsgDrawResponse = {
  encode(_: MsgDrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDrawResponse();

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

  fromPartial(_: DeepPartial<MsgDrawResponse>): MsgDrawResponse {
    const message = createBaseMsgDrawResponse();
    return message;
  }

};

function createBaseMsgRepayRequest(): MsgRepayRequest {
  return {
    from: "",
    userVaultId: Long.UZERO,
    amount: ""
  };
}

export const MsgRepayRequest = {
  encode(message: MsgRepayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.userVaultId.isZero()) {
      writer.uint32(16).uint64(message.userVaultId);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepayRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.userVaultId = (reader.uint64() as Long);
          break;

        case 3:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRepayRequest>): MsgRepayRequest {
    const message = createBaseMsgRepayRequest();
    message.from = object.from ?? "";
    message.userVaultId = object.userVaultId !== undefined && object.userVaultId !== null ? Long.fromValue(object.userVaultId) : Long.UZERO;
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgRepayResponse(): MsgRepayResponse {
  return {};
}

export const MsgRepayResponse = {
  encode(_: MsgRepayResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepayResponse();

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

  fromPartial(_: DeepPartial<MsgRepayResponse>): MsgRepayResponse {
    const message = createBaseMsgRepayResponse();
    return message;
  }

};

function createBaseMsgCloseRequest(): MsgCloseRequest {
  return {
    from: "",
    userVaultId: Long.UZERO
  };
}

export const MsgCloseRequest = {
  encode(message: MsgCloseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.userVaultId.isZero()) {
      writer.uint32(16).uint64(message.userVaultId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.userVaultId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCloseRequest>): MsgCloseRequest {
    const message = createBaseMsgCloseRequest();
    message.from = object.from ?? "";
    message.userVaultId = object.userVaultId !== undefined && object.userVaultId !== null ? Long.fromValue(object.userVaultId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCloseResponse(): MsgCloseResponse {
  return {};
}

export const MsgCloseResponse = {
  encode(_: MsgCloseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseResponse();

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

  fromPartial(_: DeepPartial<MsgCloseResponse>): MsgCloseResponse {
    const message = createBaseMsgCloseResponse();
    return message;
  }

};