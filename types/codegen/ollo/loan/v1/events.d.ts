import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventLoanCreated {
}
export interface EventLoanCreatedSDKType {
}
export interface EventLoanLiquidated {
}
export interface EventLoanLiquidatedSDKType {
}
export interface EventLoanRepaid {
}
export interface EventLoanRepaidSDKType {
}
export declare const EventLoanCreated: {
    encode(_: EventLoanCreated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventLoanCreated;
    fromPartial(_: DeepPartial<EventLoanCreated>): EventLoanCreated;
};
export declare const EventLoanLiquidated: {
    encode(_: EventLoanLiquidated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventLoanLiquidated;
    fromPartial(_: DeepPartial<EventLoanLiquidated>): EventLoanLiquidated;
};
export declare const EventLoanRepaid: {
    encode(_: EventLoanRepaid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventLoanRepaid;
    fromPartial(_: DeepPartial<EventLoanRepaid>): EventLoanRepaid;
};
