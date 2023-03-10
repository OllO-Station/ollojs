import { MsgModuleOwner } from "./prices";
import { Rpc } from "../../../helpers";
import { MsgBandPricesData, MsgBandPricesDataResponse, MsgFeedData, MsgResponse, MsgModuleOwnershipTransfer, MsgFeed, MsgAddDataProvider, MsgRemoveDataProvider, MsgSetSubmissionCount, MsgSetHeartbeatTrigger, MsgSetDeviationThresholdTrigger, MsgSetFeedReward, MsgRequestNewRound, MsgFeedOwnershipTransfer, MsgAccount, MsgEditAccount } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    bandPricesData(request: MsgBandPricesData): Promise<MsgBandPricesDataResponse>;
    submitFeedDataTx(request: MsgFeedData): Promise<MsgResponse>;
    addModuleOwnerTx(request: MsgModuleOwner): Promise<MsgResponse>;
    moduleOwnershipTransferTx(request: MsgModuleOwnershipTransfer): Promise<MsgResponse>;
    addFeedTx(request: MsgFeed): Promise<MsgResponse>;
    addDataProviderTx(request: MsgAddDataProvider): Promise<MsgResponse>;
    removeDataProviderTx(request: MsgRemoveDataProvider): Promise<MsgResponse>;
    setSubmissionCountTx(request: MsgSetSubmissionCount): Promise<MsgResponse>;
    setHeartbeatTriggerTx(request: MsgSetHeartbeatTrigger): Promise<MsgResponse>;
    setDeviationThresholdTriggerTx(request: MsgSetDeviationThresholdTrigger): Promise<MsgResponse>;
    setFeedRewardTx(request: MsgSetFeedReward): Promise<MsgResponse>;
    requestNewRoundTx(request: MsgRequestNewRound): Promise<MsgResponse>;
    feedOwnershipTransferTx(request: MsgFeedOwnershipTransfer): Promise<MsgResponse>;
    addAccountTx(request: MsgAccount): Promise<MsgResponse>;
    editAccountTx(request: MsgEditAccount): Promise<MsgResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    bandPricesData(request: MsgBandPricesData): Promise<MsgBandPricesDataResponse>;
    submitFeedDataTx(request: MsgFeedData): Promise<MsgResponse>;
    addModuleOwnerTx(request: MsgModuleOwner): Promise<MsgResponse>;
    moduleOwnershipTransferTx(request: MsgModuleOwnershipTransfer): Promise<MsgResponse>;
    addFeedTx(request: MsgFeed): Promise<MsgResponse>;
    addDataProviderTx(request: MsgAddDataProvider): Promise<MsgResponse>;
    removeDataProviderTx(request: MsgRemoveDataProvider): Promise<MsgResponse>;
    setSubmissionCountTx(request: MsgSetSubmissionCount): Promise<MsgResponse>;
    setHeartbeatTriggerTx(request: MsgSetHeartbeatTrigger): Promise<MsgResponse>;
    setDeviationThresholdTriggerTx(request: MsgSetDeviationThresholdTrigger): Promise<MsgResponse>;
    setFeedRewardTx(request: MsgSetFeedReward): Promise<MsgResponse>;
    requestNewRoundTx(request: MsgRequestNewRound): Promise<MsgResponse>;
    feedOwnershipTransferTx(request: MsgFeedOwnershipTransfer): Promise<MsgResponse>;
    addAccountTx(request: MsgAccount): Promise<MsgResponse>;
    editAccountTx(request: MsgEditAccount): Promise<MsgResponse>;
}
