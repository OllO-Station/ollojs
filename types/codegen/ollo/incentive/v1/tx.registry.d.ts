import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgApplyMarketMaker, MsgClaimIncentive } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        applyMarketMaker(value: MsgApplyMarketMaker): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimIncentive(value: MsgClaimIncentive): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        applyMarketMaker(value: MsgApplyMarketMaker): {
            typeUrl: string;
            value: MsgApplyMarketMaker;
        };
        claimIncentive(value: MsgClaimIncentive): {
            typeUrl: string;
            value: MsgClaimIncentive;
        };
    };
    fromPartial: {
        applyMarketMaker(value: MsgApplyMarketMaker): {
            typeUrl: string;
            value: MsgApplyMarketMaker;
        };
        claimIncentive(value: MsgClaimIncentive): {
            typeUrl: string;
            value: MsgClaimIncentive;
        };
    };
};
