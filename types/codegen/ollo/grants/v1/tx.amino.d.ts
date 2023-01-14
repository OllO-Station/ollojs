import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/ollo.grants.v1.MsgCreateFixedPriceAuction": {
        aminoType: string;
        toAmino: ({ auctioneer, startPrice, sellingCoin, payingCoinDenom, vestingSchedules, startTime, endTime }: MsgCreateFixedPriceAuction) => AminoMsgCreateFixedPriceAuction["value"];
        fromAmino: ({ auctioneer, start_price, selling_coin, paying_coin_denom, vesting_schedules, start_time, end_time }: AminoMsgCreateFixedPriceAuction["value"]) => MsgCreateFixedPriceAuction;
    };
    "/ollo.grants.v1.MsgCreateBatchAuction": {
        aminoType: string;
        toAmino: ({ auctioneer, startPrice, minBidPrice, sellingCoin, payingCoinDenom, vestingSchedules, maxExtendedRound, extendedRoundRate, startTime, endTime }: MsgCreateBatchAuction) => AminoMsgCreateBatchAuction["value"];
        fromAmino: ({ auctioneer, start_price, min_bid_price, selling_coin, paying_coin_denom, vesting_schedules, max_extended_round, extended_round_rate, start_time, end_time }: AminoMsgCreateBatchAuction["value"]) => MsgCreateBatchAuction;
    };
    "/ollo.grants.v1.MsgCancelAuction": {
        aminoType: string;
        toAmino: ({ auctioneer, auctionId }: MsgCancelAuction) => AminoMsgCancelAuction["value"];
        fromAmino: ({ auctioneer, auction_id }: AminoMsgCancelAuction["value"]) => MsgCancelAuction;
    };
    "/ollo.grants.v1.MsgPlaceBid": {
        aminoType: string;
        toAmino: ({ auctionId, bidder, bidType, price, coin }: MsgPlaceBid) => AminoMsgPlaceBid["value"];
        fromAmino: ({ auction_id, bidder, bid_type, price, coin }: AminoMsgPlaceBid["value"]) => MsgPlaceBid;
    };
    "/ollo.grants.v1.MsgModifyBid": {
        aminoType: string;
        toAmino: ({ auctionId, bidder, bidId, price, coin }: MsgModifyBid) => AminoMsgModifyBid["value"];
        fromAmino: ({ auction_id, bidder, bid_id, price, coin }: AminoMsgModifyBid["value"]) => MsgModifyBid;
    };
    "/ollo.grants.v1.MsgAddAllowedBidder": {
        aminoType: string;
        toAmino: ({ auctionId, allowedBidder }: MsgAddAllowedBidder) => AminoMsgAddAllowedBidder["value"];
        fromAmino: ({ auction_id, allowed_bidder }: AminoMsgAddAllowedBidder["value"]) => MsgAddAllowedBidder;
    };
};
