import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface MsgCreateIcq {
    index: string;
}
export interface MsgCreateIcqSDKType {
    index: string;
}
export declare const MsgCreateIcq: {
    encode(message: MsgCreateIcq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIcq;
    fromPartial(object: DeepPartial<MsgCreateIcq>): MsgCreateIcq;
};
