import { LCDClient } from "@osmonauts/lcd";
import { QueryFeeTokensRequest, QueryFeeTokensResponseSDKType, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponseSDKType, QueryDenomPoolIdRequest, QueryDenomPoolIdResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.feeTokens = this.feeTokens.bind(this);
    this.denomSpotPrice = this.denomSpotPrice.bind(this);
    this.denomPoolId = this.denomPoolId.bind(this);
    this.baseDenom = this.baseDenom.bind(this);
  }
  /*  */


  async feeTokens(_params: QueryFeeTokensRequest = {}): Promise<QueryFeeTokensResponseSDKType> {
    const endpoint = `ollo/fees/v1/feetokens`;
    return await this.req.get<QueryFeeTokensResponseSDKType>(endpoint);
  }
  /*  */


  async denomSpotPrice(params: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponseSDKType> {
    const endpoint = `ollo/fees/v1/spot_price/${params.denom}`;
    return await this.req.get<QueryDenomSpotPriceResponseSDKType>(endpoint);
  }
  /*  */


  async denomPoolId(params: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponseSDKType> {
    const endpoint = `ollo/fees/v1/pool_id/${params.denom}`;
    return await this.req.get<QueryDenomPoolIdResponseSDKType>(endpoint);
  }
  /*  */


  async baseDenom(_params: QueryBaseDenomRequest = {}): Promise<QueryBaseDenomResponseSDKType> {
    const endpoint = `ollo/fees/v1/base_denom`;
    return await this.req.get<QueryBaseDenomResponseSDKType>(endpoint);
  }

}