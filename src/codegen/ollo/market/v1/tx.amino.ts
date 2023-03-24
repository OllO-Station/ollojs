import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgListNft, MsgBuyNft, MsgDelistNft, MsgEditNftListing, MsgCreateNftAuction, MsgCancelNftAuction, MsgPlaceNftBid } from "./tx";
export interface AminoMsgListNft extends AminoMsg {
  type: "/ollo.market.v1.MsgListNft";
  value: {
    id: string;
    nft_id: string;
    denom_id: string;
    price: {
      denom: string;
      amount: string;
    };
    seller: string;
  };
}
export interface AminoMsgBuyNft extends AminoMsg {
  type: "/ollo.market.v1.MsgBuyNft";
  value: {
    id: string;
    price: {
      denom: string;
      amount: string;
    };
    buyer: string;
  };
}
export interface AminoMsgDelistNft extends AminoMsg {
  type: "/ollo.market.v1.MsgDelistNft";
  value: {
    id: string;
    owner: string;
  };
}
export interface AminoMsgEditNftListing extends AminoMsg {
  type: "/ollo.market.v1.MsgEditNftListing";
  value: {
    id: string;
    price: {
      denom: string;
      amount: string;
    };
    owner: string;
  };
}
export interface AminoMsgCreateNftAuction extends AminoMsg {
  type: "/ollo.market.v1.MsgCreateNftAuction";
  value: {
    nft_id: string;
    denom_id: string;
    start_time: {
      seconds: string;
      nanos: number;
    };
    start_price: {
      denom: string;
      amount: string;
    };
    duration: {
      seconds: string;
      nanos: number;
    };
    increment_percentage: string;
    owner: string;
  };
}
export interface AminoMsgCancelNftAuction extends AminoMsg {
  type: "/ollo.market.v1.MsgCancelNftAuction";
  value: {
    auction_id: string;
    owner: string;
  };
}
export interface AminoMsgPlaceNftBid extends AminoMsg {
  type: "/ollo.market.v1.MsgPlaceNftBid";
  value: {
    auction_id: string;
    amount: {
      denom: string;
      amount: string;
    };
    bidder: string;
  };
}
export const AminoConverter = {
  "/ollo.market.v1.MsgListNft": {
    aminoType: "/ollo.market.v1.MsgListNft",
    toAmino: ({
      id,
      nftId,
      denomId,
      price,
      seller
    }: MsgListNft): AminoMsgListNft["value"] => {
      return {
        id,
        nft_id: nftId,
        denom_id: denomId,
        price: {
          denom: price.denom,
          amount: Long.fromValue(price.amount).toString()
        },
        seller
      };
    },
    fromAmino: ({
      id,
      nft_id,
      denom_id,
      price,
      seller
    }: AminoMsgListNft["value"]): MsgListNft => {
      return {
        id,
        nftId: nft_id,
        denomId: denom_id,
        price: {
          denom: price.denom,
          amount: price.amount
        },
        seller
      };
    }
  },
  "/ollo.market.v1.MsgBuyNft": {
    aminoType: "/ollo.market.v1.MsgBuyNft",
    toAmino: ({
      id,
      price,
      buyer
    }: MsgBuyNft): AminoMsgBuyNft["value"] => {
      return {
        id,
        price: {
          denom: price.denom,
          amount: Long.fromValue(price.amount).toString()
        },
        buyer
      };
    },
    fromAmino: ({
      id,
      price,
      buyer
    }: AminoMsgBuyNft["value"]): MsgBuyNft => {
      return {
        id,
        price: {
          denom: price.denom,
          amount: price.amount
        },
        buyer
      };
    }
  },
  "/ollo.market.v1.MsgDelistNft": {
    aminoType: "/ollo.market.v1.MsgDelistNft",
    toAmino: ({
      id,
      owner
    }: MsgDelistNft): AminoMsgDelistNft["value"] => {
      return {
        id,
        owner
      };
    },
    fromAmino: ({
      id,
      owner
    }: AminoMsgDelistNft["value"]): MsgDelistNft => {
      return {
        id,
        owner
      };
    }
  },
  "/ollo.market.v1.MsgEditNftListing": {
    aminoType: "/ollo.market.v1.MsgEditNftListing",
    toAmino: ({
      id,
      price,
      owner
    }: MsgEditNftListing): AminoMsgEditNftListing["value"] => {
      return {
        id,
        price: {
          denom: price.denom,
          amount: Long.fromValue(price.amount).toString()
        },
        owner
      };
    },
    fromAmino: ({
      id,
      price,
      owner
    }: AminoMsgEditNftListing["value"]): MsgEditNftListing => {
      return {
        id,
        price: {
          denom: price.denom,
          amount: price.amount
        },
        owner
      };
    }
  },
  "/ollo.market.v1.MsgCreateNftAuction": {
    aminoType: "/ollo.market.v1.MsgCreateNftAuction",
    toAmino: ({
      nftId,
      denomId,
      startTime,
      startPrice,
      duration,
      incrementPercentage,
      owner
    }: MsgCreateNftAuction): AminoMsgCreateNftAuction["value"] => {
      return {
        nft_id: nftId,
        denom_id: denomId,
        start_time: startTime,
        start_price: {
          denom: startPrice.denom,
          amount: Long.fromValue(startPrice.amount).toString()
        },
        duration: (duration * 1_000_000_000).toString(),
        increment_percentage: incrementPercentage,
        owner
      };
    },
    fromAmino: ({
      nft_id,
      denom_id,
      start_time,
      start_price,
      duration,
      increment_percentage,
      owner
    }: AminoMsgCreateNftAuction["value"]): MsgCreateNftAuction => {
      return {
        nftId: nft_id,
        denomId: denom_id,
        startTime: start_time,
        startPrice: {
          denom: start_price.denom,
          amount: start_price.amount
        },
        duration: {
          seconds: Long.fromNumber(Math.floor(parseInt(duration) / 1_000_000_000)),
          nanos: parseInt(duration) % 1_000_000_000
        },
        incrementPercentage: increment_percentage,
        owner
      };
    }
  },
  "/ollo.market.v1.MsgCancelNftAuction": {
    aminoType: "/ollo.market.v1.MsgCancelNftAuction",
    toAmino: ({
      auctionId,
      owner
    }: MsgCancelNftAuction): AminoMsgCancelNftAuction["value"] => {
      return {
        auction_id: auctionId.toString(),
        owner
      };
    },
    fromAmino: ({
      auction_id,
      owner
    }: AminoMsgCancelNftAuction["value"]): MsgCancelNftAuction => {
      return {
        auctionId: Long.fromString(auction_id),
        owner
      };
    }
  },
  "/ollo.market.v1.MsgPlaceNftBid": {
    aminoType: "/ollo.market.v1.MsgPlaceNftBid",
    toAmino: ({
      auctionId,
      amount,
      bidder
    }: MsgPlaceNftBid): AminoMsgPlaceNftBid["value"] => {
      return {
        auction_id: auctionId.toString(),
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        bidder
      };
    },
    fromAmino: ({
      auction_id,
      amount,
      bidder
    }: AminoMsgPlaceNftBid["value"]): MsgPlaceNftBid => {
      return {
        auctionId: Long.fromString(auction_id),
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        bidder
      };
    }
  }
};