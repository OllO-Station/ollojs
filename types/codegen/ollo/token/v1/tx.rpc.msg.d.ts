import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    issueToken(request: MsgIssueToken): Promise<MsgIssueTokenResponse>;
    editToken(request: MsgEditToken): Promise<MsgEditTokenResponse>;
    mintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
    burnToken(request: MsgBurnToken): Promise<MsgBurnTokenResponse>;
    transferTokenOwner(request: MsgTransferTokenOwner): Promise<MsgTransferTokenOwnerResponse>;
}
