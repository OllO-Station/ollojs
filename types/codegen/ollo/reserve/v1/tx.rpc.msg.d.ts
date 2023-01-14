import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    mintDenom(request: MsgMintDenom): Promise<MsgMintDenomResponse>;
    burnDenom(request: MsgBurnDenom): Promise<MsgBurnDenomResponse>;
    changeDenomAdmin(request: MsgChangeDenomAdmin): Promise<MsgChangeDenomAdminResponse>;
    setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>;
    forceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse>;
}
