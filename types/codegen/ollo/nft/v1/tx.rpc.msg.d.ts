import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    issueDenom(request: MsgIssueDenom): Promise<MsgIssueDenomResponse>;
    transferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse>;
    mintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
    burnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
    editNFT(request: MsgEditNFT): Promise<MsgEditNFTResponse>;
    sendNFT(request: MsgSendNFT): Promise<MsgSendNFTResponse>;
}
