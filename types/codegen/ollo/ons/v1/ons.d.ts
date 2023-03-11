import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export declare enum NameStatus {
    NAME_STATUS_UNSPECIFIED = 0,
    NAME_STATUS_CLAIMED_INACTIVE = 1,
    NAME_STATUS_CLAIMED_ACTIVE = 2,
    NAME_STATUS_UNCLAIMED = 3,
    NAME_STATUS_LISTED = 4,
    NAME_STATUS_DISABLED = 5,
    UNRECOGNIZED = -1
}
export declare const NameStatusSDKType: typeof NameStatus;
export declare function nameStatusFromJSON(object: any): NameStatus;
export declare function nameStatusToJSON(object: NameStatus): string;
export interface Name {
    name: string;
    value: string;
    metadata: string;
    threads: Name[];
    owner: string;
    status: NameStatus;
    expiry?: Date;
}
export interface NameSDKType {
    name: string;
    value: string;
    metadata: string;
    threads: NameSDKType[];
    owner: string;
    status: NameStatus;
    expiry?: Date;
}
export declare const Name: {
    encode(message: Name, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Name;
    fromPartial(object: DeepPartial<Name>): Name;
};
