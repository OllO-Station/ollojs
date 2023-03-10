import { Params, ParamsSDKType } from "./params";
import { Pair, PairSDKType } from "./pair";
import { Pool, PoolSDKType } from "./pool";
import { DepositRequest, DepositRequestSDKType, WithdrawRequest, WithdrawRequestSDKType } from "./liquidity";
import { Order, OrderSDKType } from "./order";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the liquidity module's genesis state. */
export interface GenesisState {
    params?: Params;
    lastPairId: Long;
    lastPoolId: Long;
    pairs: Pair[];
    pools: Pool[];
    depositRequests: DepositRequest[];
    withdrawRequests: WithdrawRequest[];
    orders: Order[];
    numMarketMakingOrdersRecords: NumMMOrdersRecord[];
}
/** GenesisState defines the liquidity module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    last_pair_id: Long;
    last_pool_id: Long;
    pairs: PairSDKType[];
    pools: PoolSDKType[];
    deposit_requests: DepositRequestSDKType[];
    withdraw_requests: WithdrawRequestSDKType[];
    orders: OrderSDKType[];
    num_market_making_orders_records: NumMMOrdersRecordSDKType[];
}
/**
 * NumMMOrdersRecord holds information about how many MM orders an orderer
 * ordered per pair.
 */
export interface NumMMOrdersRecord {
    orderer: string;
    pairId: Long;
    numMarketMakingOrders: number;
}
/**
 * NumMMOrdersRecord holds information about how many MM orders an orderer
 * ordered per pair.
 */
export interface NumMMOrdersRecordSDKType {
    orderer: string;
    pair_id: Long;
    num_market_making_orders: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const NumMMOrdersRecord: {
    encode(message: NumMMOrdersRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NumMMOrdersRecord;
    fromPartial(object: DeepPartial<NumMMOrdersRecord>): NumMMOrdersRecord;
};
