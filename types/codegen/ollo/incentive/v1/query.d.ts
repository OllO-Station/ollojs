import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { MarketMaker, MarketMakerSDKType } from "./mm";
import { Incentive, IncentiveSDKType } from "./incentive";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryMarketMakersRequest {
    address: string;
    pairId: Long;
    eligible: string;
    pagination?: PageRequest;
}
export interface QueryMarketMakersRequestSDKType {
    address: string;
    pair_id: Long;
    eligible: string;
    pagination?: PageRequestSDKType;
}
export interface QueryMarketMakersResponse {
    marketMakers: MarketMaker[];
    pagination?: PageResponse;
}
export interface QueryMarketMakersResponseSDKType {
    market_makers: MarketMakerSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryIncentiveRequest {
    address: string;
}
export interface QueryIncentiveRequestSDKType {
    address: string;
}
export interface QueryIncentiveResponse {
    incentive?: Incentive;
}
export interface QueryIncentiveResponseSDKType {
    incentive?: IncentiveSDKType;
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
export declare const QueryMarketMakersRequest: {
    encode(message: QueryMarketMakersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketMakersRequest;
    fromPartial(object: DeepPartial<QueryMarketMakersRequest>): QueryMarketMakersRequest;
};
export declare const QueryMarketMakersResponse: {
    encode(message: QueryMarketMakersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketMakersResponse;
    fromPartial(object: DeepPartial<QueryMarketMakersResponse>): QueryMarketMakersResponse;
};
export declare const QueryIncentiveRequest: {
    encode(message: QueryIncentiveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentiveRequest;
    fromPartial(object: DeepPartial<QueryIncentiveRequest>): QueryIncentiveRequest;
};
export declare const QueryIncentiveResponse: {
    encode(message: QueryIncentiveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentiveResponse;
    fromPartial(object: DeepPartial<QueryIncentiveResponse>): QueryIncentiveResponse;
};
