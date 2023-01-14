import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetLoansRequest, QueryGetLoansResponseSDKType, QueryAllLoansRequest, QueryAllLoansResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.loans = this.loans.bind(this);
    this.loansAll = this.loansAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/loan/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a Loans by id. */


  async loans(params: QueryGetLoansRequest): Promise<QueryGetLoansResponseSDKType> {
    const endpoint = `ollo/loan/v1/loans/${params.id}`;
    return await this.req.get<QueryGetLoansResponseSDKType>(endpoint);
  }
  /* Queries a list of Loans items. */


  async loansAll(params: QueryAllLoansRequest = {
    pagination: undefined
  }): Promise<QueryAllLoansResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/loan/v1/loans`;
    return await this.req.get<QueryAllLoansResponseSDKType>(endpoint, options);
  }

}