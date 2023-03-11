import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryInterchainAccountAddressRequest, QueryInterchainAccountAddressResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.interchainAccountAddress = this.interchainAccountAddress.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `chainmain/icaauth/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* InterchainAccountAddress queries the interchain account address for given `connectionId` and `owner` */


  async interchainAccountAddress(params: QueryInterchainAccountAddressRequest): Promise<QueryInterchainAccountAddressResponseSDKType> {
    const endpoint = `chainmain/icaauth/v1/interchain_account_address/${params.connectionId}/${params.owner}`;
    return await this.req.get<QueryInterchainAccountAddressResponseSDKType>(endpoint);
  }

}