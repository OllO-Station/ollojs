import { Minter, MinterSDKType } from "./mint";
import { Params, ParamsSDKType } from "./params";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the inflation module's genesis state. */
export interface GenesisState {
    /** minter is a space for holding current inflation information. */
    minter?: Minter;
    /** params defines all the paramaters of the module. */
    params?: Params;
    /** this line is used by starport scaffolding # genesis/proto/state */
    lastBlockTime?: Date;
    lastEpochReduction: Long;
}
/** GenesisState defines the inflation module's genesis state. */
export interface GenesisStateSDKType {
    minter?: MinterSDKType;
    params?: ParamsSDKType;
    last_block_time?: Date;
    last_epoch_reduction: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
