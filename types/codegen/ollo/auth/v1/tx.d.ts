import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** MsgRegisterAccount defines the request message for MsgRegisterAccount */
export interface MsgRegisterAccount {
    /** owner represents the owner of the interchain account */
    owner: string;
    /** connectionId represents the IBC `connectionId` of the host chain */
    connectionId: string;
    /** version represents the version of the ICA channel */
    version: string;
}
/** MsgRegisterAccount defines the request message for MsgRegisterAccount */
export interface MsgRegisterAccountSDKType {
    owner: string;
    connectionId: string;
    version: string;
}
/** MsgRegisterAccountResponse defines the response message for MsgRegisterAccount */
export interface MsgRegisterAccountResponse {
}
/** MsgRegisterAccountResponse defines the response message for MsgRegisterAccount */
export interface MsgRegisterAccountResponseSDKType {
}
/** MsgSubmitTx defines the request message for MsgSubmitTx */
export interface MsgSubmitTx {
    /** owner represents the owner of the interchain account */
    owner: string;
    /** connectionId represents the IBC `connectionId` of the host chain */
    connectionId: string;
    /** msgs represents the transactions to be submitted to the host chain */
    msgs: Any[];
    /** timeoutDuration represents the timeout duration for the IBC packet from last block */
    timeoutDuration?: Duration;
}
/** MsgSubmitTx defines the request message for MsgSubmitTx */
export interface MsgSubmitTxSDKType {
    owner: string;
    connectionId: string;
    msgs: AnySDKType[];
    timeoutDuration?: DurationSDKType;
}
/** MsgSubmitTxResponse defines the response message for MsgSubmitTx */
export interface MsgSubmitTxResponse {
}
/** MsgSubmitTxResponse defines the response message for MsgSubmitTx */
export interface MsgSubmitTxResponseSDKType {
}
export declare const MsgRegisterAccount: {
    encode(message: MsgRegisterAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAccount;
    fromPartial(object: DeepPartial<MsgRegisterAccount>): MsgRegisterAccount;
};
export declare const MsgRegisterAccountResponse: {
    encode(_: MsgRegisterAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAccountResponse;
    fromPartial(_: DeepPartial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse;
};
export declare const MsgSubmitTx: {
    encode(message: MsgSubmitTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitTx;
    fromPartial(object: DeepPartial<MsgSubmitTx>): MsgSubmitTx;
};
export declare const MsgSubmitTxResponse: {
    encode(_: MsgSubmitTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitTxResponse;
    fromPartial(_: DeepPartial<MsgSubmitTxResponse>): MsgSubmitTxResponse;
};
