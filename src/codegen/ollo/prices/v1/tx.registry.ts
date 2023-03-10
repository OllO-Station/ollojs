import { MsgModuleOwner } from "./prices";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBandPricesData, MsgFeedData, MsgModuleOwnershipTransfer, MsgFeed, MsgAddDataProvider, MsgRemoveDataProvider, MsgSetSubmissionCount, MsgSetHeartbeatTrigger, MsgSetDeviationThresholdTrigger, MsgSetFeedReward, MsgRequestNewRound, MsgFeedOwnershipTransfer, MsgAccount, MsgEditAccount } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.prices.v1.MsgBandPricesData", MsgBandPricesData], ["/ollo.prices.v1.MsgFeedData", MsgFeedData], ["/ollo.prices.v1.MsgModuleOwner", MsgModuleOwner], ["/ollo.prices.v1.MsgModuleOwnershipTransfer", MsgModuleOwnershipTransfer], ["/ollo.prices.v1.MsgFeed", MsgFeed], ["/ollo.prices.v1.MsgAddDataProvider", MsgAddDataProvider], ["/ollo.prices.v1.MsgRemoveDataProvider", MsgRemoveDataProvider], ["/ollo.prices.v1.MsgSetSubmissionCount", MsgSetSubmissionCount], ["/ollo.prices.v1.MsgSetHeartbeatTrigger", MsgSetHeartbeatTrigger], ["/ollo.prices.v1.MsgSetDeviationThresholdTrigger", MsgSetDeviationThresholdTrigger], ["/ollo.prices.v1.MsgSetFeedReward", MsgSetFeedReward], ["/ollo.prices.v1.MsgRequestNewRound", MsgRequestNewRound], ["/ollo.prices.v1.MsgFeedOwnershipTransfer", MsgFeedOwnershipTransfer], ["/ollo.prices.v1.MsgAccount", MsgAccount], ["/ollo.prices.v1.MsgEditAccount", MsgEditAccount]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    bandPricesData(value: MsgBandPricesData) {
      return {
        typeUrl: "/ollo.prices.v1.MsgBandPricesData",
        value: MsgBandPricesData.encode(value).finish()
      };
    },

    submitFeedDataTx(value: MsgFeedData) {
      return {
        typeUrl: "/ollo.prices.v1.MsgFeedData",
        value: MsgFeedData.encode(value).finish()
      };
    },

    addModuleOwnerTx(value: MsgModuleOwner) {
      return {
        typeUrl: "/ollo.prices.v1.MsgModuleOwner",
        value: MsgModuleOwner.encode(value).finish()
      };
    },

    moduleOwnershipTransferTx(value: MsgModuleOwnershipTransfer) {
      return {
        typeUrl: "/ollo.prices.v1.MsgModuleOwnershipTransfer",
        value: MsgModuleOwnershipTransfer.encode(value).finish()
      };
    },

    addFeedTx(value: MsgFeed) {
      return {
        typeUrl: "/ollo.prices.v1.MsgFeed",
        value: MsgFeed.encode(value).finish()
      };
    },

    addDataProviderTx(value: MsgAddDataProvider) {
      return {
        typeUrl: "/ollo.prices.v1.MsgAddDataProvider",
        value: MsgAddDataProvider.encode(value).finish()
      };
    },

    removeDataProviderTx(value: MsgRemoveDataProvider) {
      return {
        typeUrl: "/ollo.prices.v1.MsgRemoveDataProvider",
        value: MsgRemoveDataProvider.encode(value).finish()
      };
    },

    setSubmissionCountTx(value: MsgSetSubmissionCount) {
      return {
        typeUrl: "/ollo.prices.v1.MsgSetSubmissionCount",
        value: MsgSetSubmissionCount.encode(value).finish()
      };
    },

    setHeartbeatTriggerTx(value: MsgSetHeartbeatTrigger) {
      return {
        typeUrl: "/ollo.prices.v1.MsgSetHeartbeatTrigger",
        value: MsgSetHeartbeatTrigger.encode(value).finish()
      };
    },

    setDeviationThresholdTriggerTx(value: MsgSetDeviationThresholdTrigger) {
      return {
        typeUrl: "/ollo.prices.v1.MsgSetDeviationThresholdTrigger",
        value: MsgSetDeviationThresholdTrigger.encode(value).finish()
      };
    },

    setFeedRewardTx(value: MsgSetFeedReward) {
      return {
        typeUrl: "/ollo.prices.v1.MsgSetFeedReward",
        value: MsgSetFeedReward.encode(value).finish()
      };
    },

    requestNewRoundTx(value: MsgRequestNewRound) {
      return {
        typeUrl: "/ollo.prices.v1.MsgRequestNewRound",
        value: MsgRequestNewRound.encode(value).finish()
      };
    },

    feedOwnershipTransferTx(value: MsgFeedOwnershipTransfer) {
      return {
        typeUrl: "/ollo.prices.v1.MsgFeedOwnershipTransfer",
        value: MsgFeedOwnershipTransfer.encode(value).finish()
      };
    },

    addAccountTx(value: MsgAccount) {
      return {
        typeUrl: "/ollo.prices.v1.MsgAccount",
        value: MsgAccount.encode(value).finish()
      };
    },

    editAccountTx(value: MsgEditAccount) {
      return {
        typeUrl: "/ollo.prices.v1.MsgEditAccount",
        value: MsgEditAccount.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    bandPricesData(value: MsgBandPricesData) {
      return {
        typeUrl: "/ollo.prices.v1.MsgBandPricesData",
        value
      };
    },

    submitFeedDataTx(value: MsgFeedData) {
      return {
        typeUrl: "/ollo.prices.v1.MsgFeedData",
        value
      };
    },

    addModuleOwnerTx(value: MsgModuleOwner) {
      return {
        typeUrl: "/ollo.prices.v1.MsgModuleOwner",
        value
      };
    },

    moduleOwnershipTransferTx(value: MsgModuleOwnershipTransfer) {
      return {
        typeUrl: "/ollo.prices.v1.MsgModuleOwnershipTransfer",
        value
      };
    },

    addFeedTx(value: MsgFeed) {
      return {
        typeUrl: "/ollo.prices.v1.MsgFeed",
        value
      };
    },

    addDataProviderTx(value: MsgAddDataProvider) {
      return {
        typeUrl: "/ollo.prices.v1.MsgAddDataProvider",
        value
      };
    },

    removeDataProviderTx(value: MsgRemoveDataProvider) {
      return {
        typeUrl: "/ollo.prices.v1.MsgRemoveDataProvider",
        value
      };
    },

    setSubmissionCountTx(value: MsgSetSubmissionCount) {
      return {
        typeUrl: "/ollo.prices.v1.MsgSetSubmissionCount",
        value
      };
    },

    setHeartbeatTriggerTx(value: MsgSetHeartbeatTrigger) {
      return {
        typeUrl: "/ollo.prices.v1.MsgSetHeartbeatTrigger",
        value
      };
    },

    setDeviationThresholdTriggerTx(value: MsgSetDeviationThresholdTrigger) {
      return {
        typeUrl: "/ollo.prices.v1.MsgSetDeviationThresholdTrigger",
        value
      };
    },

    setFeedRewardTx(value: MsgSetFeedReward) {
      return {
        typeUrl: "/ollo.prices.v1.MsgSetFeedReward",
        value
      };
    },

    requestNewRoundTx(value: MsgRequestNewRound) {
      return {
        typeUrl: "/ollo.prices.v1.MsgRequestNewRound",
        value
      };
    },

    feedOwnershipTransferTx(value: MsgFeedOwnershipTransfer) {
      return {
        typeUrl: "/ollo.prices.v1.MsgFeedOwnershipTransfer",
        value
      };
    },

    addAccountTx(value: MsgAccount) {
      return {
        typeUrl: "/ollo.prices.v1.MsgAccount",
        value
      };
    },

    editAccountTx(value: MsgEditAccount) {
      return {
        typeUrl: "/ollo.prices.v1.MsgEditAccount",
        value
      };
    }

  },
  fromPartial: {
    bandPricesData(value: MsgBandPricesData) {
      return {
        typeUrl: "/ollo.prices.v1.MsgBandPricesData",
        value: MsgBandPricesData.fromPartial(value)
      };
    },

    submitFeedDataTx(value: MsgFeedData) {
      return {
        typeUrl: "/ollo.prices.v1.MsgFeedData",
        value: MsgFeedData.fromPartial(value)
      };
    },

    addModuleOwnerTx(value: MsgModuleOwner) {
      return {
        typeUrl: "/ollo.prices.v1.MsgModuleOwner",
        value: MsgModuleOwner.fromPartial(value)
      };
    },

    moduleOwnershipTransferTx(value: MsgModuleOwnershipTransfer) {
      return {
        typeUrl: "/ollo.prices.v1.MsgModuleOwnershipTransfer",
        value: MsgModuleOwnershipTransfer.fromPartial(value)
      };
    },

    addFeedTx(value: MsgFeed) {
      return {
        typeUrl: "/ollo.prices.v1.MsgFeed",
        value: MsgFeed.fromPartial(value)
      };
    },

    addDataProviderTx(value: MsgAddDataProvider) {
      return {
        typeUrl: "/ollo.prices.v1.MsgAddDataProvider",
        value: MsgAddDataProvider.fromPartial(value)
      };
    },

    removeDataProviderTx(value: MsgRemoveDataProvider) {
      return {
        typeUrl: "/ollo.prices.v1.MsgRemoveDataProvider",
        value: MsgRemoveDataProvider.fromPartial(value)
      };
    },

    setSubmissionCountTx(value: MsgSetSubmissionCount) {
      return {
        typeUrl: "/ollo.prices.v1.MsgSetSubmissionCount",
        value: MsgSetSubmissionCount.fromPartial(value)
      };
    },

    setHeartbeatTriggerTx(value: MsgSetHeartbeatTrigger) {
      return {
        typeUrl: "/ollo.prices.v1.MsgSetHeartbeatTrigger",
        value: MsgSetHeartbeatTrigger.fromPartial(value)
      };
    },

    setDeviationThresholdTriggerTx(value: MsgSetDeviationThresholdTrigger) {
      return {
        typeUrl: "/ollo.prices.v1.MsgSetDeviationThresholdTrigger",
        value: MsgSetDeviationThresholdTrigger.fromPartial(value)
      };
    },

    setFeedRewardTx(value: MsgSetFeedReward) {
      return {
        typeUrl: "/ollo.prices.v1.MsgSetFeedReward",
        value: MsgSetFeedReward.fromPartial(value)
      };
    },

    requestNewRoundTx(value: MsgRequestNewRound) {
      return {
        typeUrl: "/ollo.prices.v1.MsgRequestNewRound",
        value: MsgRequestNewRound.fromPartial(value)
      };
    },

    feedOwnershipTransferTx(value: MsgFeedOwnershipTransfer) {
      return {
        typeUrl: "/ollo.prices.v1.MsgFeedOwnershipTransfer",
        value: MsgFeedOwnershipTransfer.fromPartial(value)
      };
    },

    addAccountTx(value: MsgAccount) {
      return {
        typeUrl: "/ollo.prices.v1.MsgAccount",
        value: MsgAccount.fromPartial(value)
      };
    },

    editAccountTx(value: MsgEditAccount) {
      return {
        typeUrl: "/ollo.prices.v1.MsgEditAccount",
        value: MsgEditAccount.fromPartial(value)
      };
    }

  }
};