import { Params, ParamsSDKType } from "./params";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { AllowedBidderRecord, AllowedBidderRecordSDKType, Bid, BidSDKType, VestingQueue, VestingQueueSDKType } from "./grants";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the grants module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters for the module */
    params?: Params;
    /**
     * auctions define the auction interface for genesis state; the module
     * supports FixedPriceAuction or BatchAuction
     */
    auctions: Any[];
    /** allowed_bidder_records define the allowed bidder records for the auction */
    allowedBidderRecords: AllowedBidderRecord[];
    /** bids define the bid records used for genesis state */
    bids: Bid[];
    /**
     * vesting_queues define the vesting queue records used for genesis
     * state
     */
    vestingQueues: VestingQueue[];
}
/** GenesisState defines the grants module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    auctions: AnySDKType[];
    allowed_bidder_records: AllowedBidderRecordSDKType[];
    bids: BidSDKType[];
    vesting_queues: VestingQueueSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
