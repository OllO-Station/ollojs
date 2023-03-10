import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Vault {
  id: Long;
  owner: string;
  amountIn: string;
  amountOut: string;
  createdAt?: Date;
  interestAccumulated: string;
  closingFeeAccumulated: string;
  blockHeight: Long;
  blockTime?: Date;
}
export interface VaultSDKType {
  id: Long;
  owner: string;
  amount_in: string;
  amount_out: string;
  created_at?: Date;
  interest_accumulated: string;
  closing_fee_accumulated: string;
  block_height: Long;
  block_time?: Date;
}
export interface EmissionsVault {
  id: Long;
  amountIn: string;
  amountOut: string;
  createdAt?: Date;
}
export interface EmissionsVaultSDKType {
  id: Long;
  amount_in: string;
  amount_out: string;
  created_at?: Date;
}
export interface EmissionsVaultRewards {
  user: string;
  blockHeight: Long;
  amount: string;
}
export interface EmissionsVaultRewardsSDKType {
  user: string;
  block_height: Long;
  amount: string;
}

function createBaseVault(): Vault {
  return {
    id: Long.UZERO,
    owner: "",
    amountIn: "",
    amountOut: "",
    createdAt: undefined,
    interestAccumulated: "",
    closingFeeAccumulated: "",
    blockHeight: Long.ZERO,
    blockTime: undefined
  };
}

export const Vault = {
  encode(message: Vault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.amountIn !== "") {
      writer.uint32(42).string(message.amountIn);
    }

    if (message.amountOut !== "") {
      writer.uint32(50).string(message.amountOut);
    }

    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
    }

    if (message.interestAccumulated !== "") {
      writer.uint32(66).string(message.interestAccumulated);
    }

    if (message.closingFeeAccumulated !== "") {
      writer.uint32(74).string(message.closingFeeAccumulated);
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(80).int64(message.blockHeight);
    }

    if (message.blockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(90).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVault();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 5:
          message.amountIn = reader.string();
          break;

        case 6:
          message.amountOut = reader.string();
          break;

        case 7:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 8:
          message.interestAccumulated = reader.string();
          break;

        case 9:
          message.closingFeeAccumulated = reader.string();
          break;

        case 10:
          message.blockHeight = (reader.int64() as Long);
          break;

        case 11:
          message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Vault>): Vault {
    const message = createBaseVault();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.interestAccumulated = object.interestAccumulated ?? "";
    message.closingFeeAccumulated = object.closingFeeAccumulated ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.blockTime = object.blockTime ?? undefined;
    return message;
  }

};

function createBaseEmissionsVault(): EmissionsVault {
  return {
    id: Long.UZERO,
    amountIn: "",
    amountOut: "",
    createdAt: undefined
  };
}

export const EmissionsVault = {
  encode(message: EmissionsVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }

    if (message.amountOut !== "") {
      writer.uint32(26).string(message.amountOut);
    }

    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmissionsVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmissionsVault();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.amountIn = reader.string();
          break;

        case 3:
          message.amountOut = reader.string();
          break;

        case 4:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EmissionsVault>): EmissionsVault {
    const message = createBaseEmissionsVault();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  }

};

function createBaseEmissionsVaultRewards(): EmissionsVaultRewards {
  return {
    user: "",
    blockHeight: Long.UZERO,
    amount: ""
  };
}

export const EmissionsVaultRewards = {
  encode(message: EmissionsVaultRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmissionsVaultRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmissionsVaultRewards();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;

        case 2:
          message.blockHeight = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<EmissionsVaultRewards>): EmissionsVaultRewards {
    const message = createBaseEmissionsVaultRewards();
    message.user = object.user ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    message.amount = object.amount ?? "";
    return message;
  }

};