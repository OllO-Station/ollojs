import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Token defines a standard definition for the fungible token */

export interface Token {
  symbol: string;
  name: string;
  scale: number;
  minUnit: string;
  initialSupply: Long;
  maxSupply: Long;
  mintable: boolean;
  owner: string;
}
/** Token defines a standard definition for the fungible token */

export interface TokenSDKType {
  symbol: string;
  name: string;
  scale: number;
  min_unit: string;
  initial_supply: Long;
  max_supply: Long;
  mintable: boolean;
  owner: string;
}

function createBaseToken(): Token {
  return {
    symbol: "",
    name: "",
    scale: 0,
    minUnit: "",
    initialSupply: Long.UZERO,
    maxSupply: Long.UZERO,
    mintable: false,
    owner: ""
  };
}

export const Token = {
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.scale !== 0) {
      writer.uint32(24).uint32(message.scale);
    }

    if (message.minUnit !== "") {
      writer.uint32(34).string(message.minUnit);
    }

    if (!message.initialSupply.isZero()) {
      writer.uint32(40).uint64(message.initialSupply);
    }

    if (!message.maxSupply.isZero()) {
      writer.uint32(48).uint64(message.maxSupply);
    }

    if (message.mintable === true) {
      writer.uint32(56).bool(message.mintable);
    }

    if (message.owner !== "") {
      writer.uint32(66).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.scale = reader.uint32();
          break;

        case 4:
          message.minUnit = reader.string();
          break;

        case 5:
          message.initialSupply = (reader.uint64() as Long);
          break;

        case 6:
          message.maxSupply = (reader.uint64() as Long);
          break;

        case 7:
          message.mintable = reader.bool();
          break;

        case 8:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Token>): Token {
    const message = createBaseToken();
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.scale = object.scale ?? 0;
    message.minUnit = object.minUnit ?? "";
    message.initialSupply = object.initialSupply !== undefined && object.initialSupply !== null ? Long.fromValue(object.initialSupply) : Long.UZERO;
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? Long.fromValue(object.maxSupply) : Long.UZERO;
    message.mintable = object.mintable ?? false;
    message.owner = object.owner ?? "";
    return message;
  }

};