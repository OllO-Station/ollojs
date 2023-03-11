import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface NameListing {
    name: string;
    owner: string;
    price: string;
}
export interface NameListingSDKType {
    name: string;
    owner: string;
    price: string;
}
export interface NameListingBid {
    id: string;
    name: string;
    bidder: string;
    price: string;
}
export interface NameListingBidSDKType {
    id: string;
    name: string;
    bidder: string;
    price: string;
}
export declare const NameListing: {
    encode(message: NameListing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NameListing;
    fromPartial(object: DeepPartial<NameListing>): NameListing;
};
export declare const NameListingBid: {
    encode(message: NameListingBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NameListingBid;
    fromPartial(object: DeepPartial<NameListingBid>): NameListingBid;
};
