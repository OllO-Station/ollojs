import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** AuctionType enumerates the valid types of an auction. */

export enum AuctionType {
  /** AUCTION_TYPE_UNSPECIFIED - AUCTION_TYPE_UNSPECIFIED defines the default auction type */
  AUCTION_TYPE_UNSPECIFIED = 0,

  /** AUCTION_TYPE_FIXED_PRICE - AUCTION_TYPE_FIXED_PRICE defines the fixed price auction type */
  AUCTION_TYPE_FIXED_PRICE = 1,

  /** AUCTION_TYPE_BATCH - AUCTION_TYPE_BATCH defines the batch auction type */
  AUCTION_TYPE_BATCH = 2,
  UNRECOGNIZED = -1,
}
export const AuctionTypeSDKType = AuctionType;
export function auctionTypeFromJSON(object: any): AuctionType {
  switch (object) {
    case 0:
    case "AUCTION_TYPE_UNSPECIFIED":
      return AuctionType.AUCTION_TYPE_UNSPECIFIED;

    case 1:
    case "AUCTION_TYPE_FIXED_PRICE":
      return AuctionType.AUCTION_TYPE_FIXED_PRICE;

    case 2:
    case "AUCTION_TYPE_BATCH":
      return AuctionType.AUCTION_TYPE_BATCH;

    case -1:
    case "UNRECOGNIZED":
    default:
      return AuctionType.UNRECOGNIZED;
  }
}
export function auctionTypeToJSON(object: AuctionType): string {
  switch (object) {
    case AuctionType.AUCTION_TYPE_UNSPECIFIED:
      return "AUCTION_TYPE_UNSPECIFIED";

    case AuctionType.AUCTION_TYPE_FIXED_PRICE:
      return "AUCTION_TYPE_FIXED_PRICE";

    case AuctionType.AUCTION_TYPE_BATCH:
      return "AUCTION_TYPE_BATCH";

    case AuctionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** AuctionStatus enumerates the valid status of an auction. */

export enum AuctionStatus {
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
  UNRECOGNIZED = -1,
}
export const AuctionStatusSDKType = AuctionStatus;
export function auctionStatusFromJSON(object: any): AuctionStatus {
  switch (object) {
    case 0:
    case "AUCTION_STATUS_UNSPECIFIED":
      return AuctionStatus.AUCTION_STATUS_UNSPECIFIED;

    case 1:
    case "AUCTION_STATUS_STANDBY":
      return AuctionStatus.AUCTION_STATUS_STANDBY;

    case 2:
    case "AUCTION_STATUS_STARTED":
      return AuctionStatus.AUCTION_STATUS_STARTED;

    case 3:
    case "AUCTION_STATUS_VESTING":
      return AuctionStatus.AUCTION_STATUS_VESTING;

    case 4:
    case "AUCTION_STATUS_FINISHED":
      return AuctionStatus.AUCTION_STATUS_FINISHED;

    case 5:
    case "AUCTION_STATUS_CANCELLED":
      return AuctionStatus.AUCTION_STATUS_CANCELLED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return AuctionStatus.UNRECOGNIZED;
  }
}
export function auctionStatusToJSON(object: AuctionStatus): string {
  switch (object) {
    case AuctionStatus.AUCTION_STATUS_UNSPECIFIED:
      return "AUCTION_STATUS_UNSPECIFIED";

    case AuctionStatus.AUCTION_STATUS_STANDBY:
      return "AUCTION_STATUS_STANDBY";

    case AuctionStatus.AUCTION_STATUS_STARTED:
      return "AUCTION_STATUS_STARTED";

    case AuctionStatus.AUCTION_STATUS_VESTING:
      return "AUCTION_STATUS_VESTING";

    case AuctionStatus.AUCTION_STATUS_FINISHED:
      return "AUCTION_STATUS_FINISHED";

    case AuctionStatus.AUCTION_STATUS_CANCELLED:
      return "AUCTION_STATUS_CANCELLED";

    case AuctionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** BidType enumerates the valid types of a bid. */

export enum BidType {
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
  UNRECOGNIZED = -1,
}
export const BidTypeSDKType = BidType;
export function bidTypeFromJSON(object: any): BidType {
  switch (object) {
    case 0:
    case "BID_TYPE_UNSPECIFIED":
      return BidType.BID_TYPE_UNSPECIFIED;

    case 1:
    case "BID_TYPE_FIXED_PRICE":
      return BidType.BID_TYPE_FIXED_PRICE;

    case 2:
    case "BID_TYPE_BATCH_WORTH":
      return BidType.BID_TYPE_BATCH_WORTH;

    case 3:
    case "BID_TYPE_BATCH_MANY":
      return BidType.BID_TYPE_BATCH_MANY;

    case -1:
    case "UNRECOGNIZED":
    default:
      return BidType.UNRECOGNIZED;
  }
}
export function bidTypeToJSON(object: BidType): string {
  switch (object) {
    case BidType.BID_TYPE_UNSPECIFIED:
      return "BID_TYPE_UNSPECIFIED";

    case BidType.BID_TYPE_FIXED_PRICE:
      return "BID_TYPE_FIXED_PRICE";

    case BidType.BID_TYPE_BATCH_WORTH:
      return "BID_TYPE_BATCH_WORTH";

    case BidType.BID_TYPE_BATCH_MANY:
      return "BID_TYPE_BATCH_MANY";

    case BidType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** AddressType enumerates the available types of a address. */

export enum AddressType {
  /** ADDRESS_TYPE_32_BYTES - the 32 bytes length address type of ADR 028. */
  ADDRESS_TYPE_32_BYTES = 0,

  /** ADDRESS_TYPE_20_BYTES - the default 20 bytes length address type. */
  ADDRESS_TYPE_20_BYTES = 1,
  UNRECOGNIZED = -1,
}
export const AddressTypeSDKType = AddressType;
export function addressTypeFromJSON(object: any): AddressType {
  switch (object) {
    case 0:
    case "ADDRESS_TYPE_32_BYTES":
      return AddressType.ADDRESS_TYPE_32_BYTES;

    case 1:
    case "ADDRESS_TYPE_20_BYTES":
      return AddressType.ADDRESS_TYPE_20_BYTES;

    case -1:
    case "UNRECOGNIZED":
    default:
      return AddressType.UNRECOGNIZED;
  }
}
export function addressTypeToJSON(object: AddressType): string {
  switch (object) {
    case AddressType.ADDRESS_TYPE_32_BYTES:
      return "ADDRESS_TYPE_32_BYTES";

    case AddressType.ADDRESS_TYPE_20_BYTES:
      return "ADDRESS_TYPE_20_BYTES";

    case AddressType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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

function createBaseBaseAuction(): BaseAuction {
  return {
    id: Long.UZERO,
    type: 0,
    auctioneer: "",
    sellingReserveAddress: "",
    payingReserveAddress: "",
    startPrice: "",
    sellingCoin: undefined,
    payingCoinDenom: "",
    vestingReserveAddress: "",
    vestingSchedules: [],
    startTime: undefined,
    endTimes: [],
    status: 0
  };
}

export const BaseAuction = {
  encode(message: BaseAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }

    if (message.auctioneer !== "") {
      writer.uint32(26).string(message.auctioneer);
    }

    if (message.sellingReserveAddress !== "") {
      writer.uint32(34).string(message.sellingReserveAddress);
    }

    if (message.payingReserveAddress !== "") {
      writer.uint32(42).string(message.payingReserveAddress);
    }

    if (message.startPrice !== "") {
      writer.uint32(50).string(message.startPrice);
    }

    if (message.sellingCoin !== undefined) {
      Coin.encode(message.sellingCoin, writer.uint32(58).fork()).ldelim();
    }

    if (message.payingCoinDenom !== "") {
      writer.uint32(66).string(message.payingCoinDenom);
    }

    if (message.vestingReserveAddress !== "") {
      writer.uint32(74).string(message.vestingReserveAddress);
    }

    for (const v of message.vestingSchedules) {
      VestingSchedule.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(90).fork()).ldelim();
    }

    for (const v of message.endTimes) {
      Timestamp.encode(v!, writer.uint32(98).fork()).ldelim();
    }

    if (message.status !== 0) {
      writer.uint32(104).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseAuction();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.type = (reader.int32() as any);
          break;

        case 3:
          message.auctioneer = reader.string();
          break;

        case 4:
          message.sellingReserveAddress = reader.string();
          break;

        case 5:
          message.payingReserveAddress = reader.string();
          break;

        case 6:
          message.startPrice = reader.string();
          break;

        case 7:
          message.sellingCoin = Coin.decode(reader, reader.uint32());
          break;

        case 8:
          message.payingCoinDenom = reader.string();
          break;

        case 9:
          message.vestingReserveAddress = reader.string();
          break;

        case 10:
          message.vestingSchedules.push(VestingSchedule.decode(reader, reader.uint32()));
          break;

        case 11:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 12:
          message.endTimes.push(Timestamp.decode(reader, reader.uint32()));
          break;

        case 13:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BaseAuction>): BaseAuction {
    const message = createBaseBaseAuction();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.type = object.type ?? 0;
    message.auctioneer = object.auctioneer ?? "";
    message.sellingReserveAddress = object.sellingReserveAddress ?? "";
    message.payingReserveAddress = object.payingReserveAddress ?? "";
    message.startPrice = object.startPrice ?? "";
    message.sellingCoin = object.sellingCoin !== undefined && object.sellingCoin !== null ? Coin.fromPartial(object.sellingCoin) : undefined;
    message.payingCoinDenom = object.payingCoinDenom ?? "";
    message.vestingReserveAddress = object.vestingReserveAddress ?? "";
    message.vestingSchedules = object.vestingSchedules?.map(e => VestingSchedule.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTimes = object.endTimes?.map(e => Timestamp.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    return message;
  }

};

function createBaseFixedPriceAuction(): FixedPriceAuction {
  return {
    baseAuction: undefined,
    remainingSellingCoin: undefined
  };
}

export const FixedPriceAuction = {
  encode(message: FixedPriceAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseAuction !== undefined) {
      BaseAuction.encode(message.baseAuction, writer.uint32(10).fork()).ldelim();
    }

    if (message.remainingSellingCoin !== undefined) {
      Coin.encode(message.remainingSellingCoin, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FixedPriceAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixedPriceAuction();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseAuction = BaseAuction.decode(reader, reader.uint32());
          break;

        case 2:
          message.remainingSellingCoin = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FixedPriceAuction>): FixedPriceAuction {
    const message = createBaseFixedPriceAuction();
    message.baseAuction = object.baseAuction !== undefined && object.baseAuction !== null ? BaseAuction.fromPartial(object.baseAuction) : undefined;
    message.remainingSellingCoin = object.remainingSellingCoin !== undefined && object.remainingSellingCoin !== null ? Coin.fromPartial(object.remainingSellingCoin) : undefined;
    return message;
  }

};

function createBaseBatchAuction(): BatchAuction {
  return {
    baseAuction: undefined,
    minBidPrice: "",
    matchedPrice: "",
    maxExtendedRound: 0,
    extendedRoundRate: ""
  };
}

export const BatchAuction = {
  encode(message: BatchAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseAuction !== undefined) {
      BaseAuction.encode(message.baseAuction, writer.uint32(10).fork()).ldelim();
    }

    if (message.minBidPrice !== "") {
      writer.uint32(18).string(message.minBidPrice);
    }

    if (message.matchedPrice !== "") {
      writer.uint32(26).string(message.matchedPrice);
    }

    if (message.maxExtendedRound !== 0) {
      writer.uint32(32).uint32(message.maxExtendedRound);
    }

    if (message.extendedRoundRate !== "") {
      writer.uint32(42).string(message.extendedRoundRate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchAuction();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseAuction = BaseAuction.decode(reader, reader.uint32());
          break;

        case 2:
          message.minBidPrice = reader.string();
          break;

        case 3:
          message.matchedPrice = reader.string();
          break;

        case 4:
          message.maxExtendedRound = reader.uint32();
          break;

        case 5:
          message.extendedRoundRate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BatchAuction>): BatchAuction {
    const message = createBaseBatchAuction();
    message.baseAuction = object.baseAuction !== undefined && object.baseAuction !== null ? BaseAuction.fromPartial(object.baseAuction) : undefined;
    message.minBidPrice = object.minBidPrice ?? "";
    message.matchedPrice = object.matchedPrice ?? "";
    message.maxExtendedRound = object.maxExtendedRound ?? 0;
    message.extendedRoundRate = object.extendedRoundRate ?? "";
    return message;
  }

};

function createBaseVestingSchedule(): VestingSchedule {
  return {
    releaseTime: undefined,
    weight: ""
  };
}

export const VestingSchedule = {
  encode(message: VestingSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.releaseTime !== undefined) {
      Timestamp.encode(toTimestamp(message.releaseTime), writer.uint32(10).fork()).ldelim();
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VestingSchedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVestingSchedule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.releaseTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<VestingSchedule>): VestingSchedule {
    const message = createBaseVestingSchedule();
    message.releaseTime = object.releaseTime ?? undefined;
    message.weight = object.weight ?? "";
    return message;
  }

};

function createBaseVestingQueue(): VestingQueue {
  return {
    auctionId: Long.UZERO,
    auctioneer: "",
    payingCoin: undefined,
    releaseTime: undefined,
    released: false
  };
}

export const VestingQueue = {
  encode(message: VestingQueue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    if (message.auctioneer !== "") {
      writer.uint32(18).string(message.auctioneer);
    }

    if (message.payingCoin !== undefined) {
      Coin.encode(message.payingCoin, writer.uint32(26).fork()).ldelim();
    }

    if (message.releaseTime !== undefined) {
      Timestamp.encode(toTimestamp(message.releaseTime), writer.uint32(34).fork()).ldelim();
    }

    if (message.released === true) {
      writer.uint32(40).bool(message.released);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VestingQueue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVestingQueue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionId = (reader.uint64() as Long);
          break;

        case 2:
          message.auctioneer = reader.string();
          break;

        case 3:
          message.payingCoin = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.releaseTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.released = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<VestingQueue>): VestingQueue {
    const message = createBaseVestingQueue();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    message.auctioneer = object.auctioneer ?? "";
    message.payingCoin = object.payingCoin !== undefined && object.payingCoin !== null ? Coin.fromPartial(object.payingCoin) : undefined;
    message.releaseTime = object.releaseTime ?? undefined;
    message.released = object.released ?? false;
    return message;
  }

};

function createBaseAllowedBidder(): AllowedBidder {
  return {
    bidder: "",
    maxBidAmount: ""
  };
}

export const AllowedBidder = {
  encode(message: AllowedBidder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }

    if (message.maxBidAmount !== "") {
      writer.uint32(18).string(message.maxBidAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedBidder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedBidder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;

        case 2:
          message.maxBidAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AllowedBidder>): AllowedBidder {
    const message = createBaseAllowedBidder();
    message.bidder = object.bidder ?? "";
    message.maxBidAmount = object.maxBidAmount ?? "";
    return message;
  }

};

function createBaseBid(): Bid {
  return {
    auctionId: Long.UZERO,
    bidder: "",
    id: Long.UZERO,
    type: 0,
    price: "",
    coin: undefined,
    isMatched: false
  };
}

export const Bid = {
  encode(message: Bid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }

    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }

    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }

    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }

    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(50).fork()).ldelim();
    }

    if (message.isMatched === true) {
      writer.uint32(56).bool(message.isMatched);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionId = (reader.uint64() as Long);
          break;

        case 2:
          message.bidder = reader.string();
          break;

        case 3:
          message.id = (reader.uint64() as Long);
          break;

        case 4:
          message.type = (reader.int32() as any);
          break;

        case 5:
          message.price = reader.string();
          break;

        case 6:
          message.coin = Coin.decode(reader, reader.uint32());
          break;

        case 7:
          message.isMatched = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Bid>): Bid {
    const message = createBaseBid();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.type = object.type ?? 0;
    message.price = object.price ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.isMatched = object.isMatched ?? false;
    return message;
  }

};

function createBaseAllowedBidderRecord(): AllowedBidderRecord {
  return {
    auctionId: Long.UZERO,
    allowedBidder: undefined
  };
}

export const AllowedBidderRecord = {
  encode(message: AllowedBidderRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    if (message.allowedBidder !== undefined) {
      AllowedBidder.encode(message.allowedBidder, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedBidderRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedBidderRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionId = (reader.uint64() as Long);
          break;

        case 2:
          message.allowedBidder = AllowedBidder.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AllowedBidderRecord>): AllowedBidderRecord {
    const message = createBaseAllowedBidderRecord();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    message.allowedBidder = object.allowedBidder !== undefined && object.allowedBidder !== null ? AllowedBidder.fromPartial(object.allowedBidder) : undefined;
    return message;
  }

};