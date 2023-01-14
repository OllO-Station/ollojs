import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateFixedAmountPlan, MsgCreateRatioPlan, MsgStake, MsgUnstake, MsgHarvest, MsgRemovePlan, MsgAdvanceEpoch } from "./tx";
export interface AminoMsgCreateFixedAmountPlan extends AminoMsg {
  type: "/ollo.farming.v1.MsgCreateFixedAmountPlan";
  value: {
    name: string;
    creator: string;
    staking_coin_weights: {
      denom: string;
      amount: string;
    }[];
    start_time: {
      seconds: string;
      nanos: number;
    };
    end_time: {
      seconds: string;
      nanos: number;
    };
    epoch_amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgCreateRatioPlan extends AminoMsg {
  type: "/ollo.farming.v1.MsgCreateRatioPlan";
  value: {
    name: string;
    creator: string;
    staking_coin_weights: {
      denom: string;
      amount: string;
    }[];
    start_time: {
      seconds: string;
      nanos: number;
    };
    end_time: {
      seconds: string;
      nanos: number;
    };
    epoch_ratio: string;
  };
}
export interface AminoMsgStake extends AminoMsg {
  type: "/ollo.farming.v1.MsgStake";
  value: {
    farmer: string;
    staking_coins: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgUnstake extends AminoMsg {
  type: "/ollo.farming.v1.MsgUnstake";
  value: {
    farmer: string;
    unstaking_coins: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgHarvest extends AminoMsg {
  type: "/ollo.farming.v1.MsgHarvest";
  value: {
    farmer: string;
    staking_coin_denoms: string[];
  };
}
export interface AminoMsgRemovePlan extends AminoMsg {
  type: "/ollo.farming.v1.MsgRemovePlan";
  value: {
    creator: string;
    plan_id: string;
  };
}
export interface AminoMsgAdvanceEpoch extends AminoMsg {
  type: "/ollo.farming.v1.MsgAdvanceEpoch";
  value: {
    requester: string;
  };
}
export const AminoConverter = {
  "/ollo.farming.v1.MsgCreateFixedAmountPlan": {
    aminoType: "/ollo.farming.v1.MsgCreateFixedAmountPlan",
    toAmino: ({
      name,
      creator,
      stakingCoinWeights,
      startTime,
      endTime,
      epochAmount
    }: MsgCreateFixedAmountPlan): AminoMsgCreateFixedAmountPlan["value"] => {
      return {
        name,
        creator,
        staking_coin_weights: stakingCoinWeights.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        start_time: startTime,
        end_time: endTime,
        epoch_amount: epochAmount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      name,
      creator,
      staking_coin_weights,
      start_time,
      end_time,
      epoch_amount
    }: AminoMsgCreateFixedAmountPlan["value"]): MsgCreateFixedAmountPlan => {
      return {
        name,
        creator,
        stakingCoinWeights: staking_coin_weights.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        startTime: start_time,
        endTime: end_time,
        epochAmount: epoch_amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/ollo.farming.v1.MsgCreateRatioPlan": {
    aminoType: "/ollo.farming.v1.MsgCreateRatioPlan",
    toAmino: ({
      name,
      creator,
      stakingCoinWeights,
      startTime,
      endTime,
      epochRatio
    }: MsgCreateRatioPlan): AminoMsgCreateRatioPlan["value"] => {
      return {
        name,
        creator,
        staking_coin_weights: stakingCoinWeights.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        start_time: startTime,
        end_time: endTime,
        epoch_ratio: epochRatio
      };
    },
    fromAmino: ({
      name,
      creator,
      staking_coin_weights,
      start_time,
      end_time,
      epoch_ratio
    }: AminoMsgCreateRatioPlan["value"]): MsgCreateRatioPlan => {
      return {
        name,
        creator,
        stakingCoinWeights: staking_coin_weights.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        startTime: start_time,
        endTime: end_time,
        epochRatio: epoch_ratio
      };
    }
  },
  "/ollo.farming.v1.MsgStake": {
    aminoType: "/ollo.farming.v1.MsgStake",
    toAmino: ({
      farmer,
      stakingCoins
    }: MsgStake): AminoMsgStake["value"] => {
      return {
        farmer,
        staking_coins: stakingCoins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      farmer,
      staking_coins
    }: AminoMsgStake["value"]): MsgStake => {
      return {
        farmer,
        stakingCoins: staking_coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/ollo.farming.v1.MsgUnstake": {
    aminoType: "/ollo.farming.v1.MsgUnstake",
    toAmino: ({
      farmer,
      unstakingCoins
    }: MsgUnstake): AminoMsgUnstake["value"] => {
      return {
        farmer,
        unstaking_coins: unstakingCoins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      farmer,
      unstaking_coins
    }: AminoMsgUnstake["value"]): MsgUnstake => {
      return {
        farmer,
        unstakingCoins: unstaking_coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/ollo.farming.v1.MsgHarvest": {
    aminoType: "/ollo.farming.v1.MsgHarvest",
    toAmino: ({
      farmer,
      stakingCoinDenoms
    }: MsgHarvest): AminoMsgHarvest["value"] => {
      return {
        farmer,
        staking_coin_denoms: stakingCoinDenoms
      };
    },
    fromAmino: ({
      farmer,
      staking_coin_denoms
    }: AminoMsgHarvest["value"]): MsgHarvest => {
      return {
        farmer,
        stakingCoinDenoms: staking_coin_denoms
      };
    }
  },
  "/ollo.farming.v1.MsgRemovePlan": {
    aminoType: "/ollo.farming.v1.MsgRemovePlan",
    toAmino: ({
      creator,
      planId
    }: MsgRemovePlan): AminoMsgRemovePlan["value"] => {
      return {
        creator,
        plan_id: planId.toString()
      };
    },
    fromAmino: ({
      creator,
      plan_id
    }: AminoMsgRemovePlan["value"]): MsgRemovePlan => {
      return {
        creator,
        planId: Long.fromString(plan_id)
      };
    }
  },
  "/ollo.farming.v1.MsgAdvanceEpoch": {
    aminoType: "/ollo.farming.v1.MsgAdvanceEpoch",
    toAmino: ({
      requester
    }: MsgAdvanceEpoch): AminoMsgAdvanceEpoch["value"] => {
      return {
        requester
      };
    },
    fromAmino: ({
      requester
    }: AminoMsgAdvanceEpoch["value"]): MsgAdvanceEpoch => {
      return {
        requester
      };
    }
  }
};