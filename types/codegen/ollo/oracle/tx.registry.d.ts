import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgPricesData } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        pricesData(value: MsgPricesData): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        pricesData(value: MsgPricesData): {
            typeUrl: string;
            value: MsgPricesData;
        };
    };
    fromPartial: {
        pricesData(value: MsgPricesData): {
            typeUrl: string;
            value: MsgPricesData;
        };
    };
};
