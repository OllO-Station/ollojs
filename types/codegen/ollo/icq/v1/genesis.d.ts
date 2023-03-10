import { Params, ParamsSDKType } from "./params";
import { InterchainQuery, InterchainQuerySDKType } from "./icq";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface GenesisState {
    hostPort: string;
    params?: Params;
    queries: InterchainQuery[];
}
export interface GenesisStateSDKType {
    host_port: string;
    params?: ParamsSDKType;
    queries: InterchainQuerySDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
