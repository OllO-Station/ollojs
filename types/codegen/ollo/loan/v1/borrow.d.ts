import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Borrow {
    borrower: string;
    createdAt?: Date;
    amountOut?: Coin;
    assetId: Long;
}
export interface BorrowSDKType {
    borrower: string;
    created_at?: Date;
    amount_out?: CoinSDKType;
    asset_id: Long;
}
export declare const Borrow: {
    encode(message: Borrow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Borrow;
    fromPartial(object: DeepPartial<Borrow>): Borrow;
};
