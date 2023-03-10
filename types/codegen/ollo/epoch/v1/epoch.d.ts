import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Epoch {
    id: string;
    start?: Date;
    duration?: Duration;
    currentEpochNumber: Long;
    currentEpochStart?: Date;
    epochStarted: boolean;
    currentEpochStartHeight: Long;
}
export interface EpochSDKType {
    id: string;
    start?: Date;
    duration?: DurationSDKType;
    current_epoch_number: Long;
    current_epoch_start?: Date;
    epoch_started: boolean;
    current_epoch_start_height: Long;
}
export declare const Epoch: {
    encode(message: Epoch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Epoch;
    fromPartial(object: DeepPartial<Epoch>): Epoch;
};
