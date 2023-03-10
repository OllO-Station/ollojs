import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { RequestStatus } from "./order";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** DepositRequest defines a deposit request. */
export interface DepositRequest {
    /** id specifies the id for the request */
    id: Long;
    /** pool_id specifies the pool id */
    poolId: Long;
    /** msg_height specifies the block height when the request is stored for the batch execution */
    msgHeight: Long;
    /** depositor specifies the bech32-encoded address that makes a deposit to the pool */
    depositor: string;
    /** deposit_coins specifies the amount of coins to deposit. */
    depositCoins: Coin[];
    /** accepted_coins specifies the amount of coins that are accepted. */
    acceptedCoins: Coin[];
    mintedPoolCoin?: Coin;
    status: RequestStatus;
}
/** DepositRequest defines a deposit request. */
export interface DepositRequestSDKType {
    id: Long;
    pool_id: Long;
    msg_height: Long;
    depositor: string;
    deposit_coins: CoinSDKType[];
    accepted_coins: CoinSDKType[];
    minted_pool_coin?: CoinSDKType;
    status: RequestStatus;
}
/** WithdrawRequest defines a withdraw request. */
export interface WithdrawRequest {
    /** id specifies the id for the request */
    id: Long;
    /** pool_id specifies the pool id */
    poolId: Long;
    /** msg_height specifies the block height when the request is stored for the batch execution */
    msgHeight: Long;
    /** withdrawer specifies the bech32-encoded address that withdraws pool coin from the pool */
    withdrawer: string;
    /** pool_coin specifies the pool coin that is a proof of liquidity provider for the pool */
    poolCoin?: Coin;
    /** withdrawn_coins specifies the amount of coins that are withdrawn. */
    withdrawnCoins: Coin[];
    status: RequestStatus;
}
/** WithdrawRequest defines a withdraw request. */
export interface WithdrawRequestSDKType {
    id: Long;
    pool_id: Long;
    msg_height: Long;
    withdrawer: string;
    pool_coin?: CoinSDKType;
    withdrawn_coins: CoinSDKType[];
    status: RequestStatus;
}
export declare const DepositRequest: {
    encode(message: DepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositRequest;
    fromPartial(object: DeepPartial<DepositRequest>): DepositRequest;
};
export declare const WithdrawRequest: {
    encode(message: WithdrawRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawRequest;
    fromPartial(object: DeepPartial<WithdrawRequest>): WithdrawRequest;
};
