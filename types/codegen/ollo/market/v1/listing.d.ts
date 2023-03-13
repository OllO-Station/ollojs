import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface NftListing {
    id: string;
    nftId: string;
    denomId: string;
    creator: string;
    price?: Coin;
}
export interface NftListingSDKType {
    id: string;
    nft_id: string;
    denom_id: string;
    creator: string;
    price?: CoinSDKType;
}
export declare const NftListing: {
    encode(message: NftListing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NftListing;
    fromPartial(object: DeepPartial<NftListing>): NftListing;
};
