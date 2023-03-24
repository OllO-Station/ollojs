import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgListNft, MsgBuyNft, MsgDelistNft, MsgEditNftListing, MsgCreateNftAuction, MsgCancelNftAuction, MsgPlaceNftBid } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.market.v1.MsgListNft", MsgListNft], ["/ollo.market.v1.MsgBuyNft", MsgBuyNft], ["/ollo.market.v1.MsgDelistNft", MsgDelistNft], ["/ollo.market.v1.MsgEditNftListing", MsgEditNftListing], ["/ollo.market.v1.MsgCreateNftAuction", MsgCreateNftAuction], ["/ollo.market.v1.MsgCancelNftAuction", MsgCancelNftAuction], ["/ollo.market.v1.MsgPlaceNftBid", MsgPlaceNftBid]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    listNft(value: MsgListNft) {
      return {
        typeUrl: "/ollo.market.v1.MsgListNft",
        value: MsgListNft.encode(value).finish()
      };
    },

    buyNft(value: MsgBuyNft) {
      return {
        typeUrl: "/ollo.market.v1.MsgBuyNft",
        value: MsgBuyNft.encode(value).finish()
      };
    },

    delistNft(value: MsgDelistNft) {
      return {
        typeUrl: "/ollo.market.v1.MsgDelistNft",
        value: MsgDelistNft.encode(value).finish()
      };
    },

    editNftListing(value: MsgEditNftListing) {
      return {
        typeUrl: "/ollo.market.v1.MsgEditNftListing",
        value: MsgEditNftListing.encode(value).finish()
      };
    },

    createNftAuction(value: MsgCreateNftAuction) {
      return {
        typeUrl: "/ollo.market.v1.MsgCreateNftAuction",
        value: MsgCreateNftAuction.encode(value).finish()
      };
    },

    cancelNftAuction(value: MsgCancelNftAuction) {
      return {
        typeUrl: "/ollo.market.v1.MsgCancelNftAuction",
        value: MsgCancelNftAuction.encode(value).finish()
      };
    },

    placeNftBid(value: MsgPlaceNftBid) {
      return {
        typeUrl: "/ollo.market.v1.MsgPlaceNftBid",
        value: MsgPlaceNftBid.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    listNft(value: MsgListNft) {
      return {
        typeUrl: "/ollo.market.v1.MsgListNft",
        value
      };
    },

    buyNft(value: MsgBuyNft) {
      return {
        typeUrl: "/ollo.market.v1.MsgBuyNft",
        value
      };
    },

    delistNft(value: MsgDelistNft) {
      return {
        typeUrl: "/ollo.market.v1.MsgDelistNft",
        value
      };
    },

    editNftListing(value: MsgEditNftListing) {
      return {
        typeUrl: "/ollo.market.v1.MsgEditNftListing",
        value
      };
    },

    createNftAuction(value: MsgCreateNftAuction) {
      return {
        typeUrl: "/ollo.market.v1.MsgCreateNftAuction",
        value
      };
    },

    cancelNftAuction(value: MsgCancelNftAuction) {
      return {
        typeUrl: "/ollo.market.v1.MsgCancelNftAuction",
        value
      };
    },

    placeNftBid(value: MsgPlaceNftBid) {
      return {
        typeUrl: "/ollo.market.v1.MsgPlaceNftBid",
        value
      };
    }

  },
  fromPartial: {
    listNft(value: MsgListNft) {
      return {
        typeUrl: "/ollo.market.v1.MsgListNft",
        value: MsgListNft.fromPartial(value)
      };
    },

    buyNft(value: MsgBuyNft) {
      return {
        typeUrl: "/ollo.market.v1.MsgBuyNft",
        value: MsgBuyNft.fromPartial(value)
      };
    },

    delistNft(value: MsgDelistNft) {
      return {
        typeUrl: "/ollo.market.v1.MsgDelistNft",
        value: MsgDelistNft.fromPartial(value)
      };
    },

    editNftListing(value: MsgEditNftListing) {
      return {
        typeUrl: "/ollo.market.v1.MsgEditNftListing",
        value: MsgEditNftListing.fromPartial(value)
      };
    },

    createNftAuction(value: MsgCreateNftAuction) {
      return {
        typeUrl: "/ollo.market.v1.MsgCreateNftAuction",
        value: MsgCreateNftAuction.fromPartial(value)
      };
    },

    cancelNftAuction(value: MsgCancelNftAuction) {
      return {
        typeUrl: "/ollo.market.v1.MsgCancelNftAuction",
        value: MsgCancelNftAuction.fromPartial(value)
      };
    },

    placeNftBid(value: MsgPlaceNftBid) {
      return {
        typeUrl: "/ollo.market.v1.MsgPlaceNftBid",
        value: MsgPlaceNftBid.fromPartial(value)
      };
    }

  }
};