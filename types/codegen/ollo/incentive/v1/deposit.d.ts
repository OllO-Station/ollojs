import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** stores apply deposit amount for a future refund */
export interface Deposit {
    amount: Coin[];
}
/** stores apply deposit amount for a future refund */
export interface DepositSDKType {
    amount: CoinSDKType[];
}
export interface DepositRecord {
    address: string;
    pairId: Long;
    amount: Coin[];
}
export interface DepositRecordSDKType {
    address: string;
    pair_id: Long;
    amount: CoinSDKType[];
}
export declare const Deposit: {
    encode(message: Deposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Deposit;
    fromPartial(object: DeepPartial<Deposit>): Deposit;
};
export declare const DepositRecord: {
    encode(message: DepositRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositRecord;
    fromPartial(object: DeepPartial<DepositRecord>): DepositRecord;
};
