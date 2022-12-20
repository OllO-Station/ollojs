import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos_proto/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
    poolParams?: PoolParams;
    orderParams?: OrderParams;
    feeParams?: FeeParams;
    marketParams?: MarketParams;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    pool_params?: PoolParamsSDKType;
    order_params?: OrderParamsSDKType;
    fee_params?: FeeParamsSDKType;
    market_params?: MarketParamsSDKType;
}
export interface OrderParams {
    maxLifespan?: Duration;
    depositExtraGas: Long;
    withdrawExtraGas: Long;
    orderExtraGas: Long;
}
export interface OrderParamsSDKType {
    max_lifespan?: DurationSDKType;
    deposit_extra_gas: Long;
    withdraw_extra_gas: Long;
    order_extra_gas: Long;
}
export interface PoolParams {
    minInitPoolSupply: string;
    minInitPoolDeposit: string;
    maxPriceRatio: string;
}
export interface PoolParamsSDKType {
    min_init_pool_supply: string;
    min_init_pool_deposit: string;
    max_price_ratio: string;
}
export interface MarketParams {
    precision: number;
    batchSize: number;
    maxAmmTicks: number;
}
export interface MarketParamsSDKType {
    precision: number;
    batch_size: number;
    max_amm_ticks: number;
}
export interface FeeParams {
    feeCollecterAddr: string;
    dustCollectorAddr: string;
    swapRate: string;
    withdrawRate: string;
    pairInitFee: Coin[];
    poolInitFee: Coin[];
}
export interface FeeParamsSDKType {
    fee_collecter_addr: string;
    dust_collector_addr: string;
    swap_rate: string;
    withdraw_rate: string;
    pair_init_fee: CoinSDKType[];
    pool_init_fee: CoinSDKType[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const OrderParams: {
    encode(message: OrderParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderParams;
    fromPartial(object: DeepPartial<OrderParams>): OrderParams;
};
export declare const PoolParams: {
    encode(message: PoolParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolParams;
    fromPartial(object: DeepPartial<PoolParams>): PoolParams;
};
export declare const MarketParams: {
    encode(message: MarketParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketParams;
    fromPartial(object: DeepPartial<MarketParams>): MarketParams;
};
export declare const FeeParams: {
    encode(message: FeeParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeParams;
    fromPartial(object: DeepPartial<FeeParams>): FeeParams;
};
