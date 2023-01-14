import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateFixedAmountPlan, MsgCreateRatioPlan, MsgStake, MsgUnstake, MsgHarvest, MsgRemovePlan, MsgAdvanceEpoch } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.farming.v1.MsgCreateFixedAmountPlan", MsgCreateFixedAmountPlan], ["/ollo.farming.v1.MsgCreateRatioPlan", MsgCreateRatioPlan], ["/ollo.farming.v1.MsgStake", MsgStake], ["/ollo.farming.v1.MsgUnstake", MsgUnstake], ["/ollo.farming.v1.MsgHarvest", MsgHarvest], ["/ollo.farming.v1.MsgRemovePlan", MsgRemovePlan], ["/ollo.farming.v1.MsgAdvanceEpoch", MsgAdvanceEpoch]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createFixedAmountPlan(value: MsgCreateFixedAmountPlan) {
      return {
        typeUrl: "/ollo.farming.v1.MsgCreateFixedAmountPlan",
        value: MsgCreateFixedAmountPlan.encode(value).finish()
      };
    },

    createRatioPlan(value: MsgCreateRatioPlan) {
      return {
        typeUrl: "/ollo.farming.v1.MsgCreateRatioPlan",
        value: MsgCreateRatioPlan.encode(value).finish()
      };
    },

    stake(value: MsgStake) {
      return {
        typeUrl: "/ollo.farming.v1.MsgStake",
        value: MsgStake.encode(value).finish()
      };
    },

    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/ollo.farming.v1.MsgUnstake",
        value: MsgUnstake.encode(value).finish()
      };
    },

    harvest(value: MsgHarvest) {
      return {
        typeUrl: "/ollo.farming.v1.MsgHarvest",
        value: MsgHarvest.encode(value).finish()
      };
    },

    removePlan(value: MsgRemovePlan) {
      return {
        typeUrl: "/ollo.farming.v1.MsgRemovePlan",
        value: MsgRemovePlan.encode(value).finish()
      };
    },

    advanceEpoch(value: MsgAdvanceEpoch) {
      return {
        typeUrl: "/ollo.farming.v1.MsgAdvanceEpoch",
        value: MsgAdvanceEpoch.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createFixedAmountPlan(value: MsgCreateFixedAmountPlan) {
      return {
        typeUrl: "/ollo.farming.v1.MsgCreateFixedAmountPlan",
        value
      };
    },

    createRatioPlan(value: MsgCreateRatioPlan) {
      return {
        typeUrl: "/ollo.farming.v1.MsgCreateRatioPlan",
        value
      };
    },

    stake(value: MsgStake) {
      return {
        typeUrl: "/ollo.farming.v1.MsgStake",
        value
      };
    },

    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/ollo.farming.v1.MsgUnstake",
        value
      };
    },

    harvest(value: MsgHarvest) {
      return {
        typeUrl: "/ollo.farming.v1.MsgHarvest",
        value
      };
    },

    removePlan(value: MsgRemovePlan) {
      return {
        typeUrl: "/ollo.farming.v1.MsgRemovePlan",
        value
      };
    },

    advanceEpoch(value: MsgAdvanceEpoch) {
      return {
        typeUrl: "/ollo.farming.v1.MsgAdvanceEpoch",
        value
      };
    }

  },
  fromPartial: {
    createFixedAmountPlan(value: MsgCreateFixedAmountPlan) {
      return {
        typeUrl: "/ollo.farming.v1.MsgCreateFixedAmountPlan",
        value: MsgCreateFixedAmountPlan.fromPartial(value)
      };
    },

    createRatioPlan(value: MsgCreateRatioPlan) {
      return {
        typeUrl: "/ollo.farming.v1.MsgCreateRatioPlan",
        value: MsgCreateRatioPlan.fromPartial(value)
      };
    },

    stake(value: MsgStake) {
      return {
        typeUrl: "/ollo.farming.v1.MsgStake",
        value: MsgStake.fromPartial(value)
      };
    },

    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/ollo.farming.v1.MsgUnstake",
        value: MsgUnstake.fromPartial(value)
      };
    },

    harvest(value: MsgHarvest) {
      return {
        typeUrl: "/ollo.farming.v1.MsgHarvest",
        value: MsgHarvest.fromPartial(value)
      };
    },

    removePlan(value: MsgRemovePlan) {
      return {
        typeUrl: "/ollo.farming.v1.MsgRemovePlan",
        value: MsgRemovePlan.fromPartial(value)
      };
    },

    advanceEpoch(value: MsgAdvanceEpoch) {
      return {
        typeUrl: "/ollo.farming.v1.MsgAdvanceEpoch",
        value: MsgAdvanceEpoch.fromPartial(value)
      };
    }

  }
};