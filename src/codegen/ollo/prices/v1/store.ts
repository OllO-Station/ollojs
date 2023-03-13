import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
export interface FeedMarket {
  marketId: string;
  baseAssetId: string;
  quoteAssetId: string;
  sources: string[];
  active: boolean;
}
export interface FeedMarketSDKType {
  market_id: string;
  base_asset_id: string;
  quote_asset_id: string;
  sources: string[];
  active: boolean;
}
export interface FeedPostedPrice {
  marketId: string;
  price: string;
  source: string;
  expiry?: Date;
}
export interface FeedPostedPriceSDKType {
  market_id: string;
  price: string;
  source: string;
  expiry?: Date;
}
export interface FeedCurrentPrice {
  marketId: string;
  price: string;
}
export interface FeedCurrentPriceSDKType {
  market_id: string;
  price: string;
}

function createBaseFeedMarket(): FeedMarket {
  return {
    marketId: "",
    baseAssetId: "",
    quoteAssetId: "",
    sources: [],
    active: false
  };
}

export const FeedMarket = {
  encode(message: FeedMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.baseAssetId !== "") {
      writer.uint32(18).string(message.baseAssetId);
    }

    if (message.quoteAssetId !== "") {
      writer.uint32(26).string(message.quoteAssetId);
    }

    for (const v of message.sources) {
      writer.uint32(34).string(v!);
    }

    if (message.active === true) {
      writer.uint32(40).bool(message.active);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeedMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedMarket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.baseAssetId = reader.string();
          break;

        case 3:
          message.quoteAssetId = reader.string();
          break;

        case 4:
          message.sources.push(reader.string());
          break;

        case 5:
          message.active = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeedMarket>): FeedMarket {
    const message = createBaseFeedMarket();
    message.marketId = object.marketId ?? "";
    message.baseAssetId = object.baseAssetId ?? "";
    message.quoteAssetId = object.quoteAssetId ?? "";
    message.sources = object.sources?.map(e => e) || [];
    message.active = object.active ?? false;
    return message;
  }

};

function createBaseFeedPostedPrice(): FeedPostedPrice {
  return {
    marketId: "",
    price: "",
    source: "",
    expiry: undefined
  };
}

export const FeedPostedPrice = {
  encode(message: FeedPostedPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }

    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }

    if (message.expiry !== undefined) {
      Timestamp.encode(toTimestamp(message.expiry), writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeedPostedPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedPostedPrice();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.price = reader.string();
          break;

        case 3:
          message.source = reader.string();
          break;

        case 4:
          message.expiry = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeedPostedPrice>): FeedPostedPrice {
    const message = createBaseFeedPostedPrice();
    message.marketId = object.marketId ?? "";
    message.price = object.price ?? "";
    message.source = object.source ?? "";
    message.expiry = object.expiry ?? undefined;
    return message;
  }

};

function createBaseFeedCurrentPrice(): FeedCurrentPrice {
  return {
    marketId: "",
    price: ""
  };
}

export const FeedCurrentPrice = {
  encode(message: FeedCurrentPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeedCurrentPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedCurrentPrice();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.price = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeedCurrentPrice>): FeedCurrentPrice {
    const message = createBaseFeedCurrentPrice();
    message.marketId = object.marketId ?? "";
    message.price = object.price ?? "";
    return message;
  }

};