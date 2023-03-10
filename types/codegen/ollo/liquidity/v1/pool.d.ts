import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** PoolType enumerates pool types. */
export declare enum PoolType {
    /** POOL_TYPE_UNSPECIFIED - POOL_TYPE_UNSPECIFIED specifies unknown pool type */
    POOL_TYPE_UNSPECIFIED = 0,
    /** POOL_TYPE_BASIC - POOL_TYPE_BASIC specifies the basic pool type */
    POOL_TYPE_BASIC = 1,
    /** POOL_TYPE_RANGED - POOL_TYPE_RANGED specifies the ranged pool type */
    POOL_TYPE_RANGED = 2,
    UNRECOGNIZED = -1
}
export declare const PoolTypeSDKType: typeof PoolType;
export declare function poolTypeFromJSON(object: any): PoolType;
export declare function poolTypeToJSON(object: PoolType): string;
/**
 * Pool defines generic liquidity pool object which can be either a basic pool or a
 * ranged pool.
 */
export interface Pool {
    type: PoolType;
    id: Long;
    pairId: Long;
    creator: string;
    reserveAddress: string;
    poolCoinDenom: string;
    minPrice: string;
    maxPrice: string;
    lastDepositRequestId: Long;
    lastWithdrawRequestId: Long;
    disabled: boolean;
}
/**
 * Pool defines generic liquidity pool object which can be either a basic pool or a
 * ranged pool.
 */
export interface PoolSDKType {
    type: PoolType;
    id: Long;
    pair_id: Long;
    creator: string;
    reserve_address: string;
    pool_coin_denom: string;
    min_price: string;
    max_price: string;
    last_deposit_request_id: Long;
    last_withdraw_request_id: Long;
    disabled: boolean;
}
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromPartial(object: DeepPartial<Pool>): Pool;
};
