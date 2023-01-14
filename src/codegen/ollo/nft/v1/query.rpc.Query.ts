import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.supply = this.supply.bind(this);
    this.nFTsOfOwner = this.nFTsOfOwner.bind(this);
    this.collection = this.collection.bind(this);
    this.denom = this.denom.bind(this);
    this.denoms = this.denoms.bind(this);
    this.nFT = this.nFT.bind(this);
    this.params = this.params.bind(this);
  }

  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.nft.v1.Query", "Supply", data);
    return promise.then(data => QuerySupplyResponse.decode(new _m0.Reader(data)));
  }

  nFTsOfOwner(request: QueryNFTsOfOwnerRequest): Promise<QueryNFTsOfOwnerResponse> {
    const data = QueryNFTsOfOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.nft.v1.Query", "NFTsOfOwner", data);
    return promise.then(data => QueryNFTsOfOwnerResponse.decode(new _m0.Reader(data)));
  }

  collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse> {
    const data = QueryCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.nft.v1.Query", "Collection", data);
    return promise.then(data => QueryCollectionResponse.decode(new _m0.Reader(data)));
  }

  denom(request: QueryDenomRequest): Promise<QueryDenomResponse> {
    const data = QueryDenomRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.nft.v1.Query", "Denom", data);
    return promise.then(data => QueryDenomResponse.decode(new _m0.Reader(data)));
  }

  denoms(request: QueryDenomsRequest = {
    pagination: undefined
  }): Promise<QueryDenomsResponse> {
    const data = QueryDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.nft.v1.Query", "Denoms", data);
    return promise.then(data => QueryDenomsResponse.decode(new _m0.Reader(data)));
  }

  nFT(request: QueryNFTRequest): Promise<QueryNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.nft.v1.Query", "NFT", data);
    return promise.then(data => QueryNFTResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.nft.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
      return queryService.supply(request);
    },

    nFTsOfOwner(request: QueryNFTsOfOwnerRequest): Promise<QueryNFTsOfOwnerResponse> {
      return queryService.nFTsOfOwner(request);
    },

    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse> {
      return queryService.collection(request);
    },

    denom(request: QueryDenomRequest): Promise<QueryDenomResponse> {
      return queryService.denom(request);
    },

    denoms(request?: QueryDenomsRequest): Promise<QueryDenomsResponse> {
      return queryService.denoms(request);
    },

    nFT(request: QueryNFTRequest): Promise<QueryNFTResponse> {
      return queryService.nFT(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }

  };
};