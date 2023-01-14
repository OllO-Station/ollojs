import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgClaim } from "./tx";
export interface AminoMsgClaim extends AminoMsg {
  type: "/ollo.claim.v1.MsgClaim";
  value: {
    claimer: string;
    goal_id: string;
  };
}
export const AminoConverter = {
  "/ollo.claim.v1.MsgClaim": {
    aminoType: "/ollo.claim.v1.MsgClaim",
    toAmino: ({
      claimer,
      goalId
    }: MsgClaim): AminoMsgClaim["value"] => {
      return {
        claimer,
        goal_id: goalId.toString()
      };
    },
    fromAmino: ({
      claimer,
      goal_id
    }: AminoMsgClaim["value"]): MsgClaim => {
      return {
        claimer,
        goalId: Long.fromString(goal_id)
      };
    }
  }
};