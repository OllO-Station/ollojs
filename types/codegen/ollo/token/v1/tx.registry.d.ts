import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIssueToken, MsgEditToken, MsgMintToken, MsgBurnToken, MsgTransferTokenOwner } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        issueToken(value: MsgIssueToken): {
            typeUrl: string;
            value: Uint8Array;
        };
        editToken(value: MsgEditToken): {
            typeUrl: string;
            value: Uint8Array;
        };
        mintToken(value: MsgMintToken): {
            typeUrl: string;
            value: Uint8Array;
        };
        burnToken(value: MsgBurnToken): {
            typeUrl: string;
            value: Uint8Array;
        };
        transferTokenOwner(value: MsgTransferTokenOwner): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        issueToken(value: MsgIssueToken): {
            typeUrl: string;
            value: MsgIssueToken;
        };
        editToken(value: MsgEditToken): {
            typeUrl: string;
            value: MsgEditToken;
        };
        mintToken(value: MsgMintToken): {
            typeUrl: string;
            value: MsgMintToken;
        };
        burnToken(value: MsgBurnToken): {
            typeUrl: string;
            value: MsgBurnToken;
        };
        transferTokenOwner(value: MsgTransferTokenOwner): {
            typeUrl: string;
            value: MsgTransferTokenOwner;
        };
    };
    fromPartial: {
        issueToken(value: MsgIssueToken): {
            typeUrl: string;
            value: MsgIssueToken;
        };
        editToken(value: MsgEditToken): {
            typeUrl: string;
            value: MsgEditToken;
        };
        mintToken(value: MsgMintToken): {
            typeUrl: string;
            value: MsgMintToken;
        };
        burnToken(value: MsgBurnToken): {
            typeUrl: string;
            value: MsgBurnToken;
        };
        transferTokenOwner(value: MsgTransferTokenOwner): {
            typeUrl: string;
            value: MsgTransferTokenOwner;
        };
    };
};
