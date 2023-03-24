import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgListNft, MsgListNftResponse, MsgBuyNft, MsgBuyNftResponse, MsgDelistNft, MsgDelistNftResponse, MsgEditNftListing, MsgEditNftListingResponse, MsgCreateNftAuction, MsgCreateNftAuctionResponse, MsgCancelNftAuction, MsgCancelNftAuctionResponse, MsgPlaceNftBid, MsgPlaceNftBidResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  /** ListNft defines a method for listing an NFT. */
  listNft(request: MsgListNft): Promise<MsgListNftResponse>;
  /** BuyNft defines a method for buying an NFT. */

  buyNft(request: MsgBuyNft): Promise<MsgBuyNftResponse>;
  /** DelistNft defines a method for delisting an NFT. */

  delistNft(request: MsgDelistNft): Promise<MsgDelistNftResponse>;
  /** EditNftListing defines a method for editing an NFT listing. */

  editNftListing(request: MsgEditNftListing): Promise<MsgEditNftListingResponse>;
  /** CreateNftAuction defines a method for creating an NFT auction. */

  createNftAuction(request: MsgCreateNftAuction): Promise<MsgCreateNftAuctionResponse>;
  /** CancelNftAuction defines a method for canceling an NFT auction. */

  cancelNftAuction(request: MsgCancelNftAuction): Promise<MsgCancelNftAuctionResponse>;
  /** PlaceNftBid defines a method for placing a bid on an NFT auction. */

  placeNftBid(request: MsgPlaceNftBid): Promise<MsgPlaceNftBidResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.listNft = this.listNft.bind(this);
    this.buyNft = this.buyNft.bind(this);
    this.delistNft = this.delistNft.bind(this);
    this.editNftListing = this.editNftListing.bind(this);
    this.createNftAuction = this.createNftAuction.bind(this);
    this.cancelNftAuction = this.cancelNftAuction.bind(this);
    this.placeNftBid = this.placeNftBid.bind(this);
  }

  listNft(request: MsgListNft): Promise<MsgListNftResponse> {
    const data = MsgListNft.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Msg", "ListNft", data);
    return promise.then(data => MsgListNftResponse.decode(new _m0.Reader(data)));
  }

  buyNft(request: MsgBuyNft): Promise<MsgBuyNftResponse> {
    const data = MsgBuyNft.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Msg", "BuyNft", data);
    return promise.then(data => MsgBuyNftResponse.decode(new _m0.Reader(data)));
  }

  delistNft(request: MsgDelistNft): Promise<MsgDelistNftResponse> {
    const data = MsgDelistNft.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Msg", "DelistNft", data);
    return promise.then(data => MsgDelistNftResponse.decode(new _m0.Reader(data)));
  }

  editNftListing(request: MsgEditNftListing): Promise<MsgEditNftListingResponse> {
    const data = MsgEditNftListing.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Msg", "EditNftListing", data);
    return promise.then(data => MsgEditNftListingResponse.decode(new _m0.Reader(data)));
  }

  createNftAuction(request: MsgCreateNftAuction): Promise<MsgCreateNftAuctionResponse> {
    const data = MsgCreateNftAuction.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Msg", "CreateNftAuction", data);
    return promise.then(data => MsgCreateNftAuctionResponse.decode(new _m0.Reader(data)));
  }

  cancelNftAuction(request: MsgCancelNftAuction): Promise<MsgCancelNftAuctionResponse> {
    const data = MsgCancelNftAuction.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Msg", "CancelNftAuction", data);
    return promise.then(data => MsgCancelNftAuctionResponse.decode(new _m0.Reader(data)));
  }

  placeNftBid(request: MsgPlaceNftBid): Promise<MsgPlaceNftBidResponse> {
    const data = MsgPlaceNftBid.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Msg", "PlaceNftBid", data);
    return promise.then(data => MsgPlaceNftBidResponse.decode(new _m0.Reader(data)));
  }

}