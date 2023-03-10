import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
    batchSize: number;
    tickPrecision: number;
    feeCollectorAddress: string;
    dustCollectorAddress: string;
    minInitialPoolCoinSupply: string;
    pairCreationFee: Coin[];
    poolCreationFee: Coin[];
    minInitialDepositAmount: string;
    maxPriceLimitRatio: string;
    maxNumMarketMakingOrderTicks: number;
    maxNumMarketMakingOrdersPerPair: number;
    maxOrderLifespan?: Duration;
    swapFeeRate: string;
    withdrawFeeRate: string;
    depositExtraGas: Long;
    withdrawExtraGas: Long;
    orderExtraGas: Long;
    maxNumActivePoolsPerPair: number;
}
export interface ParamsSDKType {
    batch_size: number;
    tick_precision: number;
    fee_collector_address: string;
    dust_collector_address: string;
    min_initial_pool_coin_supply: string;
    pair_creation_fee: CoinSDKType[];
    pool_creation_fee: CoinSDKType[];
    min_initial_deposit_amount: string;
    max_price_limit_ratio: string;
    max_num_market_making_order_ticks: number;
    max_num_market_making_orders_per_pair: number;
    max_order_lifespan?: DurationSDKType;
    swap_fee_rate: string;
    withdraw_fee_rate: string;
    deposit_extra_gas: Long;
    withdraw_extra_gas: Long;
    order_extra_gas: Long;
    max_num_active_pools_per_pair: number;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
