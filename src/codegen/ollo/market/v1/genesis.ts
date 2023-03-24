import { Params, ParamsSDKType } from "./params";
import { NftListing, NftListingSDKType, NftAuction, NftAuctionSDKType, NftAuctionBid, NftAuctionBidSDKType } from "./market";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
  /** The params of the market module */
  params?: Params;
  /** The listings length of the market module */

  listingCount: Long;
  /** The next auctions number of the market module */

  nextAuctionNumber: Long;
  /** The bids of the market module */

  listings: NftListing[];
  /** The nft auctions of the market module */

  auctions: NftAuction[];
  /** The nft bid auctions of the market module */

  bids: NftAuctionBid[];
}
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  listing_count: Long;
  next_auction_number: Long;
  listings: NftListingSDKType[];
  auctions: NftAuctionSDKType[];
  bids: NftAuctionBidSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    listingCount: Long.UZERO,
    nextAuctionNumber: Long.UZERO,
    listings: [],
    auctions: [],
    bids: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (!message.listingCount.isZero()) {
      writer.uint32(16).uint64(message.listingCount);
    }

    if (!message.nextAuctionNumber.isZero()) {
      writer.uint32(24).uint64(message.nextAuctionNumber);
    }

    for (const v of message.listings) {
      NftListing.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.auctions) {
      NftAuction.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.bids) {
      NftAuctionBid.encode(v!, writer.uint32(50).fork()).ldelim();
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
          message.listingCount = (reader.uint64() as Long);
          break;

        case 3:
          message.nextAuctionNumber = (reader.uint64() as Long);
          break;

        case 4:
          message.listings.push(NftListing.decode(reader, reader.uint32()));
          break;

        case 5:
          message.auctions.push(NftAuction.decode(reader, reader.uint32()));
          break;

        case 6:
          message.bids.push(NftAuctionBid.decode(reader, reader.uint32()));
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
    message.listingCount = object.listingCount !== undefined && object.listingCount !== null ? Long.fromValue(object.listingCount) : Long.UZERO;
    message.nextAuctionNumber = object.nextAuctionNumber !== undefined && object.nextAuctionNumber !== null ? Long.fromValue(object.nextAuctionNumber) : Long.UZERO;
    message.listings = object.listings?.map(e => NftListing.fromPartial(e)) || [];
    message.auctions = object.auctions?.map(e => NftAuction.fromPartial(e)) || [];
    message.bids = object.bids?.map(e => NftAuctionBid.fromPartial(e)) || [];
    return message;
  }

};