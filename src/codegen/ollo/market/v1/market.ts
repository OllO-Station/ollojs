import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum NftAuctionStatus {
  NFT_AUCTION_STATUS_UNSPECIFIED = 0,
  NFT_AUCTION_STATUS_INACTIVE = 1,
  NFT_AUCTION_STATUS_ACTIVE = 2,
  UNRECOGNIZED = -1,
}
export const NftAuctionStatusSDKType = NftAuctionStatus;
export function nftAuctionStatusFromJSON(object: any): NftAuctionStatus {
  switch (object) {
    case 0:
    case "NFT_AUCTION_STATUS_UNSPECIFIED":
      return NftAuctionStatus.NFT_AUCTION_STATUS_UNSPECIFIED;

    case 1:
    case "NFT_AUCTION_STATUS_INACTIVE":
      return NftAuctionStatus.NFT_AUCTION_STATUS_INACTIVE;

    case 2:
    case "NFT_AUCTION_STATUS_ACTIVE":
      return NftAuctionStatus.NFT_AUCTION_STATUS_ACTIVE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return NftAuctionStatus.UNRECOGNIZED;
  }
}
export function nftAuctionStatusToJSON(object: NftAuctionStatus): string {
  switch (object) {
    case NftAuctionStatus.NFT_AUCTION_STATUS_UNSPECIFIED:
      return "NFT_AUCTION_STATUS_UNSPECIFIED";

    case NftAuctionStatus.NFT_AUCTION_STATUS_INACTIVE:
      return "NFT_AUCTION_STATUS_INACTIVE";

    case NftAuctionStatus.NFT_AUCTION_STATUS_ACTIVE:
      return "NFT_AUCTION_STATUS_ACTIVE";

    case NftAuctionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface NftAuctionBid {
  auctionId: Long;
  bidder: string;
  amount?: Coin;
  time?: Date;
}
export interface NftAuctionBidSDKType {
  auction_id: Long;
  bidder: string;
  amount?: CoinSDKType;
  time?: Date;
}
export interface NftAuction {
  id: Long;
  nftId: string;
  denomId: string;
  owner: string;
  startPrice?: Coin;
  startTime?: Date;
  endTime?: Date;
}
export interface NftAuctionSDKType {
  id: Long;
  nft_id: string;
  denom_id: string;
  owner: string;
  start_price?: CoinSDKType;
  start_time?: Date;
  end_time?: Date;
}
export interface Market {
  id: string;
}
export interface MarketSDKType {
  id: string;
}

function createBaseNftAuctionBid(): NftAuctionBid {
  return {
    auctionId: Long.UZERO,
    bidder: "",
    amount: undefined,
    time: undefined
  };
}

export const NftAuctionBid = {
  encode(message: NftAuctionBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NftAuctionBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftAuctionBid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionId = (reader.uint64() as Long);
          break;

        case 2:
          message.bidder = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<NftAuctionBid>): NftAuctionBid {
    const message = createBaseNftAuctionBid();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.time = object.time ?? undefined;
    return message;
  }

};

function createBaseNftAuction(): NftAuction {
  return {
    id: Long.UZERO,
    nftId: "",
    denomId: "",
    owner: "",
    startPrice: undefined,
    startTime: undefined,
    endTime: undefined
  };
}

export const NftAuction = {
  encode(message: NftAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }

    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }

    if (message.startPrice !== undefined) {
      Coin.encode(message.startPrice, writer.uint32(42).fork()).ldelim();
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(50).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NftAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftAuction();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.nftId = reader.string();
          break;

        case 3:
          message.denomId = reader.string();
          break;

        case 4:
          message.owner = reader.string();
          break;

        case 5:
          message.startPrice = Coin.decode(reader, reader.uint32());
          break;

        case 6:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<NftAuction>): NftAuction {
    const message = createBaseNftAuction();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    message.startPrice = object.startPrice !== undefined && object.startPrice !== null ? Coin.fromPartial(object.startPrice) : undefined;
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  }

};

function createBaseMarket(): Market {
  return {
    id: ""
  };
}

export const Market = {
  encode(message: Market, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Market {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Market>): Market {
    const message = createBaseMarket();
    message.id = object.id ?? "";
    return message;
  }

};