import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { NftAuction, NftAuctionSDKType } from "./market";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, toTimestamp, fromTimestamp, Long } from "../../../helpers";
/** MsgListNft defines a method for listing an NFT. */

export interface MsgListNft {
  id: string;
  nftId: string;
  denomId: string;
  price?: Coin;
  seller: string;
}
/** MsgListNft defines a method for listing an NFT. */

export interface MsgListNftSDKType {
  id: string;
  nft_id: string;
  denom_id: string;
  price?: CoinSDKType;
  seller: string;
}
export interface MsgListNftResponse {}
export interface MsgListNftResponseSDKType {}
/** MsgBuyNft defines a method for buying an NFT. */

export interface MsgBuyNft {
  id: string;
  price?: Coin;
  buyer: string;
}
/** MsgBuyNft defines a method for buying an NFT. */

export interface MsgBuyNftSDKType {
  id: string;
  price?: CoinSDKType;
  buyer: string;
}
export interface MsgBuyNftResponse {}
export interface MsgBuyNftResponseSDKType {}
/** MsgDelistNft defines a method for delisting an NFT. */

export interface MsgDelistNft {
  id: string;
  owner: string;
}
/** MsgDelistNft defines a method for delisting an NFT. */

export interface MsgDelistNftSDKType {
  id: string;
  owner: string;
}
export interface MsgDelistNftResponse {}
export interface MsgDelistNftResponseSDKType {}
/** MsgEditNftListing defines a method for editing an NFT listing. */

export interface MsgEditNftListing {
  id: string;
  price?: Coin;
  owner: string;
}
/** MsgEditNftListing defines a method for editing an NFT listing. */

export interface MsgEditNftListingSDKType {
  id: string;
  price?: CoinSDKType;
  owner: string;
}
export interface MsgEditNftListingResponse {}
export interface MsgEditNftListingResponseSDKType {}
/** MsgCreateNftAuction defines a method for creating an NFT auction. */

export interface MsgCreateNftAuction {
  nftId: string;
  denomId: string;
  startTime?: Date;
  startPrice?: Coin;
  duration?: Duration;
  incrementPercentage: string;
  owner: string;
}
/** MsgCreateNftAuction defines a method for creating an NFT auction. */

export interface MsgCreateNftAuctionSDKType {
  nft_id: string;
  denom_id: string;
  start_time?: Date;
  start_price?: CoinSDKType;
  duration?: DurationSDKType;
  increment_percentage: string;
  owner: string;
}
export interface MsgCreateNftAuctionResponse {
  auction?: NftAuction;
}
export interface MsgCreateNftAuctionResponseSDKType {
  auction?: NftAuctionSDKType;
}
/** MsgCancelNftAuction defines a method for canceling an NFT auction. */

export interface MsgCancelNftAuction {
  auctionId: Long;
  owner: string;
}
/** MsgCancelNftAuction defines a method for canceling an NFT auction. */

export interface MsgCancelNftAuctionSDKType {
  auction_id: Long;
  owner: string;
}
export interface MsgCancelNftAuctionResponse {}
export interface MsgCancelNftAuctionResponseSDKType {}
/** MsgPlaceNftBid defines a method for placing a bid on an NFT auction. */

export interface MsgPlaceNftBid {
  auctionId: Long;
  amount?: Coin;
  bidder: string;
}
/** MsgPlaceNftBid defines a method for placing a bid on an NFT auction. */

export interface MsgPlaceNftBidSDKType {
  auction_id: Long;
  amount?: CoinSDKType;
  bidder: string;
}
export interface MsgPlaceNftBidResponse {}
export interface MsgPlaceNftBidResponseSDKType {}

function createBaseMsgListNft(): MsgListNft {
  return {
    id: "",
    nftId: "",
    denomId: "",
    price: undefined,
    seller: ""
  };
}

export const MsgListNft = {
  encode(message: MsgListNft, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }

    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }

    if (message.seller !== "") {
      writer.uint32(42).string(message.seller);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgListNft {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgListNft();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.nftId = reader.string();
          break;

        case 3:
          message.denomId = reader.string();
          break;

        case 4:
          message.price = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.seller = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgListNft>): MsgListNft {
    const message = createBaseMsgListNft();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.seller = object.seller ?? "";
    return message;
  }

};

function createBaseMsgListNftResponse(): MsgListNftResponse {
  return {};
}

export const MsgListNftResponse = {
  encode(_: MsgListNftResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgListNftResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgListNftResponse();

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

  fromPartial(_: DeepPartial<MsgListNftResponse>): MsgListNftResponse {
    const message = createBaseMsgListNftResponse();
    return message;
  }

};

function createBaseMsgBuyNft(): MsgBuyNft {
  return {
    id: "",
    price: undefined,
    buyer: ""
  };
}

export const MsgBuyNft = {
  encode(message: MsgBuyNft, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(18).fork()).ldelim();
    }

    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyNft {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyNft();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.price = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.buyer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBuyNft>): MsgBuyNft {
    const message = createBaseMsgBuyNft();
    message.id = object.id ?? "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.buyer = object.buyer ?? "";
    return message;
  }

};

function createBaseMsgBuyNftResponse(): MsgBuyNftResponse {
  return {};
}

