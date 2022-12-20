import { Params, ParamsSDKType } from "./params";
import { Pair, PairSDKType, Pool, PoolSDKType, Order, OrderSDKType, RequestDeposit, RequestDepositSDKType, RequestWithdraw, RequestWithdrawSDKType, MarketMakingOrderId, MarketMakingOrderIdSDKType } from "./liquidity";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the liquidity module's genesis state. */
export interface GenesisState {
    params?: Params;
    pairs: Pair[];
    pools: Pool[];
    requests?: GenesisRequestsState;
    prevPoolId: Long;
    prevPairId: Long;
}
/** GenesisState defines the liquidity module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    pairs: PairSDKType[];
    pools: PoolSDKType[];
    requests?: GenesisRequestsStateSDKType;
    prev_pool_id: Long;
    prev_pair_id: Long;
}
export interface GenesisRequestsState {
    orders: Order[];
    deposits: RequestDeposit[];
    withdrawals: RequestWithdraw[];
    marketMakingOrderIds: MarketMakingOrderId[];
}
export interface GenesisRequestsStateSDKType {
    orders: OrderSDKType[];
    deposits: RequestDepositSDKType[];
    withdrawals: RequestWithdrawSDKType[];
    market_making_order_ids: MarketMakingOrderIdSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const GenesisRequestsState: {
    encode(message: GenesisRequestsState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisRequestsState;
    fromPartial(object: DeepPartial<GenesisRequestsState>): GenesisRequestsState;
};
