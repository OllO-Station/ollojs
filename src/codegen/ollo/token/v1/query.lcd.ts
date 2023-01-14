import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryTokenRequest, QueryTokenResponseSDKType, QueryTokensRequest, QueryTokensResponseSDKType, QueryFeesRequest, QueryFeesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryBurnRequest, QueryBurnResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.token = this.token.bind(this);
    this.tokens = this.tokens.bind(this);
    this.fees = this.fees.bind(this);
    this.params = this.params.bind(this);
    this.burn = this.burn.bind(this);
  }
  /* Query token returns token info given denom */


  async token(params: QueryTokenRequest): Promise<QueryTokenResponseSDKType> {
    const endpoint = `ollo/token/v1/tokens/${params.denom}`;
    return await this.req.get<QueryTokenResponseSDKType>(endpoint);
  }
  /* Tokens endpoint returns the list of all defined tokens */


  async tokens(params: QueryTokensRequest): Promise<QueryTokensResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/token/v1/tokens`;
    return await this.req.get<QueryTokensResponseSDKType>(endpoint, options);
  }
  /* Fee returns the fees to issue or mint a token */


  async fees(params: QueryFeesRequest): Promise<QueryFeesResponseSDKType> {
    const endpoint = `ollo/token/v1/tokens/${params.denom}/fees`;
    return await this.req.get<QueryFeesResponseSDKType>(endpoint);
  }
  /* Params returns the token module parameters */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/token/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Burn endpoint returns all coins that have been burned */


  async burn(_params: QueryBurnRequest = {}): Promise<QueryBurnResponseSDKType> {
    const endpoint = `ollo/token/v1/burn`;
    return await this.req.get<QueryBurnResponseSDKType>(endpoint);
  }

}