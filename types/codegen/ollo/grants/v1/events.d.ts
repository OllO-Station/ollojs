import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventPlaceBid {
    id: string;
    creator: string;
}
export interface EventPlaceBidSDKType {
    id: string;
    creator: string;
}
export interface EventCancelBid {
    id: string;
    creator: string;
}
export interface EventCancelBidSDKType {
    id: string;
    creator: string;
}
export declare const EventPlaceBid: {
    encode(message: EventPlaceBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPlaceBid;
    fromPartial(object: DeepPartial<EventPlaceBid>): EventPlaceBid;
};
export declare const EventCancelBid: {
    encode(message: EventCancelBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelBid;
    fromPartial(object: DeepPartial<EventCancelBid>): EventCancelBid;
};
