import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos_proto/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
/** Params defines the parameters for the module. */

export interface Params {
  poolParams?: PoolParams;
  orderParams?: OrderParams;
  feeParams?: FeeParams;
  marketParams?: MarketParams;
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  pool_params?: PoolParamsSDKType;
  order_params?: OrderParamsSDKType;
  fee_params?: FeeParamsSDKType;
  market_params?: MarketParamsSDKType;
}
export interface OrderParams {
  maxLifespan?: Duration;
  depositExtraGas: Long;
  withdrawExtraGas: Long;
  orderExtraGas: Long;
}
export interface OrderParamsSDKType {
  max_lifespan?: DurationSDKType;
  deposit_extra_gas: Long;
  withdraw_extra_gas: Long;
  order_extra_gas: Long;
}
export interface PoolParams {
  minInitPoolSupply: string;
  minInitPoolDeposit: string;
  maxPriceRatio: string;
}
export interface PoolParamsSDKType {
  min_init_pool_supply: string;
  min_init_pool_deposit: string;
  max_price_ratio: string;
}
export interface MarketParams {
  precision: number;
  batchSize: number;
  maxAmmTicks: number;
}
export interface MarketParamsSDKType {
  precision: number;
  batch_size: number;
  max_amm_ticks: number;
}
export interface FeeParams {
  feeCollecterAddr: string;
  dustCollectorAddr: string;
  swapRate: string;
  withdrawRate: string;
  pairInitFee: Coin[];
  poolInitFee: Coin[];
}
export interface FeeParamsSDKType {
  fee_collecter_addr: string;
  dust_collector_addr: string;
  swap_rate: string;
  withdraw_rate: string;
  pair_init_fee: CoinSDKType[];
  pool_init_fee: CoinSDKType[];
}

function createBaseParams(): Params {
  return {
    poolParams: undefined,
    orderParams: undefined,
    feeParams: undefined,
    marketParams: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(10).fork()).ldelim();
    }

    if (message.orderParams !== undefined) {
      OrderParams.encode(message.orderParams, writer.uint32(18).fork()).ldelim();
    }

    if (message.feeParams !== undefined) {
      FeeParams.encode(message.feeParams, writer.uint32(26).fork()).ldelim();
    }

    if (message.marketParams !== undefined) {
      MarketParams.encode(message.marketParams, writer.uint32(34).fork()).ldelim();
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
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.orderParams = OrderParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.feeParams = FeeParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.marketParams = MarketParams.decode(reader, reader.uint32());
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
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.orderParams = object.orderParams !== undefined && object.orderParams !== null ? OrderParams.fromPartial(object.orderParams) : undefined;
    message.feeParams = object.feeParams !== undefined && object.feeParams !== null ? FeeParams.fromPartial(object.feeParams) : undefined;
    message.marketParams = object.marketParams !== undefined && object.marketParams !== null ? MarketParams.fromPartial(object.marketParams) : undefined;
    return message;
  }

};

function createBaseOrderParams(): OrderParams {
  return {
    maxLifespan: undefined,
    depositExtraGas: Long.UZERO,
    withdrawExtraGas: Long.UZERO,
    orderExtraGas: Long.UZERO
  };
}

export const OrderParams = {
  encode(message: OrderParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxLifespan !== undefined) {
      Duration.encode(message.maxLifespan, writer.uint32(10).fork()).ldelim();
    }

    if (!message.depositExtraGas.isZero()) {
      writer.uint32(16).uint64(message.depositExtraGas);
    }

    if (!message.withdrawExtraGas.isZero()) {
      writer.uint32(24).uint64(message.withdrawExtraGas);
    }

    if (!message.orderExtraGas.isZero()) {
      writer.uint32(32).uint64(message.orderExtraGas);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxLifespan = Duration.decode(reader, reader.uint32());
          break;

        case 2:
          message.depositExtraGas = (reader.uint64() as Long);
          break;

        case 3:
          message.withdrawExtraGas = (reader.uint64() as Long);
          break;

        case 4:
          message.orderExtraGas = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OrderParams>): OrderParams {
    const message = createBaseOrderParams();
    message.maxLifespan = object.maxLifespan !== undefined && object.maxLifespan !== null ? Duration.fromPartial(object.maxLifespan) : undefined;
    message.depositExtraGas = object.depositExtraGas !== undefined && object.depositExtraGas !== null ? Long.fromValue(object.depositExtraGas) : Long.UZERO;
    message.withdrawExtraGas = object.withdrawExtraGas !== undefined && object.withdrawExtraGas !== null ? Long.fromValue(object.withdrawExtraGas) : Long.UZERO;
    message.orderExtraGas = object.orderExtraGas !== undefined && object.orderExtraGas !== null ? Long.fromValue(object.orderExtraGas) : Long.UZERO;
    return message;
  }

};

