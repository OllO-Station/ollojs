import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** AuctionType enumerates the valid types of an auction. */
export declare enum AuctionType {
    /** AUCTION_TYPE_UNSPECIFIED - AUCTION_TYPE_UNSPECIFIED defines the default auction type */
    AUCTION_TYPE_UNSPECIFIED = 0,
    /** AUCTION_TYPE_FIXED_PRICE - AUCTION_TYPE_FIXED_PRICE defines the fixed price auction type */
    AUCTION_TYPE_FIXED_PRICE = 1,
    /** AUCTION_TYPE_BATCH - AUCTION_TYPE_BATCH defines the batch auction type */
    AUCTION_TYPE_BATCH = 2,
    UNRECOGNIZED = -1
}
export declare const AuctionTypeSDKType: typeof AuctionType;
export declare function auctionTypeFromJSON(object: any): AuctionType;
export declare function auctionTypeToJSON(object: AuctionType): string;
/** AuctionStatus enumerates the valid status of an auction. */
export declare enum AuctionStatus {
    /** AUCTION_STATUS_UNSPECIFIED - AUCTION_STATUS_UNSPECIFIED defines the default auction status */
    AUCTION_STATUS_UNSPECIFIED = 0,
    /** AUCTION_STATUS_STANDBY - AUCTION_STATUS_STANDBY defines the standby auction status */
    AUCTION_STATUS_STANDBY = 1,
    /** AUCTION_STATUS_STARTED - AUCTION_STATUS_STARTED defines the started auction status */
    AUCTION_STATUS_STARTED = 2,
    /** AUCTION_STATUS_VESTING - AUCTION_STATUS_VESTING defines the vesting auction status */
    AUCTION_STATUS_VESTING = 3,
    /** AUCTION_STATUS_FINISHED - AUCTION_STATUS_FINISHED defines the finished auction status */
    AUCTION_STATUS_FINISHED = 4,
    /** AUCTION_STATUS_CANCELLED - AUCTION_STATUS_CANCELLED defines the cancelled auction status */
    AUCTION_STATUS_CANCELLED = 5,
    UNRECOGNIZED = -1
}
export declare const AuctionStatusSDKType: typeof AuctionStatus;
export declare function auctionStatusFromJSON(object: any): AuctionStatus;
export declare function auctionStatusToJSON(object: AuctionStatus): string;
/** BidType enumerates the valid types of a bid. */
export declare enum BidType {
    /** BID_TYPE_UNSPECIFIED - BID_TYPE_UNSPECIFIED defines the default bid type */
    BID_TYPE_UNSPECIFIED = 0,
    /** BID_TYPE_FIXED_PRICE - BID_TYPE_FIXED_PRICE defines a bid type for a fixed price auction type */
    BID_TYPE_FIXED_PRICE = 1,
    /**
     * BID_TYPE_BATCH_WORTH - BID_TYPE_BATCH_WORTH defines a bid type for How-Much-Worth-to-Buy of a
     * batch auction
     */
    BID_TYPE_BATCH_WORTH = 2,
    /**
     * BID_TYPE_BATCH_MANY - BID_TYPE_BATCH_MANY defines a bid type for How-Many-Coins-to-Buy of a batch
     * auction
     */
    BID_TYPE_BATCH_MANY = 3,
    UNRECOGNIZED = -1
}
export declare const BidTypeSDKType: typeof BidType;
export declare function bidTypeFromJSON(object: any): BidType;
export declare function bidTypeToJSON(object: BidType): string;
/** AddressType enumerates the available types of a address. */
export declare enum AddressType {
    /** ADDRESS_TYPE_32_BYTES - the 32 bytes length address type of ADR 028. */
    ADDRESS_TYPE_32_BYTES = 0,
    /** ADDRESS_TYPE_20_BYTES - the default 20 bytes length address type. */
    ADDRESS_TYPE_20_BYTES = 1,
    UNRECOGNIZED = -1
}
export declare const AddressTypeSDKType: typeof AddressType;
export declare function addressTypeFromJSON(object: any): AddressType;
export declare function addressTypeToJSON(object: AddressType): string;
/**
 * BaseAuction defines a base auction type. It contains all the necessary fields
 * for basic auction functionality. Any custom auction type should extend this
 * type for additional functionality (e.g. batch auction, fixed price
 * auction).
 */
