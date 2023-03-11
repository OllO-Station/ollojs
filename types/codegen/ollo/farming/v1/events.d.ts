import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventCreatePlan {
    planId: string;
    creator: string;
    poolAddress: string;
}
export interface EventCreatePlanSDKType {
    plan_id: string;
    creator: string;
    pool_address: string;
}
export interface EventFarm {
    farmer: string;
}
export interface EventFarmSDKType {
    farmer: string;
}
export interface EventUnfarm {
    farmer: string;
}
export interface EventUnfarmSDKType {
    farmer: string;
}
export interface EventHarvest {
    farmer: string;
}
export interface EventHarvestSDKType {
    farmer: string;
}
export interface EventCancelPlan {
    farmer: string;
}
export interface EventCancelPlanSDKType {
    farmer: string;
}
export declare const EventCreatePlan: {
    encode(message: EventCreatePlan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreatePlan;
    fromPartial(object: DeepPartial<EventCreatePlan>): EventCreatePlan;
};
export declare const EventFarm: {
    encode(message: EventFarm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventFarm;
    fromPartial(object: DeepPartial<EventFarm>): EventFarm;
};
export declare const EventUnfarm: {
    encode(message: EventUnfarm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUnfarm;
    fromPartial(object: DeepPartial<EventUnfarm>): EventUnfarm;
};
export declare const EventHarvest: {
    encode(message: EventHarvest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventHarvest;
    fromPartial(object: DeepPartial<EventHarvest>): EventHarvest;
};
export declare const EventCancelPlan: {
    encode(message: EventCancelPlan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelPlan;
    fromPartial(object: DeepPartial<EventCancelPlan>): EventCancelPlan;
};
