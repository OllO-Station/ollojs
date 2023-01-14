import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventPlaceBid {
}
export interface EventPlaceBidSDKType {
}
export declare const EventPlaceBid: {
    encode(_: EventPlaceBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPlaceBid;
    fromPartial(_: DeepPartial<EventPlaceBid>): EventPlaceBid;
};
