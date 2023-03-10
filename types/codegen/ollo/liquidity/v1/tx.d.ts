import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { OrderDirection } from "./order";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** MsgCreatePair defines an SDK message for creating a pair. */
export interface MsgCreatePair {
    /** creator specifies the bech32-encoded address that is the pair creator. */
    creator: string;
    /** base_coin_denom specifies the base coin denom of the pair. */
    baseCoinDenom: string;
    /** quote_coin_denom specifies the quote coin denom of the pair. */
    quoteCoinDenom: string;
}
/** MsgCreatePair defines an SDK message for creating a pair. */
export interface MsgCreatePairSDKType {
    creator: string;
    base_coin_denom: string;
    quote_coin_denom: string;
}
export interface MsgCreatePairResponse {
}
export interface MsgCreatePairResponseSDKType {
}
/** MsgCreatePool defines an SDK message for creating a pool. */
export interface MsgCreatePool {
    /** creator specifies the bech32-encoded address that is the pool creator */
    creator: string;
    /** pair_id specifies the pair id. */
    pairId: Long;
    /** deposit_coins specifies the amount of coins to deposit. */
    depositCoins: Coin[];
}
/** MsgCreatePool defines an SDK message for creating a pool. */
export interface MsgCreatePoolSDKType {
    creator: string;
    pair_id: Long;
    deposit_coins: CoinSDKType[];
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponse {
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponseSDKType {
}
/** MsgCreateRangedPool defines an SDK message for creating a ranged pool. */
export interface MsgCreateRangedPool {
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
/** MsgCreateRangedPool defines an SDK message for creating a ranged pool. */
export interface MsgCreateRangedPoolSDKType {
    creator: string;
    pair_id: Long;
    deposit_coins: CoinSDKType[];
    min_price: string;
    max_price: string;
    initial_price: string;
}
/** MsgCreateRangedPoolResponse defines the Msg/CreateRangedPool response type. */
export interface MsgCreateRangedPoolResponse {
}
/** MsgCreateRangedPoolResponse defines the Msg/CreateRangedPool response type. */
export interface MsgCreateRangedPoolResponseSDKType {
}
/** MsgDeposit defines an SDK message for depositing coins to the pool */
export interface MsgDeposit {
    /** depositor specifies the bech32-encoded address that makes a deposit to the pool */
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
    /** withdrawer specifies the bech32-encoded address that withdraws pool coin from the pool */
    withdrawer: string;
    /** pool_id specifies the pool id */
    poolId: Long;
    /** pool_coin specifies the pool coin that is a proof of liquidity provider for the pool */
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
/** MsgLimitOrder defines an SDK message for making a limit order */
export interface MsgLimitOrder {
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
/** MsgLimitOrder defines an SDK message for making a limit order */
export interface MsgLimitOrderSDKType {
    orderer: string;
    pair_id: Long;
    direction: OrderDirection;
    offer_coin?: CoinSDKType;
    demand_coin_denom: string;
    price: string;
    amount: string;
    order_lifespan?: DurationSDKType;
}
/** MsgLimitOrderResponse defines the Msg/LimitOrder response type. */
export interface MsgLimitOrderResponse {
}
/** MsgLimitOrderResponse defines the Msg/LimitOrder response type. */
export interface MsgLimitOrderResponseSDKType {
}
/** MsgMarketOrder defines an SDK message for making a market order */
export interface MsgMarketOrder {
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
/** MsgMarketOrder defines an SDK message for making a market order */
export interface MsgMarketOrderSDKType {
    orderer: string;
    pair_id: Long;
    direction: OrderDirection;
    offer_coin?: CoinSDKType;
    demand_coin_denom: string;
    amount: string;
    order_lifespan?: DurationSDKType;
}
/** MsgMarketOrderResponse defines the Msg/MarketOrder response type. */
export interface MsgMarketOrderResponse {
}
/** MsgMarketOrderResponse defines the Msg/MarketOrder response type. */
export interface MsgMarketOrderResponseSDKType {
}
/** MsgMMOrder defines an SDK message for making a MM(market making) order. */
export interface MsgMMOrder {
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
/** MsgMMOrder defines an SDK message for making a MM(market making) order. */
export interface MsgMMOrderSDKType {
    orderer: string;
    pair_id: Long;
    direction: OrderDirection;
    offer_coin?: CoinSDKType;
    demand_coin_denom: string;
    price: string;
    amount: string;
    order_lifespan?: DurationSDKType;
}
/** MsgMMOrderResponse defines the Msg/MMOrder response type. */
export interface MsgMMOrderResponse {
}
/** MsgMMOrderResponse defines the Msg/MMOrder response type. */
export interface MsgMMOrderResponseSDKType {
}
/** MsgCancelOrder defines an SDK message for cancelling an order */
export interface MsgCancelOrder {
    /** orderer specifies the bech32-encoded address that makes an order */
    orderer: string;
    /** pair_id specifies the pair id */
    pairId: Long;
    /** order_id specifies the order id */
    orderId: Long;
}
/** MsgCancelOrder defines an SDK message for cancelling an order */
export interface MsgCancelOrderSDKType {
    orderer: string;
    pair_id: Long;
    order_id: Long;
}
/** MsgCancelOrderResponse defines the Msg/CancelOrder response type. */
export interface MsgCancelOrderResponse {
}
/** MsgCancelOrderResponse defines the Msg/CancelOrder response type. */
export interface MsgCancelOrderResponseSDKType {
}
/** MsgCancelAllOrders defines an SDK message for cancelling all orders */
export interface MsgCancelAllOrders {
    /** orderer specifies the bech32-encoded address that makes an order */
    orderer: string;
    /** pair_ids specifies pair ids to cancel orders */
    pairIds: Long[];
}
/** MsgCancelAllOrders defines an SDK message for cancelling all orders */
export interface MsgCancelAllOrdersSDKType {
    orderer: string;
    pair_ids: Long[];
}
/** MsgCancelAllOrdersResponse defines the Msg/CancelAllOrders response type. */
export interface MsgCancelAllOrdersResponse {
}
/** MsgCancelAllOrdersResponse defines the Msg/CancelAllOrders response type. */
export interface MsgCancelAllOrdersResponseSDKType {
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
export declare const MsgCreateRangedPool: {
    encode(message: MsgCreateRangedPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRangedPool;
    fromPartial(object: DeepPartial<MsgCreateRangedPool>): MsgCreateRangedPool;
};
export declare const MsgCreateRangedPoolResponse: {
    encode(_: MsgCreateRangedPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRangedPoolResponse;
    fromPartial(_: DeepPartial<MsgCreateRangedPoolResponse>): MsgCreateRangedPoolResponse;
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
export declare const MsgLimitOrder: {
    encode(message: MsgLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLimitOrder;
    fromPartial(object: DeepPartial<MsgLimitOrder>): MsgLimitOrder;
};
export declare const MsgLimitOrderResponse: {
    encode(_: MsgLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLimitOrderResponse;
    fromPartial(_: DeepPartial<MsgLimitOrderResponse>): MsgLimitOrderResponse;
};
export declare const MsgMarketOrder: {
    encode(message: MsgMarketOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMarketOrder;
    fromPartial(object: DeepPartial<MsgMarketOrder>): MsgMarketOrder;
};
export declare const MsgMarketOrderResponse: {
    encode(_: MsgMarketOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMarketOrderResponse;
    fromPartial(_: DeepPartial<MsgMarketOrderResponse>): MsgMarketOrderResponse;
};
export declare const MsgMMOrder: {
    encode(message: MsgMMOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMMOrder;
    fromPartial(object: DeepPartial<MsgMMOrder>): MsgMMOrder;
};
export declare const MsgMMOrderResponse: {
    encode(_: MsgMMOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMMOrderResponse;
    fromPartial(_: DeepPartial<MsgMMOrderResponse>): MsgMMOrderResponse;
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
