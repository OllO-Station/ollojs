import { FeeToken, FeeTokenSDKType } from "./fees";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface ProposalSetFeeToken {
    title: string;
    description: string;
    feeToken?: FeeToken;
}
export interface ProposalSetFeeTokenSDKType {
    title: string;
    description: string;
    fee_token?: FeeTokenSDKType;
}
export declare const ProposalSetFeeToken: {
    encode(message: ProposalSetFeeToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProposalSetFeeToken;
    fromPartial(object: DeepPartial<ProposalSetFeeToken>): ProposalSetFeeToken;
};
