import { MarketMakerIncl, MarketMakerInclSDKType } from "./mm";
import { IncentiveDistribution, IncentiveDistributionSDKType } from "./incentive";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface MarketMakerProposal {
    title: string;
    description: string;
    inclusions: MarketMakerIncl[];
    exclusions: MarketMakerIncl[];
    rejections: MarketMakerIncl[];
    distributions: IncentiveDistribution[];
}
export interface MarketMakerProposalSDKType {
    title: string;
    description: string;
    inclusions: MarketMakerInclSDKType[];
    exclusions: MarketMakerInclSDKType[];
    rejections: MarketMakerInclSDKType[];
    distributions: IncentiveDistributionSDKType[];
}
export declare const MarketMakerProposal: {
    encode(message: MarketMakerProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketMakerProposal;
    fromPartial(object: DeepPartial<MarketMakerProposal>): MarketMakerProposal;
};
