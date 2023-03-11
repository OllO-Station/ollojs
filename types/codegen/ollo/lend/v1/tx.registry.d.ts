import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRequestLoan, MsgApproveLoan, MsgRepayLoan, MsgLiquidateLoan, MsgCancelLoan } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        requestLoan(value: MsgRequestLoan): {
            typeUrl: string;
            value: Uint8Array;
        };
        approveLoan(value: MsgApproveLoan): {
            typeUrl: string;
            value: Uint8Array;
        };
        repayLoan(value: MsgRepayLoan): {
            typeUrl: string;
            value: Uint8Array;
        };
        liquidateLoan(value: MsgLiquidateLoan): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelLoan(value: MsgCancelLoan): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        requestLoan(value: MsgRequestLoan): {
            typeUrl: string;
            value: MsgRequestLoan;
        };
        approveLoan(value: MsgApproveLoan): {
            typeUrl: string;
            value: MsgApproveLoan;
        };
        repayLoan(value: MsgRepayLoan): {
            typeUrl: string;
            value: MsgRepayLoan;
        };
        liquidateLoan(value: MsgLiquidateLoan): {
            typeUrl: string;
            value: MsgLiquidateLoan;
        };
        cancelLoan(value: MsgCancelLoan): {
            typeUrl: string;
            value: MsgCancelLoan;
        };
    };
    fromPartial: {
        requestLoan(value: MsgRequestLoan): {
            typeUrl: string;
            value: MsgRequestLoan;
        };
        approveLoan(value: MsgApproveLoan): {
            typeUrl: string;
            value: MsgApproveLoan;
        };
        repayLoan(value: MsgRepayLoan): {
            typeUrl: string;
            value: MsgRepayLoan;
        };
        liquidateLoan(value: MsgLiquidateLoan): {
            typeUrl: string;
            value: MsgLiquidateLoan;
        };
        cancelLoan(value: MsgCancelLoan): {
            typeUrl: string;
            value: MsgCancelLoan;
        };
    };
};
