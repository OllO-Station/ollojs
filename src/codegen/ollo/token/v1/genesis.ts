import { Params, ParamsSDKType } from "./params";
import { Token, TokenSDKType } from "./token";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState declares the token module's genesis state configuration */

export interface GenesisState {
  params?: Params;
  tokens: Token[];
  burnedCoins: Coin[];
}
/** GenesisState declares the token module's genesis state configuration */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  tokens: TokenSDKType[];
  burned_coins: CoinSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    tokens: [],
    burnedCoins: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.burnedCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.tokens.push(Token.decode(reader, reader.uint32()));
          break;

        case 3:
          message.burnedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokens = object.tokens?.map(e => Token.fromPartial(e)) || [];
    message.burnedCoins = object.burnedCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};