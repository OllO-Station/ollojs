import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Token, TokenSDKType } from "./token";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventIssueToken {
    denom: string;
    creator: string;
}
export interface EventIssueTokenSDKType {
    denom: string;
    creator: string;
}
export interface EventMintToken {
    creator: string;
    amount?: Coin;
}
export interface EventMintTokenSDKType {
    creator: string;
    amount?: CoinSDKType;
}
export interface EventBurnToken {
    creator: string;
    amount?: Coin;
}
export interface EventBurnTokenSDKType {
    creator: string;
    amount?: CoinSDKType;
}
export interface EventEditToken {
    denom: string;
    creator: string;
    newTokenInfo?: Token;
}
export interface EventEditTokenSDKType {
    denom: string;
    creator: string;
    new_token_info?: TokenSDKType;
}
export interface EventTransferTokenOwner {
    denom: string;
    oldOwner: string;
    newOwner: string;
}
export interface EventTransferTokenOwnerSDKType {
    denom: string;
    old_owner: string;
    new_owner: string;
}
export declare const EventIssueToken: {
    encode(message: EventIssueToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventIssueToken;
    fromPartial(object: DeepPartial<EventIssueToken>): EventIssueToken;
};
export declare const EventMintToken: {
    encode(message: EventMintToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMintToken;
    fromPartial(object: DeepPartial<EventMintToken>): EventMintToken;
};
export declare const EventBurnToken: {
    encode(message: EventBurnToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnToken;
    fromPartial(object: DeepPartial<EventBurnToken>): EventBurnToken;
};
export declare const EventEditToken: {
    encode(message: EventEditToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventEditToken;
    fromPartial(object: DeepPartial<EventEditToken>): EventEditToken;
};
export declare const EventTransferTokenOwner: {
    encode(message: EventTransferTokenOwner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTransferTokenOwner;
    fromPartial(object: DeepPartial<EventTransferTokenOwner>): EventTransferTokenOwner;
};
