import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params defines the token module's parameters */

export interface Params {
  tokenTaxRate: string;
  issueTokenBaseFee?: Coin;
  mintTokenFeeRatio: string;
}
/** Params defines the token module's parameters */

export interface ParamsSDKType {
  token_tax_rate: string;
  issue_token_base_fee?: CoinSDKType;
  mint_token_fee_ratio: string;
}

function createBaseParams(): Params {
  return {
    tokenTaxRate: "",
    issueTokenBaseFee: undefined,
    mintTokenFeeRatio: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenTaxRate !== "") {
      writer.uint32(10).string(message.tokenTaxRate);
    }

    if (message.issueTokenBaseFee !== undefined) {
      Coin.encode(message.issueTokenBaseFee, writer.uint32(18).fork()).ldelim();
    }

    if (message.mintTokenFeeRatio !== "") {
      writer.uint32(26).string(message.mintTokenFeeRatio);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tokenTaxRate = reader.string();
          break;

        case 2:
          message.issueTokenBaseFee = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.mintTokenFeeRatio = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.tokenTaxRate = object.tokenTaxRate ?? "";
    message.issueTokenBaseFee = object.issueTokenBaseFee !== undefined && object.issueTokenBaseFee !== null ? Coin.fromPartial(object.issueTokenBaseFee) : undefined;
    message.mintTokenFeeRatio = object.mintTokenFeeRatio ?? "";
    return message;
  }

};