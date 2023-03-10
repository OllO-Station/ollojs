import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
  batchSize: number;
  tickPrecision: number;
  feeCollectorAddress: string;
  dustCollectorAddress: string;
  minInitialPoolCoinSupply: string;
  pairCreationFee: Coin[];
  poolCreationFee: Coin[];
  minInitialDepositAmount: string;
  maxPriceLimitRatio: string;
  maxNumMarketMakingOrderTicks: number;
  maxNumMarketMakingOrdersPerPair: number;
  maxOrderLifespan?: Duration;
  swapFeeRate: string;
  withdrawFeeRate: string;
  depositExtraGas: Long;
  withdrawExtraGas: Long;
  orderExtraGas: Long;
  maxNumActivePoolsPerPair: number;
}
export interface ParamsSDKType {
  batch_size: number;
  tick_precision: number;
  fee_collector_address: string;
  dust_collector_address: string;
  min_initial_pool_coin_supply: string;
  pair_creation_fee: CoinSDKType[];
  pool_creation_fee: CoinSDKType[];
  min_initial_deposit_amount: string;
  max_price_limit_ratio: string;
  max_num_market_making_order_ticks: number;
  max_num_market_making_orders_per_pair: number;
  max_order_lifespan?: DurationSDKType;
  swap_fee_rate: string;
  withdraw_fee_rate: string;
  deposit_extra_gas: Long;
  withdraw_extra_gas: Long;
  order_extra_gas: Long;
  max_num_active_pools_per_pair: number;
}

function createBaseParams(): Params {
  return {
    batchSize: 0,
    tickPrecision: 0,
    feeCollectorAddress: "",
    dustCollectorAddress: "",
    minInitialPoolCoinSupply: "",
    pairCreationFee: [],
    poolCreationFee: [],
    minInitialDepositAmount: "",
    maxPriceLimitRatio: "",
    maxNumMarketMakingOrderTicks: 0,
    maxNumMarketMakingOrdersPerPair: 0,
    maxOrderLifespan: undefined,
    swapFeeRate: "",
    withdrawFeeRate: "",
    depositExtraGas: Long.UZERO,
    withdrawExtraGas: Long.UZERO,
    orderExtraGas: Long.UZERO,
    maxNumActivePoolsPerPair: 0
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchSize !== 0) {
      writer.uint32(8).uint32(message.batchSize);
    }

    if (message.tickPrecision !== 0) {
      writer.uint32(16).uint32(message.tickPrecision);
    }

    if (message.feeCollectorAddress !== "") {
      writer.uint32(26).string(message.feeCollectorAddress);
    }

    if (message.dustCollectorAddress !== "") {
      writer.uint32(34).string(message.dustCollectorAddress);
    }

    if (message.minInitialPoolCoinSupply !== "") {
      writer.uint32(42).string(message.minInitialPoolCoinSupply);
    }

    for (const v of message.pairCreationFee) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.poolCreationFee) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.minInitialDepositAmount !== "") {
      writer.uint32(66).string(message.minInitialDepositAmount);
    }

    if (message.maxPriceLimitRatio !== "") {
      writer.uint32(74).string(message.maxPriceLimitRatio);
    }

    if (message.maxNumMarketMakingOrderTicks !== 0) {
      writer.uint32(80).uint32(message.maxNumMarketMakingOrderTicks);
    }

    if (message.maxNumMarketMakingOrdersPerPair !== 0) {
      writer.uint32(88).uint32(message.maxNumMarketMakingOrdersPerPair);
    }

    if (message.maxOrderLifespan !== undefined) {
      Duration.encode(message.maxOrderLifespan, writer.uint32(98).fork()).ldelim();
    }

    if (message.swapFeeRate !== "") {
      writer.uint32(106).string(message.swapFeeRate);
    }

    if (message.withdrawFeeRate !== "") {
      writer.uint32(114).string(message.withdrawFeeRate);
    }

    if (!message.depositExtraGas.isZero()) {
      writer.uint32(120).uint64(message.depositExtraGas);
    }

    if (!message.withdrawExtraGas.isZero()) {
      writer.uint32(128).uint64(message.withdrawExtraGas);
    }

    if (!message.orderExtraGas.isZero()) {
      writer.uint32(136).uint64(message.orderExtraGas);
    }

    if (message.maxNumActivePoolsPerPair !== 0) {
      writer.uint32(144).uint32(message.maxNumActivePoolsPerPair);
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
          message.batchSize = reader.uint32();
          break;

        case 2:
          message.tickPrecision = reader.uint32();
          break;

        case 3:
          message.feeCollectorAddress = reader.string();
          break;

        case 4:
          message.dustCollectorAddress = reader.string();
          break;

        case 5:
          message.minInitialPoolCoinSupply = reader.string();
          break;

        case 6:
          message.pairCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;

        case 8:
          message.minInitialDepositAmount = reader.string();
          break;

        case 9:
          message.maxPriceLimitRatio = reader.string();
          break;

        case 10:
          message.maxNumMarketMakingOrderTicks = reader.uint32();
          break;

        case 11:
          message.maxNumMarketMakingOrdersPerPair = reader.uint32();
          break;

        case 12:
          message.maxOrderLifespan = Duration.decode(reader, reader.uint32());
          break;

        case 13:
          message.swapFeeRate = reader.string();
          break;

        case 14:
          message.withdrawFeeRate = reader.string();
          break;

        case 15:
          message.depositExtraGas = (reader.uint64() as Long);
          break;

        case 16:
          message.withdrawExtraGas = (reader.uint64() as Long);
          break;

        case 17:
          message.orderExtraGas = (reader.uint64() as Long);
          break;

        case 18:
          message.maxNumActivePoolsPerPair = reader.uint32();
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
    message.batchSize = object.batchSize ?? 0;
    message.tickPrecision = object.tickPrecision ?? 0;
    message.feeCollectorAddress = object.feeCollectorAddress ?? "";
    message.dustCollectorAddress = object.dustCollectorAddress ?? "";
    message.minInitialPoolCoinSupply = object.minInitialPoolCoinSupply ?? "";
    message.pairCreationFee = object.pairCreationFee?.map(e => Coin.fromPartial(e)) || [];
    message.poolCreationFee = object.poolCreationFee?.map(e => Coin.fromPartial(e)) || [];
    message.minInitialDepositAmount = object.minInitialDepositAmount ?? "";
    message.maxPriceLimitRatio = object.maxPriceLimitRatio ?? "";
    message.maxNumMarketMakingOrderTicks = object.maxNumMarketMakingOrderTicks ?? 0;
    message.maxNumMarketMakingOrdersPerPair = object.maxNumMarketMakingOrdersPerPair ?? 0;
    message.maxOrderLifespan = object.maxOrderLifespan !== undefined && object.maxOrderLifespan !== null ? Duration.fromPartial(object.maxOrderLifespan) : undefined;
    message.swapFeeRate = object.swapFeeRate ?? "";
    message.withdrawFeeRate = object.withdrawFeeRate ?? "";
    message.depositExtraGas = object.depositExtraGas !== undefined && object.depositExtraGas !== null ? Long.fromValue(object.depositExtraGas) : Long.UZERO;
    message.withdrawExtraGas = object.withdrawExtraGas !== undefined && object.withdrawExtraGas !== null ? Long.fromValue(object.withdrawExtraGas) : Long.UZERO;
    message.orderExtraGas = object.orderExtraGas !== undefined && object.orderExtraGas !== null ? Long.fromValue(object.orderExtraGas) : Long.UZERO;
    message.maxNumActivePoolsPerPair = object.maxNumActivePoolsPerPair ?? 0;
    return message;
  }

};