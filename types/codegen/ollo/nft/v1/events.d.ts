import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventMintNft {
    id: string;
    denomId: string;
    data: Uint8Array;
    creator: string;
}
export interface EventMintNftSDKType {
    id: string;
    denom_id: string;
    data: Uint8Array;
    creator: string;
}
export interface EventSendNft {
    id: string;
    denomId: string;
    data: Uint8Array;
    creator: string;
    recipient: string;
}
export interface EventSendNftSDKType {
    id: string;
    denom_id: string;
    data: Uint8Array;
    creator: string;
    recipient: string;
}
export interface EventBurnNft {
    id: string;
    denomId: string;
    creator: string;
}
export interface EventBurnNftSDKType {
    id: string;
    denom_id: string;
    creator: string;
}
export interface EventCreateDenom {
    id: string;
    name: string;
    denom: string;
    creator: string;
}
export interface EventCreateDenomSDKType {
    id: string;
    name: string;
    denom: string;
    creator: string;
}
export interface EventUpdateDenom {
    id: string;
    name: string;
    denom: string;
    creator: string;
}
export interface EventUpdateDenomSDKType {
    id: string;
    name: string;
    denom: string;
    creator: string;
}
export interface EventTransferDenom {
    id: string;
    name: string;
    denom: string;
    creator: string;
}
export interface EventTransferDenomSDKType {
    id: string;
    name: string;
    denom: string;
    creator: string;
}
export declare const EventMintNft: {
    encode(message: EventMintNft, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMintNft;
    fromPartial(object: DeepPartial<EventMintNft>): EventMintNft;
};
export declare const EventSendNft: {
    encode(message: EventSendNft, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSendNft;
    fromPartial(object: DeepPartial<EventSendNft>): EventSendNft;
};
export declare const EventBurnNft: {
    encode(message: EventBurnNft, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnNft;
    fromPartial(object: DeepPartial<EventBurnNft>): EventBurnNft;
};
export declare const EventCreateDenom: {
    encode(message: EventCreateDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateDenom;
    fromPartial(object: DeepPartial<EventCreateDenom>): EventCreateDenom;
};
export declare const EventUpdateDenom: {
    encode(message: EventUpdateDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateDenom;
    fromPartial(object: DeepPartial<EventUpdateDenom>): EventUpdateDenom;
};
export declare const EventTransferDenom: {
    encode(message: EventTransferDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTransferDenom;
    fromPartial(object: DeepPartial<EventTransferDenom>): EventTransferDenom;
};
