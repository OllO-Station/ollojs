import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { BandPricesResult, BandPricesResultSDKType } from "./band";
import { MsgFeed, MsgFeedSDKType, MsgAccount, MsgAccountSDKType } from "./tx";
import { MsgModuleOwner, MsgModuleOwnerSDKType, OCRAbiEncoded, OCRAbiEncodedSDKType } from "./prices";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryBandPricesRequest {
    requestId: Long;
}
export interface QueryBandPricesRequestSDKType {
    request_id: Long;
}
export interface QueryBandPricesResponse {
    result?: BandPricesResult;
}
export interface QueryBandPricesResponseSDKType {
    result?: BandPricesResultSDKType;
}
export interface QueryLastBandPricesIdRequest {
}
export interface QueryLastBandPricesIdRequestSDKType {
}
export interface QueryLastBandPricesIdResponse {
    requestId: Long;
}
export interface QueryLastBandPricesIdResponseSDKType {
    request_id: Long;
}
export interface QueryFeedByIdRequest {
    feedId: string;
}
export interface QueryFeedByIdRequestSDKType {
    feedId: string;
}
export interface QueryFeedByIdResponse {
    feed?: MsgFeed;
}
export interface QueryFeedByIdResponseSDKType {
    feed?: MsgFeedSDKType;
}
export interface QueryModuleOwnerRequest {
}
export interface QueryModuleOwnerRequestSDKType {
}
export interface QueryModuleOwnerResponse {
    moduleOwner: MsgModuleOwner[];
}
export interface QueryModuleOwnerResponseSDKType {
    moduleOwner: MsgModuleOwnerSDKType[];
}
export interface QueryRoundDataRequest {
    feedId: string;
    roundId: Long;
    pagination?: PageRequest;
}
export interface QueryRoundDataRequestSDKType {
    feedId: string;
    roundId: Long;
    pagination?: PageRequestSDKType;
}
export interface QueryRoundDataResponse {
    roundData: RoundData[];
    pagination?: PageResponse;
}
export interface QueryRoundDataResponseSDKType {
    roundData: RoundDataSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryLatestRoundDataRequest {
    feedId: string;
}
export interface QueryLatestRoundDataRequestSDKType {
    feedId: string;
}
export interface QueryLatestRoundDataResponse {
    roundData: RoundData[];
}
export interface QueryLatestRoundDataResponseSDKType {
    roundData: RoundDataSDKType[];
}
export interface RoundData {
    feedId: string;
    feedData?: OCRAbiEncoded;
}
export interface RoundDataSDKType {
    feedId: string;
    feedData?: OCRAbiEncodedSDKType;
}
export interface QueryAccountRequest {
    accountAddress: Uint8Array;
}
export interface QueryAccountRequestSDKType {
    accountAddress: Uint8Array;
}
export interface QueryAccountResponse {
    account?: MsgAccount;
}
export interface QueryAccountResponseSDKType {
    account?: MsgAccountSDKType;
}
export interface QueryFeedRewardAvailStrategiesRequest {
}
export interface QueryFeedRewardAvailStrategiesRequestSDKType {
}
export interface QueryFeedRewardAvailStrategiesResponse {
    availStrategies: string[];
}
export interface QueryFeedRewardAvailStrategiesResponseSDKType {
    availStrategies: string[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryBandPricesRequest: {
    encode(message: QueryBandPricesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandPricesRequest;
    fromPartial(object: DeepPartial<QueryBandPricesRequest>): QueryBandPricesRequest;
};
export declare const QueryBandPricesResponse: {
    encode(message: QueryBandPricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandPricesResponse;
    fromPartial(object: DeepPartial<QueryBandPricesResponse>): QueryBandPricesResponse;
};
export declare const QueryLastBandPricesIdRequest: {
    encode(_: QueryLastBandPricesIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastBandPricesIdRequest;
    fromPartial(_: DeepPartial<QueryLastBandPricesIdRequest>): QueryLastBandPricesIdRequest;
};
export declare const QueryLastBandPricesIdResponse: {
    encode(message: QueryLastBandPricesIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastBandPricesIdResponse;
    fromPartial(object: DeepPartial<QueryLastBandPricesIdResponse>): QueryLastBandPricesIdResponse;
};
export declare const QueryFeedByIdRequest: {
    encode(message: QueryFeedByIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedByIdRequest;
    fromPartial(object: DeepPartial<QueryFeedByIdRequest>): QueryFeedByIdRequest;
};
export declare const QueryFeedByIdResponse: {
    encode(message: QueryFeedByIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedByIdResponse;
    fromPartial(object: DeepPartial<QueryFeedByIdResponse>): QueryFeedByIdResponse;
};
export declare const QueryModuleOwnerRequest: {
    encode(_: QueryModuleOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleOwnerRequest;
    fromPartial(_: DeepPartial<QueryModuleOwnerRequest>): QueryModuleOwnerRequest;
};
export declare const QueryModuleOwnerResponse: {
    encode(message: QueryModuleOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleOwnerResponse;
    fromPartial(object: DeepPartial<QueryModuleOwnerResponse>): QueryModuleOwnerResponse;
};
export declare const QueryRoundDataRequest: {
    encode(message: QueryRoundDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoundDataRequest;
    fromPartial(object: DeepPartial<QueryRoundDataRequest>): QueryRoundDataRequest;
};
export declare const QueryRoundDataResponse: {
    encode(message: QueryRoundDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoundDataResponse;
    fromPartial(object: DeepPartial<QueryRoundDataResponse>): QueryRoundDataResponse;
};
export declare const QueryLatestRoundDataRequest: {
    encode(message: QueryLatestRoundDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestRoundDataRequest;
    fromPartial(object: DeepPartial<QueryLatestRoundDataRequest>): QueryLatestRoundDataRequest;
};
export declare const QueryLatestRoundDataResponse: {
    encode(message: QueryLatestRoundDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestRoundDataResponse;
    fromPartial(object: DeepPartial<QueryLatestRoundDataResponse>): QueryLatestRoundDataResponse;
};
export declare const RoundData: {
    encode(message: RoundData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoundData;
    fromPartial(object: DeepPartial<RoundData>): RoundData;
};
export declare const QueryAccountRequest: {
    encode(message: QueryAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest;
    fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest;
};
export declare const QueryAccountResponse: {
    encode(message: QueryAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse;
    fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse;
};
export declare const QueryFeedRewardAvailStrategiesRequest: {
    encode(_: QueryFeedRewardAvailStrategiesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedRewardAvailStrategiesRequest;
    fromPartial(_: DeepPartial<QueryFeedRewardAvailStrategiesRequest>): QueryFeedRewardAvailStrategiesRequest;
};
export declare const QueryFeedRewardAvailStrategiesResponse: {
    encode(message: QueryFeedRewardAvailStrategiesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedRewardAvailStrategiesResponse;
    fromPartial(object: DeepPartial<QueryFeedRewardAvailStrategiesResponse>): QueryFeedRewardAvailStrategiesResponse;
};
