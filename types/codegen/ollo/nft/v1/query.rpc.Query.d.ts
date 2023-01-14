import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QuerySupplyRequest, QuerySupplyResponse, QueryNFTsOfOwnerRequest, QueryNFTsOfOwnerResponse, QueryCollectionRequest, QueryCollectionResponse, QueryDenomRequest, QueryDenomResponse, QueryDenomsRequest, QueryDenomsResponse, QueryNFTRequest, QueryNFTResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service for NFT module */
export interface Query {
    /** Supply queries the total supply of a given denom or owner */
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    /** NFTsOfOwner queries the NFTs of the specified owner */
    nFTsOfOwner(request: QueryNFTsOfOwnerRequest): Promise<QueryNFTsOfOwnerResponse>;
    /** Collection queries the NFTs of the specified denom */
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    /** Denom queries the definition of a given denom */
    denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
    /** Denoms queries all the denoms */
    denoms(request?: QueryDenomsRequest): Promise<QueryDenomsResponse>;
    /** NFT queries the NFT for the given denom and token ID */
    nFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    nFTsOfOwner(request: QueryNFTsOfOwnerRequest): Promise<QueryNFTsOfOwnerResponse>;
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
    denoms(request?: QueryDenomsRequest): Promise<QueryDenomsResponse>;
    nFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    nFTsOfOwner(request: QueryNFTsOfOwnerRequest): Promise<QueryNFTsOfOwnerResponse>;
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
    denoms(request?: QueryDenomsRequest): Promise<QueryDenomsResponse>;
    nFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
