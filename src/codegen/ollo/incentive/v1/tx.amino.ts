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
export const AminoConverter = {
  "/ollo.incentive.v1.MsgApplyMarketMaker": {
    aminoType: "/ollo.incentive.v1.MsgApplyMarketMaker",
    toAmino: ({
      address,
      pairIds
    }: MsgApplyMarketMaker): AminoMsgApplyMarketMaker["value"] => {
      return {
        address,
        pair_ids: pairIds.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      address,
      pair_ids
    }: AminoMsgApplyMarketMaker["value"]): MsgApplyMarketMaker => {
      return {
        address,
        pairIds: pair_ids.map(el0 => Long.fromString(el0))
      };
    }
  },
  "/ollo.incentive.v1.MsgClaimIncentive": {
    aminoType: "/ollo.incentive.v1.MsgClaimIncentive",
    toAmino: ({
      address
    }: MsgClaimIncentive): AminoMsgClaimIncentive["value"] => {
      return {
        address
      };
    },
    fromAmino: ({
      address
    }: AminoMsgClaimIncentive["value"]): MsgClaimIncentive => {
      return {
        address
      };
    }
  }
};