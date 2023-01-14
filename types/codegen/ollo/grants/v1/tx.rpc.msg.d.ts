import { Rpc } from "../../../helpers";
import { MsgCreateFixedPriceAuction, MsgCreateFixedPriceAuctionResponse, MsgCreateBatchAuction, MsgCreateBatchAuctionResponse, MsgCancelAuction, MsgCancelAuctionResponse, MsgPlaceBid, MsgPlaceBidResponse, MsgModifyBid, MsgModifyBidResponse, MsgAddAllowedBidder, MsgAddAllowedBidderResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * this line is used by Starport scaffolding # proto/tx/rpc
     * Submit a create fixed price auction message.
     */
    createFixedPriceAuction(request: MsgCreateFixedPriceAuction): Promise<MsgCreateFixedPriceAuctionResponse>;
    /** Submit a create batch auction message. */
    createBatchAuction(request: MsgCreateBatchAuction): Promise<MsgCreateBatchAuctionResponse>;
    /** CancelAuction defines a method to cancel the auction message. */
    cancelAuction(request: MsgCancelAuction): Promise<MsgCancelAuctionResponse>;
    /** PlaceBid defines a method to place a bid message. */
    placeBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
    /** ModifyBid defines a method to modify the bid message. */
    modifyBid(request: MsgModifyBid): Promise<MsgModifyBidResponse>;
    /**
     * AddAllowedBidder defines a method sto add a single allowed bidder message.
     * This is for the testing purpose and it must not be used in mainnet.
     */
    addAllowedBidder(request: MsgAddAllowedBidder): Promise<MsgAddAllowedBidderResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createFixedPriceAuction(request: MsgCreateFixedPriceAuction): Promise<MsgCreateFixedPriceAuctionResponse>;
    createBatchAuction(request: MsgCreateBatchAuction): Promise<MsgCreateBatchAuctionResponse>;
    cancelAuction(request: MsgCancelAuction): Promise<MsgCancelAuctionResponse>;
    placeBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
    modifyBid(request: MsgModifyBid): Promise<MsgModifyBidResponse>;
    addAllowedBidder(request: MsgAddAllowedBidder): Promise<MsgAddAllowedBidderResponse>;
}
