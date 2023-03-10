import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryEmissionRequest, QueryEmissionResponseSDKType, QueryAllEmissionsRequest, QueryAllEmissionsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.queryEmission = this.queryEmission.bind(this);
    this.queryAllEmissions = this.queryAllEmissions.bind(this);
  }
  /* QueryEmission */


  async queryEmission(params: QueryEmissionRequest): Promise<QueryEmissionResponseSDKType> {
    const endpoint = `ollo/emissions/v1/emissionss/${params.id}`;
    return await this.req.get<QueryEmissionResponseSDKType>(endpoint);
  }
  /* QueryAllEmissions */


  async queryAllEmissions(params: QueryAllEmissionsRequest = {
    pagination: undefined
  }): Promise<QueryAllEmissionsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/emissions/v1/emissionss`;
    return await this.req.get<QueryAllEmissionsResponseSDKType>(endpoint, options);
  }

}