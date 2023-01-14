import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { VestingSchedule, VestingScheduleSDKType, BidType, AllowedBidder, AllowedBidderSDKType } from "./grants";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/**
 * MsgCreateFixedPriceAuction defines a SDK message for creating a fixed price
 * auction.
 */
export interface MsgCreateFixedPriceAuction {
    /** auctioneer specifies the bech32-encoded address that creates the auction */
    auctioneer: string;
    /** start_price specifies the starting price of the auction */
    startPrice: string;
    /** selling_coin specifies the selling coin for the auction */
    sellingCoin?: Coin;
    /**
     * paying_coin_denom specifies the paying coin denom that bidders use to bid
     * for
     */
    payingCoinDenom: string;
    /** vesting_schedules specifies the vesting schedules for the auction */
    vestingSchedules: VestingSchedule[];
    /** start_time specifies the start time of the plan */
    startTime?: Date;
    /** end_time specifies the end time of the plan */
    endTime?: Date;
}
/**
 * MsgCreateFixedPriceAuction defines a SDK message for creating a fixed price
 * auction.
 */
export interface MsgCreateFixedPriceAuctionSDKType {
    auctioneer: string;
    start_price: string;
    selling_coin?: CoinSDKType;
    paying_coin_denom: string;
    vesting_schedules: VestingScheduleSDKType[];
    start_time?: Date;
    end_time?: Date;
}
/**
 * MsgCreateFixedPriceAuctionResponse defines the
 * Msg/MsgCreateFixedPriceAuctionResponse response type.
 */
export interface MsgCreateFixedPriceAuctionResponse {
}
/**
 * MsgCreateFixedPriceAuctionResponse defines the
 * Msg/MsgCreateFixedPriceAuctionResponse response type.
 */
export interface MsgCreateFixedPriceAuctionResponseSDKType {
}
/**
 * MsgCreateBatchAuction defines a SDK message for creating an batch
 * auction.
 *
 * See:
 * https://ollo/tree/main/x/grants/spec/04_messages.md
 */
export interface MsgCreateBatchAuction {
    /** auctioneer specifies the bech32-encoded address that creates the auction */
    auctioneer: string;
    /** start_price specifies the starting price of the auction */
    startPrice: string;
    /** min_bid_price specifies the minibum bid price */
    minBidPrice: string;
    /** selling_coin specifies the selling coin for the auction */
    sellingCoin?: Coin;
    /**
     * paying_coin_denom specifies the paying coin denom that bidders use to bid
     * for
     */
    payingCoinDenom: string;
    /** vesting_schedules specifies the vesting schedules for the auction */
    vestingSchedules: VestingSchedule[];
    /**
     * maximum_extended_round specifies the maximum number of extended rounds for
     * the auction
     */
    maxExtendedRound: number;
    /**
     * extended_round_rate specifies the rate that decides if the auction needs
     * another round
     */
    extendedRoundRate: string;
    /** start_time specifies the start time of the plan */
    startTime?: Date;
    /** end_time specifies the end time of the plan */
    endTime?: Date;
}
/**
 * MsgCreateBatchAuction defines a SDK message for creating an batch
 * auction.
 *
 * See:
 * https://ollo/tree/main/x/grants/spec/04_messages.md
 */
export interface MsgCreateBatchAuctionSDKType {
    auctioneer: string;
    start_price: string;
    min_bid_price: string;
    selling_coin?: CoinSDKType;
    paying_coin_denom: string;
    vesting_schedules: VestingScheduleSDKType[];
    max_extended_round: number;
    extended_round_rate: string;
    start_time?: Date;
    end_time?: Date;
}
/**
 * MsgCreateBatchAuctionResponse defines the
 * Msg/MsgCreateBatchAuctionResponse response type.
 */
export interface MsgCreateBatchAuctionResponse {
}
/**
 * MsgCreateBatchAuctionResponse defines the
 * Msg/MsgCreateBatchAuctionResponse response type.
 */
export interface MsgCreateBatchAuctionResponseSDKType {
}
/**
 * MsgCancelAuction defines a SDK message for cancelling the auction.
 * Cancelling is only allowed when the auction hasn't started yet.
 */
export interface MsgCancelAuction {
    /**
     * auctioneer specifies the bech32-encoded address that is in charge of the
     * auction
     */
    auctioneer: string;
    /** auction_id specifies the auction id */
    auctionId: Long;
}
/**
 * MsgCancelAuction defines a SDK message for cancelling the auction.
 * Cancelling is only allowed when the auction hasn't started yet.
 */
export interface MsgCancelAuctionSDKType {
    auctioneer: string;
    auction_id: Long;
}
/**
 * MsgCancelAuctionResponse defines the Msg/MsgCancelAuctionResponse
 * response type.
 */
export interface MsgCancelAuctionResponse {
}
/**
 * MsgCancelAuctionResponse defines the Msg/MsgCancelAuctionResponse
 * response type.
 */