export interface BaseAuction {
    /** id specifies index of the auction */
    id: Long;
    /**
     * type specifies the auction type
     * type 1 is fixed price and 2 is batch auction
     */
    type: AuctionType;
    /** auctioneer specifies the bech32-encoded address that creates the auction */
    auctioneer: string;
    /**
     * selling_reserve_address specifies the bech32-encoded address that has all
     * the selling coin
     */
    sellingReserveAddress: string;
    /**
     * paying_reserve_address specifies the bech32-encoded address that has all
     * the paying coin
     */
    payingReserveAddress: string;
    /**
     * start_price specifies the starting price of the auction
     * it is determined by the proportion of the price of paying coin denom
     */
    startPrice: string;
    /** selling_coin specifies the selling coin for the auction */
    sellingCoin?: Coin;
    /**
     * paying_coin_denom specifies the paying coin denom that bidders use to bid
     * for
     */
    payingCoinDenom: string;
    /**
     * vesting_reserve_address specifies the bech32-encoded vesting address that
     * holds vesting amounts of coin
     */
    vestingReserveAddress: string;
    /** vesting_schedules specifies the vesting schedules for the auction */
    vestingSchedules: VestingSchedule[];
    /** start_time specifies the start time of the plan */
    startTime?: Date;
    /** end_times specifies the end time of the plan */
    endTimes: Date[];
    /** status specifies the auction status */
    status: AuctionStatus;
}
/**
 * BaseAuction defines a base auction type. It contains all the necessary fields
 * for basic auction functionality. Any custom auction type should extend this
 * type for additional functionality (e.g. batch auction, fixed price
 * auction).
 */
export interface BaseAuctionSDKType {
    id: Long;
    type: AuctionType;
    auctioneer: string;
    selling_reserve_address: string;
    paying_reserve_address: string;
    start_price: string;
    selling_coin?: CoinSDKType;
    paying_coin_denom: string;
    vesting_reserve_address: string;
    vesting_schedules: VestingScheduleSDKType[];
    start_time?: Date;
    end_times: Date[];
    status: AuctionStatus;
}
/**
 * FixedPriceAuction defines the fixed price auction type. It is the most
 * simpliest way to raise funds. An auctioneer sets the starting price for each
 * selling amounts of coin and bidders bid to purchase based on the fixed price.
 */
export interface FixedPriceAuction {
    baseAuction?: BaseAuction;
    /** remaining_coin specifies the remaining amount of selling coin to sell */
    remainingSellingCoin?: Coin;
}
/**
 * FixedPriceAuction defines the fixed price auction type. It is the most
 * simpliest way to raise funds. An auctioneer sets the starting price for each
 * selling amounts of coin and bidders bid to purchase based on the fixed price.
 */
export interface FixedPriceAuctionSDKType {
    base_auction?: BaseAuctionSDKType;
    remaining_selling_coin?: CoinSDKType;
}
/**
 * BatchAuction defines a batch auction type. It allows bidders to participate
 * in the auction by placing their limit orders with a bid price they are
 * willing to bid within the auction period. They can place multiple bids with
 * different bid prices and if they want to modify their existing bid, they only
 * have an option to modify with a higher bid price. Under the hood, an order
 * book is created to record the bids to calculate the matched bidders.
 */
export interface BatchAuction {
    baseAuction?: BaseAuction;
    /** min_bid_price specifies the minibum bid price */
    minBidPrice: string;
    /** matched_price specifies the matched price of the auction */
    matchedPrice: string;
    /** max_extended_round specifies a maximum number of extended rounds */
    maxExtendedRound: number;
    /**
     * extended_round_rate specifies the rate that decides if the auction needs
     * another round
     */
    extendedRoundRate: string;
}
/**
 * BatchAuction defines a batch auction type. It allows bidders to participate
 * in the auction by placing their limit orders with a bid price they are
 * willing to bid within the auction period. They can place multiple bids with
 * different bid prices and if they want to modify their existing bid, they only
 * have an option to modify with a higher bid price. Under the hood, an order
 * book is created to record the bids to calculate the matched bidders.
 */
