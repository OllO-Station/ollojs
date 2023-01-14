import { bidTypeFromJSON } from "./grants";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateFixedPriceAuction, MsgCreateBatchAuction, MsgCancelAuction, MsgPlaceBid, MsgModifyBid, MsgAddAllowedBidder } from "./tx";
export interface AminoMsgCreateFixedPriceAuction extends AminoMsg {
  type: "/ollo.grants.v1.MsgCreateFixedPriceAuction";
  value: {
    auctioneer: string;
    start_price: string;
    selling_coin: {
      denom: string;
      amount: string;
    };
    paying_coin_denom: string;
    vesting_schedules: {
      release_time: {
        seconds: string;
        nanos: number;
      };
      weight: string;
    }[];
    start_time: {
      seconds: string;
      nanos: number;
    };
    end_time: {
      seconds: string;
      nanos: number;
    };
  };
}
export interface AminoMsgCreateBatchAuction extends AminoMsg {
  type: "/ollo.grants.v1.MsgCreateBatchAuction";
  value: {
    auctioneer: string;
    start_price: string;
    min_bid_price: string;
    selling_coin: {
      denom: string;
      amount: string;
    };
    paying_coin_denom: string;
    vesting_schedules: {
      release_time: {
        seconds: string;
        nanos: number;
      };
      weight: string;
    }[];
    max_extended_round: number;
    extended_round_rate: string;
    start_time: {
      seconds: string;
      nanos: number;
    };
    end_time: {
      seconds: string;
      nanos: number;
    };
  };
}
export interface AminoMsgCancelAuction extends AminoMsg {
  type: "/ollo.grants.v1.MsgCancelAuction";
  value: {
    auctioneer: string;
    auction_id: string;
  };
}
export interface AminoMsgPlaceBid extends AminoMsg {
  type: "/ollo.grants.v1.MsgPlaceBid";
  value: {
    auction_id: string;
    bidder: string;
    bid_type: number;
    price: string;
    coin: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgModifyBid extends AminoMsg {
  type: "/ollo.grants.v1.MsgModifyBid";
  value: {
    auction_id: string;
    bidder: string;
    bid_id: string;
    price: string;
    coin: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgAddAllowedBidder extends AminoMsg {
  type: "/ollo.grants.v1.MsgAddAllowedBidder";
  value: {
    auction_id: string;
    allowed_bidder: {
      bidder: string;
      max_bid_amount: string;
    };
  };
}
export const AminoConverter = {
  "/ollo.grants.v1.MsgCreateFixedPriceAuction": {
    aminoType: "/ollo.grants.v1.MsgCreateFixedPriceAuction",
    toAmino: ({
      auctioneer,
      startPrice,
      sellingCoin,
      payingCoinDenom,
      vestingSchedules,
      startTime,
      endTime
    }: MsgCreateFixedPriceAuction): AminoMsgCreateFixedPriceAuction["value"] => {
      return {
        auctioneer,
        start_price: startPrice,
        selling_coin: {
          denom: sellingCoin.denom,
          amount: Long.fromValue(sellingCoin.amount).toString()
        },
        paying_coin_denom: payingCoinDenom,
        vesting_schedules: vestingSchedules.map(el0 => ({
          release_time: el0.releaseTime,
          weight: el0.weight
        })),
        start_time: startTime,
        end_time: endTime
      };
    },
    fromAmino: ({
      auctioneer,
      start_price,
      selling_coin,
      paying_coin_denom,
      vesting_schedules,
      start_time,
      end_time
    }: AminoMsgCreateFixedPriceAuction["value"]): MsgCreateFixedPriceAuction => {
      return {
        auctioneer,
        startPrice: start_price,
        sellingCoin: {
          denom: selling_coin.denom,
          amount: selling_coin.amount
        },
        payingCoinDenom: paying_coin_denom,
        vestingSchedules: vesting_schedules.map(el0 => ({
          releaseTime: el0.release_time,
          weight: el0.weight
        })),
        startTime: start_time,
        endTime: end_time
      };
    }
  },
  "/ollo.grants.v1.MsgCreateBatchAuction": {
    aminoType: "/ollo.grants.v1.MsgCreateBatchAuction",
    toAmino: ({
      auctioneer,
      startPrice,
      minBidPrice,
      sellingCoin,
      payingCoinDenom,
      vestingSchedules,
      maxExtendedRound,
      extendedRoundRate,
      startTime,
      endTime
    }: MsgCreateBatchAuction): AminoMsgCreateBatchAuction["value"] => {
      return {
        auctioneer,
        start_price: startPrice,
        min_bid_price: minBidPrice,
        selling_coin: {
          denom: sellingCoin.denom,
          amount: Long.fromValue(sellingCoin.amount).toString()
        },
        paying_coin_denom: payingCoinDenom,
        vesting_schedules: vestingSchedules.map(el0 => ({
          release_time: el0.releaseTime,
          weight: el0.weight
        })),
        max_extended_round: maxExtendedRound,
        extended_round_rate: extendedRoundRate,
        start_time: startTime,
        end_time: endTime
      };
    },
    fromAmino: ({
      auctioneer,
      start_price,
      min_bid_price,
      selling_coin,
      paying_coin_denom,
      vesting_schedules,
      max_extended_round,
      extended_round_rate,
      start_time,
      end_time
    }: AminoMsgCreateBatchAuction["value"]): MsgCreateBatchAuction => {
      return {
        auctioneer,
        startPrice: start_price,
        minBidPrice: min_bid_price,
        sellingCoin: {
          denom: selling_coin.denom,
          amount: selling_coin.amount
        },
        payingCoinDenom: paying_coin_denom,
        vestingSchedules: vesting_schedules.map(el0 => ({
          releaseTime: el0.release_time,
          weight: el0.weight
        })),
        maxExtendedRound: max_extended_round,
        extendedRoundRate: extended_round_rate,
        startTime: start_time,
        endTime: end_time
      };
    }
  },
  "/ollo.grants.v1.MsgCancelAuction": {
    aminoType: "/ollo.grants.v1.MsgCancelAuction",
    toAmino: ({
      auctioneer,
      auctionId
    }: MsgCancelAuction): AminoMsgCancelAuction["value"] => {
      return {
        auctioneer,
        auction_id: auctionId.toString()
      };
    },
    fromAmino: ({
      auctioneer,
      auction_id
    }: AminoMsgCancelAuction["value"]): MsgCancelAuction => {
      return {
        auctioneer,
        auctionId: Long.fromString(auction_id)
      };
    }
  },
  "/ollo.grants.v1.MsgPlaceBid": {
    aminoType: "/ollo.grants.v1.MsgPlaceBid",
    toAmino: ({
      auctionId,
      bidder,
      bidType,
      price,
      coin
    }: MsgPlaceBid): AminoMsgPlaceBid["value"] => {
      return {
        auction_id: auctionId.toString(),
        bidder,
        bid_type: bidType,
        price,
        coin: {
          denom: coin.denom,
          amount: Long.fromValue(coin.amount).toString()
        }
      };
    },
    fromAmino: ({
      auction_id,
      bidder,
      bid_type,
      price,
      coin
    }: AminoMsgPlaceBid["value"]): MsgPlaceBid => {
      return {
        auctionId: Long.fromString(auction_id),
        bidder,
        bidType: bidTypeFromJSON(bid_type),
        price,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/ollo.grants.v1.MsgModifyBid": {
    aminoType: "/ollo.grants.v1.MsgModifyBid",
    toAmino: ({
      auctionId,
      bidder,
      bidId,
      price,
      coin
    }: MsgModifyBid): AminoMsgModifyBid["value"] => {
      return {
        auction_id: auctionId.toString(),
        bidder,
        bid_id: bidId.toString(),
        price,
        coin: {
          denom: coin.denom,
          amount: Long.fromValue(coin.amount).toString()
        }
      };
    },
    fromAmino: ({
      auction_id,
      bidder,
      bid_id,
      price,
      coin
    }: AminoMsgModifyBid["value"]): MsgModifyBid => {
      return {
        auctionId: Long.fromString(auction_id),
        bidder,
        bidId: Long.fromString(bid_id),
        price,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/ollo.grants.v1.MsgAddAllowedBidder": {
    aminoType: "/ollo.grants.v1.MsgAddAllowedBidder",
    toAmino: ({
      auctionId,
      allowedBidder
    }: MsgAddAllowedBidder): AminoMsgAddAllowedBidder["value"] => {
      return {
        auction_id: auctionId.toString(),
        allowed_bidder: {
          bidder: allowedBidder.bidder,
          max_bid_amount: allowedBidder.maxBidAmount
        }
      };
    },
    fromAmino: ({
      auction_id,
      allowed_bidder
    }: AminoMsgAddAllowedBidder["value"]): MsgAddAllowedBidder => {
      return {
        auctionId: Long.fromString(auction_id),
        allowedBidder: {
          bidder: allowed_bidder.bidder,
          maxBidAmount: allowed_bidder.max_bid_amount
        }
      };
    }
  }
};