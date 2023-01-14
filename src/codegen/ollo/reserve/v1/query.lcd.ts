import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetDenomsRequest, QueryGetDenomsResponseSDKType, QueryGetDenomRequest, QueryGetDenomResponseSDKType, QueryGetDenomWhitelistRequest, QueryGetDenomWhitelistResponseSDKType, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.getDenoms = this.getDenoms.bind(this);
    this.getDenom = this.getDenom.bind(this);
    this.getDenomWhitelist = this.getDenomWhitelist.bind(this);
    this.denomsFromCreator = this.denomsFromCreator.bind(this);
  }
  /* Params defines a gRPC query method that returns the tokenfactory module's
   parameters. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/reserve/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* GetDenoms returns all denoms under reserve */


  async getDenoms(_params: QueryGetDenomsRequest = {}): Promise<QueryGetDenomsResponseSDKType> {
    const endpoint = `ollo/reserve/v1/denoms`;
    return await this.req.get<QueryGetDenomsResponseSDKType>(endpoint);
  }
  /* GetDenom returns info and metadata about a specific reserve denom */


  async getDenom(params: QueryGetDenomRequest): Promise<QueryGetDenomResponseSDKType> {
    const endpoint = `ollo/reserve/v1/denoms/${params.denom}`;
    return await this.req.get<QueryGetDenomResponseSDKType>(endpoint);
  }
  /* DenomWhitelist.g defines a gRPC query method for fetching
   DenomWhitelist.g for a particular denom. */


  async getDenomWhitelist(params: QueryGetDenomWhitelistRequest): Promise<QueryGetDenomWhitelistResponseSDKType> {
    const endpoint = `ollo/reserve/v1/denoms/${params.denom}/whitelist`;
    return await this.req.get<QueryGetDenomWhitelistResponseSDKType>(endpoint);
  }
  /* DenomsFromCreator defines a gRPC query method for fetching all
   denominations created by a specific admin/creator. */


  async denomsFromCreator(params: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponseSDKType> {
    const endpoint = `ollo/reserve/v1/creator/${params.creator}`;
    return await this.req.get<QueryDenomsFromCreatorResponseSDKType>(endpoint);
  }

}