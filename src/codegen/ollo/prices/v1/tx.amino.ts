import { MsgModuleOwner } from "./prices";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgBandPricesData, MsgFeedData, MsgModuleOwnershipTransfer, MsgFeed, MsgAddDataProvider, MsgRemoveDataProvider, MsgSetSubmissionCount, MsgSetHeartbeatTrigger, MsgSetDeviationThresholdTrigger, MsgSetFeedReward, MsgRequestNewRound, MsgFeedOwnershipTransfer, MsgAccount, MsgEditAccount } from "./tx";
export interface AminoMsgBandPricesData extends AminoMsg {
  type: "/ollo.prices.v1.MsgBandPricesData";
  value: {
    creator: string;
    oracle_script_id: string;
    source_channel: string;
    calldata: {
      symbols: string[];
      multiplier: string;
    };
    ask_count: string;
    min_count: string;
    fee_limit: {
      denom: string;
      amount: string;
    }[];
    prepare_gas: string;
    execute_gas: string;
    client_id: string;
  };
}
export interface AminoMsgFeedData extends AminoMsg {
  type: "/ollo.prices.v1.MsgFeedData";
  value: {
    feedId: string;
    submitter: Uint8Array;
    observationFeedData: Uint8Array[];
    observationFeedDataSignatures: Uint8Array[];
    isFeedDataValid: boolean;
    cosmosPubKeys: Uint8Array[];
    txFee: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgModuleOwner extends AminoMsg {
  type: "/ollo.prices.v1.MsgModuleOwner";
  value: {
    address: Uint8Array;
    pubKey: Uint8Array;
    assignerAddress: Uint8Array;
  };
}
export interface AminoMsgModuleOwnershipTransfer extends AminoMsg {
  type: "/ollo.prices.v1.MsgModuleOwnershipTransfer";
  value: {
    assignerAddress: Uint8Array;
    newModuleOwnerAddress: Uint8Array;
    newModuleOwnerPubKey: Uint8Array;
  };
}
export interface AminoMsgFeed extends AminoMsg {
  type: "/ollo.prices.v1.MsgFeed";
  value: {
    feedId: string;
    feedOwner: Uint8Array;
    dataProviders: {
      address: Uint8Array;
      pubKey: Uint8Array;
    }[];
    submissionCount: number;
    heartbeatTrigger: number;
    deviationThresholdTrigger: number;
    moduleOwnerAddress: Uint8Array;
    feedReward: {
      amount: string;
      strategy: string;
    };
    desc: string;
  };
}
export interface AminoMsgAddDataProvider extends AminoMsg {
  type: "/ollo.prices.v1.MsgAddDataProvider";
  value: {
    feedId: string;
    dataProvider: {
      address: Uint8Array;
      pubKey: Uint8Array;
    };
    signer: Uint8Array;
  };
}
export interface AminoMsgRemoveDataProvider extends AminoMsg {
  type: "/ollo.prices.v1.MsgRemoveDataProvider";
  value: {
    feedId: string;
    address: Uint8Array;
    signer: Uint8Array;
  };
}
export interface AminoMsgSetSubmissionCount extends AminoMsg {
  type: "/ollo.prices.v1.MsgSetSubmissionCount";
  value: {
    feedId: string;
    submissionCount: number;
    signer: Uint8Array;
  };
}
export interface AminoMsgSetHeartbeatTrigger extends AminoMsg {
  type: "/ollo.prices.v1.MsgSetHeartbeatTrigger";
  value: {
    feedId: string;
    heartbeatTrigger: number;
    signer: Uint8Array;
  };
}
export interface AminoMsgSetDeviationThresholdTrigger extends AminoMsg {
  type: "/ollo.prices.v1.MsgSetDeviationThresholdTrigger";
  value: {
    feedId: string;
    deviationThresholdTrigger: number;
    signer: Uint8Array;
  };
}
export interface AminoMsgSetFeedReward extends AminoMsg {
  type: "/ollo.prices.v1.MsgSetFeedReward";
  value: {
    feedId: string;
    feedReward: {
      amount: string;
      strategy: string;
    };
    signer: Uint8Array;
  };
}
export interface AminoMsgRequestNewRound extends AminoMsg {
  type: "/ollo.prices.v1.MsgRequestNewRound";
  value: {
    feedId: string;
    signer: Uint8Array;
  };
}
export interface AminoMsgFeedOwnershipTransfer extends AminoMsg {
  type: "/ollo.prices.v1.MsgFeedOwnershipTransfer";
  value: {
    feedId: string;
    newFeedOwnerAddress: Uint8Array;
    signer: Uint8Array;
  };
}
export interface AminoMsgAccount extends AminoMsg {
  type: "/ollo.prices.v1.MsgAccount";
  value: {
    submitter: Uint8Array;
    chainlinkPublicKey: Uint8Array;
    chainlinkSigningKey: Uint8Array;
    piggyAddress: Uint8Array;
  };
}
export interface AminoMsgEditAccount extends AminoMsg {
  type: "/ollo.prices.v1.MsgEditAccount";
  value: {
    submitter: Uint8Array;
    piggyAddress: Uint8Array;
  };
}
export const AminoConverter = {
  "/ollo.prices.v1.MsgBandPricesData": {
    aminoType: "/ollo.prices.v1.MsgBandPricesData",
    toAmino: ({
      creator,
      oracleScriptId,
      sourceChannel,
      calldata,
      askCount,
      minCount,
      feeLimit,
      prepareGas,
      executeGas,
      clientId
    }: MsgBandPricesData): AminoMsgBandPricesData["value"] => {
      return {
        creator,
        oracle_script_id: oracleScriptId.toString(),
        source_channel: sourceChannel,
        calldata: {
          symbols: calldata.symbols,
          multiplier: calldata.multiplier.toString()
        },
        ask_count: askCount.toString(),
        min_count: minCount.toString(),
        fee_limit: feeLimit.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        prepare_gas: prepareGas.toString(),
        execute_gas: executeGas.toString(),
        client_id: clientId
      };
    },
    fromAmino: ({
      creator,
      oracle_script_id,
      source_channel,
      calldata,
      ask_count,
      min_count,
      fee_limit,
      prepare_gas,
      execute_gas,
      client_id
    }: AminoMsgBandPricesData["value"]): MsgBandPricesData => {
      return {
        creator,
        oracleScriptId: Long.fromString(oracle_script_id),
        sourceChannel: source_channel,
        calldata: {
          symbols: calldata.symbols,
          multiplier: Long.fromString(calldata.multiplier)
        },
        askCount: Long.fromString(ask_count),
        minCount: Long.fromString(min_count),
        feeLimit: fee_limit.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        prepareGas: Long.fromString(prepare_gas),
        executeGas: Long.fromString(execute_gas),
        clientId: client_id
      };
    }
  },
  "/ollo.prices.v1.MsgFeedData": {
    aminoType: "/ollo.prices.v1.MsgFeedData",
    toAmino: ({
      feedId,
      submitter,
      observationFeedData,
      observationFeedDataSignatures,
      isFeedDataValid,
      cosmosPubKeys,
      txFee
    }: MsgFeedData): AminoMsgFeedData["value"] => {
      return {
        feedId,
        submitter,
        observationFeedData,
        observationFeedDataSignatures,
        isFeedDataValid,
        cosmosPubKeys,
        txFee: {
          denom: txFee.denom,
          amount: Long.fromValue(txFee.amount).toString()
        }
      };
    },
    fromAmino: ({
      feedId,
      submitter,
      observationFeedData,
      observationFeedDataSignatures,
      isFeedDataValid,
      cosmosPubKeys,
      txFee
    }: AminoMsgFeedData["value"]): MsgFeedData => {
      return {
        feedId,
        submitter,
        observationFeedData,
        observationFeedDataSignatures,
        isFeedDataValid,
        cosmosPubKeys,
        txFee: {
          denom: txFee.denom,
          amount: txFee.amount
        }
      };
    }
  },
  "/ollo.prices.v1.MsgModuleOwner": {
    aminoType: "/ollo.prices.v1.MsgModuleOwner",
    toAmino: ({
      address,
      pubKey,
      assignerAddress
    }: MsgModuleOwner): AminoMsgModuleOwner["value"] => {
      return {
        address,
        pubKey,
        assignerAddress
      };
    },
    fromAmino: ({
      address,
      pubKey,
      assignerAddress
    }: AminoMsgModuleOwner["value"]): MsgModuleOwner => {
      return {
        address,
        pubKey,
        assignerAddress
      };
    }
  },
  "/ollo.prices.v1.MsgModuleOwnershipTransfer": {
    aminoType: "/ollo.prices.v1.MsgModuleOwnershipTransfer",
    toAmino: ({
      assignerAddress,
      newModuleOwnerAddress,
      newModuleOwnerPubKey
    }: MsgModuleOwnershipTransfer): AminoMsgModuleOwnershipTransfer["value"] => {
      return {
        assignerAddress,
        newModuleOwnerAddress,
        newModuleOwnerPubKey
      };
    },
    fromAmino: ({
      assignerAddress,
      newModuleOwnerAddress,
      newModuleOwnerPubKey
    }: AminoMsgModuleOwnershipTransfer["value"]): MsgModuleOwnershipTransfer => {
      return {
        assignerAddress,
        newModuleOwnerAddress,
        newModuleOwnerPubKey
      };
    }
  },
  "/ollo.prices.v1.MsgFeed": {
    aminoType: "/ollo.prices.v1.MsgFeed",
    toAmino: ({
      feedId,
      feedOwner,
      dataProviders,
      submissionCount,
      heartbeatTrigger,
      deviationThresholdTrigger,
      moduleOwnerAddress,
      feedReward,
      desc
    }: MsgFeed): AminoMsgFeed["value"] => {
      return {
        feedId,
        feedOwner,
        dataProviders: dataProviders.map(el0 => ({
          address: el0.address,
          pubKey: el0.pubKey
        })),
        submissionCount,
        heartbeatTrigger,
        deviationThresholdTrigger,
        moduleOwnerAddress,
        feedReward: {
          amount: feedReward.amount.toString(),
          strategy: feedReward.strategy
        },
        desc
      };
    },
    fromAmino: ({
      feedId,
      feedOwner,
      dataProviders,
      submissionCount,
      heartbeatTrigger,
      deviationThresholdTrigger,
      moduleOwnerAddress,
      feedReward,
      desc
    }: AminoMsgFeed["value"]): MsgFeed => {
      return {
        feedId,
        feedOwner,
        dataProviders: dataProviders.map(el0 => ({
          address: el0.address,
          pubKey: el0.pubKey
        })),
        submissionCount,
        heartbeatTrigger,
        deviationThresholdTrigger,
        moduleOwnerAddress,
        feedReward: {
          amount: Long.fromString(feedReward.amount),
          strategy: feedReward.strategy
        },
        desc
      };
    }
  },
  "/ollo.prices.v1.MsgAddDataProvider": {
    aminoType: "/ollo.prices.v1.MsgAddDataProvider",
    toAmino: ({
      feedId,
      dataProvider,
      signer
    }: MsgAddDataProvider): AminoMsgAddDataProvider["value"] => {
      return {
        feedId,
        dataProvider: {
          address: dataProvider.address,
          pubKey: dataProvider.pubKey
        },
        signer
      };
    },
    fromAmino: ({
      feedId,
      dataProvider,
      signer
    }: AminoMsgAddDataProvider["value"]): MsgAddDataProvider => {
      return {
        feedId,
        dataProvider: {
          address: dataProvider.address,
          pubKey: dataProvider.pubKey
        },
        signer
      };
    }
  },
  "/ollo.prices.v1.MsgRemoveDataProvider": {
    aminoType: "/ollo.prices.v1.MsgRemoveDataProvider",
    toAmino: ({
      feedId,
      address,
      signer
    }: MsgRemoveDataProvider): AminoMsgRemoveDataProvider["value"] => {
      return {
        feedId,
        address,
        signer
      };
    },
    fromAmino: ({
      feedId,
      address,
      signer
    }: AminoMsgRemoveDataProvider["value"]): MsgRemoveDataProvider => {
      return {
        feedId,
        address,
        signer
      };
    }
  },
  "/ollo.prices.v1.MsgSetSubmissionCount": {
    aminoType: "/ollo.prices.v1.MsgSetSubmissionCount",
    toAmino: ({
      feedId,
      submissionCount,
      signer
    }: MsgSetSubmissionCount): AminoMsgSetSubmissionCount["value"] => {
      return {
        feedId,
        submissionCount,
        signer
      };
    },
    fromAmino: ({
      feedId,
      submissionCount,
      signer
    }: AminoMsgSetSubmissionCount["value"]): MsgSetSubmissionCount => {
      return {
        feedId,
        submissionCount,
        signer
      };
    }
  },
  "/ollo.prices.v1.MsgSetHeartbeatTrigger": {
    aminoType: "/ollo.prices.v1.MsgSetHeartbeatTrigger",
    toAmino: ({
      feedId,
      heartbeatTrigger,
      signer
    }: MsgSetHeartbeatTrigger): AminoMsgSetHeartbeatTrigger["value"] => {
      return {
        feedId,
        heartbeatTrigger,
        signer
      };
    },
    fromAmino: ({
      feedId,
      heartbeatTrigger,
      signer
    }: AminoMsgSetHeartbeatTrigger["value"]): MsgSetHeartbeatTrigger => {
      return {
        feedId,
        heartbeatTrigger,
        signer
      };
    }
  },
  "/ollo.prices.v1.MsgSetDeviationThresholdTrigger": {
    aminoType: "/ollo.prices.v1.MsgSetDeviationThresholdTrigger",
    toAmino: ({
      feedId,
      deviationThresholdTrigger,
      signer
    }: MsgSetDeviationThresholdTrigger): AminoMsgSetDeviationThresholdTrigger["value"] => {
      return {
        feedId,
        deviationThresholdTrigger,
        signer
      };
    },
    fromAmino: ({
      feedId,
      deviationThresholdTrigger,
      signer
    }: AminoMsgSetDeviationThresholdTrigger["value"]): MsgSetDeviationThresholdTrigger => {
      return {
        feedId,
        deviationThresholdTrigger,
        signer
      };
    }
  },
  "/ollo.prices.v1.MsgSetFeedReward": {
    aminoType: "/ollo.prices.v1.MsgSetFeedReward",
    toAmino: ({
      feedId,
      feedReward,
      signer
    }: MsgSetFeedReward): AminoMsgSetFeedReward["value"] => {
      return {
        feedId,
        feedReward: {
          amount: feedReward.amount.toString(),
          strategy: feedReward.strategy
        },
        signer
      };
    },
    fromAmino: ({
      feedId,
      feedReward,
      signer
    }: AminoMsgSetFeedReward["value"]): MsgSetFeedReward => {
      return {
        feedId,
        feedReward: {
          amount: Long.fromString(feedReward.amount),
          strategy: feedReward.strategy
        },
        signer
      };
    }
  },
  "/ollo.prices.v1.MsgRequestNewRound": {
    aminoType: "/ollo.prices.v1.MsgRequestNewRound",
    toAmino: ({
      feedId,
      signer
    }: MsgRequestNewRound): AminoMsgRequestNewRound["value"] => {
      return {
        feedId,
        signer
      };
    },
    fromAmino: ({
      feedId,
      signer
    }: AminoMsgRequestNewRound["value"]): MsgRequestNewRound => {
      return {
        feedId,
        signer
      };
    }
  },
  "/ollo.prices.v1.MsgFeedOwnershipTransfer": {
    aminoType: "/ollo.prices.v1.MsgFeedOwnershipTransfer",
    toAmino: ({
      feedId,
      newFeedOwnerAddress,
      signer
    }: MsgFeedOwnershipTransfer): AminoMsgFeedOwnershipTransfer["value"] => {
      return {
        feedId,
        newFeedOwnerAddress,
        signer
      };
    },
    fromAmino: ({
      feedId,
      newFeedOwnerAddress,
      signer
    }: AminoMsgFeedOwnershipTransfer["value"]): MsgFeedOwnershipTransfer => {
      return {
        feedId,
        newFeedOwnerAddress,
        signer
      };
    }
  },
  "/ollo.prices.v1.MsgAccount": {
    aminoType: "/ollo.prices.v1.MsgAccount",
    toAmino: ({
      submitter,
      chainlinkPublicKey,
      chainlinkSigningKey,
      piggyAddress
    }: MsgAccount): AminoMsgAccount["value"] => {
      return {
        submitter,
        chainlinkPublicKey,
        chainlinkSigningKey,
        piggyAddress
      };
    },
    fromAmino: ({
      submitter,
      chainlinkPublicKey,
      chainlinkSigningKey,
      piggyAddress
    }: AminoMsgAccount["value"]): MsgAccount => {
      return {
        submitter,
        chainlinkPublicKey,
        chainlinkSigningKey,
        piggyAddress
      };
    }
  },
  "/ollo.prices.v1.MsgEditAccount": {
    aminoType: "/ollo.prices.v1.MsgEditAccount",
    toAmino: ({
      submitter,
      piggyAddress
    }: MsgEditAccount): AminoMsgEditAccount["value"] => {
      return {
        submitter,
        piggyAddress
      };
    },
    fromAmino: ({
      submitter,
      piggyAddress
    }: AminoMsgEditAccount["value"]): MsgEditAccount => {
      return {
        submitter,
        piggyAddress
      };
    }
  }
};