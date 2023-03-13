import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string | HttpEndpoint;
}) => Promise<{
    cosmos: {
        app: {
            v1alpha1: {
                config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
            };
        };
        auth: {
            v1beta1: {
                accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
            };
        };
        authz: {
            v1beta1: {
                grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
            };
        };
        bank: {
            v1beta1: {
                balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
            };
        };
        base: {
            node: {
                v1beta1: {
                    config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                };
            };
            tendermint: {
                v1beta1: {
                    getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                    getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                    getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                    getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                };
            };
        };
        consensus: {
            v1: {
                params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
            };
        };
        distribution: {
            v1beta1: {
                params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
            };
        };
        evidence: {
            v1beta1: {
                evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
            };
        };
        feegrant: {
            v1beta1: {
                allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
            };
        };
        group: {
            v1: {
                groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
            };
        };
        mint: {
            v1beta1: {
                params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
            };
        };
        nft: {
            v1beta1: {
                balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
            };
        };
        orm: {
            query: {
                v1alpha1: {
                    get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                    list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                };
            };
        };
        params: {
            v1beta1: {
                params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
            };
        };
        slashing: {
            v1beta1: {
                params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
            };
        };
        staking: {
            v1beta1: {
                validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
            };
        };
        tx: {
            v1beta1: {
                simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
            };
        };
        upgrade: {
            v1beta1: {
                currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
            };
        };
    };
    ollo: {
        claim: {
            v1: {
                params(request?: import("./claim/v1/query").QueryParamsRequest): Promise<import("./claim/v1/query").QueryParamsResponse>;
                claimRecord(request: import("./claim/v1/query").QueryGetClaimRecordRequest): Promise<import("./claim/v1/query").QueryGetClaimRecordResponse>;
                claimRecordAll(request?: import("./claim/v1/query").QueryAllClaimRecordRequest): Promise<import("./claim/v1/query").QueryAllClaimRecordResponse>;
                goal(request: import("./claim/v1/query").QueryGetGoalRequest): Promise<import("./claim/v1/query").QueryGetGoalResponse>;
                goalAll(request?: import("./claim/v1/query").QueryAllGoalRequest): Promise<import("./claim/v1/query").QueryAllGoalResponse>;
                airdropSupply(request?: import("./claim/v1/query").QueryGetAirdropSupplyRequest): Promise<import("./claim/v1/query").QueryGetAirdropSupplyResponse>;
                initialClaim(request?: import("./claim/v1/query").QueryGetInitialClaimRequest): Promise<import("./claim/v1/query").QueryGetInitialClaimResponse>;
            };
        };
        emissions: {
            v1: {
                queryEmission(request: import("./emissions/v1/query").QueryEmissionRequest): Promise<import("./emissions/v1/query").QueryEmissionResponse>;
                queryAllEmissions(request?: import("./emissions/v1/query").QueryAllEmissionsRequest): Promise<import("./emissions/v1/query").QueryAllEmissionsResponse>;
            };
        };
        epoch: {
            v1: {
                epochs(request?: import("./epoch/v1/query").QueryEpochsRequest): Promise<import("./epoch/v1/query").QueryEpochsResponse>;
                epoch(request: import("./epoch/v1/query").QueryEpochRequest): Promise<import("./epoch/v1/query").QueryEpochResponse>;
                currentEpoch(request: import("./epoch/v1/query").QueryCurrentEpochRequest): Promise<import("./epoch/v1/query").QueryCurrentEpochResponse>;
            };
        };
        farming: {
            v1: {
                params(request?: import("./farming/v1/query").QueryParamsRequest): Promise<import("./farming/v1/query").QueryParamsResponse>;
                plans(request: import("./farming/v1/query").QueryPlansRequest): Promise<import("./farming/v1/query").QueryPlansResponse>;
                plan(request: import("./farming/v1/query").QueryPlanRequest): Promise<import("./farming/v1/query").QueryPlanResponse>;
                stakings(request: import("./farming/v1/query").QueryStakingsRequest): Promise<import("./farming/v1/query").QueryStakingsResponse>;
                totalStakings(request: import("./farming/v1/query").QueryTotalStakingsRequest): Promise<import("./farming/v1/query").QueryTotalStakingsResponse>;
                rewards(request: import("./farming/v1/query").QueryRewardsRequest): Promise<import("./farming/v1/query").QueryRewardsResponse>;
                currentEpochDays(request?: import("./farming/v1/query").QueryCurrentEpochDaysRequest): Promise<import("./farming/v1/query").QueryCurrentEpochDaysResponse>;
            };
        };
        fees: {
            v1: {
                feeTokens(request?: import("./fees/v1/query").QueryFeeTokensRequest): Promise<import("./fees/v1/query").QueryFeeTokensResponse>;
                denomSpotPrice(request: import("./fees/v1/query").QueryDenomSpotPriceRequest): Promise<import("./fees/v1/query").QueryDenomSpotPriceResponse>;
                denomPoolId(request: import("./fees/v1/query").QueryDenomPoolIdRequest): Promise<import("./fees/v1/query").QueryDenomPoolIdResponse>;
                baseDenom(request?: import("./fees/v1/query").QueryBaseDenomRequest): Promise<import("./fees/v1/query").QueryBaseDenomResponse>;
            };
        };
        grants: {
            v1: {
                params(request?: import("./grants/v1/query").QueryParamsRequest): Promise<import("./grants/v1/query").QueryParamsResponse>;
                auctions(request: import("./grants/v1/query").QueryAuctionsRequest): Promise<import("./grants/v1/query").QueryAuctionsResponse>;
                auction(request: import("./grants/v1/query").QueryAuctionRequest): Promise<import("./grants/v1/query").QueryAuctionResponse>;
                allowedBidder(request: import("./grants/v1/query").QueryAllowedBidderRequest): Promise<import("./grants/v1/query").QueryAllowedBidderResponse>;
                allowedBidders(request: import("./grants/v1/query").QueryAllowedBiddersRequest): Promise<import("./grants/v1/query").QueryAllowedBiddersResponse>;
                bids(request: import("./grants/v1/query").QueryBidsRequest): Promise<import("./grants/v1/query").QueryBidsResponse>;
                bid(request: import("./grants/v1/query").QueryBidRequest): Promise<import("./grants/v1/query").QueryBidResponse>;
                vestings(request: import("./grants/v1/query").QueryVestingsRequest): Promise<import("./grants/v1/query").QueryVestingsResponse>;
            };
        };
        icq: {
            v1: {
                params(request?: import("./icq/v1/query").QueryParamsRequest): Promise<import("./icq/v1/query").QueryParamsResponse>;
            };
        };
        incentive: {
            v1: {
                params(request?: import("./incentive/v1/query").QueryParamsRequest): Promise<import("./incentive/v1/query").QueryParamsResponse>;
                marketMakers(request: import("./incentive/v1/query").QueryMarketMakersRequest): Promise<import("./incentive/v1/query").QueryMarketMakersResponse>;
                incentive(request: import("./incentive/v1/query").QueryIncentiveRequest): Promise<import("./incentive/v1/query").QueryIncentiveResponse>;
            };
        };
        lend: {
            v1: {
                params(request?: import("./lend/v1/query").QueryParamsRequest): Promise<import("./lend/v1/query").QueryParamsResponse>;
                loan(request: import("./lend/v1/query").QueryGetLoanRequest): Promise<import("./lend/v1/query").QueryGetLoanResponse>;
                loanAll(request?: import("./lend/v1/query").QueryAllLoanRequest): Promise<import("./lend/v1/query").QueryAllLoanResponse>;
            };
        };
        liquidity: {
            v1: {
                params(request?: import("./liquidity/v1/query").QueryParamsRequest): Promise<import("./liquidity/v1/query").QueryParamsResponse>;
                pools(request: import("./liquidity/v1/query").QueryPoolsRequest): Promise<import("./liquidity/v1/query").QueryPoolsResponse>;
                pool(request: import("./liquidity/v1/query").QueryPoolRequest): Promise<import("./liquidity/v1/query").QueryPoolResponse>;
                poolByReserveAddress(request: import("./liquidity/v1/query").QueryPoolByReserveAddressRequest): Promise<import("./liquidity/v1/query").QueryPoolResponse>;
                poolByPoolCoinDenom(request: import("./liquidity/v1/query").QueryPoolByPoolCoinDenomRequest): Promise<import("./liquidity/v1/query").QueryPoolResponse>;
                pairs(request: import("./liquidity/v1/query").QueryPairsRequest): Promise<import("./liquidity/v1/query").QueryPairsResponse>;
                pair(request: import("./liquidity/v1/query").QueryPairRequest): Promise<import("./liquidity/v1/query").QueryPairResponse>;
                depositRequests(request: import("./liquidity/v1/query").QueryDepositRequestsRequest): Promise<import("./liquidity/v1/query").QueryDepositRequestsResponse>;
                depositRequest(request: import("./liquidity/v1/query").QueryDepositRequestRequest): Promise<import("./liquidity/v1/query").QueryDepositRequestResponse>;
                withdrawRequests(request: import("./liquidity/v1/query").QueryWithdrawRequestsRequest): Promise<import("./liquidity/v1/query").QueryWithdrawRequestsResponse>;
                withdrawRequest(request: import("./liquidity/v1/query").QueryWithdrawRequestRequest): Promise<import("./liquidity/v1/query").QueryWithdrawRequestResponse>;
                orders(request: import("./liquidity/v1/query").QueryOrdersRequest): Promise<import("./liquidity/v1/query").QueryOrdersResponse>;
                order(request: import("./liquidity/v1/query").QueryOrderRequest): Promise<import("./liquidity/v1/query").QueryOrderResponse>;
                ordersByOrderer(request: import("./liquidity/v1/query").QueryOrdersByOrdererRequest): Promise<import("./liquidity/v1/query").QueryOrdersResponse>;
                orderBooks(request: import("./liquidity/v1/query").QueryOrderBooksRequest): Promise<import("./liquidity/v1/query").QueryOrderBooksResponse>;
                numMMOrders(request: import("./liquidity/v1/query").QueryNumMMOrdersRequest): Promise<import("./liquidity/v1/query").QueryNumMMOrdersResponse>;
            };
        };
        lock: {
            v1: {
                queryParams(request?: import("./lock/v1/query").QueryParamsRequest): Promise<import("./lock/v1/query").QueryParamsResponse>;
            };
        };
        market: {
            v1: {
                params(request?: import("./market/v1/query").QueryParamsRequest): Promise<import("./market/v1/query").QueryParamsResponse>;
            };
        };
        mint: {
            v1: {
                params(request?: import("./mint/v1/query").QueryParamsRequest): Promise<import("./mint/v1/query").QueryParamsResponse>;
                inflation(request?: import("./mint/v1/query").QueryInflationRequest): Promise<import("./mint/v1/query").QueryInflationResponse>;
                annualProvisions(request?: import("./mint/v1/query").QueryAnnualProvisionsRequest): Promise<import("./mint/v1/query").QueryAnnualProvisionsResponse>;
                distribution(request?: import("./mint/v1/query").QueryDistributionRequest): Promise<import("./mint/v1/query").QueryDistributionResponse>;
                lastBlockTime(request?: import("./mint/v1/query").QueryLastBlockTimeRequest): Promise<import("./mint/v1/query").QueryLastBlockTimeResponse>;
            };
        };
        nft: {
            v1: {
                supply(request: import("./nft/v1/query").QuerySupplyRequest): Promise<import("./nft/v1/query").QuerySupplyResponse>;
                nFTsOfOwner(request: import("./nft/v1/query").QueryNFTsOfOwnerRequest): Promise<import("./nft/v1/query").QueryNFTsOfOwnerResponse>;
                collection(request: import("./nft/v1/query").QueryCollectionRequest): Promise<import("./nft/v1/query").QueryCollectionResponse>;
                denom(request: import("./nft/v1/query").QueryDenomRequest): Promise<import("./nft/v1/query").QueryDenomResponse>;
                denoms(request?: import("./nft/v1/query").QueryDenomsRequest): Promise<import("./nft/v1/query").QueryDenomsResponse>;
                nFT(request: import("./nft/v1/query").QueryNFTRequest): Promise<import("./nft/v1/query").QueryNFTResponse>;
                params(request?: import("./nft/v1/query").QueryParamsRequest): Promise<import("./nft/v1/query").QueryParamsResponse>;
            };
        };
        ons: {
            v1: {
                params(request?: import("./ons/v1/query").QueryParamsRequest): Promise<import("./ons/v1/query").QueryParamsResponse>;
                whois(request: import("./ons/v1/query").QueryGetWhoisRequest): Promise<import("./ons/v1/query").QueryGetWhoisResponse>;
                whoisAll(request?: import("./ons/v1/query").QueryAllWhoisRequest): Promise<import("./ons/v1/query").QueryAllWhoisResponse>;
            };
        };
        prices: {
            v1: {
                params(request?: import("./prices/v1/query").QueryParamsRequest): Promise<import("./prices/v1/query").QueryParamsResponse>;
                bandPricesResult(request: import("./prices/v1/query").QueryBandPricesRequest): Promise<import("./prices/v1/query").QueryBandPricesResponse>;
                lastBandPricesId(request?: import("./prices/v1/query").QueryLastBandPricesIdRequest): Promise<import("./prices/v1/query").QueryLastBandPricesIdResponse>;
                queryRoundData(request: import("./prices/v1/query").QueryRoundDataRequest): Promise<import("./prices/v1/query").QueryRoundDataResponse>;
                latestRoundData(request: import("./prices/v1/query").QueryLatestRoundDataRequest): Promise<import("./prices/v1/query").QueryLatestRoundDataResponse>;
                queryAllModuleOwner(request?: import("./prices/v1/query").QueryModuleOwnerRequest): Promise<import("./prices/v1/query").QueryModuleOwnerResponse>;
                queryFeedByFeedId(request: import("./prices/v1/query").QueryFeedByIdRequest): Promise<import("./prices/v1/query").QueryFeedByIdResponse>;
                queryAccountInfo(request: import("./prices/v1/query").QueryAccountRequest): Promise<import("./prices/v1/query").QueryAccountResponse>;
                queryFeedRewardAvailStrategy(request?: import("./prices/v1/query").QueryFeedRewardAvailStrategiesRequest): Promise<import("./prices/v1/query").QueryFeedRewardAvailStrategiesResponse>;
            };
        };
        ratelimit: {
            v1: {
                params(request?: import("./ratelimit/v1/query").QueryParamsRequest): Promise<import("./ratelimit/v1/query").QueryParamsResponse>;
            };
        };
        reserve: {
            v1: {
                params(request?: import("./reserve/v1/query").QueryParamsRequest): Promise<import("./reserve/v1/query").QueryParamsResponse>;
                getDenoms(request?: import("./reserve/v1/query").QueryGetDenomsRequest): Promise<import("./reserve/v1/query").QueryGetDenomsResponse>;
                getDenom(request: import("./reserve/v1/query").QueryGetDenomRequest): Promise<import("./reserve/v1/query").QueryGetDenomResponse>;
                getDenomWhitelist(request: import("./reserve/v1/query").QueryGetDenomWhitelistRequest): Promise<import("./reserve/v1/query").QueryGetDenomWhitelistResponse>;
                denomsFromCreator(request: import("./reserve/v1/query").QueryDenomsFromCreatorRequest): Promise<import("./reserve/v1/query").QueryDenomsFromCreatorResponse>;
            };
        };
        token: {
            v1: {
                token(request: import("./token/v1/query").QueryTokenRequest): Promise<import("./token/v1/query").QueryTokenResponse>;
                tokens(request: import("./token/v1/query").QueryTokensRequest): Promise<import("./token/v1/query").QueryTokensResponse>;
                fees(request: import("./token/v1/query").QueryFeesRequest): Promise<import("./token/v1/query").QueryFeesResponse>;
                params(request?: import("./token/v1/query").QueryParamsRequest): Promise<import("./token/v1/query").QueryParamsResponse>;
                burn(request?: import("./token/v1/query").QueryBurnRequest): Promise<import("./token/v1/query").QueryBurnResponse>;
            };
        };
        vault: {
            v1: {
                queryVault(request: import("./vault/v1/query").QueryVaultRequest): Promise<import("./vault/v1/query").QueryVaultResponse>;
                queryAllVaults(request?: import("./vault/v1/query").QueryAllVaultsRequest): Promise<import("./vault/v1/query").QueryAllVaultsResponse>;
            };
        };
    };
}>;
