import { MsgModuleOwner } from "./prices";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBandPricesData, MsgFeedData, MsgModuleOwnershipTransfer, MsgFeed, MsgAddDataProvider, MsgRemoveDataProvider, MsgSetSubmissionCount, MsgSetHeartbeatTrigger, MsgSetDeviationThresholdTrigger, MsgSetFeedReward, MsgRequestNewRound, MsgFeedOwnershipTransfer, MsgAccount, MsgEditAccount } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        bandPricesData(value: MsgBandPricesData): {
            typeUrl: string;
            value: Uint8Array;
        };
        submitFeedDataTx(value: MsgFeedData): {
            typeUrl: string;
            value: Uint8Array;
        };
        addModuleOwnerTx(value: MsgModuleOwner): {
            typeUrl: string;
            value: Uint8Array;
        };
        moduleOwnershipTransferTx(value: MsgModuleOwnershipTransfer): {
            typeUrl: string;
            value: Uint8Array;
        };
        addFeedTx(value: MsgFeed): {
            typeUrl: string;
            value: Uint8Array;
        };
        addDataProviderTx(value: MsgAddDataProvider): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeDataProviderTx(value: MsgRemoveDataProvider): {
            typeUrl: string;
            value: Uint8Array;
        };
        setSubmissionCountTx(value: MsgSetSubmissionCount): {
            typeUrl: string;
            value: Uint8Array;
        };
        setHeartbeatTriggerTx(value: MsgSetHeartbeatTrigger): {
            typeUrl: string;
            value: Uint8Array;
        };
        setDeviationThresholdTriggerTx(value: MsgSetDeviationThresholdTrigger): {
            typeUrl: string;
            value: Uint8Array;
        };
        setFeedRewardTx(value: MsgSetFeedReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        requestNewRoundTx(value: MsgRequestNewRound): {
            typeUrl: string;
            value: Uint8Array;
        };
        feedOwnershipTransferTx(value: MsgFeedOwnershipTransfer): {
            typeUrl: string;
            value: Uint8Array;
        };
        addAccountTx(value: MsgAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        editAccountTx(value: MsgEditAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        bandPricesData(value: MsgBandPricesData): {
            typeUrl: string;
            value: MsgBandPricesData;
        };
        submitFeedDataTx(value: MsgFeedData): {
            typeUrl: string;
            value: MsgFeedData;
        };
        addModuleOwnerTx(value: MsgModuleOwner): {
            typeUrl: string;
            value: MsgModuleOwner;
        };
        moduleOwnershipTransferTx(value: MsgModuleOwnershipTransfer): {
            typeUrl: string;
            value: MsgModuleOwnershipTransfer;
        };
        addFeedTx(value: MsgFeed): {
            typeUrl: string;
            value: MsgFeed;
        };
        addDataProviderTx(value: MsgAddDataProvider): {
            typeUrl: string;
            value: MsgAddDataProvider;
        };
        removeDataProviderTx(value: MsgRemoveDataProvider): {
            typeUrl: string;
            value: MsgRemoveDataProvider;
        };
        setSubmissionCountTx(value: MsgSetSubmissionCount): {
            typeUrl: string;
            value: MsgSetSubmissionCount;
        };
        setHeartbeatTriggerTx(value: MsgSetHeartbeatTrigger): {
            typeUrl: string;
            value: MsgSetHeartbeatTrigger;
        };
        setDeviationThresholdTriggerTx(value: MsgSetDeviationThresholdTrigger): {
            typeUrl: string;
            value: MsgSetDeviationThresholdTrigger;
        };
        setFeedRewardTx(value: MsgSetFeedReward): {
            typeUrl: string;
            value: MsgSetFeedReward;
        };
        requestNewRoundTx(value: MsgRequestNewRound): {
            typeUrl: string;
            value: MsgRequestNewRound;
        };
        feedOwnershipTransferTx(value: MsgFeedOwnershipTransfer): {
            typeUrl: string;
            value: MsgFeedOwnershipTransfer;
        };
        addAccountTx(value: MsgAccount): {
            typeUrl: string;
            value: MsgAccount;
        };
        editAccountTx(value: MsgEditAccount): {
            typeUrl: string;
            value: MsgEditAccount;
        };
    };
    fromPartial: {
        bandPricesData(value: MsgBandPricesData): {
            typeUrl: string;
            value: MsgBandPricesData;
        };
        submitFeedDataTx(value: MsgFeedData): {
            typeUrl: string;
            value: MsgFeedData;
        };
        addModuleOwnerTx(value: MsgModuleOwner): {
            typeUrl: string;
            value: MsgModuleOwner;
        };
        moduleOwnershipTransferTx(value: MsgModuleOwnershipTransfer): {
            typeUrl: string;
            value: MsgModuleOwnershipTransfer;
        };
        addFeedTx(value: MsgFeed): {
            typeUrl: string;
            value: MsgFeed;
        };
        addDataProviderTx(value: MsgAddDataProvider): {
            typeUrl: string;
            value: MsgAddDataProvider;
        };
        removeDataProviderTx(value: MsgRemoveDataProvider): {
            typeUrl: string;
            value: MsgRemoveDataProvider;
        };
        setSubmissionCountTx(value: MsgSetSubmissionCount): {
            typeUrl: string;
            value: MsgSetSubmissionCount;
        };
        setHeartbeatTriggerTx(value: MsgSetHeartbeatTrigger): {
            typeUrl: string;
            value: MsgSetHeartbeatTrigger;
        };
        setDeviationThresholdTriggerTx(value: MsgSetDeviationThresholdTrigger): {
            typeUrl: string;
            value: MsgSetDeviationThresholdTrigger;
        };
        setFeedRewardTx(value: MsgSetFeedReward): {
            typeUrl: string;
            value: MsgSetFeedReward;
        };
        requestNewRoundTx(value: MsgRequestNewRound): {
            typeUrl: string;
            value: MsgRequestNewRound;
        };
        feedOwnershipTransferTx(value: MsgFeedOwnershipTransfer): {
            typeUrl: string;
            value: MsgFeedOwnershipTransfer;
        };
        addAccountTx(value: MsgAccount): {
            typeUrl: string;
            value: MsgAccount;
        };
        editAccountTx(value: MsgEditAccount): {
            typeUrl: string;
            value: MsgEditAccount;
        };
    };
};
