import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const olloAminoConverters: {
    "/ollo.token.v1.MsgIssueToken": {
        aminoType: string;
        toAmino: ({ symbol, name, scale, minUnit, initialSupply, maxSupply, mintable, owner }: import("./token/v1/tx").MsgIssueToken) => {
            symbol: string;
            name: string;
            scale: number;
            min_unit: string;
            initial_supply: string;
            max_supply: string;
            mintable: boolean;
            owner: string;
        };
        fromAmino: ({ symbol, name, scale, min_unit, initial_supply, max_supply, mintable, owner }: {
            symbol: string;
            name: string;
            scale: number;
            min_unit: string;
            initial_supply: string;
            max_supply: string;
            mintable: boolean;
            owner: string;
        }) => import("./token/v1/tx").MsgIssueToken;
    };
    "/ollo.token.v1.MsgEditToken": {
        aminoType: string;
        toAmino: ({ symbol, name, maxSupply, mintable, owner }: import("./token/v1/tx").MsgEditToken) => {
            symbol: string;
            name: string;
            max_supply: string;
            mintable: string;
            owner: string;
        };
        fromAmino: ({ symbol, name, max_supply, mintable, owner }: {
            symbol: string;
            name: string;
            max_supply: string;
            mintable: string;
            owner: string;
        }) => import("./token/v1/tx").MsgEditToken;
    };
    "/ollo.token.v1.MsgMintToken": {
        aminoType: string;
        toAmino: ({ symbol, amount, to, owner }: import("./token/v1/tx").MsgMintToken) => {
            symbol: string;
            amount: string;
            to: string;
            owner: string;
        };
        fromAmino: ({ symbol, amount, to, owner }: {
            symbol: string;
            amount: string;
            to: string;
            owner: string;
        }) => import("./token/v1/tx").MsgMintToken;
    };
    "/ollo.token.v1.MsgBurnToken": {
        aminoType: string;
        toAmino: ({ symbol, amount, sender }: import("./token/v1/tx").MsgBurnToken) => {
            symbol: string;
            amount: string;
            sender: string;
        };
        fromAmino: ({ symbol, amount, sender }: {
            symbol: string;
            amount: string;
            sender: string;
        }) => import("./token/v1/tx").MsgBurnToken;
    };
    "/ollo.token.v1.MsgTransferTokenOwner": {
        aminoType: string;
        toAmino: ({ srcOwner, dstOwner, symbol }: import("./token/v1/tx").MsgTransferTokenOwner) => {
            src_owner: string;
            dst_owner: string;
            symbol: string;
        };
        fromAmino: ({ src_owner, dst_owner, symbol }: {
            src_owner: string;
            dst_owner: string;
            symbol: string;
        }) => import("./token/v1/tx").MsgTransferTokenOwner;
    };
    "/ollo.reserve.v1.MsgCreateDenom": {
        aminoType: string;
        toAmino: ({ sender, subdenom }: import("./reserve/v1/tx").MsgCreateDenom) => {
            sender: string;
            subdenom: string;
        };
        fromAmino: ({ sender, subdenom }: {
            sender: string;
            subdenom: string;
        }) => import("./reserve/v1/tx").MsgCreateDenom;
    };
    "/ollo.reserve.v1.MsgMintDenom": {
        aminoType: string;
        toAmino: ({ sender, amount }: import("./reserve/v1/tx").MsgMintDenom) => {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ sender, amount }: {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./reserve/v1/tx").MsgMintDenom;
    };
    "/ollo.reserve.v1.MsgBurnDenom": {
        aminoType: string;
        toAmino: ({ sender, amount }: import("./reserve/v1/tx").MsgBurnDenom) => {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ sender, amount }: {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./reserve/v1/tx").MsgBurnDenom;
    };
    "/ollo.reserve.v1.MsgChangeDenomAdmin": {
        aminoType: string;
        toAmino: ({ sender, denom, newAdmin }: import("./reserve/v1/tx").MsgChangeDenomAdmin) => {
            sender: string;
            denom: string;
            new_admin: string;
        };
        fromAmino: ({ sender, denom, new_admin }: {
            sender: string;
            denom: string;
            new_admin: string;
        }) => import("./reserve/v1/tx").MsgChangeDenomAdmin;
    };
    "/ollo.reserve.v1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: ({ sender, metadata }: import("./reserve/v1/tx").MsgSetDenomMetadata) => {
            sender: string;
            metadata: {
                description: string;
                denom_units: {
                    denom: string;
                    exponent: number;
                    aliases: string[];
                }[];
                base: string;
                display: string;
                name: string;
                symbol: string;
                uri: string;
                uri_hash: string;
            };
        };
        fromAmino: ({ sender, metadata }: {
            sender: string;
            metadata: {
                description: string;
                denom_units: {
                    denom: string;
                    exponent: number;
                    aliases: string[];
                }[];
                base: string;
                display: string;
                name: string;
                symbol: string;
                uri: string;
                uri_hash: string;
            };
        }) => import("./reserve/v1/tx").MsgSetDenomMetadata;
    };
    "/ollo.reserve.v1.MsgForceTransfer": {
        aminoType: string;
        toAmino: ({ sender, amount, transferFromAddress, transferToAddress }: import("./reserve/v1/tx").MsgForceTransfer) => {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            };
            transferFromAddress: string;
            transferToAddress: string;
        };
        fromAmino: ({ sender, amount, transferFromAddress, transferToAddress }: {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            };
            transferFromAddress: string;
            transferToAddress: string;
        }) => import("./reserve/v1/tx").MsgForceTransfer;
    };
    "/ollo.ons.v1.MsgBuyName": {
        aminoType: string;
        toAmino: ({ creator, name, bidderAddr, bid }: import("./ons/v1/tx").MsgBuyName) => {
            creator: string;
            name: string;
            bidderAddr: string;
            bid: string;
        };
        fromAmino: ({ creator, name, bidderAddr, bid }: {
            creator: string;
            name: string;
            bidderAddr: string;
            bid: string;
        }) => import("./ons/v1/tx").MsgBuyName;
    };
    "/ollo.ons.v1.MsgSellName": {
        aminoType: string;
        toAmino: ({ creator, name, sellerAddr, offer }: import("./ons/v1/tx").MsgSellName) => {
            creator: string;
            name: string;
            sellerAddr: string;
            offer: string;
        };
        fromAmino: ({ creator, name, sellerAddr, offer }: {
            creator: string;
            name: string;
            sellerAddr: string;
            offer: string;
        }) => import("./ons/v1/tx").MsgSellName;
    };
    "/ollo.ons.v1.MsgSetName": {
        aminoType: string;
        toAmino: ({ creatorAddr, name, value }: import("./ons/v1/tx").MsgSetName) => {
            creatorAddr: string;
            name: string;
            value: string;
        };
        fromAmino: ({ creatorAddr, name, value }: {
            creatorAddr: string;
            name: string;
            value: string;
        }) => import("./ons/v1/tx").MsgSetName;
    };
    "/ollo.ons.v1.MsgDeleteName": {
        aminoType: string;
        toAmino: ({ creatorAddr, name }: import("./ons/v1/tx").MsgDeleteName) => {
            creatorAddr: string;
            name: string;
        };
        fromAmino: ({ creatorAddr, name }: {
            creatorAddr: string;
            name: string;
        }) => import("./ons/v1/tx").MsgDeleteName;
    };
    "/ollo.ons.v1.MsgAddThread": {
        aminoType: string;
        toAmino: ({ creator, name, thread, addr, offer }: import("./ons/v1/tx").MsgAddThread) => {
            creator: string;
            name: string;
            thread: string;
            addr: string;
            offer: string;
        };
        fromAmino: ({ creator, name, thread, addr, offer }: {
            creator: string;
            name: string;
            thread: string;
            addr: string;
            offer: string;
        }) => import("./ons/v1/tx").MsgAddThread;
    };
    "/ollo.ons.v1.MsgDeleteThread": {
        aminoType: string;
        toAmino: ({ creator, name, thread, addr }: import("./ons/v1/tx").MsgDeleteThread) => {
            creator: string;
            name: string;
            thread: string;
            addr: string;
        };
        fromAmino: ({ creator, name, thread, addr }: {
            creator: string;
            name: string;
            thread: string;
            addr: string;
        }) => import("./ons/v1/tx").MsgDeleteThread;
    };
    "/ollo.nft.v1.MsgIssueDenom": {
        aminoType: string;
        toAmino: ({ id, name, schema, sender, symbol, mintRestricted, updateRestricted, description, uri, uriHash, data }: import("./nft/v1/tx").MsgIssueDenom) => {
            id: string;
            name: string;
            schema: string;
            sender: string;
            symbol: string;
            mint_restricted: boolean;
            update_restricted: boolean;
            description: string;
            uri: string;
            uri_hash: string;
            data: string;
        };
        fromAmino: ({ id, name, schema, sender, symbol, mint_restricted, update_restricted, description, uri, uri_hash, data }: {
            id: string;
            name: string;
            schema: string;
            sender: string;
            symbol: string;
            mint_restricted: boolean;
            update_restricted: boolean;
            description: string;
            uri: string;
            uri_hash: string;
            data: string;
        }) => import("./nft/v1/tx").MsgIssueDenom;
    };
    "/ollo.nft.v1.MsgTransferDenom": {
        aminoType: string;
        toAmino: ({ id, sender, recipient }: import("./nft/v1/tx").MsgTransferDenom) => {
            id: string;
            sender: string;
            recipient: string;
        };
        fromAmino: ({ id, sender, recipient }: {
            id: string;
            sender: string;
            recipient: string;
        }) => import("./nft/v1/tx").MsgTransferDenom;
    };
    "/ollo.nft.v1.MsgMintNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, name, uri, data, sender, recipient, uriHash }: import("./nft/v1/tx").MsgMintNFT) => {
            id: string;
            denom_id: string;
            name: string;
            uri: string;
            data: string;
            sender: string;
            recipient: string;
            uri_hash: string;
        };
        fromAmino: ({ id, denom_id, name, uri, data, sender, recipient, uri_hash }: {
            id: string;
            denom_id: string;
            name: string;
            uri: string;
            data: string;
            sender: string;
            recipient: string;
            uri_hash: string;
        }) => import("./nft/v1/tx").MsgMintNFT;
    };
    "/ollo.nft.v1.MsgBurnNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, sender }: import("./nft/v1/tx").MsgBurnNFT) => {
            id: string;
            denom_id: string;
            sender: string;
        };
        fromAmino: ({ id, denom_id, sender }: {
            id: string;
            denom_id: string;
            sender: string;
        }) => import("./nft/v1/tx").MsgBurnNFT;
    };
    "/ollo.nft.v1.MsgEditNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, name, uri, data, sender, uriHash }: import("./nft/v1/tx").MsgEditNFT) => {
            id: string;
            denom_id: string;
            name: string;
            uri: string;
            data: string;
            sender: string;
            uri_hash: string;
        };
        fromAmino: ({ id, denom_id, name, uri, data, sender, uri_hash }: {
            id: string;
            denom_id: string;
            name: string;
            uri: string;
            data: string;
            sender: string;
            uri_hash: string;
        }) => import("./nft/v1/tx").MsgEditNFT;
    };
    "/ollo.nft.v1.MsgSendNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, name, uri, data, sender, recipient, uriHash }: import("./nft/v1/tx").MsgSendNFT) => {
            id: string;
            denom_id: string;
            name: string;
            uri: string;
            data: string;
            sender: string;
            recipient: string;
            uri_hash: string;
        };
        fromAmino: ({ id, denom_id, name, uri, data, sender, recipient, uri_hash }: {
            id: string;
            denom_id: string;
            name: string;
            uri: string;
            data: string;
            sender: string;
            recipient: string;
            uri_hash: string;
        }) => import("./nft/v1/tx").MsgSendNFT;
    };
    "/ollo.loan.v1.MsgRequestLoan": {
        aminoType: string;
        toAmino: ({ creator, amount, fee, collateral, deadline }: import("./loan/v1/tx").MsgRequestLoan) => {
            creator: string;
            amount: string;
            fee: string;
            collateral: string;
            deadline: string;
        };
        fromAmino: ({ creator, amount, fee, collateral, deadline }: {
            creator: string;
            amount: string;
            fee: string;
            collateral: string;
            deadline: string;
        }) => import("./loan/v1/tx").MsgRequestLoan;
    };
    "/ollo.loan.v1.MsgApproveLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: import("./loan/v1/tx").MsgApproveLoan) => {
            creator: string;
            id: string;
        };
        fromAmino: ({ creator, id }: {
            creator: string;
            id: string;
        }) => import("./loan/v1/tx").MsgApproveLoan;
    };
    "/ollo.loan.v1.MsgRepayLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: import("./loan/v1/tx").MsgRepayLoan) => {
            creator: string;
            id: string;
        };
        fromAmino: ({ creator, id }: {
            creator: string;
            id: string;
        }) => import("./loan/v1/tx").MsgRepayLoan;
    };
    "/ollo.loan.v1.MsgLiquidateLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: import("./loan/v1/tx").MsgLiquidateLoan) => {
            creator: string;
            id: string;
        };
        fromAmino: ({ creator, id }: {
            creator: string;
            id: string;
        }) => import("./loan/v1/tx").MsgLiquidateLoan;
    };
    "/ollo.loan.v1.MsgCancelLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: import("./loan/v1/tx").MsgCancelLoan) => {
            creator: string;
            id: string;
        };
        fromAmino: ({ creator, id }: {
            creator: string;
            id: string;
        }) => import("./loan/v1/tx").MsgCancelLoan;
    };
    "/ollo.liquidity.v1.MsgCreatePool": {
        aminoType: string;
        toAmino: ({ creator, typeId, pairId, depositCoins }: import("./liquidity/v1/tx").MsgCreatePool) => {
            creator: string;
            type_id: string;
            pair_id: string;
            deposit_coins: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ creator, type_id, pair_id, deposit_coins }: {
            creator: string;
            type_id: string;
            pair_id: string;
            deposit_coins: {
                denom: string;
                amount: string;
            }[];
        }) => import("./liquidity/v1/tx").MsgCreatePool;
    };
    "/ollo.liquidity.v1.MsgCreatePair": {
        aminoType: string;
        toAmino: ({ creator, baseCoinDenom, quoteCoinDenom }: import("./liquidity/v1/tx").MsgCreatePair) => {
            creator: string;
            base_coin_denom: string;
            quote_coin_denom: string;
        };
        fromAmino: ({ creator, base_coin_denom, quote_coin_denom }: {
            creator: string;
            base_coin_denom: string;
            quote_coin_denom: string;
        }) => import("./liquidity/v1/tx").MsgCreatePair;
    };
    "/ollo.liquidity.v1.MsgCreatePoolCapped": {
        aminoType: string;
        toAmino: ({ creator, pairId, depositCoins, minPrice, maxPrice, initialPrice }: import("./liquidity/v1/tx").MsgCreatePoolCapped) => {
            creator: string;
            pair_id: string;
            deposit_coins: {
                denom: string;
                amount: string;
            }[];
            min_price: string;
            max_price: string;
            initial_price: string;
        };
        fromAmino: ({ creator, pair_id, deposit_coins, min_price, max_price, initial_price }: {
            creator: string;
            pair_id: string;
            deposit_coins: {
                denom: string;
                amount: string;
            }[];
            min_price: string;
            max_price: string;
            initial_price: string;
        }) => import("./liquidity/v1/tx").MsgCreatePoolCapped;
    };
    "/ollo.liquidity.v1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, poolId, depositCoins }: import("./liquidity/v1/tx").MsgDeposit) => {
            depositor: string;
            pool_id: string;
            deposit_coins: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ depositor, pool_id, deposit_coins }: {
            depositor: string;
            pool_id: string;
            deposit_coins: {
                denom: string;
                amount: string;
            }[];
        }) => import("./liquidity/v1/tx").MsgDeposit;
    };
    "/ollo.liquidity.v1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ withdrawer, poolId, poolCoin }: import("./liquidity/v1/tx").MsgWithdraw) => {
            withdrawer: string;
            pool_id: string;
            pool_coin: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ withdrawer, pool_id, pool_coin }: {
            withdrawer: string;
            pool_id: string;
            pool_coin: {
                denom: string;
                amount: string;
            };
        }) => import("./liquidity/v1/tx").MsgWithdraw;
    };
    "/ollo.liquidity.v1.MsgOrderLimit": {
        aminoType: string;
        toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, price, amount, orderLifespan }: import("./liquidity/v1/tx").MsgOrderLimit) => {
            orderer: string;
            pair_id: string;
            direction: number;
            offer_coin: {
                denom: string;
                amount: string;
            };
            demand_coin_denom: string;
            price: string;
            amount: string;
            order_lifespan: {
                seconds: string;
                nanos: number;
            };
        };
        fromAmino: ({ orderer, pair_id, direction, offer_coin, demand_coin_denom, price, amount, order_lifespan }: {
            orderer: string;
            pair_id: string;
            direction: number;
            offer_coin: {
                denom: string;
                amount: string;
            };
            demand_coin_denom: string;
            price: string;
            amount: string;
            order_lifespan: {
                seconds: string;
                nanos: number;
            };
        }) => import("./liquidity/v1/tx").MsgOrderLimit;
    };
    "/ollo.liquidity.v1.MsgOrderMarket": {
        aminoType: string;
        toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, amount, orderLifespan }: import("./liquidity/v1/tx").MsgOrderMarket) => {
            orderer: string;
            pair_id: string;
            direction: number;
            offer_coin: {
                denom: string;
                amount: string;
            };
            demand_coin_denom: string;
            amount: string;
            order_lifespan: {
                seconds: string;
                nanos: number;
            };
        };
        fromAmino: ({ orderer, pair_id, direction, offer_coin, demand_coin_denom, amount, order_lifespan }: {
            orderer: string;
            pair_id: string;
            direction: number;
            offer_coin: {
                denom: string;
                amount: string;
            };
            demand_coin_denom: string;
            amount: string;
            order_lifespan: {
                seconds: string;
                nanos: number;
            };
        }) => import("./liquidity/v1/tx").MsgOrderMarket;
    };
    "/ollo.liquidity.v1.MsgOrderMarketMaking": {
        aminoType: string;
        toAmino: ({ orderer, pairId, maxSellPrice, minSellPrice, sellAmount, maxBuyPrice, minBuyPrice, buyAmount, orderLifespan }: import("./liquidity/v1/tx").MsgOrderMarketMaking) => {
            orderer: string;
            pair_id: string;
            max_sell_price: string;
            min_sell_price: string;
            sell_amount: string;
            max_buy_price: string;
            min_buy_price: string;
            buy_amount: string;
            order_lifespan: {
                seconds: string;
                nanos: number;
            };
        };
        fromAmino: ({ orderer, pair_id, max_sell_price, min_sell_price, sell_amount, max_buy_price, min_buy_price, buy_amount, order_lifespan }: {
            orderer: string;
            pair_id: string;
            max_sell_price: string;
            min_sell_price: string;
            sell_amount: string;
            max_buy_price: string;
            min_buy_price: string;
            buy_amount: string;
            order_lifespan: {
                seconds: string;
                nanos: number;
            };
        }) => import("./liquidity/v1/tx").MsgOrderMarketMaking;
    };
    "/ollo.liquidity.v1.MsgCancelOrder": {
        aminoType: string;
        toAmino: ({ orderAddr, pairId, orderId }: import("./liquidity/v1/tx").MsgCancelOrder) => {
            order_addr: string;
            pair_id: string;
            order_id: string;
        };
        fromAmino: ({ order_addr, pair_id, order_id }: {
            order_addr: string;
            pair_id: string;
            order_id: string;
        }) => import("./liquidity/v1/tx").MsgCancelOrder;
    };
    "/ollo.liquidity.v1.MsgCancelAllOrders": {
        aminoType: string;
        toAmino: ({ orderAddr, pairIds }: import("./liquidity/v1/tx").MsgCancelAllOrders) => {
            order_addr: string;
            pair_ids: string[];
        };
        fromAmino: ({ order_addr, pair_ids }: {
            order_addr: string;
            pair_ids: string[];
        }) => import("./liquidity/v1/tx").MsgCancelAllOrders;
    };
    "/ollo.liquidity.v1.MsgCancelMarketMakingOrder": {
        aminoType: string;
        toAmino: ({ orderer, pairId }: import("./liquidity/v1/tx").MsgCancelMarketMakingOrder) => {
            orderer: string;
            pair_id: string;
        };
        fromAmino: ({ orderer, pair_id }: {
            orderer: string;
            pair_id: string;
        }) => import("./liquidity/v1/tx").MsgCancelMarketMakingOrder;
    };
    "/ollo.grants.v1.MsgCreateFixedPriceAuction": {
        aminoType: string;
        toAmino: ({ auctioneer, startPrice, sellingCoin, payingCoinDenom, vestingSchedules, startTime, endTime }: import("./grants/v1/tx").MsgCreateFixedPriceAuction) => {
            auctioneer: string;
            start_price: string;
            selling_coin: {
                denom: string;
                amount: string;
            };
            paying_coin_denom: string;
            vesting_schedules: {
                release_time: {
                    seconds: string;
                    nanos: number;
                };
                weight: string;
            }[];
            start_time: {
                seconds: string;
                nanos: number;
            };
            end_time: {
                seconds: string;
                nanos: number;
            };
        };
        fromAmino: ({ auctioneer, start_price, selling_coin, paying_coin_denom, vesting_schedules, start_time, end_time }: {
            auctioneer: string;
            start_price: string;
            selling_coin: {
                denom: string;
                amount: string;
            };
            paying_coin_denom: string;
            vesting_schedules: {
                release_time: {
                    seconds: string;
                    nanos: number;
                };
                weight: string;
            }[];
            start_time: {
                seconds: string;
                nanos: number;
            };
            end_time: {
                seconds: string;
                nanos: number;
            };
        }) => import("./grants/v1/tx").MsgCreateFixedPriceAuction;
    };
    "/ollo.grants.v1.MsgCreateBatchAuction": {
        aminoType: string;
        toAmino: ({ auctioneer, startPrice, minBidPrice, sellingCoin, payingCoinDenom, vestingSchedules, maxExtendedRound, extendedRoundRate, startTime, endTime }: import("./grants/v1/tx").MsgCreateBatchAuction) => {
            auctioneer: string;
            start_price: string;
            min_bid_price: string;
            selling_coin: {
                denom: string;
                amount: string;
            };
            paying_coin_denom: string;
            vesting_schedules: {
                release_time: {
                    seconds: string;
                    nanos: number;
                };
                weight: string;
            }[];
            max_extended_round: number;
            extended_round_rate: string;
            start_time: {
                seconds: string;
                nanos: number;
            };
            end_time: {
                seconds: string;
                nanos: number;
            };
        };
        fromAmino: ({ auctioneer, start_price, min_bid_price, selling_coin, paying_coin_denom, vesting_schedules, max_extended_round, extended_round_rate, start_time, end_time }: {
            auctioneer: string;
            start_price: string;
            min_bid_price: string;
            selling_coin: {
                denom: string;
                amount: string;
            };
            paying_coin_denom: string;
            vesting_schedules: {
                release_time: {
                    seconds: string;
                    nanos: number;
                };
                weight: string;
            }[];
            max_extended_round: number;
            extended_round_rate: string;
            start_time: {
                seconds: string;
                nanos: number;
            };
            end_time: {
                seconds: string;
                nanos: number;
            };
        }) => import("./grants/v1/tx").MsgCreateBatchAuction;
    };
    "/ollo.grants.v1.MsgCancelAuction": {
        aminoType: string;
        toAmino: ({ auctioneer, auctionId }: import("./grants/v1/tx").MsgCancelAuction) => {
            auctioneer: string;
            auction_id: string;
        };
        fromAmino: ({ auctioneer, auction_id }: {
            auctioneer: string;
            auction_id: string;
        }) => import("./grants/v1/tx").MsgCancelAuction;
    };
    "/ollo.grants.v1.MsgPlaceBid": {
        aminoType: string;
        toAmino: ({ auctionId, bidder, bidType, price, coin }: import("./grants/v1/tx").MsgPlaceBid) => {
            auction_id: string;
            bidder: string;
            bid_type: number;
            price: string;
            coin: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ auction_id, bidder, bid_type, price, coin }: {
            auction_id: string;
            bidder: string;
            bid_type: number;
            price: string;
            coin: {
                denom: string;
                amount: string;
            };
        }) => import("./grants/v1/tx").MsgPlaceBid;
    };
    "/ollo.grants.v1.MsgModifyBid": {
        aminoType: string;
        toAmino: ({ auctionId, bidder, bidId, price, coin }: import("./grants/v1/tx").MsgModifyBid) => {
            auction_id: string;
            bidder: string;
            bid_id: string;
            price: string;
            coin: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ auction_id, bidder, bid_id, price, coin }: {
            auction_id: string;
            bidder: string;
            bid_id: string;
            price: string;
            coin: {
                denom: string;
                amount: string;
            };
        }) => import("./grants/v1/tx").MsgModifyBid;
    };
    "/ollo.grants.v1.MsgAddAllowedBidder": {
        aminoType: string;
        toAmino: ({ auctionId, allowedBidder }: import("./grants/v1/tx").MsgAddAllowedBidder) => {
            auction_id: string;
            allowed_bidder: {
                bidder: string;
                max_bid_amount: string;
            };
        };
        fromAmino: ({ auction_id, allowed_bidder }: {
            auction_id: string;
            allowed_bidder: {
                bidder: string;
                max_bid_amount: string;
            };
        }) => import("./grants/v1/tx").MsgAddAllowedBidder;
    };
    "/ollo.farming.v1.MsgCreateFixedAmountPlan": {
        aminoType: string;
        toAmino: ({ name, creator, stakingCoinWeights, startTime, endTime, epochAmount }: import("./farming/v1/tx").MsgCreateFixedAmountPlan) => {
            name: string;
            creator: string;
            staking_coin_weights: {
                denom: string;
                amount: string;
            }[];
            start_time: {
                seconds: string;
                nanos: number;
            };
            end_time: {
                seconds: string;
                nanos: number;
            };
            epoch_amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ name, creator, staking_coin_weights, start_time, end_time, epoch_amount }: {
            name: string;
            creator: string;
            staking_coin_weights: {
                denom: string;
                amount: string;
            }[];
            start_time: {
                seconds: string;
                nanos: number;
            };
            end_time: {
                seconds: string;
                nanos: number;
            };
            epoch_amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./farming/v1/tx").MsgCreateFixedAmountPlan;
    };
    "/ollo.farming.v1.MsgCreateRatioPlan": {
        aminoType: string;
        toAmino: ({ name, creator, stakingCoinWeights, startTime, endTime, epochRatio }: import("./farming/v1/tx").MsgCreateRatioPlan) => {
            name: string;
            creator: string;
            staking_coin_weights: {
                denom: string;
                amount: string;
            }[];
            start_time: {
                seconds: string;
                nanos: number;
            };
            end_time: {
                seconds: string;
                nanos: number;
            };
            epoch_ratio: string;
        };
        fromAmino: ({ name, creator, staking_coin_weights, start_time, end_time, epoch_ratio }: {
            name: string;
            creator: string;
            staking_coin_weights: {
                denom: string;
                amount: string;
            }[];
            start_time: {
                seconds: string;
                nanos: number;
            };
            end_time: {
                seconds: string;
                nanos: number;
            };
            epoch_ratio: string;
        }) => import("./farming/v1/tx").MsgCreateRatioPlan;
    };
    "/ollo.farming.v1.MsgStake": {
        aminoType: string;
        toAmino: ({ farmer, stakingCoins }: import("./farming/v1/tx").MsgStake) => {
            farmer: string;
            staking_coins: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ farmer, staking_coins }: {
            farmer: string;
            staking_coins: {
                denom: string;
                amount: string;
            }[];
        }) => import("./farming/v1/tx").MsgStake;
    };
    "/ollo.farming.v1.MsgUnstake": {
        aminoType: string;
        toAmino: ({ farmer, unstakingCoins }: import("./farming/v1/tx").MsgUnstake) => {
            farmer: string;
            unstaking_coins: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ farmer, unstaking_coins }: {
            farmer: string;
            unstaking_coins: {
                denom: string;
                amount: string;
            }[];
        }) => import("./farming/v1/tx").MsgUnstake;
    };
    "/ollo.farming.v1.MsgHarvest": {
        aminoType: string;
        toAmino: ({ farmer, stakingCoinDenoms }: import("./farming/v1/tx").MsgHarvest) => {
            farmer: string;
            staking_coin_denoms: string[];
        };
        fromAmino: ({ farmer, staking_coin_denoms }: {
            farmer: string;
            staking_coin_denoms: string[];
        }) => import("./farming/v1/tx").MsgHarvest;
    };
    "/ollo.farming.v1.MsgRemovePlan": {
        aminoType: string;
        toAmino: ({ creator, planId }: import("./farming/v1/tx").MsgRemovePlan) => {
            creator: string;
            plan_id: string;
        };
        fromAmino: ({ creator, plan_id }: {
            creator: string;
            plan_id: string;
        }) => import("./farming/v1/tx").MsgRemovePlan;
    };
    "/ollo.farming.v1.MsgAdvanceEpoch": {
        aminoType: string;
        toAmino: ({ requester }: import("./farming/v1/tx").MsgAdvanceEpoch) => {
            requester: string;
        };
        fromAmino: ({ requester }: {
            requester: string;
        }) => import("./farming/v1/tx").MsgAdvanceEpoch;
    };
    "/ollo.claim.v1.MsgClaim": {
        aminoType: string;
        toAmino: ({ claimer, goalId }: import("./claim/v1/tx").MsgClaim) => {
            claimer: string;
            goal_id: string;
        };
        fromAmino: ({ claimer, goal_id }: {
            claimer: string;
            goal_id: string;
        }) => import("./claim/v1/tx").MsgClaim;
    };
};
export declare const olloProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningOlloClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningOlloClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
