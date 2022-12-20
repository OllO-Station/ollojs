import { Params, ParamsSDKType } from "./params";
import { Loans, LoansSDKType } from "./loans";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the loan module's genesis state. */
export interface GenesisState {
    params?: Params;
    portId: string;
    loansList: Loans[];
    loansCount: Long;
}
/** GenesisState defines the loan module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    port_id: string;
    loansList: LoansSDKType[];
    loansCount: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