export interface BatchAuctionSDKType {
    base_auction?: BaseAuctionSDKType;
    min_bid_price: string;
    matched_price: string;
    max_extended_round: number;
    extended_round_rate: string;
}
/** VestingSchedule defines the vesting schedule for the owner of an auction. */
export interface VestingSchedule {
    /** release_time specifies the time for distribution of the vesting coin */
    releaseTime?: Date;
    /** weight specifies the vesting weight for the schedule */
    weight: string;
}
/** VestingSchedule defines the vesting schedule for the owner of an auction. */
export interface VestingScheduleSDKType {
    release_time?: Date;
    weight: string;
}
/** VestingQueue defines the vesting queue. */
export interface VestingQueue {
    /** auction_id specifies the id of the auction */
    auctionId: Long;
    /** auctioneer specifies the bech32-encoded address that creates the auction */
    auctioneer: string;
    /** paying_coin specifies the paying amount of coin */
    payingCoin?: Coin;
    /** release_time specifies the timestamp of the vesting schedule */
    releaseTime?: Date;
    /** released specifies the status of distribution */
    released: boolean;
}
/** VestingQueue defines the vesting queue. */
export interface VestingQueueSDKType {
    auction_id: Long;
    auctioneer: string;
    paying_coin?: CoinSDKType;
    release_time?: Date;
    released: boolean;
}
/** AllowedBidder defines an allowed bidder for the auction. */
export interface AllowedBidder {
    /** bidder specifies the bech32-encoded address that bids for the auction */
    bidder: string;
    /** max_bid_amount specifies the maximum bid amount that the bidder can bid */
    maxBidAmount: string;
}
/** AllowedBidder defines an allowed bidder for the auction. */
export interface AllowedBidderSDKType {
    bidder: string;
    max_bid_amount: string;
}
/** Bid defines a standard bid for an auction. */
export interface Bid {
    /** auction_id specifies the id of the auction */
    auctionId: Long;
    /** bidder specifies the bech32-encoded address that bids for the auction */
    bidder: string;
    /** id specifies an index of a bid for the bidder */
    id: Long;
    /**
     * type specifies the bid type; type 1 is fixed price, 2 is how-much-worth, 3
     * is how-many-coins
     */
    type: BidType;
    /** price specifies the bid price in which price the bidder places the bid */
    price: string;
    /**
     * coin specifies the amount of coin that the bidder bids
     * for a fixed price auction, the denom is of the paying coin.
     * for a batch auction of how-much-worth, the denom is of the paying coin.
     * for a batch auction of how-many-coins, the denom is of the selling coin.
     */
    coin?: Coin;
    /**
     * is_matched specifies the bid that is a winning bid and enables the bidder
     * to purchase the selling coin
     */
    isMatched: boolean;
}
/** Bid defines a standard bid for an auction. */
export interface BidSDKType {
    auction_id: Long;
    bidder: string;
    id: Long;
    type: BidType;
    price: string;
    coin?: CoinSDKType;
    is_matched: boolean;
}
export interface AllowedBidderRecord {
    /** auction_ id specifies index of the auction */
    auctionId: Long;
    /** allowed_bidder specifies allowed bidder for the auction */
    allowedBidder?: AllowedBidder;
}
export interface AllowedBidderRecordSDKType {
    auction_id: Long;
    allowed_bidder?: AllowedBidderSDKType;
}
export declare const BaseAuction: {
    encode(message: BaseAuction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseAuction;
    fromPartial(object: DeepPartial<BaseAuction>): BaseAuction;
};
export declare const FixedPriceAuction: {
    encode(message: FixedPriceAuction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FixedPriceAuction;
    fromPartial(object: DeepPartial<FixedPriceAuction>): FixedPriceAuction;
};
export declare const BatchAuction: {
    encode(message: BatchAuction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchAuction;
    fromPartial(object: DeepPartial<BatchAuction>): BatchAuction;
};
export declare const VestingSchedule: {
    encode(message: VestingSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VestingSchedule;
    fromPartial(object: DeepPartial<VestingSchedule>): VestingSchedule;
};
export declare const VestingQueue: {
    encode(message: VestingQueue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VestingQueue;
    fromPartial(object: DeepPartial<VestingQueue>): VestingQueue;
};
export declare const AllowedBidder: {
    encode(message: AllowedBidder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedBidder;
    fromPartial(object: DeepPartial<AllowedBidder>): AllowedBidder;
};
export declare const Bid: {
    encode(message: Bid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bid;
    fromPartial(object: DeepPartial<Bid>): Bid;
};
export declare const AllowedBidderRecord: {
    encode(message: AllowedBidderRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedBidderRecord;
    fromPartial(object: DeepPartial<AllowedBidderRecord>): AllowedBidderRecord;
};
