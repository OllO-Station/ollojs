import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const olloAminoConverters: {
    "/ollo.vault.v1.MsgCreateRequest": {
        aminoType: string;
        toAmino: ({ from, amountIn, amountOut }: import("./vault/v1/tx").MsgCreateRequest) => {
            from: string;
            amount_in: string;
            amount_out: string;
        };
        fromAmino: ({ from, amount_in, amount_out }: {
            from: string;
            amount_in: string;
            amount_out: string;
        }) => import("./vault/v1/tx").MsgCreateRequest;
    };
    "/ollo.vault.v1.MsgDepositRequest": {
        aminoType: string;
        toAmino: ({ from, userVaultId, amount }: import("./vault/v1/tx").MsgDepositRequest) => {
            from: string;
            user_vault_id: string;
            amount: string;
        };
        fromAmino: ({ from, user_vault_id, amount }: {
            from: string;
            user_vault_id: string;
            amount: string;
        }) => import("./vault/v1/tx").MsgDepositRequest;
    };
    "/ollo.vault.v1.MsgWithdrawRequest": {
        aminoType: string;
        toAmino: ({ from, userVaultId, amount }: import("./vault/v1/tx").MsgWithdrawRequest) => {
            from: string;
            user_vault_id: string;
            amount: string;
        };
        fromAmino: ({ from, user_vault_id, amount }: {
            from: string;
            user_vault_id: string;
            amount: string;
        }) => import("./vault/v1/tx").MsgWithdrawRequest;
    };
    "/ollo.vault.v1.MsgDrawRequest": {
        aminoType: string;
        toAmino: ({ from, userVaultId, amount }: import("./vault/v1/tx").MsgDrawRequest) => {
            from: string;
            user_vault_id: string;
            amount: string;
        };
        fromAmino: ({ from, user_vault_id, amount }: {
            from: string;
            user_vault_id: string;
            amount: string;
        }) => import("./vault/v1/tx").MsgDrawRequest;
    };
    "/ollo.vault.v1.MsgRepayRequest": {
        aminoType: string;
        toAmino: ({ from, userVaultId, amount }: import("./vault/v1/tx").MsgRepayRequest) => {
            from: string;
            user_vault_id: string;
            amount: string;
        };
        fromAmino: ({ from, user_vault_id, amount }: {
            from: string;
            user_vault_id: string;
            amount: string;
        }) => import("./vault/v1/tx").MsgRepayRequest;
    };
    "/ollo.vault.v1.MsgCloseRequest": {
        aminoType: string;
        toAmino: ({ from, userVaultId }: import("./vault/v1/tx").MsgCloseRequest) => {
            from: string;
            user_vault_id: string;
        };
        fromAmino: ({ from, user_vault_id }: {
            from: string;
            user_vault_id: string;
        }) => import("./vault/v1/tx").MsgCloseRequest;
    };
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
    "/ollo.prices.v1.MsgBandPricesData": {
        aminoType: string;
        toAmino: ({ creator, oracleScriptId, sourceChannel, calldata, askCount, minCount, feeLimit, prepareGas, executeGas, clientId }: import("./prices/v1/tx").MsgBandPricesData) => {
            creator: string;
            oracle_script_id: string;
            source_channel: string;
            calldata: {
                symbols: string[];
                multiplier: string;
            };
            ask_count: string;
            min_count: string;
            fee_limit: {
                denom: string;
                amount: string;
            }[];
            prepare_gas: string;
            execute_gas: string;
            client_id: string;
        };
        fromAmino: ({ creator, oracle_script_id, source_channel, calldata, ask_count, min_count, fee_limit, prepare_gas, execute_gas, client_id }: {
            creator: string;
            oracle_script_id: string;
            source_channel: string;
            calldata: {
                symbols: string[];
                multiplier: string;
            };
            ask_count: string;
            min_count: string;
            fee_limit: {
                denom: string;
                amount: string;
            }[];
            prepare_gas: string;
            execute_gas: string;
            client_id: string;
        }) => import("./prices/v1/tx").MsgBandPricesData;
    };
    "/ollo.prices.v1.MsgFeedData": {
        aminoType: string;
        toAmino: ({ feedId, submitter, observationFeedData, observationFeedDataSignatures, isFeedDataValid, cosmosPubKeys, txFee }: import("./prices/v1/tx").MsgFeedData) => {
            feedId: string;
            submitter: Uint8Array;
            observationFeedData: Uint8Array[];
            observationFeedDataSignatures: Uint8Array[];
            isFeedDataValid: boolean;
            cosmosPubKeys: Uint8Array[];
            txFee: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ feedId, submitter, observationFeedData, observationFeedDataSignatures, isFeedDataValid, cosmosPubKeys, txFee }: {
            feedId: string;
            submitter: Uint8Array;
            observationFeedData: Uint8Array[];
            observationFeedDataSignatures: Uint8Array[];
            isFeedDataValid: boolean;
            cosmosPubKeys: Uint8Array[];
            txFee: {
                denom: string;
                amount: string;
            };
        }) => import("./prices/v1/tx").MsgFeedData;
    };
    "/ollo.prices.v1.MsgModuleOwner": {
        aminoType: string;
        toAmino: ({ address, pubKey, assignerAddress }: import("./prices/v1/prices").MsgModuleOwner) => {
            address: Uint8Array;
            pubKey: Uint8Array;
            assignerAddress: Uint8Array;
        };
        fromAmino: ({ address, pubKey, assignerAddress }: {
            address: Uint8Array;
            pubKey: Uint8Array;
            assignerAddress: Uint8Array;
        }) => import("./prices/v1/prices").MsgModuleOwner;
    };
    "/ollo.prices.v1.MsgModuleOwnershipTransfer": {
        aminoType: string;
        toAmino: ({ assignerAddress, newModuleOwnerAddress, newModuleOwnerPubKey }: import("./prices/v1/tx").MsgModuleOwnershipTransfer) => {
            assignerAddress: Uint8Array;
            newModuleOwnerAddress: Uint8Array;
            newModuleOwnerPubKey: Uint8Array;
        };
        fromAmino: ({ assignerAddress, newModuleOwnerAddress, newModuleOwnerPubKey }: {
            assignerAddress: Uint8Array;
            newModuleOwnerAddress: Uint8Array;
            newModuleOwnerPubKey: Uint8Array;
        }) => import("./prices/v1/tx").MsgModuleOwnershipTransfer;
    };
    "/ollo.prices.v1.MsgFeed": {
        aminoType: string;
        toAmino: ({ feedId, feedOwner, dataProviders, submissionCount, heartbeatTrigger, deviationThresholdTrigger, moduleOwnerAddress, feedReward, desc }: import("./prices/v1/tx").MsgFeed) => {
            feedId: string;
            feedOwner: Uint8Array;
            dataProviders: {
                address: Uint8Array;
                pubKey: Uint8Array;
            }[];
            submissionCount: number;
            heartbeatTrigger: number;
            deviationThresholdTrigger: number;
            moduleOwnerAddress: Uint8Array;
            feedReward: {
                amount: string;
                strategy: string;
            };
            desc: string;
        };
        fromAmino: ({ feedId, feedOwner, dataProviders, submissionCount, heartbeatTrigger, deviationThresholdTrigger, moduleOwnerAddress, feedReward, desc }: {
            feedId: string;
            feedOwner: Uint8Array;
            dataProviders: {
                address: Uint8Array;
                pubKey: Uint8Array;
            }[];
            submissionCount: number;
            heartbeatTrigger: number;
            deviationThresholdTrigger: number;
            moduleOwnerAddress: Uint8Array;
            feedReward: {
                amount: string;
                strategy: string;
            };
            desc: string;
        }) => import("./prices/v1/tx").MsgFeed;
    };
    "/ollo.prices.v1.MsgAddDataProvider": {
        aminoType: string;
        toAmino: ({ feedId, dataProvider, signer }: import("./prices/v1/tx").MsgAddDataProvider) => {
            feedId: string;
            dataProvider: {
                address: Uint8Array;
                pubKey: Uint8Array;
            };
            signer: Uint8Array;
        };
        fromAmino: ({ feedId, dataProvider, signer }: {
            feedId: string;
            dataProvider: {
                address: Uint8Array;
                pubKey: Uint8Array;
            };
            signer: Uint8Array;
        }) => import("./prices/v1/tx").MsgAddDataProvider;
    };
    "/ollo.prices.v1.MsgRemoveDataProvider": {
        aminoType: string;
        toAmino: ({ feedId, address, signer }: import("./prices/v1/tx").MsgRemoveDataProvider) => {
            feedId: string;
            address: Uint8Array;
            signer: Uint8Array;
        };
        fromAmino: ({ feedId, address, signer }: {
            feedId: string;
            address: Uint8Array;
            signer: Uint8Array;
        }) => import("./prices/v1/tx").MsgRemoveDataProvider;
    };
    "/ollo.prices.v1.MsgSetSubmissionCount": {
        aminoType: string;
        toAmino: ({ feedId, submissionCount, signer }: import("./prices/v1/tx").MsgSetSubmissionCount) => {
            feedId: string;
            submissionCount: number;
            signer: Uint8Array;
        };
        fromAmino: ({ feedId, submissionCount, signer }: {
            feedId: string;
            submissionCount: number;
            signer: Uint8Array;
        }) => import("./prices/v1/tx").MsgSetSubmissionCount;
    };
    "/ollo.prices.v1.MsgSetHeartbeatTrigger": {
        aminoType: string;
        toAmino: ({ feedId, heartbeatTrigger, signer }: import("./prices/v1/tx").MsgSetHeartbeatTrigger) => {
            feedId: string;
            heartbeatTrigger: number;
            signer: Uint8Array;
        };
        fromAmino: ({ feedId, heartbeatTrigger, signer }: {
            feedId: string;
            heartbeatTrigger: number;
            signer: Uint8Array;
        }) => import("./prices/v1/tx").MsgSetHeartbeatTrigger;
    };
    "/ollo.prices.v1.MsgSetDeviationThresholdTrigger": {
        aminoType: string;
        toAmino: ({ feedId, deviationThresholdTrigger, signer }: import("./prices/v1/tx").MsgSetDeviationThresholdTrigger) => {
            feedId: string;
            deviationThresholdTrigger: number;
            signer: Uint8Array;
        };
        fromAmino: ({ feedId, deviationThresholdTrigger, signer }: {
            feedId: string;
            deviationThresholdTrigger: number;
            signer: Uint8Array;
        }) => import("./prices/v1/tx").MsgSetDeviationThresholdTrigger;
    };
    "/ollo.prices.v1.MsgSetFeedReward": {
        aminoType: string;
        toAmino: ({ feedId, feedReward, signer }: import("./prices/v1/tx").MsgSetFeedReward) => {
            feedId: string;
            feedReward: {
                amount: string;
                strategy: string;
            };
            signer: Uint8Array;
        };
        fromAmino: ({ feedId, feedReward, signer }: {
            feedId: string;
            feedReward: {
                amount: string;
                strategy: string;
            };
            signer: Uint8Array;
        }) => import("./prices/v1/tx").MsgSetFeedReward;
    };
    "/ollo.prices.v1.MsgRequestNewRound": {
        aminoType: string;
        toAmino: ({ feedId, signer }: import("./prices/v1/tx").MsgRequestNewRound) => {
            feedId: string;
            signer: Uint8Array;
        };
        fromAmino: ({ feedId, signer }: {
            feedId: string;
            signer: Uint8Array;
        }) => import("./prices/v1/tx").MsgRequestNewRound;
    };
    "/ollo.prices.v1.MsgFeedOwnershipTransfer": {
        aminoType: string;
        toAmino: ({ feedId, newFeedOwnerAddress, signer }: import("./prices/v1/tx").MsgFeedOwnershipTransfer) => {
            feedId: string;
            newFeedOwnerAddress: Uint8Array;
            signer: Uint8Array;
        };
        fromAmino: ({ feedId, newFeedOwnerAddress, signer }: {
            feedId: string;
            newFeedOwnerAddress: Uint8Array;
            signer: Uint8Array;
        }) => import("./prices/v1/tx").MsgFeedOwnershipTransfer;
    };
    "/ollo.prices.v1.MsgAccount": {
        aminoType: string;
        toAmino: ({ submitter, chainlinkPublicKey, chainlinkSigningKey, piggyAddress }: import("./prices/v1/tx").MsgAccount) => {
            submitter: Uint8Array;
            chainlinkPublicKey: Uint8Array;
            chainlinkSigningKey: Uint8Array;
            piggyAddress: Uint8Array;
        };
        fromAmino: ({ submitter, chainlinkPublicKey, chainlinkSigningKey, piggyAddress }: {
            submitter: Uint8Array;
            chainlinkPublicKey: Uint8Array;
            chainlinkSigningKey: Uint8Array;
            piggyAddress: Uint8Array;
        }) => import("./prices/v1/tx").MsgAccount;
    };
    "/ollo.prices.v1.MsgEditAccount": {
        aminoType: string;
        toAmino: ({ submitter, piggyAddress }: import("./prices/v1/tx").MsgEditAccount) => {
            submitter: Uint8Array;
            piggyAddress: Uint8Array;
        };
        fromAmino: ({ submitter, piggyAddress }: {
            submitter: Uint8Array;
            piggyAddress: Uint8Array;
        }) => import("./prices/v1/tx").MsgEditAccount;
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
    "/ollo.lock.v1.MsgCreateLockRequest": {
        aminoType: string;
        toAmino: ({ depositor, amount, assetId }: import("./lock/v1/tx").MsgCreateLockRequest) => {
            depositor: string;
            amount: string;
            asset_id: string;
        };
        fromAmino: ({ depositor, amount, asset_id }: {
            depositor: string;
            amount: string;
            asset_id: string;
        }) => import("./lock/v1/tx").MsgCreateLockRequest;
    };
    "/ollo.lock.v1.MsgDepositAssetRequest": {
        aminoType: string;
        toAmino: ({ depositor, lockerId, amount, assetId }: import("./lock/v1/tx").MsgDepositAssetRequest) => {
            depositor: string;
            locker_id: string;
            amount: string;
            asset_id: string;
        };
        fromAmino: ({ depositor, locker_id, amount, asset_id }: {
            depositor: string;
            locker_id: string;
            amount: string;
            asset_id: string;
        }) => import("./lock/v1/tx").MsgDepositAssetRequest;
    };
    "/ollo.lock.v1.MsgWithdrawAssetRequest": {
        aminoType: string;
        toAmino: ({ depositor, lockerId, amount, assetId }: import("./lock/v1/tx").MsgWithdrawAssetRequest) => {
            depositor: string;
            locker_id: string;
            amount: string;
            asset_id: string;
        };
        fromAmino: ({ depositor, locker_id, amount, asset_id }: {
            depositor: string;
            locker_id: string;
            amount: string;
            asset_id: string;
        }) => import("./lock/v1/tx").MsgWithdrawAssetRequest;
    };
    "/ollo.lock.v1.MsgCloseLockRequest": {
        aminoType: string;
        toAmino: ({ depositor, lockerId }: import("./lock/v1/tx").MsgCloseLockRequest) => {
            depositor: string;
            locker_id: string;
        };
        fromAmino: ({ depositor, locker_id }: {
            depositor: string;
            locker_id: string;
        }) => import("./lock/v1/tx").MsgCloseLockRequest;
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
    "/ollo.liquidity.v1.MsgCreatePool": {
        aminoType: string;
        toAmino: ({ creator, pairId, depositCoins }: import("./liquidity/v1/tx").MsgCreatePool) => {
            creator: string;
            pair_id: string;
            deposit_coins: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ creator, pair_id, deposit_coins }: {
            creator: string;
            pair_id: string;
            deposit_coins: {
                denom: string;
                amount: string;
            }[];
        }) => import("./liquidity/v1/tx").MsgCreatePool;
    };
    "/ollo.liquidity.v1.MsgCreateRangedPool": {
        aminoType: string;
        toAmino: ({ creator, pairId, depositCoins, minPrice, maxPrice, initialPrice }: import("./liquidity/v1/tx").MsgCreateRangedPool) => {
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
        }) => import("./liquidity/v1/tx").MsgCreateRangedPool;
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
    "/ollo.liquidity.v1.MsgLimitOrder": {
        aminoType: string;
        toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, price, amount, orderLifespan }: import("./liquidity/v1/tx").MsgLimitOrder) => {
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
        }) => import("./liquidity/v1/tx").MsgLimitOrder;
    };
    "/ollo.liquidity.v1.MsgMarketOrder": {
        aminoType: string;
        toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, amount, orderLifespan }: import("./liquidity/v1/tx").MsgMarketOrder) => {
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
        }) => import("./liquidity/v1/tx").MsgMarketOrder;
    };
    "/ollo.liquidity.v1.MsgMMOrder": {
        aminoType: string;
        toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, price, amount, orderLifespan }: import("./liquidity/v1/tx").MsgMMOrder) => {
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
        }) => import("./liquidity/v1/tx").MsgMMOrder;
    };
    "/ollo.liquidity.v1.MsgCancelOrder": {
        aminoType: string;
        toAmino: ({ orderer, pairId, orderId }: import("./liquidity/v1/tx").MsgCancelOrder) => {
            orderer: string;
            pair_id: string;
            order_id: string;
        };
        fromAmino: ({ orderer, pair_id, order_id }: {
            orderer: string;
            pair_id: string;
            order_id: string;
        }) => import("./liquidity/v1/tx").MsgCancelOrder;
    };
    "/ollo.liquidity.v1.MsgCancelAllOrders": {
        aminoType: string;
        toAmino: ({ orderer, pairIds }: import("./liquidity/v1/tx").MsgCancelAllOrders) => {
            orderer: string;
            pair_ids: string[];
        };
        fromAmino: ({ orderer, pair_ids }: {
            orderer: string;
            pair_ids: string[];
        }) => import("./liquidity/v1/tx").MsgCancelAllOrders;
    };
    "/ollo.lend.v1.MsgRequestLoan": {
        aminoType: string;
        toAmino: ({ creator, amount, collateral, fee, deadline }: import("./lend/v1/tx").MsgRequestLoan) => {
            creator: string;
            amount: string;
            collateral: string;
            fee: string;
            deadline: string;
        };
        fromAmino: ({ creator, amount, collateral, fee, deadline }: {
            creator: string;
            amount: string;
            collateral: string;
            fee: string;
            deadline: string;
        }) => import("./lend/v1/tx").MsgRequestLoan;
    };
    "/ollo.lend.v1.MsgApproveLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: import("./lend/v1/tx").MsgApproveLoan) => {
            creator: string;
            id: string;
        };
        fromAmino: ({ creator, id }: {
            creator: string;
            id: string;
        }) => import("./lend/v1/tx").MsgApproveLoan;
    };
    "/ollo.lend.v1.MsgRepayLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: import("./lend/v1/tx").MsgRepayLoan) => {
            creator: string;
            id: string;
        };
        fromAmino: ({ creator, id }: {
            creator: string;
            id: string;
        }) => import("./lend/v1/tx").MsgRepayLoan;
    };
    "/ollo.lend.v1.MsgLiquidateLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: import("./lend/v1/tx").MsgLiquidateLoan) => {
            creator: string;
            id: string;
        };
        fromAmino: ({ creator, id }: {
            creator: string;
            id: string;
        }) => import("./lend/v1/tx").MsgLiquidateLoan;
    };
    "/ollo.lend.v1.MsgCancelLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: import("./lend/v1/tx").MsgCancelLoan) => {
            creator: string;
            id: string;
        };
        fromAmino: ({ creator, id }: {
            creator: string;
            id: string;
        }) => import("./lend/v1/tx").MsgCancelLoan;
    };
    "/ollo.incentive.v1.MsgApplyMarketMaker": {
        aminoType: string;
        toAmino: ({ address, pairIds }: import("./incentive/v1/tx").MsgApplyMarketMaker) => {
            address: string;
            pair_ids: string[];
        };
        fromAmino: ({ address, pair_ids }: {
            address: string;
            pair_ids: string[];
        }) => import("./incentive/v1/tx").MsgApplyMarketMaker;
    };
    "/ollo.incentive.v1.MsgClaimIncentive": {
        aminoType: string;
        toAmino: ({ address }: import("./incentive/v1/tx").MsgClaimIncentive) => {
            address: string;
        };
        fromAmino: ({ address }: {
            address: string;
        }) => import("./incentive/v1/tx").MsgClaimIncentive;
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
    "/ollo.emissions.v1.MsgCreateRequest": {
        aminoType: string;
        toAmino: ({ from, amountIn, amountOut }: import("./emissions/v1/tx").MsgCreateRequest) => {
            from: string;
            amount_in: string;
            amount_out: string;
        };
        fromAmino: ({ from, amount_in, amount_out }: {
            from: string;
            amount_in: string;
            amount_out: string;
        }) => import("./emissions/v1/tx").MsgCreateRequest;
    };
    "/ollo.emissions.v1.MsgDepositRequest": {
        aminoType: string;
        toAmino: ({ from, userEmissionId, amount }: import("./emissions/v1/tx").MsgDepositRequest) => {
            from: string;
            user_emission_id: string;
            amount: string;
        };
        fromAmino: ({ from, user_emission_id, amount }: {
            from: string;
            user_emission_id: string;
            amount: string;
        }) => import("./emissions/v1/tx").MsgDepositRequest;
    };
    "/ollo.emissions.v1.MsgWithdrawRequest": {
        aminoType: string;
        toAmino: ({ from, userEmissionId, amount }: import("./emissions/v1/tx").MsgWithdrawRequest) => {
            from: string;
            user_emission_id: string;
            amount: string;
        };
        fromAmino: ({ from, user_emission_id, amount }: {
            from: string;
            user_emission_id: string;
            amount: string;
        }) => import("./emissions/v1/tx").MsgWithdrawRequest;
    };
    "/ollo.emissions.v1.MsgDrawRequest": {
        aminoType: string;
        toAmino: ({ from, userEmissionId, amount }: import("./emissions/v1/tx").MsgDrawRequest) => {
            from: string;
            user_emission_id: string;
            amount: string;
        };
        fromAmino: ({ from, user_emission_id, amount }: {
            from: string;
            user_emission_id: string;
            amount: string;
        }) => import("./emissions/v1/tx").MsgDrawRequest;
    };
    "/ollo.emissions.v1.MsgRepayRequest": {
        aminoType: string;
        toAmino: ({ from, userEmissionId, amount }: import("./emissions/v1/tx").MsgRepayRequest) => {
            from: string;
            user_emission_id: string;
            amount: string;
        };
        fromAmino: ({ from, user_emission_id, amount }: {
            from: string;
            user_emission_id: string;
            amount: string;
        }) => import("./emissions/v1/tx").MsgRepayRequest;
    };
    "/ollo.emissions.v1.MsgCloseRequest": {
        aminoType: string;
        toAmino: ({ from, userEmissionId }: import("./emissions/v1/tx").MsgCloseRequest) => {
            from: string;
            user_emission_id: string;
        };
        fromAmino: ({ from, user_emission_id }: {
            from: string;
            user_emission_id: string;
        }) => import("./emissions/v1/tx").MsgCloseRequest;
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
