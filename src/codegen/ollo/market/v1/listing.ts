import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface NftListing {
  id: string;
  nftId: string;
  denomId: string;
  creator: string;
  price?: Coin;
}
export interface NftListingSDKType {
  id: string;
  nft_id: string;
  denom_id: string;
  creator: string;
  price?: CoinSDKType;
}

function createBaseNftListing(): NftListing {
  return {
    id: "",
    nftId: "",
    denomId: "",
    creator: "",
    price: undefined
  };
}

export const NftListing = {
  encode(message: NftListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NftListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftListing();

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
          message.price = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<NftListing>): NftListing {
    const message = createBaseNftListing();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.creator = object.creator ?? "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    return message;
  }

};