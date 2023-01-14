import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDenom, MsgMintDenom, MsgBurnDenom, MsgChangeDenomAdmin, MsgSetDenomMetadata, MsgForceTransfer } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: Uint8Array;
        };
        mintDenom(value: MsgMintDenom): {
            typeUrl: string;
            value: Uint8Array;
        };
        burnDenom(value: MsgBurnDenom): {
            typeUrl: string;
            value: Uint8Array;
        };
        changeDenomAdmin(value: MsgChangeDenomAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
        setDenomMetadata(value: MsgSetDenomMetadata): {
            typeUrl: string;
            value: Uint8Array;
        };
        forceTransfer(value: MsgForceTransfer): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: MsgCreateDenom;
        };
        mintDenom(value: MsgMintDenom): {
            typeUrl: string;
            value: MsgMintDenom;
        };
        burnDenom(value: MsgBurnDenom): {
            typeUrl: string;
            value: MsgBurnDenom;
        };
        changeDenomAdmin(value: MsgChangeDenomAdmin): {
            typeUrl: string;
            value: MsgChangeDenomAdmin;
        };
        setDenomMetadata(value: MsgSetDenomMetadata): {
            typeUrl: string;
            value: MsgSetDenomMetadata;
        };
        forceTransfer(value: MsgForceTransfer): {
            typeUrl: string;
            value: MsgForceTransfer;
        };
    };
    fromPartial: {
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: MsgCreateDenom;
        };
        mintDenom(value: MsgMintDenom): {
            typeUrl: string;
            value: MsgMintDenom;
        };
        burnDenom(value: MsgBurnDenom): {
            typeUrl: string;
            value: MsgBurnDenom;
        };
        changeDenomAdmin(value: MsgChangeDenomAdmin): {
            typeUrl: string;
            value: MsgChangeDenomAdmin;
        };
        setDenomMetadata(value: MsgSetDenomMetadata): {
            typeUrl: string;
            value: MsgSetDenomMetadata;
        };
        forceTransfer(value: MsgForceTransfer): {
            typeUrl: string;
            value: MsgForceTransfer;
        };
    };
};
