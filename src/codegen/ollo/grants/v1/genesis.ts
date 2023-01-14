import { Params, ParamsSDKType } from "./params";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { AllowedBidderRecord, AllowedBidderRecordSDKType, Bid, BidSDKType, VestingQueue, VestingQueueSDKType } from "./grants";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the grants module's genesis state. */

export interface GenesisState {
  /** params defines all the parameters for the module */
  params?: Params;
  /**
   * auctions define the auction interface for genesis state; the module
   * supports FixedPriceAuction or BatchAuction
   */

  auctions: Any[];
  /** allowed_bidder_records define the allowed bidder records for the auction */

  allowedBidderRecords: AllowedBidderRecord[];
  /** bids define the bid records used for genesis state */

  bids: Bid[];
  /**
   * vesting_queues define the vesting queue records used for genesis
   * state
   */

  vestingQueues: VestingQueue[];
}
/** GenesisState defines the grants module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  auctions: AnySDKType[];
  allowed_bidder_records: AllowedBidderRecordSDKType[];
  bids: BidSDKType[];
  vesting_queues: VestingQueueSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    auctions: [],
    allowedBidderRecords: [],
    bids: [],
    vestingQueues: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.auctions) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.allowedBidderRecords) {
      AllowedBidderRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.vestingQueues) {
      VestingQueue.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.auctions.push(Any.decode(reader, reader.uint32()));
          break;

        case 3:
          message.allowedBidderRecords.push(AllowedBidderRecord.decode(reader, reader.uint32()));
          break;

        case 4:
          message.bids.push(Bid.decode(reader, reader.uint32()));
          break;

        case 5:
          message.vestingQueues.push(VestingQueue.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.auctions = object.auctions?.map(e => Any.fromPartial(e)) || [];
    message.allowedBidderRecords = object.allowedBidderRecords?.map(e => AllowedBidderRecord.fromPartial(e)) || [];
    message.bids = object.bids?.map(e => Bid.fromPartial(e)) || [];
    message.vestingQueues = object.vestingQueues?.map(e => VestingQueue.fromPartial(e)) || [];
    return message;
  }

};