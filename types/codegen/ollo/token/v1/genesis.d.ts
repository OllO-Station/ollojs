import { Params, ParamsSDKType } from "./params";
import { Token, TokenSDKType } from "./token";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState declares the token module's genesis state configuration */
export interface GenesisState {
    params?: Params;
    tokens: Token[];
    burnedCoins: Coin[];
}
/** GenesisState declares the token module's genesis state configuration */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    tokens: TokenSDKType[];
    burned_coins: CoinSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
