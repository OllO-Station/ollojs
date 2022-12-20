import { Coin, CoinSDKType } from "../../cosmos_proto/coin";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum OrderType {
    ORDER_TYPE_UNSPECIFIED = 0,
    ORDER_TYPE_MARKET = 1,
    ORDER_TYPE_LIMIT = 2,
    ORDER_TYPE_MARKET_MAKING = 3,
    UNRECOGNIZED = -1
}
export declare const OrderTypeSDKType: typeof OrderType;
export declare function orderTypeFromJSON(object: any): OrderType;
export declare function orderTypeToJSON(object: OrderType): string;
export declare enum OrderStatus {
    ORDER_STATUS_INVALIDATED = 0,
    ORDER_STATUS_MATCHING = 1,
    ORDER_STATUS_MATCHED = 2,
    ORDER_STATUS_NO_MATCH = 3,
    ORDER_STATUS_UNMATCHED = 4,
    ORDER_STATUS_PARTIAL_MATCH = 5,
    ORDER_STATUS_UNSPECIFIED = 6,
    ORDER_STATUS_EXPIRED = 7,
    ORDER_STATUS_CANCELED = 8,
    UNRECOGNIZED = -1
}
export declare const OrderStatusSDKType: typeof OrderStatus;
export declare function orderStatusFromJSON(object: any): OrderStatus;
export declare function orderStatusToJSON(object: OrderStatus): string;
export declare enum RequestStatus {
    REQUEST_STATUS_UNSPECIFIED = 0,
    REQUEST_STATUS_PENDING = 1,
    REQUEST_STATUS_EXECUTED = 2,
    REQUEST_STATUS_SUCCESS = 3,
    REQUEST_STATUS_FAIL = 4,
    UNRECOGNIZED = -1
}
export declare const RequestStatusSDKType: typeof RequestStatus;
export declare function requestStatusFromJSON(object: any): RequestStatus;
export declare function requestStatusToJSON(object: RequestStatus): string;
export declare enum OrderDirection {
    ORDER_DIRECTION_UNSPECIFIED = 0,
    ORDER_DIRECTION_BUY = 1,
    ORDER_DIRECTION_SELL = 2,
    UNRECOGNIZED = -1
}
export declare const OrderDirectionSDKType: typeof OrderDirection;
export declare function orderDirectionFromJSON(object: any): OrderDirection;
export declare function orderDirectionToJSON(object: OrderDirection): string;
export interface Pair {
    id: Long;
    baseDenom: string;
    quoteDenom: string;
    escrowAddr: string;
    lastOrderId: Long;
    lastPrice: string;
    currentBatchId: Long;
}
export interface PairSDKType {
    id: Long;
    base_denom: string;
    quote_denom: string;
    escrow_addr: string;
    last_order_id: Long;
    last_price: string;
    current_batch_id: Long;
}
export interface PoolType {
    id: Long;
    name: string;
    description: string;
    creatorAddr: string;
}
export interface PoolTypeSDKType {
    id: Long;
    name: string;
    description: string;
    creator_addr: string;
}
export interface PoolReserve {
    /** Reserve coins deposited */
    supply?: Coin;
    addr: string;
    denom: string;
    minSupply: string;
    maxSupply: string;
}
export interface PoolReserveSDKType {
    supply?: CoinSDKType;
    addr: string;
    denom: string;
    min_supply: string;
    max_supply: string;
}
export interface Pool {
    id: Long;
    pairId: Long;
    typeId: Long;
    creatorAddr: string;
    reserve?: PoolReserve;
    supply?: Coin;
    prevDepositReqId: Long;
    prevWithdrawReqId: Long;
    disabled: boolean;
    priceRange?: PriceRange;
}
export interface PoolSDKType {
    id: Long;
    pair_id: Long;
    type_id: Long;
    creator_addr: string;
    reserve?: PoolReserveSDKType;
    supply?: CoinSDKType;
    prev_deposit_req_id: Long;
    prev_withdraw_req_id: Long;
    disabled: boolean;
    price_range?: PriceRangeSDKType;
}
export interface PoolState {
    /** Pool coin issued */
    supply?: Coin;
    prevDepositReqId: Long;
    prevWithdrawReqId: Long;
    disabled: boolean;
    priceRange?: PriceRange;
}
export interface PoolStateSDKType {
    supply?: CoinSDKType;
    prev_deposit_req_id: Long;
    prev_withdraw_req_id: Long;
    disabled: boolean;
    price_range?: PriceRangeSDKType;
}
export interface PriceRange {
    min: string;
    max: string;
}
export interface PriceRangeSDKType {
    min: string;
    max: string;
}
export interface PoolBatch {
    id: Long;
    poolId: Long;
    height: Long;
    depositId: Long;
    withdrawId: Long;
    swapId: Long;
    executed: boolean;
}
export interface PoolBatchSDKType {
    id: Long;
    pool_id: Long;
    height: Long;
    deposit_id: Long;
    withdraw_id: Long;
    swap_id: Long;
    executed: boolean;
}
export interface RequestDeposit {
    id: Long;
    poolId: Long;
    depositorAddr: string;
    poolCoin?: Coin;
    msgHeight: Long;
    depositAmt: Coin[];
    acceptedAmt: Coin[];
    status: RequestStatus;
}
export interface RequestDepositSDKType {
    id: Long;
    pool_id: Long;
    depositor_addr: string;
    pool_coin?: CoinSDKType;
    msg_height: Long;
    deposit_amt: CoinSDKType[];
    accepted_amt: CoinSDKType[];
    status: RequestStatus;
}
export interface RequestWithdraw {
    id: Long;
    poolId: Long;
    withdrawAddr: string;
    poolCoin?: Coin;
    msgHeight: Long;
    withdrawAmt: Coin[];
    status: RequestStatus;
}
export interface RequestWithdrawSDKType {
    id: Long;
    pool_id: Long;
    withdraw_addr: string;
    pool_coin?: CoinSDKType;
    msg_height: Long;
    withdraw_amt: CoinSDKType[];
    status: RequestStatus;
}
export interface Order {
    id: Long;
    pairId: Long;
    creatorAddr: string;
    msgHeight: Long;
    type: OrderType;
    direction: OrderDirection;
    status: OrderStatus;
    batchId: Long;
    offer?: Coin;
    remaining?: Coin;
    received?: Coin;
    price: string;
    amt: string;
    openAmt: string;
    expires?: Date;
}
export interface OrderSDKType {
    id: Long;
    pair_id: Long;
    creator_addr: string;
    msg_height: Long;
    type: OrderType;
    direction: OrderDirection;
    status: OrderStatus;
    batch_id: Long;
    offer?: CoinSDKType;
    remaining?: CoinSDKType;
    received?: CoinSDKType;
    price: string;
    amt: string;
    open_amt: string;
    expires?: Date;
}
export interface MarketMakingOrderId {
    pairId: Long;
    creatorAddr: string;
    orderIds: Long[];
}
export interface MarketMakingOrderIdSDKType {
    pair_id: Long;
    creator_addr: string;
    order_ids: Long[];
}
export declare const Pair: {
    encode(message: Pair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pair;
    fromPartial(object: DeepPartial<Pair>): Pair;
};
export declare const PoolType: {
    encode(message: PoolType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolType;
    fromPartial(object: DeepPartial<PoolType>): PoolType;
};
export declare const PoolReserve: {
    encode(message: PoolReserve, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolReserve;
    fromPartial(object: DeepPartial<PoolReserve>): PoolReserve;
};
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromPartial(object: DeepPartial<Pool>): Pool;
};
export declare const PoolState: {
    encode(message: PoolState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolState;
    fromPartial(object: DeepPartial<PoolState>): PoolState;
};
export declare const PriceRange: {
    encode(message: PriceRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PriceRange;
    fromPartial(object: DeepPartial<PriceRange>): PriceRange;
};
export declare const PoolBatch: {
    encode(message: PoolBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolBatch;
    fromPartial(object: DeepPartial<PoolBatch>): PoolBatch;
};
export declare const RequestDeposit: {
    encode(message: RequestDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestDeposit;
    fromPartial(object: DeepPartial<RequestDeposit>): RequestDeposit;
};
export declare const RequestWithdraw: {
    encode(message: RequestWithdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestWithdraw;
    fromPartial(object: DeepPartial<RequestWithdraw>): RequestWithdraw;
};
export declare const Order: {
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Order;
    fromPartial(object: DeepPartial<Order>): Order;
};
export declare const MarketMakingOrderId: {
    encode(message: MarketMakingOrderId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketMakingOrderId;
    fromPartial(object: DeepPartial<MarketMakingOrderId>): MarketMakingOrderId;
};
