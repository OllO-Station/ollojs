import { Params, ParamsSDKType } from "./params";
import { DenomWhitelist, DenomWhitelistSDKType } from "./reserve";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
    /** params defines the paramaters of the module. */
    params?: Params;
    factoryDenoms: DenomWhitelist[];
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    factory_denoms: DenomWhitelistSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
