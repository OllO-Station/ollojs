import * as _2 from "./base/v1beta1/coin";
import * as _4 from "./base/query/v1beta1/pagination";
export declare namespace cosmos {
    namespace base {
        const v1beta1: {
            Coin: {
                encode(message: _2.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Coin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _2.Coin;
            };
            DecCoin: {
                encode(message: _2.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.DecCoin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _2.DecCoin;
            };
            IntProto: {
                encode(message: _2.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.IntProto;
                fromPartial(object: {
                    int?: string;
                }): _2.IntProto;
            };
            DecProto: {
                encode(message: _2.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.DecProto;
                fromPartial(object: {
                    dec?: string;
                }): _2.DecProto;
            };
        };
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _4.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.PageRequest;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _4.PageRequest;
                };
                PageResponse: {
                    encode(message: _4.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.PageResponse;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    }): _4.PageResponse;
                };
            };
        }
    }
}