export const MsgBuyNftResponse = {
  encode(_: MsgBuyNftResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyNftResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyNftResponse();

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

  fromPartial(_: DeepPartial<MsgBuyNftResponse>): MsgBuyNftResponse {
    const message = createBaseMsgBuyNftResponse();
    return message;
  }

};

function createBaseMsgDelistNft(): MsgDelistNft {
  return {
    id: "",
    owner: ""
  };
}

export const MsgDelistNft = {
  encode(message: MsgDelistNft, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelistNft {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelistNft();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDelistNft>): MsgDelistNft {
    const message = createBaseMsgDelistNft();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseMsgDelistNftResponse(): MsgDelistNftResponse {
  return {};
}

export const MsgDelistNftResponse = {
  encode(_: MsgDelistNftResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelistNftResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelistNftResponse();

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

  fromPartial(_: DeepPartial<MsgDelistNftResponse>): MsgDelistNftResponse {
    const message = createBaseMsgDelistNftResponse();
    return message;
  }

};

function createBaseMsgEditNftListing(): MsgEditNftListing {
  return {
    id: "",
    price: undefined,
    owner: ""
  };
}

export const MsgEditNftListing = {
  encode(message: MsgEditNftListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(18).fork()).ldelim();
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditNftListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditNftListing();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.price = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgEditNftListing>): MsgEditNftListing {
    const message = createBaseMsgEditNftListing();
    message.id = object.id ?? "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseMsgEditNftListingResponse(): MsgEditNftListingResponse {
  return {};
}

export const MsgEditNftListingResponse = {
  encode(_: MsgEditNftListingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditNftListingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditNftListingResponse();

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

  fromPartial(_: DeepPartial<MsgEditNftListingResponse>): MsgEditNftListingResponse {
    const message = createBaseMsgEditNftListingResponse();
    return message;
  }

};

function createBaseMsgCreateNftAuction(): MsgCreateNftAuction {
  return {
    nftId: "",
    denomId: "",
    startTime: undefined,
    startPrice: undefined,
    duration: undefined,
    incrementPercentage: "",
    owner: ""
  };
}

export const MsgCreateNftAuction = {
  encode(message: MsgCreateNftAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftId !== "") {
      writer.uint32(10).string(message.nftId);
    }

    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).ldelim();
    }

    if (message.startPrice !== undefined) {
      Coin.encode(message.startPrice, writer.uint32(34).fork()).ldelim();
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(42).fork()).ldelim();
    }

    if (message.incrementPercentage !== "") {
      writer.uint32(50).string(message.incrementPercentage);
    }

    if (message.owner !== "") {
      writer.uint32(74).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNftAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNftAuction();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nftId = reader.string();
          break;

        case 2:
          message.denomId = reader.string();
          break;

        case 3:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 4:
          message.startPrice = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        case 6:
          message.incrementPercentage = reader.string();
          break;

        case 9:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateNftAuction>): MsgCreateNftAuction {
    const message = createBaseMsgCreateNftAuction();
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.startTime = object.startTime ?? undefined;
    message.startPrice = object.startPrice !== undefined && object.startPrice !== null ? Coin.fromPartial(object.startPrice) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.incrementPercentage = object.incrementPercentage ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseMsgCreateNftAuctionResponse(): MsgCreateNftAuctionResponse {
  return {
    auction: undefined
  };
}

export const MsgCreateNftAuctionResponse = {
  encode(message: MsgCreateNftAuctionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auction !== undefined) {
      NftAuction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNftAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNftAuctionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auction = NftAuction.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateNftAuctionResponse>): MsgCreateNftAuctionResponse {
    const message = createBaseMsgCreateNftAuctionResponse();
    message.auction = object.auction !== undefined && object.auction !== null ? NftAuction.fromPartial(object.auction) : undefined;
    return message;
  }

};

function createBaseMsgCancelNftAuction(): MsgCancelNftAuction {
  return {
    auctionId: Long.UZERO,
    owner: ""
  };
}

export const MsgCancelNftAuction = {
  encode(message: MsgCancelNftAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelNftAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelNftAuction();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionId = (reader.uint64() as Long);
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCancelNftAuction>): MsgCancelNftAuction {
    const message = createBaseMsgCancelNftAuction();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseMsgCancelNftAuctionResponse(): MsgCancelNftAuctionResponse {
  return {};
}

export const MsgCancelNftAuctionResponse = {
  encode(_: MsgCancelNftAuctionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelNftAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelNftAuctionResponse();

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

  fromPartial(_: DeepPartial<MsgCancelNftAuctionResponse>): MsgCancelNftAuctionResponse {
    const message = createBaseMsgCancelNftAuctionResponse();
    return message;
  }

};

function createBaseMsgPlaceNftBid(): MsgPlaceNftBid {
  return {
    auctionId: Long.UZERO,
    amount: undefined,
    bidder: ""
  };
}

export const MsgPlaceNftBid = {
  encode(message: MsgPlaceNftBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    if (message.bidder !== "") {
      writer.uint32(26).string(message.bidder);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceNftBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceNftBid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionId = (reader.uint64() as Long);
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.bidder = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgPlaceNftBid>): MsgPlaceNftBid {
    const message = createBaseMsgPlaceNftBid();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.bidder = object.bidder ?? "";
    return message;
  }

};

function createBaseMsgPlaceNftBidResponse(): MsgPlaceNftBidResponse {
  return {};
}

export const MsgPlaceNftBidResponse = {
  encode(_: MsgPlaceNftBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceNftBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceNftBidResponse();

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

  fromPartial(_: DeepPartial<MsgPlaceNftBidResponse>): MsgPlaceNftBidResponse {
    const message = createBaseMsgPlaceNftBidResponse();
    return message;
  }

};