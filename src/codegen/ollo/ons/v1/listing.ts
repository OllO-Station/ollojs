import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface NameListing {
  name: string;
  owner: string;
  price: string;
}
export interface NameListingSDKType {
  name: string;
  owner: string;
  price: string;
}
export interface NameListingBid {
  id: string;
  name: string;
  bidder: string;
  price: string;
}
export interface NameListingBidSDKType {
  id: string;
  name: string;
  bidder: string;
  price: string;
}

function createBaseNameListing(): NameListing {
  return {
    name: "",
    owner: "",
    price: ""
  };
}

export const NameListing = {
  encode(message: NameListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NameListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNameListing();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.price = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<NameListing>): NameListing {
    const message = createBaseNameListing();
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.price = object.price ?? "";
    return message;
  }

};

function createBaseNameListingBid(): NameListingBid {
  return {
    id: "",
    name: "",
    bidder: "",
    price: ""
  };
}

export const NameListingBid = {
  encode(message: NameListingBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.bidder !== "") {
      writer.uint32(26).string(message.bidder);
    }

    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NameListingBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNameListingBid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.bidder = reader.string();
          break;

        case 4:
          message.price = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<NameListingBid>): NameListingBid {
    const message = createBaseNameListingBid();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.bidder = object.bidder ?? "";
    message.price = object.price ?? "";
    return message;
  }

};