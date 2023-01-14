import { Collection, CollectionSDKType } from "./nft";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the market module's genesis state. */
export interface GenesisState {
    /** string port_id = 2; */
    collections: Collection[];
}
/** GenesisState defines the market module's genesis state. */
export interface GenesisStateSDKType {
    collections: CollectionSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
