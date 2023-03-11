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

function createBaseEventCreatePlan(): EventCreatePlan {
  return {
    planId: "",
    creator: "",
    poolAddress: ""
  };
}

export const EventCreatePlan = {
  encode(message: EventCreatePlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.planId !== "") {
      writer.uint32(10).string(message.planId);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    if (message.poolAddress !== "") {
      writer.uint32(26).string(message.poolAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreatePlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreatePlan();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.planId = reader.string();
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.poolAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCreatePlan>): EventCreatePlan {
    const message = createBaseEventCreatePlan();
    message.planId = object.planId ?? "";
    message.creator = object.creator ?? "";
    message.poolAddress = object.poolAddress ?? "";
    return message;
  }

};

function createBaseEventFarm(): EventFarm {
  return {
    farmer: ""
  };
}

export const EventFarm = {
  encode(message: EventFarm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.farmer !== "") {
      writer.uint32(10).string(message.farmer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventFarm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFarm();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventFarm>): EventFarm {
    const message = createBaseEventFarm();
    message.farmer = object.farmer ?? "";
    return message;
  }

};

function createBaseEventUnfarm(): EventUnfarm {
  return {
    farmer: ""
  };
}

export const EventUnfarm = {
  encode(message: EventUnfarm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.farmer !== "") {
      writer.uint32(10).string(message.farmer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUnfarm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnfarm();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventUnfarm>): EventUnfarm {
    const message = createBaseEventUnfarm();
    message.farmer = object.farmer ?? "";
    return message;
  }

};

function createBaseEventHarvest(): EventHarvest {
  return {
    farmer: ""
  };
}

export const EventHarvest = {
  encode(message: EventHarvest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.farmer !== "") {
      writer.uint32(10).string(message.farmer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventHarvest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventHarvest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventHarvest>): EventHarvest {
    const message = createBaseEventHarvest();
    message.farmer = object.farmer ?? "";
    return message;
  }

};

function createBaseEventCancelPlan(): EventCancelPlan {
  return {
    farmer: ""
  };
}

export const EventCancelPlan = {
  encode(message: EventCancelPlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.farmer !== "") {
      writer.uint32(10).string(message.farmer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelPlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelPlan();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCancelPlan>): EventCancelPlan {
    const message = createBaseEventCancelPlan();
    message.farmer = object.farmer ?? "";
    return message;
  }

};