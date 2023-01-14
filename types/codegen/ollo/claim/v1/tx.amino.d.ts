import { AminoMsg } from "@cosmjs/amino";
import { MsgClaim } from "./tx";
export interface AminoMsgClaim extends AminoMsg {
    type: "/ollo.claim.v1.MsgClaim";
    value: {
        claimer: string;
        goal_id: string;
    };
}
export declare const AminoConverter: {
    "/ollo.claim.v1.MsgClaim": {
        aminoType: string;
        toAmino: ({ claimer, goalId }: MsgClaim) => AminoMsgClaim["value"];
        fromAmino: ({ claimer, goal_id }: AminoMsgClaim["value"]) => MsgClaim;
    };
};