function createBasePoolParams(): PoolParams {
  return {
    minInitPoolSupply: "",
    minInitPoolDeposit: "",
    maxPriceRatio: ""
  };
}

export const PoolParams = {
  encode(message: PoolParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minInitPoolSupply !== "") {
      writer.uint32(10).string(message.minInitPoolSupply);
    }

    if (message.minInitPoolDeposit !== "") {
      writer.uint32(18).string(message.minInitPoolDeposit);
    }

    if (message.maxPriceRatio !== "") {
      writer.uint32(26).string(message.maxPriceRatio);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minInitPoolSupply = reader.string();
          break;

        case 2:
          message.minInitPoolDeposit = reader.string();
          break;

        case 3:
          message.maxPriceRatio = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PoolParams>): PoolParams {
    const message = createBasePoolParams();
    message.minInitPoolSupply = object.minInitPoolSupply ?? "";
    message.minInitPoolDeposit = object.minInitPoolDeposit ?? "";
    message.maxPriceRatio = object.maxPriceRatio ?? "";
    return message;
  }

};

function createBaseMarketParams(): MarketParams {
  return {
    precision: 0,
    batchSize: 0,
    maxAmmTicks: 0
  };
}

export const MarketParams = {
  encode(message: MarketParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.precision !== 0) {
      writer.uint32(8).uint32(message.precision);
    }

    if (message.batchSize !== 0) {
      writer.uint32(16).uint32(message.batchSize);
    }

    if (message.maxAmmTicks !== 0) {
      writer.uint32(24).uint32(message.maxAmmTicks);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.precision = reader.uint32();
          break;

        case 2:
          message.batchSize = reader.uint32();
          break;

        case 3:
          message.maxAmmTicks = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MarketParams>): MarketParams {
    const message = createBaseMarketParams();
    message.precision = object.precision ?? 0;
    message.batchSize = object.batchSize ?? 0;
    message.maxAmmTicks = object.maxAmmTicks ?? 0;
    return message;
  }

};

function createBaseFeeParams(): FeeParams {
  return {
    feeCollecterAddr: "",
    dustCollectorAddr: "",
    swapRate: "",
    withdrawRate: "",
    pairInitFee: [],
    poolInitFee: []
  };
}

export const FeeParams = {
  encode(message: FeeParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeCollecterAddr !== "") {
      writer.uint32(10).string(message.feeCollecterAddr);
    }

    if (message.dustCollectorAddr !== "") {
      writer.uint32(18).string(message.dustCollectorAddr);
    }

    if (message.swapRate !== "") {
      writer.uint32(26).string(message.swapRate);
    }

    if (message.withdrawRate !== "") {
      writer.uint32(34).string(message.withdrawRate);
    }

    for (const v of message.pairInitFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.poolInitFee) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feeCollecterAddr = reader.string();
          break;

        case 2:
          message.dustCollectorAddr = reader.string();
          break;

        case 3:
          message.swapRate = reader.string();
          break;

        case 4:
          message.withdrawRate = reader.string();
          break;

        case 5:
          message.pairInitFee.push(Coin.decode(reader, reader.uint32()));
          break;

        case 6:
          message.poolInitFee.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeeParams>): FeeParams {
    const message = createBaseFeeParams();
    message.feeCollecterAddr = object.feeCollecterAddr ?? "";
    message.dustCollectorAddr = object.dustCollectorAddr ?? "";
    message.swapRate = object.swapRate ?? "";
    message.withdrawRate = object.withdrawRate ?? "";
    message.pairInitFee = object.pairInitFee?.map(e => Coin.fromPartial(e)) || [];
    message.poolInitFee = object.poolInitFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};