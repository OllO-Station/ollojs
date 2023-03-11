import { Params, ParamsSDKType } from "./params";
import { Loan, LoanSDKType } from "./loan";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the lend module's genesis state. */
export interface GenesisState {
    params?: Params;
    loanList: Loan[];
    loanCount: Long;
}
/** GenesisState defines the lend module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    loanList: LoanSDKType[];
    loanCount: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
