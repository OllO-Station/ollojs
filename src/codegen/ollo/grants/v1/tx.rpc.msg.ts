import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createFixedPriceAuction = this.createFixedPriceAuction.bind(this);
    this.createBatchAuction = this.createBatchAuction.bind(this);
    this.cancelAuction = this.cancelAuction.bind(this);
    this.placeBid = this.placeBid.bind(this);
    this.modifyBid = this.modifyBid.bind(this);
    this.addAllowedBidder = this.addAllowedBidder.bind(this);
  }

  createFixedPriceAuction(request: MsgCreateFixedPriceAuction): Promise<MsgCreateFixedPriceAuctionResponse> {
    const data = MsgCreateFixedPriceAuction.encode(request).finish();
    const promise = this.rpc.request("ollo.grants.v1.Msg", "CreateFixedPriceAuction", data);
    return promise.then(data => MsgCreateFixedPriceAuctionResponse.decode(new _m0.Reader(data)));
  }

  createBatchAuction(request: MsgCreateBatchAuction): Promise<MsgCreateBatchAuctionResponse> {
    const data = MsgCreateBatchAuction.encode(request).finish();
    const promise = this.rpc.request("ollo.grants.v1.Msg", "CreateBatchAuction", data);
    return promise.then(data => MsgCreateBatchAuctionResponse.decode(new _m0.Reader(data)));
  }

  cancelAuction(request: MsgCancelAuction): Promise<MsgCancelAuctionResponse> {
    const data = MsgCancelAuction.encode(request).finish();
    const promise = this.rpc.request("ollo.grants.v1.Msg", "CancelAuction", data);
    return promise.then(data => MsgCancelAuctionResponse.decode(new _m0.Reader(data)));
  }

  placeBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse> {
    const data = MsgPlaceBid.encode(request).finish();
    const promise = this.rpc.request("ollo.grants.v1.Msg", "PlaceBid", data);
    return promise.then(data => MsgPlaceBidResponse.decode(new _m0.Reader(data)));
  }

  modifyBid(request: MsgModifyBid): Promise<MsgModifyBidResponse> {
    const data = MsgModifyBid.encode(request).finish();
    const promise = this.rpc.request("ollo.grants.v1.Msg", "ModifyBid", data);
    return promise.then(data => MsgModifyBidResponse.decode(new _m0.Reader(data)));
  }

  addAllowedBidder(request: MsgAddAllowedBidder): Promise<MsgAddAllowedBidderResponse> {
    const data = MsgAddAllowedBidder.encode(request).finish();
    const promise = this.rpc.request("ollo.grants.v1.Msg", "AddAllowedBidder", data);
    return promise.then(data => MsgAddAllowedBidderResponse.decode(new _m0.Reader(data)));
  }

}