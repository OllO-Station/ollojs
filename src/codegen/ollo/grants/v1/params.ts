import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params defines the set of params for the grants module. */

export interface Params {
  /**
   * auction_creation_fee specifies the fee for auction creation.
   * this prevents from spamming attack and it is collected in the community
   * pool
   */
  auctionCreationFee: Coin[];
  /**
   * place_bid_fee specifies the fee for placing a bid for an auction.
   * this prevents from spamming attack and it is collected in the community
   * pool
   */

  placeBidFee: Coin[];
  /**
   * extended_period specifies the extended period that determines how long
   * the extended auction round lasts
   */

  extendedPeriod: number;
}
/** Params defines the set of params for the grants module. */

export interface ParamsSDKType {
  auction_creation_fee: CoinSDKType[];
  place_bid_fee: CoinSDKType[];
  extended_period: number;
}

function createBaseParams(): Params {
  return {
    auctionCreationFee: [],
    placeBidFee: [],
    extendedPeriod: 0
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.auctionCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.placeBidFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.extendedPeriod !== 0) {
      writer.uint32(24).uint32(message.extendedPeriod);
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
          message.auctionCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.placeBidFee.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.extendedPeriod = reader.uint32();
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
    message.auctionCreationFee = object.auctionCreationFee?.map(e => Coin.fromPartial(e)) || [];
    message.placeBidFee = object.placeBidFee?.map(e => Coin.fromPartial(e)) || [];
    message.extendedPeriod = object.extendedPeriod ?? 0;
    return message;
  }

};