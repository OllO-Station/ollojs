import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetWhoisRequest, QueryGetWhoisResponseSDKType, QueryAllWhoisRequest, QueryAllWhoisResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.whois = this.whois.bind(this);
    this.whoisAll = this.whoisAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/ons/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a Whois by index. */


  async whois(params: QueryGetWhoisRequest): Promise<QueryGetWhoisResponseSDKType> {
    const endpoint = `ollo/ons/v1/whois/${params.index}`;
    return await this.req.get<QueryGetWhoisResponseSDKType>(endpoint);
  }
  /* Queries a list of Whois items. */


  async whoisAll(params: QueryAllWhoisRequest = {
    pagination: undefined
  }): Promise<QueryAllWhoisResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/ons/v1/whois`;
    return await this.req.get<QueryAllWhoisResponseSDKType>(endpoint, options);
  }

}