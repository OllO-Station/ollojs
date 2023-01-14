import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface LoanPacketData {
    noData?: NoData;
}
export interface LoanPacketDataSDKType {
    no_data?: NoDataSDKType;
}
export interface NoData {
}
export interface NoDataSDKType {
}
export declare const LoanPacketData: {
    encode(message: LoanPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoanPacketData;
    fromPartial(object: DeepPartial<LoanPacketData>): LoanPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoData;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
