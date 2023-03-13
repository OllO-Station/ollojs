import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface ProprosalAddDenomFeed {
    title: string;
    description: string;
    denomIds: string[];
}
export interface ProprosalAddDenomFeedSDKType {
    title: string;
    description: string;
    denom_ids: string[];
}
export interface ProprosalRemoveDenomFeed {
    title: string;
    description: string;
    denomIds: string[];
}
export interface ProprosalRemoveDenomFeedSDKType {
    title: string;
    description: string;
    denom_ids: string[];
}
export declare const ProprosalAddDenomFeed: {
    encode(message: ProprosalAddDenomFeed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProprosalAddDenomFeed;
    fromPartial(object: DeepPartial<ProprosalAddDenomFeed>): ProprosalAddDenomFeed;
};
export declare const ProprosalRemoveDenomFeed: {
    encode(message: ProprosalRemoveDenomFeed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProprosalRemoveDenomFeed;
    fromPartial(object: DeepPartial<ProprosalRemoveDenomFeed>): ProprosalRemoveDenomFeed;
};
