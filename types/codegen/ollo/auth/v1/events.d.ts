import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventRegisterAccount {
}
export interface EventRegisterAccountSDKType {
}
export declare const EventRegisterAccount: {
    encode(_: EventRegisterAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRegisterAccount;
    fromPartial(_: DeepPartial<EventRegisterAccount>): EventRegisterAccount;
};
