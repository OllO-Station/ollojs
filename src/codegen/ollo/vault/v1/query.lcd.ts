import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryVaultRequest, QueryVaultResponseSDKType, QueryAllVaultsRequest, QueryAllVaultsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.queryVault = this.queryVault.bind(this);
    this.queryAllVaults = this.queryAllVaults.bind(this);
  }
  /* QueryVault */


  async queryVault(params: QueryVaultRequest): Promise<QueryVaultResponseSDKType> {
    const endpoint = `ollo/vault/v1/vaults/${params.id}`;
    return await this.req.get<QueryVaultResponseSDKType>(endpoint);
  }
  /* QueryAllVaults */


  async queryAllVaults(params: QueryAllVaultsRequest = {
    pagination: undefined
  }): Promise<QueryAllVaultsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/vault/v1/vaults`;
    return await this.req.get<QueryAllVaultsResponseSDKType>(endpoint, options);
  }

}