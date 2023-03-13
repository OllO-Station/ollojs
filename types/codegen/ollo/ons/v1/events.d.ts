import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventNameExpired {
    name: string;
    owner: string;
}
export interface EventNameExpiredSDKType {
    name: string;
    owner: string;
}
export interface EventNameListed {
    name: string;
    owner: string;
}
export interface EventNameListedSDKType {
    name: string;
    owner: string;
}
export interface EventNameListingCanceled {
    name: string;
    owner: string;
}
export interface EventNameListingCanceledSDKType {
    name: string;
    owner: string;
}
export interface EventNameUnlisted {
    name: string;
    owner: string;
}
export interface EventNameUnlistedSDKType {
    name: string;
    owner: string;
}
export interface EventNameBought {
    name: string;
    buyer: string;
}
export interface EventNameBoughtSDKType {
    name: string;
    buyer: string;
}
export interface EventNameTransferred {
    name: string;
    owner: string;
    recipient: string;
}
export interface EventNameTransferredSDKType {
    name: string;
    owner: string;
    recipient: string;
}
export interface EventNameRenewed {
    name: string;
    owner: string;
}
export interface EventNameRenewedSDKType {
    name: string;
    owner: string;
}
export interface EventNameAddThread {
    name: string;
    owner: string;
}
export interface EventNameAddThreadSDKType {
    name: string;
    owner: string;
}
export interface EventNameRemoveThread {
    name: string;
    owner: string;
}
export interface EventNameRemoveThreadSDKType {
    name: string;
    owner: string;
}
export declare const EventNameExpired: {
    encode(message: EventNameExpired, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNameExpired;
    fromPartial(object: DeepPartial<EventNameExpired>): EventNameExpired;
};
export declare const EventNameListed: {
    encode(message: EventNameListed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNameListed;
    fromPartial(object: DeepPartial<EventNameListed>): EventNameListed;
};
export declare const EventNameListingCanceled: {
    encode(message: EventNameListingCanceled, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNameListingCanceled;
    fromPartial(object: DeepPartial<EventNameListingCanceled>): EventNameListingCanceled;
};
export declare const EventNameUnlisted: {
    encode(message: EventNameUnlisted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNameUnlisted;
    fromPartial(object: DeepPartial<EventNameUnlisted>): EventNameUnlisted;
};
export declare const EventNameBought: {
    encode(message: EventNameBought, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNameBought;
    fromPartial(object: DeepPartial<EventNameBought>): EventNameBought;
};
export declare const EventNameTransferred: {
    encode(message: EventNameTransferred, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNameTransferred;
    fromPartial(object: DeepPartial<EventNameTransferred>): EventNameTransferred;
};
export declare const EventNameRenewed: {
    encode(message: EventNameRenewed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNameRenewed;
    fromPartial(object: DeepPartial<EventNameRenewed>): EventNameRenewed;
};
export declare const EventNameAddThread: {
    encode(message: EventNameAddThread, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNameAddThread;
    fromPartial(object: DeepPartial<EventNameAddThread>): EventNameAddThread;
};
export declare const EventNameRemoveThread: {
    encode(message: EventNameRemoveThread, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNameRemoveThread;
    fromPartial(object: DeepPartial<EventNameRemoveThread>): EventNameRemoveThread;
};
