import { conditionTypeFromJSON } from "./claim";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgClaim } from "./tx";
export interface AminoMsgClaim extends AminoMsg {
  type: "/ollo.claim.MsgClaim";
  value: {
    airdrop_id: string;
    recipient: string;
    condition_type: number;
  };
}
export const AminoConverter = {
  "/ollo.claim.MsgClaim": {
    aminoType: "/ollo.claim.MsgClaim",
    toAmino: ({
      airdropId,
      recipient,
      conditionType
    }: MsgClaim): AminoMsgClaim["value"] => {
      return {
        airdrop_id: airdropId.toString(),
        recipient,
        condition_type: conditionType
      };
    },
    fromAmino: ({
      airdrop_id,
      recipient,
      condition_type
    }: AminoMsgClaim["value"]): MsgClaim => {
      return {
        airdropId: Long.fromString(airdrop_id),
        recipient,
        conditionType: conditionTypeFromJSON(condition_type)
      };
    }
  }
};