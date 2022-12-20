import { Params, ParamsSDKType } from "./params";
import { Whois, WhoisSDKType } from "./whois";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** GenesisState defines the ons module's genesis state. */
export interface GenesisState {
    params?: Params;
    portId: string;
    whoisList: Whois[];
}
/** GenesisState defines the ons module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    port_id: string;
    whoisList: WhoisSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
