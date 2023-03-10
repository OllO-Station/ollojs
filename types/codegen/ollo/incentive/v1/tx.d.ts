import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
export interface MsgApplyMarketMaker {
    address: string;
    pairIds: Long[];
}
export interface MsgApplyMarketMakerSDKType {
    address: string;
    pair_ids: Long[];
}
export interface MsgApplyMarketMakerResponse {
}
export interface MsgApplyMarketMakerResponseSDKType {
}
export interface MsgClaimIncentive {
    address: string;
}
export interface MsgClaimIncentiveSDKType {
    address: string;
}
export interface MsgClaimIncentiveResponse {
}
export interface MsgClaimIncentiveResponseSDKType {
}
export declare const MsgApplyMarketMaker: {
    encode(message: MsgApplyMarketMaker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgApplyMarketMaker;
    fromPartial(object: DeepPartial<MsgApplyMarketMaker>): MsgApplyMarketMaker;
};
export declare const MsgApplyMarketMakerResponse: {
    encode(_: MsgApplyMarketMakerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgApplyMarketMakerResponse;
    fromPartial(_: DeepPartial<MsgApplyMarketMakerResponse>): MsgApplyMarketMakerResponse;
};
export declare const MsgClaimIncentive: {
    encode(message: MsgClaimIncentive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimIncentive;
    fromPartial(object: DeepPartial<MsgClaimIncentive>): MsgClaimIncentive;
};
export declare const MsgClaimIncentiveResponse: {
    encode(_: MsgClaimIncentiveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimIncentiveResponse;
    fromPartial(_: DeepPartial<MsgClaimIncentiveResponse>): MsgClaimIncentiveResponse;
};
