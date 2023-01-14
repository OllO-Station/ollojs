import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Token defines a standard definition for the fungible token */
export interface Token {
    symbol: string;
    name: string;
    scale: number;
    minUnit: string;
    initialSupply: Long;
    maxSupply: Long;
    mintable: boolean;
    owner: string;
}
/** Token defines a standard definition for the fungible token */
export interface TokenSDKType {
    symbol: string;
    name: string;
    scale: number;
    min_unit: string;
    initial_supply: Long;
    max_supply: Long;
    mintable: boolean;
    owner: string;
}
export declare const Token: {
    encode(message: Token, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Token;
    fromPartial(object: DeepPartial<Token>): Token;
};
