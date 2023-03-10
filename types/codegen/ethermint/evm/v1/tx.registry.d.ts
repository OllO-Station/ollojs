import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgEthereumTx, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        ethereumTx(value: MsgEthereumTx): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        ethereumTx(value: MsgEthereumTx): {
            typeUrl: string;
            value: MsgEthereumTx;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        ethereumTx(value: MsgEthereumTx): {
            typeUrl: string;
            value: MsgEthereumTx;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
