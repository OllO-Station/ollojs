import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgIssueToken, MsgIssueTokenResponse, MsgEditToken, MsgEditTokenResponse, MsgMintToken, MsgMintTokenResponse, MsgBurnToken, MsgBurnTokenResponse, MsgTransferTokenOwner, MsgTransferTokenOwnerResponse } from "./tx";
/** Msg defines the token module message service */

export interface Msg {
  /** IssueToken defines a method for issuing a new token */
  issueToken(request: MsgIssueToken): Promise<MsgIssueTokenResponse>;
  /** EditToken defines a method for editing a token */

  editToken(request: MsgEditToken): Promise<MsgEditTokenResponse>;
  /** MintToken defines a method for minting some tokens */

  mintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
  /** BurnToken defines a method for burning some tokens */

  burnToken(request: MsgBurnToken): Promise<MsgBurnTokenResponse>;
  /** TransferTokenOwner defines a method for minting some tokens */

  transferTokenOwner(request: MsgTransferTokenOwner): Promise<MsgTransferTokenOwnerResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.issueToken = this.issueToken.bind(this);
    this.editToken = this.editToken.bind(this);
    this.mintToken = this.mintToken.bind(this);
    this.burnToken = this.burnToken.bind(this);
    this.transferTokenOwner = this.transferTokenOwner.bind(this);
  }

  issueToken(request: MsgIssueToken): Promise<MsgIssueTokenResponse> {
    const data = MsgIssueToken.encode(request).finish();
    const promise = this.rpc.request("ollo.token.v1.Msg", "IssueToken", data);
    return promise.then(data => MsgIssueTokenResponse.decode(new _m0.Reader(data)));
  }

  editToken(request: MsgEditToken): Promise<MsgEditTokenResponse> {
    const data = MsgEditToken.encode(request).finish();
    const promise = this.rpc.request("ollo.token.v1.Msg", "EditToken", data);
    return promise.then(data => MsgEditTokenResponse.decode(new _m0.Reader(data)));
  }

  mintToken(request: MsgMintToken): Promise<MsgMintTokenResponse> {
    const data = MsgMintToken.encode(request).finish();
    const promise = this.rpc.request("ollo.token.v1.Msg", "MintToken", data);
    return promise.then(data => MsgMintTokenResponse.decode(new _m0.Reader(data)));
  }

  burnToken(request: MsgBurnToken): Promise<MsgBurnTokenResponse> {
    const data = MsgBurnToken.encode(request).finish();
    const promise = this.rpc.request("ollo.token.v1.Msg", "BurnToken", data);
    return promise.then(data => MsgBurnTokenResponse.decode(new _m0.Reader(data)));
  }

  transferTokenOwner(request: MsgTransferTokenOwner): Promise<MsgTransferTokenOwnerResponse> {
    const data = MsgTransferTokenOwner.encode(request).finish();
    const promise = this.rpc.request("ollo.token.v1.Msg", "TransferTokenOwner", data);
    return promise.then(data => MsgTransferTokenOwnerResponse.decode(new _m0.Reader(data)));
  }

}