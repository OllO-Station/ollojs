import { Params, ParamsSDKType } from "./params";
import { MsgModuleOwner, MsgModuleOwnerSDKType } from "./prices";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the prices module's genesis state. */
export interface GenesisState {
    params?: Params;
    portId: string;
    moduleOwners: MsgModuleOwner[];
}
/** GenesisState defines the prices module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    port_id: string;
    moduleOwners: MsgModuleOwnerSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
