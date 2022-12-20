import { PricesCallData, PricesCallDataSDKType } from "./prices";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgPricesData {
  creator: string;
  oracleScriptId: Long;
  sourceChannel: string;
  calldata?: PricesCallData;
  askCount: Long;
  minCount: Long;
  feeLimit: Coin[];
  prepareGas: Long;
  executeGas: Long;
  clientId: string;
}
export interface MsgPricesDataSDKType {
  creator: string;
  oracle_script_id: Long;
  source_channel: string;
  calldata?: PricesCallDataSDKType;
  ask_count: Long;
  min_count: Long;
  fee_limit: CoinSDKType[];
  prepare_gas: Long;
  execute_gas: Long;
  client_id: string;
}
export interface MsgPricesDataResponse {}
export interface MsgPricesDataResponseSDKType {}

function createBaseMsgPricesData(): MsgPricesData {
  return {
    creator: "",
    oracleScriptId: Long.UZERO,
    sourceChannel: "",
    calldata: undefined,
    askCount: Long.UZERO,
    minCount: Long.UZERO,
    feeLimit: [],
    prepareGas: Long.UZERO,
    executeGas: Long.UZERO,
    clientId: ""
  };
}

export const MsgPricesData = {
  encode(message: MsgPricesData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.oracleScriptId.isZero()) {
      writer.uint32(16).uint64(message.oracleScriptId);
    }

    if (message.sourceChannel !== "") {
      writer.uint32(26).string(message.sourceChannel);
    }

    if (message.calldata !== undefined) {
      PricesCallData.encode(message.calldata, writer.uint32(34).fork()).ldelim();
    }

    if (!message.askCount.isZero()) {
      writer.uint32(40).uint64(message.askCount);
    }

    if (!message.minCount.isZero()) {
      writer.uint32(48).uint64(message.minCount);
    }

    for (const v of message.feeLimit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (!message.prepareGas.isZero()) {
      writer.uint32(64).uint64(message.prepareGas);
    }

    if (!message.executeGas.isZero()) {
      writer.uint32(72).uint64(message.executeGas);
    }

    if (message.clientId !== "") {
      writer.uint32(82).string(message.clientId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPricesData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPricesData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.oracleScriptId = (reader.uint64() as Long);
          break;

        case 3:
          message.sourceChannel = reader.string();
          break;

        case 4:
          message.calldata = PricesCallData.decode(reader, reader.uint32());
          break;

        case 5:
          message.askCount = (reader.uint64() as Long);
          break;

        case 6:
          message.minCount = (reader.uint64() as Long);
          break;

        case 7:
          message.feeLimit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 8:
          message.prepareGas = (reader.uint64() as Long);
          break;

        case 9:
          message.executeGas = (reader.uint64() as Long);
          break;

        case 10:
          message.clientId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgPricesData>): MsgPricesData {
    const message = createBaseMsgPricesData();
    message.creator = object.creator ?? "";
    message.oracleScriptId = object.oracleScriptId !== undefined && object.oracleScriptId !== null ? Long.fromValue(object.oracleScriptId) : Long.UZERO;
    message.sourceChannel = object.sourceChannel ?? "";
    message.calldata = object.calldata !== undefined && object.calldata !== null ? PricesCallData.fromPartial(object.calldata) : undefined;
    message.askCount = object.askCount !== undefined && object.askCount !== null ? Long.fromValue(object.askCount) : Long.UZERO;
    message.minCount = object.minCount !== undefined && object.minCount !== null ? Long.fromValue(object.minCount) : Long.UZERO;
    message.feeLimit = object.feeLimit?.map(e => Coin.fromPartial(e)) || [];
    message.prepareGas = object.prepareGas !== undefined && object.prepareGas !== null ? Long.fromValue(object.prepareGas) : Long.UZERO;
    message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? Long.fromValue(object.executeGas) : Long.UZERO;
    message.clientId = object.clientId ?? "";
    return message;
  }

};

function createBaseMsgPricesDataResponse(): MsgPricesDataResponse {
  return {};
}

export const MsgPricesDataResponse = {
  encode(_: MsgPricesDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPricesDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPricesDataResponse();

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

  fromPartial(_: DeepPartial<MsgPricesDataResponse>): MsgPricesDataResponse {
    const message = createBaseMsgPricesDataResponse();
    return message;
  }

};