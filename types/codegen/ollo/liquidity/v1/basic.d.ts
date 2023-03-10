import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface BasicPool {
    poolId: string;
    pairId: Long;
    poolCoinDenom: string;
    reserveAccountAddress: string;
}
export interface BasicPoolSDKType {
    pool_id: string;
    pair_id: Long;
    pool_coin_denom: string;
    reserve_account_address: string;
}
export declare const BasicPool: {
    encode(message: BasicPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasicPool;
    fromPartial(object: DeepPartial<BasicPool>): BasicPool;
};
