import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Loan {
    lender: string;
    createdAt?: Date;
    amountIn?: Coin;
    assetId: Long;
}
export interface LoanSDKType {
    lender: string;
    created_at?: Date;
    amount_in?: CoinSDKType;
    asset_id: Long;
}
export declare const Loan: {
    encode(message: Loan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Loan;
    fromPartial(object: DeepPartial<Loan>): Loan;
};
