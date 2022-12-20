import { Coin, CoinSDKType } from "../../cosmos_proto/coin";
import { OrderDirection } from "./liquidity";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export interface MsgCreatePair {
  /** creator specifies the bech32-encoded address that is the pair creator. */
  creator: string;
  /** base_coin_denom specifies the base coin denom of the pair. */

  baseCoinDenom: string;
  /** quote_coin_denom specifies the quote coin denom of the pair. */

  quoteCoinDenom: string;
}
export interface MsgCreatePairSDKType {
  creator: string;
  base_coin_denom: string;
  quote_coin_denom: string;
}
export interface MsgCreatePairResponse {}
export interface MsgCreatePairResponseSDKType {}
/**
 * MsgCreatePool defines an sdk.Msg type that supports submitting a create
 * liquidity pool tx.
 * 
 * See:
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */

export interface MsgCreatePool {
  creator: string;
  /**
   * id of the target pool type, must match the value in the pool. Only
   * pool-type-id 1 is supported.
   */

  typeId: Long;
  pairId: Long;
  depositCoins: Coin[];
}
/**
 * MsgCreatePool defines an sdk.Msg type that supports submitting a create
 * liquidity pool tx.
 * 
 * See:
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */

export interface MsgCreatePoolSDKType {
  creator: string;
  type_id: Long;
  pair_id: Long;
  deposit_coins: CoinSDKType[];
}
export interface MsgCreatePoolResponse {}
export interface MsgCreatePoolResponseSDKType {}
export interface MsgCreatePoolCapped {
  /** creator specifies the bech32-encoded address that is the pool creator */
  creator: string;
  /** pair_id specifies the pair id. */

  pairId: Long;
  /** deposit_coins specifies the amount of coins to deposit. */

  depositCoins: Coin[];
  minPrice: string;
  maxPrice: string;
  initialPrice: string;
}
export interface MsgCreatePoolCappedSDKType {
  creator: string;
  pair_id: Long;
  deposit_coins: CoinSDKType[];
  min_price: string;
  max_price: string;
  initial_price: string;
}
export interface MsgCreatePoolCappedResponse {}
export interface MsgCreatePoolCappedResponseSDKType {}
/** MsgDeposit defines an SDK message for depositing coins to the pool */

export interface MsgDeposit {
  /**
   * depositor specifies the bech32-encoded address that makes a deposit to the
   * pool
   */
  depositor: string;
  /** pool_id specifies the pool id */

  poolId: Long;
  /** deposit_coins specifies the amount of coins to deposit. */

  depositCoins: Coin[];
}
/** MsgDeposit defines an SDK message for depositing coins to the pool */

