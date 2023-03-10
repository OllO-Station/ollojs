import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface Params {
    contractAddress: string;
}
export interface ParamsSDKType {
    contract_address: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
