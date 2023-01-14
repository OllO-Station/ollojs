import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params defines the token module's parameters */
export interface Params {
    tokenTaxRate: string;
    issueTokenBaseFee?: Coin;
    mintTokenFeeRatio: string;
}
/** Params defines the token module's parameters */
export interface ParamsSDKType {
    token_tax_rate: string;
    issue_token_base_fee?: CoinSDKType;
    mint_token_fee_ratio: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
