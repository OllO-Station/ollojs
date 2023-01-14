import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QuerySupplyRequest, QuerySupplyResponseSDKType, QueryNFTsOfOwnerRequest, QueryNFTsOfOwnerResponseSDKType, QueryCollectionRequest, QueryCollectionResponseSDKType, QueryDenomRequest, QueryDenomResponseSDKType, QueryDenomsRequest, QueryDenomsResponseSDKType, QueryNFTRequest, QueryNFTResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.supply = this.supply.bind(this);
    this.nFTsOfOwner = this.nFTsOfOwner.bind(this);
    this.collection = this.collection.bind(this);
    this.denom = this.denom.bind(this);
    this.denoms = this.denoms.bind(this);
    this.nFT = this.nFT.bind(this);
    this.params = this.params.bind(this);
  }
  /* Supply queries the total supply of a given denom or owner */


  async supply(params: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }

    const endpoint = `ollo/nft/v1/collections/${params.denomId}/supply`;
    return await this.req.get<QuerySupplyResponseSDKType>(endpoint, options);
  }
  /* NFTsOfOwner queries the NFTs of the specified owner */


  async nFTsOfOwner(params: QueryNFTsOfOwnerRequest): Promise<QueryNFTsOfOwnerResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denomId !== "undefined") {
      options.params.denom_id = params.denomId;
    }

    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/nft/v1/nfts`;
    return await this.req.get<QueryNFTsOfOwnerResponseSDKType>(endpoint, options);
  }
  /* Collection queries the NFTs of the specified denom */


  async collection(params: QueryCollectionRequest): Promise<QueryCollectionResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/nft/v1/collections/${params.denomId}`;
    return await this.req.get<QueryCollectionResponseSDKType>(endpoint, options);
  }
  /* Denom queries the definition of a given denom */


  async denom(params: QueryDenomRequest): Promise<QueryDenomResponseSDKType> {
    const endpoint = `ollo/nft/v1/denoms/${params.denomId}`;
    return await this.req.get<QueryDenomResponseSDKType>(endpoint);
  }
  /* Denoms queries all the denoms */


  async denoms(params: QueryDenomsRequest = {
    pagination: undefined
  }): Promise<QueryDenomsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/nft/v1/denoms`;
    return await this.req.get<QueryDenomsResponseSDKType>(endpoint, options);
  }
  /* NFT queries the NFT for the given denom and token ID */


  async nFT(params: QueryNFTRequest): Promise<QueryNFTResponseSDKType> {
    const endpoint = `ollo/nft/v1/nfts/${params.denomId}/${params.tokenId}`;
    return await this.req.get<QueryNFTResponseSDKType>(endpoint);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/nft/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }

}