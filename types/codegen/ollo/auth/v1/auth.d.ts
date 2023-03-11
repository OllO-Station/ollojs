import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface Account {
}
export interface AccountSDKType {
}
export declare const Account: {
    encode(_: Account, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Account;
    fromPartial(_: DeepPartial<Account>): Account;
};
