import { Epoch, EpochSDKType } from "./epoch";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface GenesisState {
    epochs: Epoch[];
}
export interface GenesisStateSDKType {
    epochs: EpochSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
