import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { VestingSchedule, VestingScheduleSDKType, BidType, AllowedBidder, AllowedBidderSDKType } from "./grants";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, DeepPartial, Long } from "../../../helpers";
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

export interface MsgCreateFixedPriceAuctionResponse {}
/**
 * MsgCreateFixedPriceAuctionResponse defines the
 * Msg/MsgCreateFixedPriceAuctionResponse response type.
 */

export interface MsgCreateFixedPriceAuctionResponseSDKType {}
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

export interface MsgCreateBatchAuctionResponse {}
/**
 * MsgCreateBatchAuctionResponse defines the
 * Msg/MsgCreateBatchAuctionResponse response type.
 */

export interface MsgCreateBatchAuctionResponseSDKType {}
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

export interface MsgCancelAuctionResponse {}
/**
 * MsgCancelAuctionResponse defines the Msg/MsgCancelAuctionResponse
 * response type.
 */

export interface MsgCancelAuctionResponseSDKType {}
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

export interface MsgPlaceBidResponse {}
/** MsgPlaceBidResponse defines the Msg/MsgPlaceBidResponse response type. */

export interface MsgPlaceBidResponseSDKType {}
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

export interface MsgModifyBidResponse {}
/** MsgModifyBidResponse defines the Msg/MsgModifyBidResponse response type. */

export interface MsgModifyBidResponseSDKType {}
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
export interface MsgAddAllowedBidderResponse {}
export interface MsgAddAllowedBidderResponseSDKType {}

function createBaseMsgCreateFixedPriceAuction(): MsgCreateFixedPriceAuction {
  return {
    auctioneer: "",
    startPrice: "",
    sellingCoin: undefined,
    payingCoinDenom: "",
    vestingSchedules: [],
    startTime: undefined,
    endTime: undefined
  };
}

export const MsgCreateFixedPriceAuction = {
  encode(message: MsgCreateFixedPriceAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auctioneer !== "") {
      writer.uint32(10).string(message.auctioneer);
    }

    if (message.startPrice !== "") {
      writer.uint32(18).string(message.startPrice);
    }

    if (message.sellingCoin !== undefined) {
      Coin.encode(message.sellingCoin, writer.uint32(26).fork()).ldelim();
    }

    if (message.payingCoinDenom !== "") {
      writer.uint32(34).string(message.payingCoinDenom);
    }

    for (const v of message.vestingSchedules) {
      VestingSchedule.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(50).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFixedPriceAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFixedPriceAuction();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctioneer = reader.string();
          break;

        case 2:
          message.startPrice = reader.string();
          break;

        case 3:
          message.sellingCoin = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.payingCoinDenom = reader.string();
          break;

        case 5:
          message.vestingSchedules.push(VestingSchedule.decode(reader, reader.uint32()));
          break;

        case 6:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateFixedPriceAuction>): MsgCreateFixedPriceAuction {
    const message = createBaseMsgCreateFixedPriceAuction();
    message.auctioneer = object.auctioneer ?? "";
    message.startPrice = object.startPrice ?? "";
    message.sellingCoin = object.sellingCoin !== undefined && object.sellingCoin !== null ? Coin.fromPartial(object.sellingCoin) : undefined;
    message.payingCoinDenom = object.payingCoinDenom ?? "";
    message.vestingSchedules = object.vestingSchedules?.map(e => VestingSchedule.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  }

};

function createBaseMsgCreateFixedPriceAuctionResponse(): MsgCreateFixedPriceAuctionResponse {
  return {};
}

export const MsgCreateFixedPriceAuctionResponse = {
  encode(_: MsgCreateFixedPriceAuctionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFixedPriceAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFixedPriceAuctionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreateFixedPriceAuctionResponse>): MsgCreateFixedPriceAuctionResponse {
    const message = createBaseMsgCreateFixedPriceAuctionResponse();
    return message;
  }

};

function createBaseMsgCreateBatchAuction(): MsgCreateBatchAuction {
  return {
    auctioneer: "",
    startPrice: "",
    minBidPrice: "",
    sellingCoin: undefined,
    payingCoinDenom: "",
    vestingSchedules: [],
    maxExtendedRound: 0,
    extendedRoundRate: "",
    startTime: undefined,
    endTime: undefined
  };
}

export const MsgCreateBatchAuction = {
  encode(message: MsgCreateBatchAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auctioneer !== "") {
      writer.uint32(10).string(message.auctioneer);
    }

    if (message.startPrice !== "") {
      writer.uint32(18).string(message.startPrice);
    }

    if (message.minBidPrice !== "") {
      writer.uint32(26).string(message.minBidPrice);
    }

    if (message.sellingCoin !== undefined) {
      Coin.encode(message.sellingCoin, writer.uint32(34).fork()).ldelim();
    }

    if (message.payingCoinDenom !== "") {
      writer.uint32(42).string(message.payingCoinDenom);
    }

    for (const v of message.vestingSchedules) {
      VestingSchedule.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.maxExtendedRound !== 0) {
      writer.uint32(56).uint32(message.maxExtendedRound);
    }

    if (message.extendedRoundRate !== "") {
      writer.uint32(66).string(message.extendedRoundRate);
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(74).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(82).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatchAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBatchAuction();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctioneer = reader.string();
          break;

        case 2:
          message.startPrice = reader.string();
          break;

        case 3:
          message.minBidPrice = reader.string();
          break;

        case 4:
          message.sellingCoin = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.payingCoinDenom = reader.string();
          break;

        case 6:
          message.vestingSchedules.push(VestingSchedule.decode(reader, reader.uint32()));
          break;

        case 7:
          message.maxExtendedRound = reader.uint32();
          break;

        case 8:
          message.extendedRoundRate = reader.string();
          break;

        case 9:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 10:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateBatchAuction>): MsgCreateBatchAuction {
    const message = createBaseMsgCreateBatchAuction();
    message.auctioneer = object.auctioneer ?? "";
    message.startPrice = object.startPrice ?? "";
    message.minBidPrice = object.minBidPrice ?? "";
    message.sellingCoin = object.sellingCoin !== undefined && object.sellingCoin !== null ? Coin.fromPartial(object.sellingCoin) : undefined;
    message.payingCoinDenom = object.payingCoinDenom ?? "";
    message.vestingSchedules = object.vestingSchedules?.map(e => VestingSchedule.fromPartial(e)) || [];
    message.maxExtendedRound = object.maxExtendedRound ?? 0;
    message.extendedRoundRate = object.extendedRoundRate ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  }

};

function createBaseMsgCreateBatchAuctionResponse(): MsgCreateBatchAuctionResponse {
  return {};
}

export const MsgCreateBatchAuctionResponse = {
  encode(_: MsgCreateBatchAuctionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatchAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBatchAuctionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreateBatchAuctionResponse>): MsgCreateBatchAuctionResponse {
    const message = createBaseMsgCreateBatchAuctionResponse();
    return message;
  }

};

function createBaseMsgCancelAuction(): MsgCancelAuction {
  return {
    auctioneer: "",
    auctionId: Long.UZERO
  };
}

export const MsgCancelAuction = {
  encode(message: MsgCancelAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auctioneer !== "") {
      writer.uint32(10).string(message.auctioneer);
    }

    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelAuction();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctioneer = reader.string();
          break;

        case 2:
          message.auctionId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCancelAuction>): MsgCancelAuction {
    const message = createBaseMsgCancelAuction();
    message.auctioneer = object.auctioneer ?? "";
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCancelAuctionResponse(): MsgCancelAuctionResponse {
  return {};
}

export const MsgCancelAuctionResponse = {
  encode(_: MsgCancelAuctionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelAuctionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCancelAuctionResponse>): MsgCancelAuctionResponse {
    const message = createBaseMsgCancelAuctionResponse();
    return message;
  }

};

function createBaseMsgPlaceBid(): MsgPlaceBid {
  return {
    auctionId: Long.UZERO,
    bidder: "",
    bidType: 0,
    price: "",
    coin: undefined
  };
}

export const MsgPlaceBid = {
  encode(message: MsgPlaceBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }

    if (message.bidType !== 0) {
      writer.uint32(24).int32(message.bidType);
    }

    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }

    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceBid();

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
          message.bidType = (reader.int32() as any);
          break;

        case 4:
          message.price = reader.string();
          break;

        case 5:
          message.coin = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgPlaceBid>): MsgPlaceBid {
    const message = createBaseMsgPlaceBid();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.bidType = object.bidType ?? 0;
    message.price = object.price ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  }

};

