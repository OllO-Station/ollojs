import { FeedMarket, FeedMarketSDKType } from "./store";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
    markets: FeedMarket[];
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    markets: FeedMarketSDKType[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
