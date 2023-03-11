import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
export interface MsgRequestLoan {
  creator: string;
  amount: string;
  collateral: string;
  fee: string;
  deadline: string;
}
export interface MsgRequestLoanSDKType {
  creator: string;
  amount: string;
  collateral: string;
  fee: string;
  deadline: string;
}
export interface MsgRequestLoanResponse {}
export interface MsgRequestLoanResponseSDKType {}
export interface MsgApproveLoan {
  creator: string;
  id: Long;
}
export interface MsgApproveLoanSDKType {
  creator: string;
  id: Long;
}
export interface MsgApproveLoanResponse {}
export interface MsgApproveLoanResponseSDKType {}
export interface MsgRepayLoan {
  creator: string;
  id: Long;
}
export interface MsgRepayLoanSDKType {
  creator: string;
  id: Long;
}
export interface MsgRepayLoanResponse {}
export interface MsgRepayLoanResponseSDKType {}
export interface MsgLiquidateLoan {
  creator: string;
  id: Long;
}
export interface MsgLiquidateLoanSDKType {
  creator: string;
  id: Long;
}
export interface MsgLiquidateLoanResponse {}
export interface MsgLiquidateLoanResponseSDKType {}
export interface MsgCancelLoan {
  creator: string;
  id: Long;
}
export interface MsgCancelLoanSDKType {
  creator: string;
  id: Long;
}
export interface MsgCancelLoanResponse {}
export interface MsgCancelLoanResponseSDKType {}

function createBaseMsgRequestLoan(): MsgRequestLoan {
  return {
    creator: "",
    amount: "",
    collateral: "",
    fee: "",
    deadline: ""
  };
}

export const MsgRequestLoan = {
  encode(message: MsgRequestLoan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    if (message.collateral !== "") {
      writer.uint32(26).string(message.collateral);
    }

    if (message.fee !== "") {
      writer.uint32(34).string(message.fee);
    }

    if (message.deadline !== "") {
      writer.uint32(42).string(message.deadline);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestLoan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestLoan();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        case 3:
          message.collateral = reader.string();
          break;

        case 4:
          message.fee = reader.string();
          break;

        case 5:
          message.deadline = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRequestLoan>): MsgRequestLoan {
    const message = createBaseMsgRequestLoan();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.collateral = object.collateral ?? "";
    message.fee = object.fee ?? "";
    message.deadline = object.deadline ?? "";
    return message;
  }

};

function createBaseMsgRequestLoanResponse(): MsgRequestLoanResponse {
  return {};
}

export const MsgRequestLoanResponse = {
  encode(_: MsgRequestLoanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestLoanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestLoanResponse();

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

  fromPartial(_: DeepPartial<MsgRequestLoanResponse>): MsgRequestLoanResponse {
    const message = createBaseMsgRequestLoanResponse();
    return message;
  }

};

function createBaseMsgApproveLoan(): MsgApproveLoan {
  return {
    creator: "",
    id: Long.UZERO
  };
}

export const MsgApproveLoan = {
  encode(message: MsgApproveLoan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveLoan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveLoan();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgApproveLoan>): MsgApproveLoan {
    const message = createBaseMsgApproveLoan();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgApproveLoanResponse(): MsgApproveLoanResponse {
  return {};
}

export const MsgApproveLoanResponse = {
  encode(_: MsgApproveLoanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveLoanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveLoanResponse();

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

  fromPartial(_: DeepPartial<MsgApproveLoanResponse>): MsgApproveLoanResponse {
    const message = createBaseMsgApproveLoanResponse();
    return message;
  }

};

function createBaseMsgRepayLoan(): MsgRepayLoan {
  return {
    creator: "",
    id: Long.UZERO
  };
}

export const MsgRepayLoan = {
  encode(message: MsgRepayLoan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayLoan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepayLoan();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRepayLoan>): MsgRepayLoan {
    const message = createBaseMsgRepayLoan();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgRepayLoanResponse(): MsgRepayLoanResponse {
  return {};
}

export const MsgRepayLoanResponse = {
  encode(_: MsgRepayLoanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayLoanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepayLoanResponse();

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

  fromPartial(_: DeepPartial<MsgRepayLoanResponse>): MsgRepayLoanResponse {
    const message = createBaseMsgRepayLoanResponse();
    return message;
  }

};

function createBaseMsgLiquidateLoan(): MsgLiquidateLoan {
  return {
    creator: "",
    id: Long.UZERO
  };
}

export const MsgLiquidateLoan = {
  encode(message: MsgLiquidateLoan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateLoan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateLoan();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgLiquidateLoan>): MsgLiquidateLoan {
    const message = createBaseMsgLiquidateLoan();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgLiquidateLoanResponse(): MsgLiquidateLoanResponse {
  return {};
}

export const MsgLiquidateLoanResponse = {
  encode(_: MsgLiquidateLoanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateLoanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateLoanResponse();

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

  fromPartial(_: DeepPartial<MsgLiquidateLoanResponse>): MsgLiquidateLoanResponse {
    const message = createBaseMsgLiquidateLoanResponse();
    return message;
  }

};

function createBaseMsgCancelLoan(): MsgCancelLoan {
  return {
    creator: "",
    id: Long.UZERO
  };
}

export const MsgCancelLoan = {
  encode(message: MsgCancelLoan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelLoan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelLoan();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCancelLoan>): MsgCancelLoan {
    const message = createBaseMsgCancelLoan();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCancelLoanResponse(): MsgCancelLoanResponse {
  return {};
}

export const MsgCancelLoanResponse = {
  encode(_: MsgCancelLoanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelLoanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelLoanResponse();

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

  fromPartial(_: DeepPartial<MsgCancelLoanResponse>): MsgCancelLoanResponse {
    const message = createBaseMsgCancelLoanResponse();
    return message;
  }

};