function createBaseMsgPlaceBidResponse(): MsgPlaceBidResponse {
  return {};
}

export const MsgPlaceBidResponse = {
  encode(_: MsgPlaceBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceBidResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgPlaceBidResponse>): MsgPlaceBidResponse {
    const message = createBaseMsgPlaceBidResponse();
    return message;
  }

};

function createBaseMsgModifyBid(): MsgModifyBid {
  return {
    auctionId: Long.UZERO,
    bidder: "",
    bidId: Long.UZERO,
    price: "",
    coin: undefined
  };
}

export const MsgModifyBid = {
  encode(message: MsgModifyBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }

    if (!message.bidId.isZero()) {
      writer.uint32(24).uint64(message.bidId);
    }

    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }

    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModifyBid();

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
          message.bidId = (reader.uint64() as Long);
          break;

        case 4:
          message.price = reader.string();
          break;

        case 5:
          message.coin = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgModifyBid>): MsgModifyBid {
    const message = createBaseMsgModifyBid();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.bidId = object.bidId !== undefined && object.bidId !== null ? Long.fromValue(object.bidId) : Long.UZERO;
    message.price = object.price ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  }

};

function createBaseMsgModifyBidResponse(): MsgModifyBidResponse {
  return {};
}

export const MsgModifyBidResponse = {
  encode(_: MsgModifyBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModifyBidResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgModifyBidResponse>): MsgModifyBidResponse {
    const message = createBaseMsgModifyBidResponse();
    return message;
  }

};

function createBaseMsgAddAllowedBidder(): MsgAddAllowedBidder {
  return {
    auctionId: Long.UZERO,
    allowedBidder: undefined
  };
}

export const MsgAddAllowedBidder = {
  encode(message: MsgAddAllowedBidder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    if (message.allowedBidder !== undefined) {
      AllowedBidder.encode(message.allowedBidder, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllowedBidder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAllowedBidder();

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

  fromPartial(object: DeepPartial<MsgAddAllowedBidder>): MsgAddAllowedBidder {
    const message = createBaseMsgAddAllowedBidder();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    message.allowedBidder = object.allowedBidder !== undefined && object.allowedBidder !== null ? AllowedBidder.fromPartial(object.allowedBidder) : undefined;
    return message;
  }

};

function createBaseMsgAddAllowedBidderResponse(): MsgAddAllowedBidderResponse {
  return {};
}

export const MsgAddAllowedBidderResponse = {
  encode(_: MsgAddAllowedBidderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllowedBidderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAllowedBidderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgAddAllowedBidderResponse>): MsgAddAllowedBidderResponse {
    const message = createBaseMsgAddAllowedBidderResponse();
    return message;
  }

};