import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventTokenIssued {
    name: string;
    symbol: string;
    owner: string;
}
export interface EventTokenIssuedSDKType {
    name: string;
    symbol: string;
    owner: string;
}
export interface EventTokenBurned {
    name: string;
    symbol: string;
    owner: string;
}
export interface EventTokenBurnedSDKType {
    name: string;
    symbol: string;
    owner: string;
}
export interface EventTokenMinted {
    name: string;
    symbol: string;
    owner: string;
}
export interface EventTokenMintedSDKType {
    name: string;
    symbol: string;
    owner: string;
}
export interface EventTokenEdit {
    name: string;
    symbol: string;
    owner: string;
}
export interface EventTokenEditSDKType {
    name: string;
    symbol: string;
    owner: string;
}
export interface EventTokenTransferredOwner {
    name: string;
    symbol: string;
    owner: string;
}
export interface EventTokenTransferredOwnerSDKType {
    name: string;
    symbol: string;
    owner: string;
}
export declare const EventTokenIssued: {
    encode(message: EventTokenIssued, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenIssued;
    fromPartial(object: DeepPartial<EventTokenIssued>): EventTokenIssued;
};
export declare const EventTokenBurned: {
    encode(message: EventTokenBurned, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenBurned;
    fromPartial(object: DeepPartial<EventTokenBurned>): EventTokenBurned;
};
export declare const EventTokenMinted: {
    encode(message: EventTokenMinted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenMinted;
    fromPartial(object: DeepPartial<EventTokenMinted>): EventTokenMinted;
};
export declare const EventTokenEdit: {
    encode(message: EventTokenEdit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenEdit;
    fromPartial(object: DeepPartial<EventTokenEdit>): EventTokenEdit;
};
export declare const EventTokenTransferredOwner: {
    encode(message: EventTokenTransferredOwner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenTransferredOwner;
    fromPartial(object: DeepPartial<EventTokenTransferredOwner>): EventTokenTransferredOwner;
};
