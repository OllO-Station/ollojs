import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface Feed {
    owner: string;
    data: string;
    name: string;
    updatedAt?: Date;
}
export interface FeedSDKType {
    owner: string;
    data: string;
    name: string;
    updated_at?: Date;
}
export declare const Feed: {
    encode(message: Feed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Feed;
    fromPartial(object: DeepPartial<Feed>): Feed;
};
