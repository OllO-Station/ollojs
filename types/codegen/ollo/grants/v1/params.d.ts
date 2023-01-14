import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params defines the set of params for the grants module. */
export interface Params {
    /**
     * auction_creation_fee specifies the fee for auction creation.
     * this prevents from spamming attack and it is collected in the community
     * pool
     */
    auctionCreationFee: Coin[];
    /**
     * place_bid_fee specifies the fee for placing a bid for an auction.
     * this prevents from spamming attack and it is collected in the community
     * pool
     */
    placeBidFee: Coin[];
    /**
     * extended_period specifies the extended period that determines how long
     * the extended auction round lasts
     */
    extendedPeriod: number;
}
/** Params defines the set of params for the grants module. */
export interface ParamsSDKType {
    auction_creation_fee: CoinSDKType[];
    place_bid_fee: CoinSDKType[];
    extended_period: number;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
