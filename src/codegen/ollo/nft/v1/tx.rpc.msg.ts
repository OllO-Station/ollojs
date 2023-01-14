import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgIssueDenom, MsgIssueDenomResponse, MsgTransferDenom, MsgTransferDenomResponse, MsgMintNFT, MsgMintNFTResponse, MsgBurnNFT, MsgBurnNFTResponse, MsgEditNFT, MsgEditNFTResponse, MsgSendNFT, MsgSendNFTResponse } from "./tx";
/** Msg defines the NFT Msg service. */

export interface Msg {
  /** IssueDenom defines a method of issuing a denom */
  issueDenom(request: MsgIssueDenom): Promise<MsgIssueDenomResponse>;
  /** TransferDenom defines a method of transferring a denom */

  transferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse>;
  /** Mint NFT defines a method for minting a new NFT */

  mintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
  /** Burn NFT defines a method for burning an existing NFT */

  burnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
  /** Edit NFT defines a method for editing an existing NFT */

  editNFT(request: MsgEditNFT): Promise<MsgEditNFTResponse>;
  /** Send NFT defines a method for sending an existing NFT */

  sendNFT(request: MsgSendNFT): Promise<MsgSendNFTResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.issueDenom = this.issueDenom.bind(this);
    this.transferDenom = this.transferDenom.bind(this);
    this.mintNFT = this.mintNFT.bind(this);
    this.burnNFT = this.burnNFT.bind(this);
    this.editNFT = this.editNFT.bind(this);
    this.sendNFT = this.sendNFT.bind(this);
  }

  issueDenom(request: MsgIssueDenom): Promise<MsgIssueDenomResponse> {
    const data = MsgIssueDenom.encode(request).finish();
    const promise = this.rpc.request("ollo.nft.v1.Msg", "IssueDenom", data);
    return promise.then(data => MsgIssueDenomResponse.decode(new _m0.Reader(data)));
  }

  transferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse> {
    const data = MsgTransferDenom.encode(request).finish();
    const promise = this.rpc.request("ollo.nft.v1.Msg", "TransferDenom", data);
    return promise.then(data => MsgTransferDenomResponse.decode(new _m0.Reader(data)));
  }

  mintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse> {
    const data = MsgMintNFT.encode(request).finish();
    const promise = this.rpc.request("ollo.nft.v1.Msg", "MintNFT", data);
    return promise.then(data => MsgMintNFTResponse.decode(new _m0.Reader(data)));
  }

  burnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse> {
    const data = MsgBurnNFT.encode(request).finish();
    const promise = this.rpc.request("ollo.nft.v1.Msg", "BurnNFT", data);
    return promise.then(data => MsgBurnNFTResponse.decode(new _m0.Reader(data)));
  }

  editNFT(request: MsgEditNFT): Promise<MsgEditNFTResponse> {
    const data = MsgEditNFT.encode(request).finish();
    const promise = this.rpc.request("ollo.nft.v1.Msg", "EditNFT", data);
    return promise.then(data => MsgEditNFTResponse.decode(new _m0.Reader(data)));
  }

  sendNFT(request: MsgSendNFT): Promise<MsgSendNFTResponse> {
    const data = MsgSendNFT.encode(request).finish();
    const promise = this.rpc.request("ollo.nft.v1.Msg", "SendNFT", data);
    return promise.then(data => MsgSendNFTResponse.decode(new _m0.Reader(data)));
  }

}