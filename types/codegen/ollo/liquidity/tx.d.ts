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
export interface MsgCreatePairResponse {
}
export interface MsgCreatePairResponseSDKType {
}
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
export interface MsgCreatePoolResponse {
}
export interface MsgCreatePoolResponseSDKType {
}
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
export interface MsgCreatePoolCappedResponse {
}
export interface MsgCreatePoolCappedResponseSDKType {
}
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
export interface MsgDepositResponse {
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
}
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
export interface MsgWithdrawResponse {
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
}
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
export interface MsgOrderLimitResponse {
}
/** MsgOrderLimitResponse defines the Msg/OrderLimit response type. */
export interface MsgOrderLimitResponseSDKType {
}
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
export interface MsgOrderMarketResponse {
}
/** MsgOrderMarketResponse defines the Msg/OrderMarket response type. */
export interface MsgOrderMarketResponseSDKType {
}
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
export interface MsgOrderMarketMakingResponse {
}
/** MsgOrderMarketMakingResponse defines the Msg/OrderMarketMaking response type. */
export interface MsgOrderMarketMakingResponseSDKType {
}
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
export interface MsgCancelAllOrdersResponse {
}
/** MsgCancelAllOrdersResponse defines the Msg/CancelAllOrders response type. */
export interface MsgCancelAllOrdersResponseSDKType {
}
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
export interface MsgCancelOrderResponse {
}
/**
 * MsgCancelOrderResponse defines the Msg/CancelOrder
 * response type.
 */
export interface MsgCancelOrderResponseSDKType {
}
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
export interface MsgCancelMarketMakingOrderResponse {
}
/** MsgCancelMMOrderResponse defines the Msg/CancelMMOrder response type. */
export interface MsgCancelMarketMakingOrderResponseSDKType {
}
export declare const MsgCreatePair: {
    encode(message: MsgCreatePair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePair;
    fromPartial(object: DeepPartial<MsgCreatePair>): MsgCreatePair;
};
export declare const MsgCreatePairResponse: {
    encode(_: MsgCreatePairResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePairResponse;
    fromPartial(_: DeepPartial<MsgCreatePairResponse>): MsgCreatePairResponse;
};
export declare const MsgCreatePool: {
    encode(message: MsgCreatePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool;
    fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool;
};
export declare const MsgCreatePoolResponse: {
    encode(_: MsgCreatePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse;
    fromPartial(_: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse;
};
export declare const MsgCreatePoolCapped: {
    encode(message: MsgCreatePoolCapped, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolCapped;
    fromPartial(object: DeepPartial<MsgCreatePoolCapped>): MsgCreatePoolCapped;
};
export declare const MsgCreatePoolCappedResponse: {
    encode(_: MsgCreatePoolCappedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolCappedResponse;
    fromPartial(_: DeepPartial<MsgCreatePoolCappedResponse>): MsgCreatePoolCappedResponse;
};
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit;
    fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse;
    fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse;
};
export declare const MsgWithdraw: {
    encode(message: MsgWithdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw;
    fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw;
};
export declare const MsgWithdrawResponse: {
    encode(_: MsgWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse;
    fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse;
};
export declare const MsgOrderLimit: {
    encode(message: MsgOrderLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOrderLimit;
    fromPartial(object: DeepPartial<MsgOrderLimit>): MsgOrderLimit;
};
export declare const MsgOrderLimitResponse: {
    encode(_: MsgOrderLimitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOrderLimitResponse;
    fromPartial(_: DeepPartial<MsgOrderLimitResponse>): MsgOrderLimitResponse;
};
export declare const MsgOrderMarket: {
    encode(message: MsgOrderMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOrderMarket;
    fromPartial(object: DeepPartial<MsgOrderMarket>): MsgOrderMarket;
};
export declare const MsgOrderMarketResponse: {
    encode(_: MsgOrderMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOrderMarketResponse;
    fromPartial(_: DeepPartial<MsgOrderMarketResponse>): MsgOrderMarketResponse;
};
export declare const MsgOrderMarketMaking: {
    encode(message: MsgOrderMarketMaking, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOrderMarketMaking;
    fromPartial(object: DeepPartial<MsgOrderMarketMaking>): MsgOrderMarketMaking;
};
export declare const MsgOrderMarketMakingResponse: {
    encode(_: MsgOrderMarketMakingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOrderMarketMakingResponse;
    fromPartial(_: DeepPartial<MsgOrderMarketMakingResponse>): MsgOrderMarketMakingResponse;
};
export declare const MsgCancelAllOrders: {
    encode(message: MsgCancelAllOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelAllOrders;
    fromPartial(object: DeepPartial<MsgCancelAllOrders>): MsgCancelAllOrders;
};
export declare const MsgCancelAllOrdersResponse: {
    encode(_: MsgCancelAllOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelAllOrdersResponse;
    fromPartial(_: DeepPartial<MsgCancelAllOrdersResponse>): MsgCancelAllOrdersResponse;
};
export declare const MsgCancelOrder: {
    encode(message: MsgCancelOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrder;
    fromPartial(object: DeepPartial<MsgCancelOrder>): MsgCancelOrder;
};
export declare const MsgCancelOrderResponse: {
    encode(_: MsgCancelOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrderResponse;
    fromPartial(_: DeepPartial<MsgCancelOrderResponse>): MsgCancelOrderResponse;
};
export declare const MsgCancelMarketMakingOrder: {
    encode(message: MsgCancelMarketMakingOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelMarketMakingOrder;
    fromPartial(object: DeepPartial<MsgCancelMarketMakingOrder>): MsgCancelMarketMakingOrder;
};
export declare const MsgCancelMarketMakingOrderResponse: {
    encode(_: MsgCancelMarketMakingOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelMarketMakingOrderResponse;
    fromPartial(_: DeepPartial<MsgCancelMarketMakingOrderResponse>): MsgCancelMarketMakingOrderResponse;
};
