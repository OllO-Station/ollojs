import { AminoMsg } from "@cosmjs/amino";
import { MsgApplyMarketMaker, MsgClaimIncentive } from "./tx";
export interface AminoMsgApplyMarketMaker extends AminoMsg {
    type: "/ollo.incentive.v1.MsgApplyMarketMaker";
    value: {
        address: string;
        pair_ids: string[];
    };
}
export interface AminoMsgClaimIncentive extends AminoMsg {
    type: "/ollo.incentive.v1.MsgClaimIncentive";
    value: {
        address: string;
    };
}
export declare const AminoConverter: {
    "/ollo.incentive.v1.MsgApplyMarketMaker": {
        aminoType: string;
        toAmino: ({ address, pairIds }: MsgApplyMarketMaker) => AminoMsgApplyMarketMaker["value"];
        fromAmino: ({ address, pair_ids }: AminoMsgApplyMarketMaker["value"]) => MsgApplyMarketMaker;
    };
    "/ollo.incentive.v1.MsgClaimIncentive": {
        aminoType: string;
        toAmino: ({ address }: MsgClaimIncentive) => AminoMsgClaimIncentive["value"];
        fromAmino: ({ address }: AminoMsgClaimIncentive["value"]) => MsgClaimIncentive;
    };
};