export interface MsgCancelAuctionResponseSDKType {
}
/** MsgPlaceBid defines a SDK message for placing a bid for the auction. */
export interface MsgPlaceBid {
    /** auction_id specifies the auction id */
    auctionId: Long;
    /** bidder specifies the bech32-encoded address that bids for the auction */
    bidder: string;
    /**
     * type specifies the bid type; type 1 is fixed price, 2 is how-much-worth, 3
     * is how-many-coins
     */
    bidType: BidType;
    /**
     * price specifies the bid price.
     * The bid price must be the start price for fixed price auction whereas
     * the bide price can be any value that the bidder places.
     */
    price: string;
    /**
     * coin specifies the paying amount of coin or the selling amount that the
     * bidder bids
     */
    coin?: Coin;
}
/** MsgPlaceBid defines a SDK message for placing a bid for the auction. */
export interface MsgPlaceBidSDKType {
    auction_id: Long;
    bidder: string;
    bid_type: BidType;
    price: string;
    coin?: CoinSDKType;
}
/** MsgPlaceBidResponse defines the Msg/MsgPlaceBidResponse response type. */
export interface MsgPlaceBidResponse {
}
/** MsgPlaceBidResponse defines the Msg/MsgPlaceBidResponse response type. */
export interface MsgPlaceBidResponseSDKType {
}
/**
 * MsgModifyBid defines a SDK message for modifying an existing bid for the
 * auction.
 */
export interface MsgModifyBid {
    /** auction_id specifies the auction id */
    auctionId: Long;
    /** bidder specifies the bech32-encoded address that bids for the auction */
    bidder: string;
    /** bid_id specifies the bid id */
    bidId: Long;
    /**
     * price specifies the bid price.
     * the bide price must be above or equal to the original value that the bidder
     * placed.
     */
    price: string;
    /**
     * coin specifies the paying amount of coin or the selling amount that the
     * bidder bids
     */
    coin?: Coin;
}
/**
 * MsgModifyBid defines a SDK message for modifying an existing bid for the
 * auction.
 */
export interface MsgModifyBidSDKType {
    auction_id: Long;
    bidder: string;
    bid_id: Long;
    price: string;
    coin?: CoinSDKType;
}
/** MsgModifyBidResponse defines the Msg/MsgModifyBidResponse response type. */
export interface MsgModifyBidResponse {
}
/** MsgModifyBidResponse defines the Msg/MsgModifyBidResponse response type. */
export interface MsgModifyBidResponseSDKType {
}
/**
 * MsgAddAllowedBidder defines a SDK message for adding an allowed bidder to the
 * auction.
 */
export interface MsgAddAllowedBidder {
    /** auction_id specifies the auction id */
    auctionId: Long;
    /**
     * allowed_bidder specifies the bidder who is allowed to bid and their maximum
     * bid amount
     */
    allowedBidder?: AllowedBidder;
}
/**
 * MsgAddAllowedBidder defines a SDK message for adding an allowed bidder to the
 * auction.
 */
export interface MsgAddAllowedBidderSDKType {
    auction_id: Long;
    allowed_bidder?: AllowedBidderSDKType;
}
export interface MsgAddAllowedBidderResponse {
}
export interface MsgAddAllowedBidderResponseSDKType {
}
export declare const MsgCreateFixedPriceAuction: {
    encode(message: MsgCreateFixedPriceAuction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFixedPriceAuction;
    fromPartial(object: DeepPartial<MsgCreateFixedPriceAuction>): MsgCreateFixedPriceAuction;
};
export declare const MsgCreateFixedPriceAuctionResponse: {
    encode(_: MsgCreateFixedPriceAuctionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFixedPriceAuctionResponse;
    fromPartial(_: DeepPartial<MsgCreateFixedPriceAuctionResponse>): MsgCreateFixedPriceAuctionResponse;
};
export declare const MsgCreateBatchAuction: {
    encode(message: MsgCreateBatchAuction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatchAuction;
    fromPartial(object: DeepPartial<MsgCreateBatchAuction>): MsgCreateBatchAuction;
};
export declare const MsgCreateBatchAuctionResponse: {
    encode(_: MsgCreateBatchAuctionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatchAuctionResponse;
    fromPartial(_: DeepPartial<MsgCreateBatchAuctionResponse>): MsgCreateBatchAuctionResponse;
};
export declare const MsgCancelAuction: {
    encode(message: MsgCancelAuction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelAuction;
    fromPartial(object: DeepPartial<MsgCancelAuction>): MsgCancelAuction;
};
export declare const MsgCancelAuctionResponse: {
    encode(_: MsgCancelAuctionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelAuctionResponse;
    fromPartial(_: DeepPartial<MsgCancelAuctionResponse>): MsgCancelAuctionResponse;
};
export declare const MsgPlaceBid: {
    encode(message: MsgPlaceBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBid;
    fromPartial(object: DeepPartial<MsgPlaceBid>): MsgPlaceBid;
};
export declare const MsgPlaceBidResponse: {
    encode(_: MsgPlaceBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBidResponse;
    fromPartial(_: DeepPartial<MsgPlaceBidResponse>): MsgPlaceBidResponse;
};
export declare const MsgModifyBid: {
    encode(message: MsgModifyBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyBid;
    fromPartial(object: DeepPartial<MsgModifyBid>): MsgModifyBid;
};
export declare const MsgModifyBidResponse: {
    encode(_: MsgModifyBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyBidResponse;
    fromPartial(_: DeepPartial<MsgModifyBidResponse>): MsgModifyBidResponse;
};
export declare const MsgAddAllowedBidder: {
    encode(message: MsgAddAllowedBidder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllowedBidder;
    fromPartial(object: DeepPartial<MsgAddAllowedBidder>): MsgAddAllowedBidder;
};
export declare const MsgAddAllowedBidderResponse: {
    encode(_: MsgAddAllowedBidderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllowedBidderResponse;
    fromPartial(_: DeepPartial<MsgAddAllowedBidderResponse>): MsgAddAllowedBidderResponse;
};
