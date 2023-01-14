import { LCDClient } from "@osmonauts/lcd";
import { QuerySupplyRequest, QuerySupplyResponseSDKType, QueryNFTsOfOwnerRequest, QueryNFTsOfOwnerResponseSDKType, QueryCollectionRequest, QueryCollectionResponseSDKType, QueryDenomRequest, QueryDenomResponseSDKType, QueryDenomsRequest, QueryDenomsResponseSDKType, QueryNFTRequest, QueryNFTResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    supply(params: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType>;
    nFTsOfOwner(params: QueryNFTsOfOwnerRequest): Promise<QueryNFTsOfOwnerResponseSDKType>;
    collection(params: QueryCollectionRequest): Promise<QueryCollectionResponseSDKType>;
    denom(params: QueryDenomRequest): Promise<QueryDenomResponseSDKType>;
    denoms(params?: QueryDenomsRequest): Promise<QueryDenomsResponseSDKType>;
    nFT(params: QueryNFTRequest): Promise<QueryNFTResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
