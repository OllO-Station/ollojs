import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface MsgBuyName {
    creator: string;
    name: string;
    bidderAddr: string;
    bid: string;
}
export interface MsgBuyNameSDKType {
    creator: string;
    name: string;
    bidderAddr: string;
    bid: string;
}
export interface MsgBuyNameResponse {
}
export interface MsgBuyNameResponseSDKType {
}
export interface MsgSellName {
    creator: string;
    name: string;
    sellerAddr: string;
    offer: string;
}
export interface MsgSellNameSDKType {
    creator: string;
    name: string;
    sellerAddr: string;
    offer: string;
}
export interface MsgSellNameResponse {
}
export interface MsgSellNameResponseSDKType {
}
export interface MsgSetName {
    creatorAddr: string;
    name: string;
    value: string;
}
export interface MsgSetNameSDKType {
    creatorAddr: string;
    name: string;
    value: string;
}
export interface MsgDeleteName {
    creatorAddr: string;
    name: string;
}
export interface MsgDeleteNameSDKType {
    creatorAddr: string;
    name: string;
}
export interface MsgDeleteNameResponse {
}
export interface MsgDeleteNameResponseSDKType {
}
export interface MsgSetNameResponse {
}
export interface MsgSetNameResponseSDKType {
}
export interface MsgAddThread {
    creator: string;
    name: string;
    thread: string;
    addr: string;
    offer: string;
}
export interface MsgAddThreadSDKType {
    creator: string;
    name: string;
    thread: string;
    addr: string;
    offer: string;
}
export interface MsgAddThreadResponse {
}
export interface MsgAddThreadResponseSDKType {
}
export interface MsgDeleteThread {
    creator: string;
    name: string;
    thread: string;
    addr: string;
}
export interface MsgDeleteThreadSDKType {
    creator: string;
    name: string;
    thread: string;
    addr: string;
}
export interface MsgDeleteThreadResponse {
}
export interface MsgDeleteThreadResponseSDKType {
}
export declare const MsgBuyName: {
    encode(message: MsgBuyName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyName;
    fromPartial(object: DeepPartial<MsgBuyName>): MsgBuyName;
};
export declare const MsgBuyNameResponse: {
    encode(_: MsgBuyNameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyNameResponse;
    fromPartial(_: DeepPartial<MsgBuyNameResponse>): MsgBuyNameResponse;
};
export declare const MsgSellName: {
    encode(message: MsgSellName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellName;
    fromPartial(object: DeepPartial<MsgSellName>): MsgSellName;
};
export declare const MsgSellNameResponse: {
    encode(_: MsgSellNameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellNameResponse;
    fromPartial(_: DeepPartial<MsgSellNameResponse>): MsgSellNameResponse;
};
export declare const MsgSetName: {
    encode(message: MsgSetName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetName;
    fromPartial(object: DeepPartial<MsgSetName>): MsgSetName;
};
export declare const MsgDeleteName: {
    encode(message: MsgDeleteName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteName;
    fromPartial(object: DeepPartial<MsgDeleteName>): MsgDeleteName;
};
export declare const MsgDeleteNameResponse: {
    encode(_: MsgDeleteNameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteNameResponse;
    fromPartial(_: DeepPartial<MsgDeleteNameResponse>): MsgDeleteNameResponse;
};
export declare const MsgSetNameResponse: {
    encode(_: MsgSetNameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNameResponse;
    fromPartial(_: DeepPartial<MsgSetNameResponse>): MsgSetNameResponse;
};
export declare const MsgAddThread: {
    encode(message: MsgAddThread, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddThread;
    fromPartial(object: DeepPartial<MsgAddThread>): MsgAddThread;
};
export declare const MsgAddThreadResponse: {
    encode(_: MsgAddThreadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddThreadResponse;
    fromPartial(_: DeepPartial<MsgAddThreadResponse>): MsgAddThreadResponse;
};
export declare const MsgDeleteThread: {
    encode(message: MsgDeleteThread, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteThread;
    fromPartial(object: DeepPartial<MsgDeleteThread>): MsgDeleteThread;
};
export declare const MsgDeleteThreadResponse: {
    encode(_: MsgDeleteThreadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteThreadResponse;
    fromPartial(_: DeepPartial<MsgDeleteThreadResponse>): MsgDeleteThreadResponse;
};
