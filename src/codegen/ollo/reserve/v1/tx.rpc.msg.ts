import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgMintDenom, MsgMintDenomResponse, MsgBurnDenom, MsgBurnDenomResponse, MsgChangeDenomAdmin, MsgChangeDenomAdminResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse, MsgForceTransfer, MsgForceTransferResponse } from "./tx";
/** Msg defines the tokefactory module's gRPC message service. */

export interface Msg {
  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  mintDenom(request: MsgMintDenom): Promise<MsgMintDenomResponse>;
  burnDenom(request: MsgBurnDenom): Promise<MsgBurnDenomResponse>;
  changeDenomAdmin(request: MsgChangeDenomAdmin): Promise<MsgChangeDenomAdminResponse>;
  setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>;
  forceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createDenom = this.createDenom.bind(this);
    this.mintDenom = this.mintDenom.bind(this);
    this.burnDenom = this.burnDenom.bind(this);
    this.changeDenomAdmin = this.changeDenomAdmin.bind(this);
    this.setDenomMetadata = this.setDenomMetadata.bind(this);
    this.forceTransfer = this.forceTransfer.bind(this);
  }

  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request("ollo.reserve.v1.Msg", "CreateDenom", data);
    return promise.then(data => MsgCreateDenomResponse.decode(new _m0.Reader(data)));
  }

  mintDenom(request: MsgMintDenom): Promise<MsgMintDenomResponse> {
    const data = MsgMintDenom.encode(request).finish();
    const promise = this.rpc.request("ollo.reserve.v1.Msg", "MintDenom", data);
    return promise.then(data => MsgMintDenomResponse.decode(new _m0.Reader(data)));
  }

  burnDenom(request: MsgBurnDenom): Promise<MsgBurnDenomResponse> {
    const data = MsgBurnDenom.encode(request).finish();
    const promise = this.rpc.request("ollo.reserve.v1.Msg", "BurnDenom", data);
    return promise.then(data => MsgBurnDenomResponse.decode(new _m0.Reader(data)));
  }

  changeDenomAdmin(request: MsgChangeDenomAdmin): Promise<MsgChangeDenomAdminResponse> {
    const data = MsgChangeDenomAdmin.encode(request).finish();
    const promise = this.rpc.request("ollo.reserve.v1.Msg", "ChangeDenomAdmin", data);
    return promise.then(data => MsgChangeDenomAdminResponse.decode(new _m0.Reader(data)));
  }

  setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse> {
    const data = MsgSetDenomMetadata.encode(request).finish();
    const promise = this.rpc.request("ollo.reserve.v1.Msg", "SetDenomMetadata", data);
    return promise.then(data => MsgSetDenomMetadataResponse.decode(new _m0.Reader(data)));
  }

  forceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse> {
    const data = MsgForceTransfer.encode(request).finish();
    const promise = this.rpc.request("ollo.reserve.v1.Msg", "ForceTransfer", data);
    return promise.then(data => MsgForceTransferResponse.decode(new _m0.Reader(data)));
  }

}