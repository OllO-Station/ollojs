import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateRequest, MsgDepositRequest, MsgWithdrawRequest, MsgDrawRequest, MsgRepayRequest, MsgCloseRequest } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        msgCreate(value: MsgCreateRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        msgDeposit(value: MsgDepositRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        msgWithdraw(value: MsgWithdrawRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        msgDraw(value: MsgDrawRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        msgRepay(value: MsgRepayRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        msgClose(value: MsgCloseRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        msgCreate(value: MsgCreateRequest): {
            typeUrl: string;
            value: MsgCreateRequest;
        };
        msgDeposit(value: MsgDepositRequest): {
            typeUrl: string;
            value: MsgDepositRequest;
        };
        msgWithdraw(value: MsgWithdrawRequest): {
            typeUrl: string;
            value: MsgWithdrawRequest;
        };
        msgDraw(value: MsgDrawRequest): {
            typeUrl: string;
            value: MsgDrawRequest;
        };
        msgRepay(value: MsgRepayRequest): {
            typeUrl: string;
            value: MsgRepayRequest;
        };
        msgClose(value: MsgCloseRequest): {
            typeUrl: string;
            value: MsgCloseRequest;
        };
    };
    fromPartial: {
        msgCreate(value: MsgCreateRequest): {
            typeUrl: string;
            value: MsgCreateRequest;
        };
        msgDeposit(value: MsgDepositRequest): {
            typeUrl: string;
            value: MsgDepositRequest;
        };
        msgWithdraw(value: MsgWithdrawRequest): {
            typeUrl: string;
            value: MsgWithdrawRequest;
        };
        msgDraw(value: MsgDrawRequest): {
            typeUrl: string;
            value: MsgDrawRequest;
        };
        msgRepay(value: MsgRepayRequest): {
            typeUrl: string;
            value: MsgRepayRequest;
        };
        msgClose(value: MsgCloseRequest): {
            typeUrl: string;
            value: MsgCloseRequest;
        };
    };
};
