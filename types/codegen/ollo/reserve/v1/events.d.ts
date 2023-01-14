import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventDenomBurned {
    denom: string;
    amount: string;
}
export interface EventDenomBurnedSDKType {
    denom: string;
    amount: string;
}
export interface EventDenomMinted {
    denom: string;
    amount: string;
}
export interface EventDenomMintedSDKType {
    denom: string;
    amount: string;
}
export declare const EventDenomBurned: {
    encode(message: EventDenomBurned, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDenomBurned;
    fromPartial(object: DeepPartial<EventDenomBurned>): EventDenomBurned;
};
export declare const EventDenomMinted: {
    encode(message: EventDenomMinted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDenomMinted;
    fromPartial(object: DeepPartial<EventDenomMinted>): EventDenomMinted;
};
