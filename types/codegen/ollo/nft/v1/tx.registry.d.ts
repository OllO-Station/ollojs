import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIssueDenom, MsgTransferDenom, MsgMintNFT, MsgBurnNFT, MsgEditNFT, MsgSendNFT } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        issueDenom(value: MsgIssueDenom): {
            typeUrl: string;
            value: Uint8Array;
        };
        transferDenom(value: MsgTransferDenom): {
            typeUrl: string;
            value: Uint8Array;
        };
        mintNFT(value: MsgMintNFT): {
            typeUrl: string;
            value: Uint8Array;
        };
        burnNFT(value: MsgBurnNFT): {
            typeUrl: string;
            value: Uint8Array;
        };
        editNFT(value: MsgEditNFT): {
            typeUrl: string;
            value: Uint8Array;
        };
        sendNFT(value: MsgSendNFT): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        issueDenom(value: MsgIssueDenom): {
            typeUrl: string;
            value: MsgIssueDenom;
        };
        transferDenom(value: MsgTransferDenom): {
            typeUrl: string;
            value: MsgTransferDenom;
        };
        mintNFT(value: MsgMintNFT): {
            typeUrl: string;
            value: MsgMintNFT;
        };
        burnNFT(value: MsgBurnNFT): {
            typeUrl: string;
            value: MsgBurnNFT;
        };
        editNFT(value: MsgEditNFT): {
            typeUrl: string;
            value: MsgEditNFT;
        };
        sendNFT(value: MsgSendNFT): {
            typeUrl: string;
            value: MsgSendNFT;
        };
    };
    fromPartial: {
        issueDenom(value: MsgIssueDenom): {
            typeUrl: string;
            value: MsgIssueDenom;
        };
        transferDenom(value: MsgTransferDenom): {
            typeUrl: string;
            value: MsgTransferDenom;
        };
        mintNFT(value: MsgMintNFT): {
            typeUrl: string;
            value: MsgMintNFT;
        };
        burnNFT(value: MsgBurnNFT): {
            typeUrl: string;
            value: MsgBurnNFT;
        };
        editNFT(value: MsgEditNFT): {
            typeUrl: string;
            value: MsgEditNFT;
        };
        sendNFT(value: MsgSendNFT): {
            typeUrl: string;
            value: MsgSendNFT;
        };
    };
};
