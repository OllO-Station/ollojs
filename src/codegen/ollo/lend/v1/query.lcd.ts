import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetLoanRequest, QueryGetLoanResponseSDKType, QueryAllLoanRequest, QueryAllLoanResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.loan = this.loan.bind(this);
    this.loanAll = this.loanAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/lend/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Loan items. */


  async loan(params: QueryGetLoanRequest): Promise<QueryGetLoanResponseSDKType> {
    const endpoint = `ollo/lend/v1/loan/${params.id}`;
    return await this.req.get<QueryGetLoanResponseSDKType>(endpoint);
  }
  /* LoanAll */


  async loanAll(params: QueryAllLoanRequest = {
    pagination: undefined
  }): Promise<QueryAllLoanResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/lend/v1/loan`;
    return await this.req.get<QueryAllLoanResponseSDKType>(endpoint, options);
  }

}