import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateFixedPriceAuction, MsgCreateBatchAuction, MsgCancelAuction, MsgPlaceBid, MsgModifyBid, MsgAddAllowedBidder } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createFixedPriceAuction(value: MsgCreateFixedPriceAuction): {
            typeUrl: string;
            value: Uint8Array;
        };
        createBatchAuction(value: MsgCreateBatchAuction): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelAuction(value: MsgCancelAuction): {
            typeUrl: string;
            value: Uint8Array;
        };
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: Uint8Array;
        };
        modifyBid(value: MsgModifyBid): {
            typeUrl: string;
            value: Uint8Array;
        };
        addAllowedBidder(value: MsgAddAllowedBidder): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createFixedPriceAuction(value: MsgCreateFixedPriceAuction): {
            typeUrl: string;
            value: MsgCreateFixedPriceAuction;
        };
        createBatchAuction(value: MsgCreateBatchAuction): {
            typeUrl: string;
            value: MsgCreateBatchAuction;
        };
        cancelAuction(value: MsgCancelAuction): {
            typeUrl: string;
            value: MsgCancelAuction;
        };
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: MsgPlaceBid;
        };
        modifyBid(value: MsgModifyBid): {
            typeUrl: string;
            value: MsgModifyBid;
        };
        addAllowedBidder(value: MsgAddAllowedBidder): {
            typeUrl: string;
            value: MsgAddAllowedBidder;
        };
    };
    fromPartial: {
        createFixedPriceAuction(value: MsgCreateFixedPriceAuction): {
            typeUrl: string;
            value: MsgCreateFixedPriceAuction;
        };
        createBatchAuction(value: MsgCreateBatchAuction): {
            typeUrl: string;
            value: MsgCreateBatchAuction;
        };
        cancelAuction(value: MsgCancelAuction): {
            typeUrl: string;
            value: MsgCancelAuction;
        };
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: MsgPlaceBid;
        };
        modifyBid(value: MsgModifyBid): {
            typeUrl: string;
            value: MsgModifyBid;
        };
        addAllowedBidder(value: MsgAddAllowedBidder): {
            typeUrl: string;
            value: MsgAddAllowedBidder;
        };
    };
};