export interface MsgDepositSDKType {
  depositor: string;
  pool_id: Long;
  deposit_coins: CoinSDKType[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */

export interface MsgDepositResponse {}
/** MsgDepositResponse defines the Msg/Deposit response type. */

export interface MsgDepositResponseSDKType {}
/** MsgWithdraw defines an SDK message for withdrawing pool coin from the pool */

export interface MsgWithdraw {
  /**
   * withdrawer specifies the bech32-encoded address that withdraws pool coin
   * from the pool
   */
  withdrawer: string;
  /** pool_id specifies the pool id */

  poolId: Long;
  /**
   * pool_coin specifies the pool coin that is a proof of liquidity provider for
   * the pool
   */

  poolCoin?: Coin;
}
/** MsgWithdraw defines an SDK message for withdrawing pool coin from the pool */

export interface MsgWithdrawSDKType {
  withdrawer: string;
  pool_id: Long;
  pool_coin?: CoinSDKType;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */

export interface MsgWithdrawResponse {}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */

export interface MsgWithdrawResponseSDKType {}
/** MsgOrderLimit defines an SDK message for making a limit order */

export interface MsgOrderLimit {
  /** orderer specifies the bech32-encoded address that makes an order */
  orderer: string;
  /** pair_id specifies the pair id */

  pairId: Long;
  /** direction specifies the order direction(buy or sell) */

  direction: OrderDirection;
  /** offer_coin specifies the amount of coin the orderer offers */

  offerCoin?: Coin;
  /** demand_coin_denom specifies the demand coin denom */

  demandCoinDenom: string;
  /** price specifies the order price */

  price: string;
  /** amount specifies the amount of base coin the orderer wants to buy or sell */

  amount: string;
  /** order_lifespan specifies the order lifespan */

  orderLifespan?: Duration;
}
/** MsgOrderLimit defines an SDK message for making a limit order */

export interface MsgOrderLimitSDKType {
  orderer: string;
  pair_id: Long;
  direction: OrderDirection;
  offer_coin?: CoinSDKType;
  demand_coin_denom: string;
  price: string;
  amount: string;
  order_lifespan?: DurationSDKType;
}
/** MsgOrderLimitResponse defines the Msg/OrderLimit response type. */

export interface MsgOrderLimitResponse {}
/** MsgOrderLimitResponse defines the Msg/OrderLimit response type. */

export interface MsgOrderLimitResponseSDKType {}
/** MsgOrderMarket defines an SDK message for making a market order */

export interface MsgOrderMarket {
  /** orderer specifies the bech32-encoded address that makes an order */
  orderer: string;
  /** pair_id specifies the pair id */

  pairId: Long;
  /** direction specifies the order direction(buy or sell) */

  direction: OrderDirection;
  /** offer_coin specifies the amount of coin the orderer offers */

  offerCoin?: Coin;
  /** demand_coin_denom specifies the demand coin denom */

  demandCoinDenom: string;
  /** amount specifies the amount of base coin the orderer wants to buy or sell */

  amount: string;
  /** order_lifespan specifies the order lifespan */

  orderLifespan?: Duration;
}
/** MsgOrderMarket defines an SDK message for making a market order */

export interface MsgOrderMarketSDKType {
  orderer: string;
  pair_id: Long;
  direction: OrderDirection;
  offer_coin?: CoinSDKType;
  demand_coin_denom: string;
  amount: string;
  order_lifespan?: DurationSDKType;
}
/** MsgOrderMarketResponse defines the Msg/OrderMarket response type. */

export interface MsgOrderMarketResponse {}
/** MsgOrderMarketResponse defines the Msg/OrderMarket response type. */

export interface MsgOrderMarketResponseSDKType {}
/**
 * MsgOrderMarketMaking defines an SDK message for making a MM(market making)
 * order.
 */

export interface MsgOrderMarketMaking {
  /** orderer specifies the bech32-encoded address that makes an order */
  orderer: string;
  /** pair_id specifies the pair id */

  pairId: Long;
  /** max_sell_price specifies the maximum sell price */

  maxSellPrice: string;
  /** min_sell_price specifies the minimum sell price */

  minSellPrice: string;
  /** sell_amount specifies the total amount of base coin of sell orders */

  sellAmount: string;
  /** max_buy_price specifies the maximum buy price */

  maxBuyPrice: string;
  /** min_buy_price specifies the minimum buy price */

  minBuyPrice: string;
  /** buy_amount specifies the total amount of base coin of buy orders */

  buyAmount: string;
  /** order_lifespan specifies the order lifespan */

  orderLifespan?: Duration;
}
/**
 * MsgOrderMarketMaking defines an SDK message for making a MM(market making)
 * order.
 */

export interface MsgOrderMarketMakingSDKType {
  orderer: string;
  pair_id: Long;
  max_sell_price: string;
  min_sell_price: string;
  sell_amount: string;
  max_buy_price: string;
  min_buy_price: string;
  buy_amount: string;
  order_lifespan?: DurationSDKType;
}
/** MsgOrderMarketMakingResponse defines the Msg/OrderMarketMaking response type. */

export interface MsgOrderMarketMakingResponse {}
/** MsgOrderMarketMakingResponse defines the Msg/OrderMarketMaking response type. */

export interface MsgOrderMarketMakingResponseSDKType {}
/**
 * MsgCancelOrder defines an SDK message for cancelling an order
 * MsgCancelAllOrders defines an SDK message for cancelling all orders
 */

export interface MsgCancelAllOrders {
  /** orderer specifies the bech32-encoded address that makes an order */
  orderAddr: string;
  /** pair_ids specifies pair ids to cancel orders */

  pairIds: Long[];
}
/**
 * MsgCancelOrder defines an SDK message for cancelling an order
 * MsgCancelAllOrders defines an SDK message for cancelling all orders
 */

export interface MsgCancelAllOrdersSDKType {
  order_addr: string;
  pair_ids: Long[];
}
/** MsgCancelAllOrdersResponse defines the Msg/CancelAllOrders response type. */

export interface MsgCancelAllOrdersResponse {}
/** MsgCancelAllOrdersResponse defines the Msg/CancelAllOrders response type. */

export interface MsgCancelAllOrdersResponseSDKType {}
/**
 * MsgCancelOrder defines an SDK message for cancelling all market
 * making orders
 */

export interface MsgCancelOrder {
  /** orderer specifies the bech32-encoded address that makes an order */
  orderAddr: string;
  /** pair_id specifies the pair id to cancel orders */

  pairId: Long;
  orderId: Long;
}
/**
 * MsgCancelOrder defines an SDK message for cancelling all market
 * making orders
 */

export interface MsgCancelOrderSDKType {
  order_addr: string;
  pair_id: Long;
  order_id: Long;
}
/**
 * MsgCancelOrderResponse defines the Msg/CancelOrder
 * response type.
 */

export interface MsgCancelOrderResponse {}
/**
 * MsgCancelOrderResponse defines the Msg/CancelOrder
 * response type.
 */

export interface MsgCancelOrderResponseSDKType {}
/**
 * MsgCancelMMOrder defines an SDK message for cancelling all market making
 * orders
 */

export interface MsgCancelMarketMakingOrder {
  /** orderer specifies the bech32-encoded address that makes an order */
  orderer: string;
  /** pair_id specifies the pair id to cancel orders */

  pairId: Long;
}
/**
 * MsgCancelMMOrder defines an SDK message for cancelling all market making
 * orders
 */

export interface MsgCancelMarketMakingOrderSDKType {
  orderer: string;
  pair_id: Long;
}
/** MsgCancelMMOrderResponse defines the Msg/CancelMMOrder response type. */

export interface MsgCancelMarketMakingOrderResponse {}
/** MsgCancelMMOrderResponse defines the Msg/CancelMMOrder response type. */

export interface MsgCancelMarketMakingOrderResponseSDKType {}

function createBaseMsgCreatePair(): MsgCreatePair {
  return {
    creator: "",
    baseCoinDenom: "",
    quoteCoinDenom: ""
  };
}

export const MsgCreatePair = {
  encode(message: MsgCreatePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.baseCoinDenom !== "") {
      writer.uint32(18).string(message.baseCoinDenom);
    }

    if (message.quoteCoinDenom !== "") {
      writer.uint32(26).string(message.quoteCoinDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePair();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.baseCoinDenom = reader.string();
          break;

        case 3:
          message.quoteCoinDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreatePair>): MsgCreatePair {
    const message = createBaseMsgCreatePair();
    message.creator = object.creator ?? "";
    message.baseCoinDenom = object.baseCoinDenom ?? "";
    message.quoteCoinDenom = object.quoteCoinDenom ?? "";
    return message;
  }

};

function createBaseMsgCreatePairResponse(): MsgCreatePairResponse {
  return {};
}

export const MsgCreatePairResponse = {
  encode(_: MsgCreatePairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePairResponse();

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

  fromPartial(_: DeepPartial<MsgCreatePairResponse>): MsgCreatePairResponse {
    const message = createBaseMsgCreatePairResponse();
    return message;
  }

};

function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    creator: "",
    typeId: Long.UZERO,
    pairId: Long.UZERO,
    depositCoins: []
  };
}

export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.typeId.isZero()) {
      writer.uint32(16).uint64(message.typeId);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(24).uint64(message.pairId);
    }

    for (const v of message.depositCoins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.typeId = (reader.uint64() as Long);
          break;

        case 3:
          message.pairId = (reader.uint64() as Long);
          break;

        case 4:
          message.depositCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.creator = object.creator ?? "";
    message.typeId = object.typeId !== undefined && object.typeId !== null ? Long.fromValue(object.typeId) : Long.UZERO;
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.depositCoins = object.depositCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}

export const MsgCreatePoolResponse = {
  encode(_: MsgCreatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();

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

  fromPartial(_: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  }

};

function createBaseMsgCreatePoolCapped(): MsgCreatePoolCapped {
  return {
    creator: "",
    pairId: Long.UZERO,
    depositCoins: [],
    minPrice: "",
    maxPrice: "",
    initialPrice: ""
  };
}

export const MsgCreatePoolCapped = {
  encode(message: MsgCreatePoolCapped, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    for (const v of message.depositCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.minPrice !== "") {
      writer.uint32(34).string(message.minPrice);
    }

    if (message.maxPrice !== "") {
      writer.uint32(42).string(message.maxPrice);
    }

    if (message.initialPrice !== "") {
      writer.uint32(50).string(message.initialPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolCapped {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolCapped();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.pairId = (reader.uint64() as Long);
          break;

        case 3:
          message.depositCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.minPrice = reader.string();
          break;

        case 5:
          message.maxPrice = reader.string();
          break;

        case 6:
          message.initialPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreatePoolCapped>): MsgCreatePoolCapped {
    const message = createBaseMsgCreatePoolCapped();
    message.creator = object.creator ?? "";
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.depositCoins = object.depositCoins?.map(e => Coin.fromPartial(e)) || [];
    message.minPrice = object.minPrice ?? "";
    message.maxPrice = object.maxPrice ?? "";
    message.initialPrice = object.initialPrice ?? "";
    return message;
  }

};

function createBaseMsgCreatePoolCappedResponse(): MsgCreatePoolCappedResponse {
  return {};
}

export const MsgCreatePoolCappedResponse = {
  encode(_: MsgCreatePoolCappedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolCappedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolCappedResponse();

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

  fromPartial(_: DeepPartial<MsgCreatePoolCappedResponse>): MsgCreatePoolCappedResponse {
    const message = createBaseMsgCreatePoolCappedResponse();
    return message;
  }

};

function createBaseMsgDeposit(): MsgDeposit {
  return {
    depositor: "",
    poolId: Long.UZERO,
    depositCoins: []
  };
}

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    for (const v of message.depositCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          message.depositCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.depositor = object.depositor ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.depositCoins = object.depositCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}

export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();

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

  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  }

};

function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    withdrawer: "",
    poolId: Long.UZERO,
    poolCoin: undefined
  };
}

export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawer !== "") {
      writer.uint32(10).string(message.withdrawer);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    if (message.poolCoin !== undefined) {
      Coin.encode(message.poolCoin, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.withdrawer = reader.string();
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          message.poolCoin = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.withdrawer = object.withdrawer ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.poolCoin = object.poolCoin !== undefined && object.poolCoin !== null ? Coin.fromPartial(object.poolCoin) : undefined;
    return message;
  }

};

function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}

export const MsgWithdrawResponse = {
  encode(_: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();

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

  fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  }

};

function createBaseMsgOrderLimit(): MsgOrderLimit {
  return {
    orderer: "",
    pairId: Long.UZERO,
    direction: 0,
    offerCoin: undefined,
    demandCoinDenom: "",
    price: "",
    amount: "",
    orderLifespan: undefined
  };
}

export const MsgOrderLimit = {
  encode(message: MsgOrderLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderer !== "") {
      writer.uint32(10).string(message.orderer);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    if (message.direction !== 0) {
      writer.uint32(24).int32(message.direction);
    }

    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
    }

    if (message.demandCoinDenom !== "") {
      writer.uint32(42).string(message.demandCoinDenom);
    }

    if (message.price !== "") {
      writer.uint32(50).string(message.price);
    }

    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }

    if (message.orderLifespan !== undefined) {
      Duration.encode(message.orderLifespan, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOrderLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOrderLimit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderer = reader.string();
          break;

        case 2:
          message.pairId = (reader.uint64() as Long);
          break;

        case 3:
          message.direction = (reader.int32() as any);
          break;

        case 4:
          message.offerCoin = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.demandCoinDenom = reader.string();
          break;

        case 6:
          message.price = reader.string();
          break;

        case 7:
          message.amount = reader.string();
          break;

        case 8:
          message.orderLifespan = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgOrderLimit>): MsgOrderLimit {
    const message = createBaseMsgOrderLimit();
    message.orderer = object.orderer ?? "";
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.direction = object.direction ?? 0;
    message.offerCoin = object.offerCoin !== undefined && object.offerCoin !== null ? Coin.fromPartial(object.offerCoin) : undefined;
    message.demandCoinDenom = object.demandCoinDenom ?? "";
    message.price = object.price ?? "";
    message.amount = object.amount ?? "";
    message.orderLifespan = object.orderLifespan !== undefined && object.orderLifespan !== null ? Duration.fromPartial(object.orderLifespan) : undefined;
    return message;
  }

};

function createBaseMsgOrderLimitResponse(): MsgOrderLimitResponse {
  return {};
}

export const MsgOrderLimitResponse = {
  encode(_: MsgOrderLimitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOrderLimitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOrderLimitResponse();

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

  fromPartial(_: DeepPartial<MsgOrderLimitResponse>): MsgOrderLimitResponse {
    const message = createBaseMsgOrderLimitResponse();
    return message;
  }

};

function createBaseMsgOrderMarket(): MsgOrderMarket {
  return {
    orderer: "",
    pairId: Long.UZERO,
    direction: 0,
    offerCoin: undefined,
    demandCoinDenom: "",
    amount: "",
    orderLifespan: undefined
  };
}

export const MsgOrderMarket = {
  encode(message: MsgOrderMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderer !== "") {
      writer.uint32(10).string(message.orderer);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    if (message.direction !== 0) {
      writer.uint32(24).int32(message.direction);
    }

    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
    }

    if (message.demandCoinDenom !== "") {
      writer.uint32(42).string(message.demandCoinDenom);
    }

    if (message.amount !== "") {
      writer.uint32(50).string(message.amount);
    }

    if (message.orderLifespan !== undefined) {
      Duration.encode(message.orderLifespan, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOrderMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOrderMarket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderer = reader.string();
          break;

        case 2:
          message.pairId = (reader.uint64() as Long);
          break;

        case 3:
          message.direction = (reader.int32() as any);
          break;

        case 4:
          message.offerCoin = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.demandCoinDenom = reader.string();
          break;

        case 6:
          message.amount = reader.string();
          break;

        case 7:
          message.orderLifespan = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgOrderMarket>): MsgOrderMarket {
    const message = createBaseMsgOrderMarket();
    message.orderer = object.orderer ?? "";
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.direction = object.direction ?? 0;
    message.offerCoin = object.offerCoin !== undefined && object.offerCoin !== null ? Coin.fromPartial(object.offerCoin) : undefined;
    message.demandCoinDenom = object.demandCoinDenom ?? "";
    message.amount = object.amount ?? "";
    message.orderLifespan = object.orderLifespan !== undefined && object.orderLifespan !== null ? Duration.fromPartial(object.orderLifespan) : undefined;
    return message;
  }

};

function createBaseMsgOrderMarketResponse(): MsgOrderMarketResponse {
  return {};
}

export const MsgOrderMarketResponse = {
  encode(_: MsgOrderMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOrderMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOrderMarketResponse();

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

  fromPartial(_: DeepPartial<MsgOrderMarketResponse>): MsgOrderMarketResponse {
    const message = createBaseMsgOrderMarketResponse();
    return message;
  }

};

function createBaseMsgOrderMarketMaking(): MsgOrderMarketMaking {
  return {
    orderer: "",
    pairId: Long.UZERO,
    maxSellPrice: "",
    minSellPrice: "",
    sellAmount: "",
    maxBuyPrice: "",
    minBuyPrice: "",
    buyAmount: "",
    orderLifespan: undefined
  };
}

export const MsgOrderMarketMaking = {
  encode(message: MsgOrderMarketMaking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderer !== "") {
      writer.uint32(10).string(message.orderer);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    if (message.maxSellPrice !== "") {
      writer.uint32(26).string(message.maxSellPrice);
    }

    if (message.minSellPrice !== "") {
      writer.uint32(34).string(message.minSellPrice);
    }

    if (message.sellAmount !== "") {
      writer.uint32(42).string(message.sellAmount);
    }

    if (message.maxBuyPrice !== "") {
      writer.uint32(50).string(message.maxBuyPrice);
    }

    if (message.minBuyPrice !== "") {
      writer.uint32(58).string(message.minBuyPrice);
    }

    if (message.buyAmount !== "") {
      writer.uint32(66).string(message.buyAmount);
    }

    if (message.orderLifespan !== undefined) {
      Duration.encode(message.orderLifespan, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOrderMarketMaking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOrderMarketMaking();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderer = reader.string();
          break;

        case 2:
          message.pairId = (reader.uint64() as Long);
          break;

        case 3:
          message.maxSellPrice = reader.string();
          break;

        case 4:
          message.minSellPrice = reader.string();
          break;

        case 5:
          message.sellAmount = reader.string();
          break;

        case 6:
          message.maxBuyPrice = reader.string();
          break;

        case 7:
          message.minBuyPrice = reader.string();
          break;

        case 8:
          message.buyAmount = reader.string();
          break;

        case 9:
          message.orderLifespan = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgOrderMarketMaking>): MsgOrderMarketMaking {
    const message = createBaseMsgOrderMarketMaking();
    message.orderer = object.orderer ?? "";
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.maxSellPrice = object.maxSellPrice ?? "";
    message.minSellPrice = object.minSellPrice ?? "";
    message.sellAmount = object.sellAmount ?? "";
    message.maxBuyPrice = object.maxBuyPrice ?? "";
    message.minBuyPrice = object.minBuyPrice ?? "";
    message.buyAmount = object.buyAmount ?? "";
    message.orderLifespan = object.orderLifespan !== undefined && object.orderLifespan !== null ? Duration.fromPartial(object.orderLifespan) : undefined;
    return message;
  }

};

function createBaseMsgOrderMarketMakingResponse(): MsgOrderMarketMakingResponse {
  return {};
}

export const MsgOrderMarketMakingResponse = {
  encode(_: MsgOrderMarketMakingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOrderMarketMakingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOrderMarketMakingResponse();

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

  fromPartial(_: DeepPartial<MsgOrderMarketMakingResponse>): MsgOrderMarketMakingResponse {
    const message = createBaseMsgOrderMarketMakingResponse();
    return message;
  }

};

function createBaseMsgCancelAllOrders(): MsgCancelAllOrders {
  return {
    orderAddr: "",
    pairIds: []
  };
}

export const MsgCancelAllOrders = {
  encode(message: MsgCancelAllOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderAddr !== "") {
      writer.uint32(10).string(message.orderAddr);
    }

    writer.uint32(18).fork();

    for (const v of message.pairIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelAllOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelAllOrders();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderAddr = reader.string();
          break;

        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.pairIds.push((reader.uint64() as Long));
            }
          } else {
            message.pairIds.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCancelAllOrders>): MsgCancelAllOrders {
    const message = createBaseMsgCancelAllOrders();
    message.orderAddr = object.orderAddr ?? "";
    message.pairIds = object.pairIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseMsgCancelAllOrdersResponse(): MsgCancelAllOrdersResponse {
  return {};
}

export const MsgCancelAllOrdersResponse = {
  encode(_: MsgCancelAllOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelAllOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelAllOrdersResponse();

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

  fromPartial(_: DeepPartial<MsgCancelAllOrdersResponse>): MsgCancelAllOrdersResponse {
    const message = createBaseMsgCancelAllOrdersResponse();
    return message;
  }

};

function createBaseMsgCancelOrder(): MsgCancelOrder {
  return {
    orderAddr: "",
    pairId: Long.UZERO,
    orderId: Long.UZERO
  };
}

export const MsgCancelOrder = {
  encode(message: MsgCancelOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderAddr !== "") {
      writer.uint32(10).string(message.orderAddr);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    if (!message.orderId.isZero()) {
      writer.uint32(24).uint64(message.orderId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderAddr = reader.string();
          break;

        case 2:
          message.pairId = (reader.uint64() as Long);
          break;

        case 3:
          message.orderId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCancelOrder>): MsgCancelOrder {
    const message = createBaseMsgCancelOrder();
    message.orderAddr = object.orderAddr ?? "";
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.orderId = object.orderId !== undefined && object.orderId !== null ? Long.fromValue(object.orderId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCancelOrderResponse(): MsgCancelOrderResponse {
  return {};
}

export const MsgCancelOrderResponse = {
  encode(_: MsgCancelOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrderResponse();

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

  fromPartial(_: DeepPartial<MsgCancelOrderResponse>): MsgCancelOrderResponse {
    const message = createBaseMsgCancelOrderResponse();
    return message;
  }

};

function createBaseMsgCancelMarketMakingOrder(): MsgCancelMarketMakingOrder {
  return {
    orderer: "",
    pairId: Long.UZERO
  };
}

export const MsgCancelMarketMakingOrder = {
  encode(message: MsgCancelMarketMakingOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderer !== "") {
      writer.uint32(10).string(message.orderer);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelMarketMakingOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelMarketMakingOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderer = reader.string();
          break;

        case 2:
          message.pairId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCancelMarketMakingOrder>): MsgCancelMarketMakingOrder {
    const message = createBaseMsgCancelMarketMakingOrder();
    message.orderer = object.orderer ?? "";
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCancelMarketMakingOrderResponse(): MsgCancelMarketMakingOrderResponse {
  return {};
}

export const MsgCancelMarketMakingOrderResponse = {
  encode(_: MsgCancelMarketMakingOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelMarketMakingOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelMarketMakingOrderResponse();

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

  fromPartial(_: DeepPartial<MsgCancelMarketMakingOrderResponse>): MsgCancelMarketMakingOrderResponse {
    const message = createBaseMsgCancelMarketMakingOrderResponse();
    return message;
  }

};