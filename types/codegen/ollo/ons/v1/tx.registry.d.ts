import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBuyName, MsgSellName, MsgSetName, MsgDeleteName, MsgAddThread, MsgDeleteThread } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        buyName(value: MsgBuyName): {
            typeUrl: string;
            value: Uint8Array;
        };
        sellName(value: MsgSellName): {
            typeUrl: string;
            value: Uint8Array;
        };
        setName(value: MsgSetName): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteName(value: MsgDeleteName): {
            typeUrl: string;
            value: Uint8Array;
        };
        addThread(value: MsgAddThread): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteThread(value: MsgDeleteThread): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        buyName(value: MsgBuyName): {
            typeUrl: string;
            value: MsgBuyName;
        };
        sellName(value: MsgSellName): {
            typeUrl: string;
            value: MsgSellName;
        };
        setName(value: MsgSetName): {
            typeUrl: string;
            value: MsgSetName;
        };
        deleteName(value: MsgDeleteName): {
            typeUrl: string;
            value: MsgDeleteName;
        };
        addThread(value: MsgAddThread): {
            typeUrl: string;
            value: MsgAddThread;
        };
        deleteThread(value: MsgDeleteThread): {
            typeUrl: string;
            value: MsgDeleteThread;
        };
    };
    fromPartial: {
        buyName(value: MsgBuyName): {
            typeUrl: string;
            value: MsgBuyName;
        };
        sellName(value: MsgSellName): {
            typeUrl: string;
            value: MsgSellName;
        };
        setName(value: MsgSetName): {
            typeUrl: string;
            value: MsgSetName;
        };
        deleteName(value: MsgDeleteName): {
            typeUrl: string;
            value: MsgDeleteName;
        };
        addThread(value: MsgAddThread): {
            typeUrl: string;
            value: MsgAddThread;
        };
        deleteThread(value: MsgDeleteThread): {
            typeUrl: string;
            value: MsgDeleteThread;
        };
    };
};
