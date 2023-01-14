import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface DenomWhitelist {
    denom: string;
    /** repeat */
    addresses: string[];
}
export interface DenomWhitelistSDKType {
    denom: string;
    addresses: string[];
}
export declare const DenomWhitelist: {
    encode(message: DenomWhitelist, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomWhitelist;
    fromPartial(object: DeepPartial<DenomWhitelist>): DenomWhitelist;
};
