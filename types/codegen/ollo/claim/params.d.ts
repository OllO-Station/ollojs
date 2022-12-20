import { Airdrop, AirdropSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
    airdrops: Airdrop[];
    claimRecords: ClaimRecord[];
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    airdrops: AirdropSDKType[];
    claim_records: ClaimRecordSDKType[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
