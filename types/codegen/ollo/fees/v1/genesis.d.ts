import { FeeToken, FeeTokenSDKType } from "./fees";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface GenesisState {
    baseDenom: string;
    feeTokens: FeeToken[];
}
export interface GenesisStateSDKType {
    base_denom: string;
    fee_tokens: FeeTokenSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
