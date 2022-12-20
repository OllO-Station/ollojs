import { AminoMsg } from "@cosmjs/amino";
import { MsgClaim } from "./tx";
export interface AminoMsgClaim extends AminoMsg {
    type: "/ollo.claim.MsgClaim";
    value: {
        airdrop_id: string;
        recipient: string;
        condition_type: number;
    };
}
export declare const AminoConverter: {
    "/ollo.claim.MsgClaim": {
        aminoType: string;
        toAmino: ({ airdropId, recipient, conditionType }: MsgClaim) => AminoMsgClaim["value"];
        fromAmino: ({ airdrop_id, recipient, condition_type }: AminoMsgClaim["value"]) => MsgClaim;
    };
};
