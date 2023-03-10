import { Params, ParamsSDKType } from "./params";
import { Lock, LockSDKType } from "./lock";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
    params?: Params;
    locks: Lock[];
    lastLockId: Long;
}
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    locks: LockSDKType[];
    last_lock_id: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
