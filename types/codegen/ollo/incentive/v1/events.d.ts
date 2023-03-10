import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventNewReward {
    delegatorAddress: string;
    validatorAddress: string;
    reward?: DecCoin;
}
export interface EventNewRewardSDKType {
    delegator_address: string;
    validator_address: string;
    reward?: DecCoinSDKType;
}
export declare const EventNewReward: {
    encode(message: EventNewReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNewReward;
    fromPartial(object: DeepPartial<EventNewReward>): EventNewReward;
};
