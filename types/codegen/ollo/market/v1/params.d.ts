import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface Distribution {
    staking: string;
    communityPool: string;
}
export interface DistributionSDKType {
    staking: string;
    community_pool: string;
}
/** Params defines the parameters for the module. */
export interface Params {
    commission: string;
    bidCloseDuration?: Duration;
    distribution?: Distribution;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    commission: string;
    bid_close_duration?: DurationSDKType;
    distribution?: DistributionSDKType;
}
export declare const Distribution: {
    encode(message: Distribution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Distribution;
    fromPartial(object: DeepPartial<Distribution>): Distribution;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
