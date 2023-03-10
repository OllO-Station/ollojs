import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { IncentiveProps, IncentivePropsSDKType, IncentivePair, IncentivePairSDKType } from "./incentive";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params defines the set of params for the marketmaker module. */

export interface Params {
  incentiveBudgetAddress: string;
  depositAmount: Coin[];
  props?: IncentiveProps;
  incentivePairs: IncentivePair[];
}
/** Params defines the set of params for the marketmaker module. */

export interface ParamsSDKType {
  incentive_budget_address: string;
  deposit_amount: CoinSDKType[];
  props?: IncentivePropsSDKType;
  incentive_pairs: IncentivePairSDKType[];
}

function createBaseParams(): Params {
  return {
    incentiveBudgetAddress: "",
    depositAmount: [],
    props: undefined,
    incentivePairs: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.incentiveBudgetAddress !== "") {
      writer.uint32(10).string(message.incentiveBudgetAddress);
    }

    for (const v of message.depositAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.props !== undefined) {
      IncentiveProps.encode(message.props, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.incentivePairs) {
      IncentivePair.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.incentiveBudgetAddress = reader.string();
          break;

        case 2:
          message.depositAmount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.props = IncentiveProps.decode(reader, reader.uint32());
          break;

        case 4:
          message.incentivePairs.push(IncentivePair.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.incentiveBudgetAddress = object.incentiveBudgetAddress ?? "";
    message.depositAmount = object.depositAmount?.map(e => Coin.fromPartial(e)) || [];
    message.props = object.props !== undefined && object.props !== null ? IncentiveProps.fromPartial(object.props) : undefined;
    message.incentivePairs = object.incentivePairs?.map(e => IncentivePair.fromPartial(e)) || [];
    return message;
  }

};