import { MsgModuleOwner } from "./prices";
import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/ollo.prices.v1.MsgBandPricesData": {
        aminoType: string;
        toAmino: ({ creator, oracleScriptId, sourceChannel, calldata, askCount, minCount, feeLimit, prepareGas, executeGas, clientId }: MsgBandPricesData) => AminoMsgBandPricesData["value"];
        fromAmino: ({ creator, oracle_script_id, source_channel, calldata, ask_count, min_count, fee_limit, prepare_gas, execute_gas, client_id }: AminoMsgBandPricesData["value"]) => MsgBandPricesData;
    };
    "/ollo.prices.v1.MsgFeedData": {
        aminoType: string;
        toAmino: ({ feedId, submitter, observationFeedData, observationFeedDataSignatures, isFeedDataValid, cosmosPubKeys, txFee }: MsgFeedData) => AminoMsgFeedData["value"];
        fromAmino: ({ feedId, submitter, observationFeedData, observationFeedDataSignatures, isFeedDataValid, cosmosPubKeys, txFee }: AminoMsgFeedData["value"]) => MsgFeedData;
    };
    "/ollo.prices.v1.MsgModuleOwner": {
        aminoType: string;
        toAmino: ({ address, pubKey, assignerAddress }: MsgModuleOwner) => AminoMsgModuleOwner["value"];
        fromAmino: ({ address, pubKey, assignerAddress }: AminoMsgModuleOwner["value"]) => MsgModuleOwner;
    };
    "/ollo.prices.v1.MsgModuleOwnershipTransfer": {
        aminoType: string;
        toAmino: ({ assignerAddress, newModuleOwnerAddress, newModuleOwnerPubKey }: MsgModuleOwnershipTransfer) => AminoMsgModuleOwnershipTransfer["value"];
        fromAmino: ({ assignerAddress, newModuleOwnerAddress, newModuleOwnerPubKey }: AminoMsgModuleOwnershipTransfer["value"]) => MsgModuleOwnershipTransfer;
    };
    "/ollo.prices.v1.MsgFeed": {
        aminoType: string;
        toAmino: ({ feedId, feedOwner, dataProviders, submissionCount, heartbeatTrigger, deviationThresholdTrigger, moduleOwnerAddress, feedReward, desc }: MsgFeed) => AminoMsgFeed["value"];
        fromAmino: ({ feedId, feedOwner, dataProviders, submissionCount, heartbeatTrigger, deviationThresholdTrigger, moduleOwnerAddress, feedReward, desc }: AminoMsgFeed["value"]) => MsgFeed;
    };
    "/ollo.prices.v1.MsgAddDataProvider": {
        aminoType: string;
        toAmino: ({ feedId, dataProvider, signer }: MsgAddDataProvider) => AminoMsgAddDataProvider["value"];
        fromAmino: ({ feedId, dataProvider, signer }: AminoMsgAddDataProvider["value"]) => MsgAddDataProvider;
    };
    "/ollo.prices.v1.MsgRemoveDataProvider": {
        aminoType: string;
        toAmino: ({ feedId, address, signer }: MsgRemoveDataProvider) => AminoMsgRemoveDataProvider["value"];
        fromAmino: ({ feedId, address, signer }: AminoMsgRemoveDataProvider["value"]) => MsgRemoveDataProvider;
    };
    "/ollo.prices.v1.MsgSetSubmissionCount": {
        aminoType: string;
        toAmino: ({ feedId, submissionCount, signer }: MsgSetSubmissionCount) => AminoMsgSetSubmissionCount["value"];
        fromAmino: ({ feedId, submissionCount, signer }: AminoMsgSetSubmissionCount["value"]) => MsgSetSubmissionCount;
    };
    "/ollo.prices.v1.MsgSetHeartbeatTrigger": {
        aminoType: string;
        toAmino: ({ feedId, heartbeatTrigger, signer }: MsgSetHeartbeatTrigger) => AminoMsgSetHeartbeatTrigger["value"];
        fromAmino: ({ feedId, heartbeatTrigger, signer }: AminoMsgSetHeartbeatTrigger["value"]) => MsgSetHeartbeatTrigger;
    };
    "/ollo.prices.v1.MsgSetDeviationThresholdTrigger": {
        aminoType: string;
        toAmino: ({ feedId, deviationThresholdTrigger, signer }: MsgSetDeviationThresholdTrigger) => AminoMsgSetDeviationThresholdTrigger["value"];
        fromAmino: ({ feedId, deviationThresholdTrigger, signer }: AminoMsgSetDeviationThresholdTrigger["value"]) => MsgSetDeviationThresholdTrigger;
    };
    "/ollo.prices.v1.MsgSetFeedReward": {
        aminoType: string;
        toAmino: ({ feedId, feedReward, signer }: MsgSetFeedReward) => AminoMsgSetFeedReward["value"];
        fromAmino: ({ feedId, feedReward, signer }: AminoMsgSetFeedReward["value"]) => MsgSetFeedReward;
    };
    "/ollo.prices.v1.MsgRequestNewRound": {
        aminoType: string;
        toAmino: ({ feedId, signer }: MsgRequestNewRound) => AminoMsgRequestNewRound["value"];
        fromAmino: ({ feedId, signer }: AminoMsgRequestNewRound["value"]) => MsgRequestNewRound;
    };
    "/ollo.prices.v1.MsgFeedOwnershipTransfer": {
        aminoType: string;
        toAmino: ({ feedId, newFeedOwnerAddress, signer }: MsgFeedOwnershipTransfer) => AminoMsgFeedOwnershipTransfer["value"];
        fromAmino: ({ feedId, newFeedOwnerAddress, signer }: AminoMsgFeedOwnershipTransfer["value"]) => MsgFeedOwnershipTransfer;
    };
    "/ollo.prices.v1.MsgAccount": {
        aminoType: string;
        toAmino: ({ submitter, chainlinkPublicKey, chainlinkSigningKey, piggyAddress }: MsgAccount) => AminoMsgAccount["value"];
        fromAmino: ({ submitter, chainlinkPublicKey, chainlinkSigningKey, piggyAddress }: AminoMsgAccount["value"]) => MsgAccount;
    };
    "/ollo.prices.v1.MsgEditAccount": {
        aminoType: string;
        toAmino: ({ submitter, piggyAddress }: MsgEditAccount) => AminoMsgEditAccount["value"];
        fromAmino: ({ submitter, piggyAddress }: AminoMsgEditAccount["value"]) => MsgEditAccount;
    };
};
