import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventBuyNft {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
  buyer: string;
}
export interface EventBuyNftSDKType {
  id: string;
  nft_id: string;
  denom_id: string;
  owner: string;
  buyer: string;
}
export interface EventListNft {
  id: string;
  nftId: string;
  denomId: string;
  creator: string;
}
export interface EventListNftSDKType {
  id: string;
  nft_id: string;
  denom_id: string;
  creator: string;
}
export interface EventEditNftListing {
  id: string;
  nftId: string;
  denomId: string;
  creator: string;
}
export interface EventEditNftListingSDKType {
  id: string;
  nft_id: string;
  denom_id: string;
  creator: string;
}
export interface EventDelistNft {
  id: string;
  nftId: string;
  denomId: string;
  creator: string;
}
export interface EventDelistNftSDKType {
  id: string;
  nft_id: string;
  denom_id: string;
  creator: string;
}
export interface EventCreateNftAuction {
  id: string;
  nftId: string;
  denomId: string;
  creator: string;
  minPrice: string;
}
export interface EventCreateNftAuctionSDKType {
  id: string;
  nft_id: string;
  denom_id: string;
  creator: string;
  min_price: string;
}
export interface EventCancelNftAuction {
  auctionId: string;
  nftId: string;
  denomId: string;
  owner: string;
}
export interface EventCancelNftAuctionSDKType {
  auction_id: string;
  nft_id: string;
  denom_id: string;
  owner: string;
}
export interface EventNftAuctionPlaceBid {
  auctionId: string;
  nftId: string;
  denomId: string;
  bidder: string;
  amount: string;
}
export interface EventNftAuctionPlaceBidSDKType {
  auction_id: string;
  nft_id: string;
  denom_id: string;
  bidder: string;
  amount: string;
}

function createBaseEventBuyNft(): EventBuyNft {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: "",
    buyer: ""
  };
}

export const EventBuyNft = {
  encode(message: EventBuyNft, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
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

    if (message.buyer !== "") {
      writer.uint32(42).string(message.buyer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBuyNft {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBuyNft();

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
          message.owner = reader.string();
          break;

        case 5:
          message.buyer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventBuyNft>): EventBuyNft {
    const message = createBaseEventBuyNft();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    message.buyer = object.buyer ?? "";
    return message;
  }

};

function createBaseEventListNft(): EventListNft {
  return {
    id: "",
    nftId: "",
    denomId: "",
    creator: ""
  };
}

export const EventListNft = {
  encode(message: EventListNft, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }

    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventListNft {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventListNft();

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
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventListNft>): EventListNft {
    const message = createBaseEventListNft();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseEventEditNftListing(): EventEditNftListing {
  return {
    id: "",
    nftId: "",
    denomId: "",
    creator: ""
  };
}

export const EventEditNftListing = {
  encode(message: EventEditNftListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }

    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEditNftListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEditNftListing();

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
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventEditNftListing>): EventEditNftListing {
    const message = createBaseEventEditNftListing();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseEventDelistNft(): EventDelistNft {
  return {
    id: "",
    nftId: "",
    denomId: "",
    creator: ""
  };
}

export const EventDelistNft = {
  encode(message: EventDelistNft, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }

    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDelistNft {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDelistNft();

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
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventDelistNft>): EventDelistNft {
    const message = createBaseEventDelistNft();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseEventCreateNftAuction(): EventCreateNftAuction {
  return {
    id: "",
    nftId: "",
    denomId: "",
    creator: "",
    minPrice: ""
  };
}

export const EventCreateNftAuction = {
  encode(message: EventCreateNftAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }

    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }

    if (message.minPrice !== "") {
      writer.uint32(42).string(message.minPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateNftAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateNftAuction();

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
          message.creator = reader.string();
          break;

        case 5:
          message.minPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCreateNftAuction>): EventCreateNftAuction {
    const message = createBaseEventCreateNftAuction();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.creator = object.creator ?? "";
    message.minPrice = object.minPrice ?? "";
    return message;
  }

};

function createBaseEventCancelNftAuction(): EventCancelNftAuction {
  return {
    auctionId: "",
    nftId: "",
    denomId: "",
    owner: ""
  };
}

export const EventCancelNftAuction = {
  encode(message: EventCancelNftAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auctionId !== "") {
      writer.uint32(10).string(message.auctionId);
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

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelNftAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelNftAuction();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.string();
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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCancelNftAuction>): EventCancelNftAuction {
    const message = createBaseEventCancelNftAuction();
    message.auctionId = object.auctionId ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseEventNftAuctionPlaceBid(): EventNftAuctionPlaceBid {
  return {
    auctionId: "",
    nftId: "",
    denomId: "",
    bidder: "",
    amount: ""
  };
}

export const EventNftAuctionPlaceBid = {
  encode(message: EventNftAuctionPlaceBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auctionId !== "") {
      writer.uint32(10).string(message.auctionId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }

    if (message.bidder !== "") {
      writer.uint32(34).string(message.bidder);
    }

    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNftAuctionPlaceBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNftAuctionPlaceBid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.string();
          break;

        case 2:
          message.nftId = reader.string();
          break;

        case 3:
          message.denomId = reader.string();
          break;

        case 4:
          message.bidder = reader.string();
          break;

        case 5:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventNftAuctionPlaceBid>): EventNftAuctionPlaceBid {
    const message = createBaseEventNftAuctionPlaceBid();
    message.auctionId = object.auctionId ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.bidder = object.bidder ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};