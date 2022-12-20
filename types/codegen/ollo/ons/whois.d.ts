import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface Whois {
    index: string;
    name: string;
    value: string;
    price: string;
    ownerAddr: string;
}
export interface WhoisSDKType {
    index: string;
    name: string;
    value: string;
    price: string;
    ownerAddr: string;
}
export declare const Whois: {
    encode(message: Whois, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Whois;
    fromPartial(object: DeepPartial<Whois>): Whois;
};
