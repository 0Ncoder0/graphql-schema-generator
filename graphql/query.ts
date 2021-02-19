/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from "@apollo/client/core";
import { clients } from "@/apollo";

import {
  bankAccountsOutput as fBankAccountsOutput,
  accountOutput as fAccountOutput,
  balancesOutput as fBalancesOutput,
  usersOutput as fUsersOutput,
  referralCodeOutput as fReferralCodeOutput,
  inboundTransfersOutput as fInboundTransfersOutput,
  outboundTransfersOutput as fOutboundTransfersOutput,
  qbitCardOutput as fQbitCardOutput,
  qbitCardPrivateInfoOutput as fQbitCardPrivateInfoOutput,
  batchCreateQbitCardProcessOutput as fBatchCreateQbitCardProcessOutput,
  qbitCardTransactionOutput as fQbitCardTransactionOutput,
  qbitCardStatisticsOutput as fQbitCardStatisticsOutput,
  qbitCardTransactionStatisticsOutput as fQbitCardTransactionStatisticsOutput,
  qbitCardGroupOutput as fQbitCardGroupOutput,
  systemConfigOutput as fSystemConfigOutput
} from "./fragment";

import {
  QueryParams,
  BankAccountsOutput,
  AccountOutput,
  BalancesOutput,
  UsersOutput,
  ReferralCodeOutput,
  InboundTransfersOutput,
  OutboundTransfersOutput,
  OutboundTransfersFeeDto,
  QbitCardOutput,
  GetTermsAndConditionsInput,
  QbitCardPrivateInfoOutput,
  BatchCreateQbitCardProcessInput,
  BatchCreateQbitCardProcessOutput,
  QbitCardTransactionOutput,
  StatisticsParams,
  QbitCardStatisticsOutput,
  QbitCardTransactionStatisticsOutput,
  QbitCardGroupOutput,
  SystemConfigOutput
} from "./interface";

/** 查询银行账户列表 */
export const bankAccounts = async (queryParams: QueryParams): Promise<BankAccountsOutput> => {
  return await clients.core
    .query({
      query: gql`
        query bankAccounts($queryParams: QueryParams!) {
          bankAccounts(queryParams: $queryParams) {
            ...bankAccountsOutput
          }
        }
        ${fBankAccountsOutput}
      `,
      variables: { queryParams }
    })
    .then(res => res.data.bankAccounts);
};

/** accounts 列表 */
export const accounts = async (queryParams: QueryParams): Promise<AccountOutput> => {
  return await clients.core
    .query({
      query: gql`
        query accounts($queryParams: QueryParams!) {
          accounts(queryParams: $queryParams) {
            ...accountOutput
          }
        }
        ${fAccountOutput}
      `,
      variables: { queryParams }
    })
    .then(res => res.data.accounts);
};

/** 查询Balance 列表 */
export const balances = async (queryParams: QueryParams): Promise<BalancesOutput> => {
  return await clients.core
    .query({
      query: gql`
        query balances($queryParams: QueryParams!) {
          balances(queryParams: $queryParams) {
            ...balancesOutput
          }
        }
        ${fBalancesOutput}
      `,
      variables: { queryParams }
    })
    .then(res => res.data.balances);
};

/** 查询用户列表 */
export const users = async (queryParams: QueryParams): Promise<UsersOutput> => {
  return await clients.core
    .query({
      query: gql`
        query users($queryParams: QueryParams!) {
          users(queryParams: $queryParams) {
            ...usersOutput
          }
        }
        ${fUsersOutput}
      `,
      variables: { queryParams }
    })
    .then(res => res.data.users);
};

/** 后台查询用户列表 */
export const getAdmins = async (queryParams: QueryParams): Promise<UsersOutput> => {
  return await clients.core
    .query({
      query: gql`
        query getAdmins($queryParams: QueryParams!) {
          getAdmins(queryParams: $queryParams) {
            ...usersOutput
          }
        }
        ${fUsersOutput}
      `,
      variables: { queryParams }
    })
    .then(res => res.data.getAdmins);
};

/** 查询用户手机号或者邮箱是否存在 */
export const isUserIn = async (phoneOrEmail: string): Promise<boolean> => {
  return await clients.core
    .query({
      query: gql`
        query isUserIn($phoneOrEmail: String!) {
          isUserIn(phoneOrEmail: $phoneOrEmail)
        }
      `,
      variables: { phoneOrEmail }
    })
    .then(res => res.data.isUserIn);
};

/** 查询邀请码列表 */
export const referralCodes = async (queryParams: QueryParams): Promise<ReferralCodeOutput> => {
  return await clients.core
    .query({
      query: gql`
        query referralCodes($queryParams: QueryParams!) {
          referralCodes(queryParams: $queryParams) {
            ...referralCodeOutput
          }
        }
        ${fReferralCodeOutput}
      `,
      variables: { queryParams }
    })
    .then(res => res.data.referralCodes);
};

/** 查询入账的交易列表 */
export const InboundTransfers = async (queryParams: QueryParams): Promise<InboundTransfersOutput> => {
  return await clients.core
    .query({
      query: gql`
        query InboundTransfers($queryParams: QueryParams!) {
          InboundTransfers(queryParams: $queryParams) {
            ...inboundTransfersOutput
          }
        }
        ${fInboundTransfersOutput}
      `,
      variables: { queryParams }
    })
    .then(res => res.data.InboundTransfers);
};

/** 查询出账的交易列表 */
export const outboundTransfers = async (queryParams: QueryParams): Promise<OutboundTransfersOutput> => {
  return await clients.core
    .query({
      query: gql`
        query outboundTransfers($queryParams: QueryParams!) {
          outboundTransfers(queryParams: $queryParams) {
            ...outboundTransfersOutput
          }
        }
        ${fOutboundTransfersOutput}
      `,
      variables: { queryParams }
    })
    .then(res => res.data.outboundTransfers);
};

/** 查询出账费率 */
export const outboundTransfersFee = async (data: OutboundTransfersFeeDto): Promise<string> => {
  return await clients.core
    .query({
      query: gql`
        query outboundTransfersFee($data: OutboundTransfersFeeDto!) {
          outboundTransfersFee(data: $data)
        }
      `,
      variables: { data }
    })
    .then(res => res.data.outboundTransfersFee);
};

/** 获取量子卡列表 */
export const qbitCardList = async (queryParams: QueryParams): Promise<QbitCardOutput> => {
  return await clients.core
    .query({
      query: gql`
        query qbitCardList($queryParams: QueryParams!) {
          qbitCardList(queryParams: $queryParams) {
            ...qbitCardOutput
          }
        }
        ${fQbitCardOutput}
      `,
      variables: { queryParams }
    })
    .then(res => res.data.qbitCardList);
};

/** 获取量子卡平台条款 */
export const getTermsAndConditions = async (data: GetTermsAndConditionsInput): Promise<any> => {
  return await clients.core
    .query({
      query: gql`
        query getTermsAndConditions($data: GetTermsAndConditionsInput!) {
          getTermsAndConditions(data: $data)
        }
      `,
      variables: { data }
    })
    .then(res => res.data.getTermsAndConditions);
};

/** 获取量子私密信息 */
export const getQbitCardPrivateInfo = async (cardId: string): Promise<QbitCardPrivateInfoOutput> => {
  return await clients.core
    .query({
      query: gql`
        query getQbitCardPrivateInfo($cardId: String!) {
          getQbitCardPrivateInfo(cardId: $cardId) {
            ...qbitCardPrivateInfoOutput
          }
        }
        ${fQbitCardPrivateInfoOutput}
      `,
      variables: { cardId }
    })
    .then(res => res.data.getQbitCardPrivateInfo);
};

/** 获取批量开卡进度 */
export const getBatchCreateQbitCardProcess = async (
  data: BatchCreateQbitCardProcessInput
): Promise<BatchCreateQbitCardProcessOutput> => {
  return await clients.core
    .query({
      query: gql`
        query getBatchCreateQbitCardProcess($data: BatchCreateQbitCardProcessInput!) {
          getBatchCreateQbitCardProcess(data: $data) {
            ...batchCreateQbitCardProcessOutput
          }
        }
        ${fBatchCreateQbitCardProcessOutput}
      `,
      variables: { data }
    })
    .then(res => res.data.getBatchCreateQbitCardProcess);
};

/** 获取量子卡交易列表 */
export const getQbitCardTransactionList = async (queryParams: QueryParams): Promise<QbitCardTransactionOutput> => {
  return await clients.core
    .query({
      query: gql`
        query getQbitCardTransactionList($queryParams: QueryParams!) {
          getQbitCardTransactionList(queryParams: $queryParams) {
            ...qbitCardTransactionOutput
          }
        }
        ${fQbitCardTransactionOutput}
      `,
      variables: { queryParams }
    })
    .then(res => res.data.getQbitCardTransactionList);
};

/** 获取量子卡余额和卡数量 */
export const getQbitCardStatistics = async (data: StatisticsParams): Promise<QbitCardStatisticsOutput[]> => {
  return await clients.core
    .query({
      query: gql`
        query getQbitCardStatistics($data: StatisticsParams!) {
          getQbitCardStatistics(data: $data) {
            ...qbitCardStatisticsOutput
          }
        }
        ${fQbitCardStatisticsOutput}
      `,
      variables: { data }
    })
    .then(res => res.data.getQbitCardStatistics);
};

/** 获取账户交易信息 */
export const getQbitCardTransactionStatistics = async (
  queryParams: StatisticsParams
): Promise<QbitCardTransactionStatisticsOutput[]> => {
  return await clients.core
    .query({
      query: gql`
        query getQbitCardTransactionStatistics($queryParams: StatisticsParams!) {
          getQbitCardTransactionStatistics(queryParams: $queryParams) {
            ...qbitCardTransactionStatisticsOutput
          }
        }
        ${fQbitCardTransactionStatisticsOutput}
      `,
      variables: { queryParams }
    })
    .then(res => res.data.getQbitCardTransactionStatistics);
};

/** 导出储值卡列表 */
export const exportStoredValueCardList = async (queryParams: QueryParams): Promise<boolean> => {
  return await clients.core
    .query({
      query: gql`
        query exportStoredValueCardList($queryParams: QueryParams!) {
          exportStoredValueCardList(queryParams: $queryParams)
        }
      `,
      variables: { queryParams }
    })
    .then(res => res.data.exportStoredValueCardList);
};

/** 导出额度卡列表 */
export const exportCreditCardList = async (queryParams: QueryParams): Promise<boolean> => {
  return await clients.core
    .query({
      query: gql`
        query exportCreditCardList($queryParams: QueryParams!) {
          exportCreditCardList(queryParams: $queryParams)
        }
      `,
      variables: { queryParams }
    })
    .then(res => res.data.exportCreditCardList);
};

/** 查询卡组 */
export const getQbitCardGroupList = async (queryParams: QueryParams): Promise<QbitCardGroupOutput> => {
  return await clients.core
    .query({
      query: gql`
        query getQbitCardGroupList($queryParams: QueryParams!) {
          getQbitCardGroupList(queryParams: $queryParams) {
            ...qbitCardGroupOutput
          }
        }
        ${fQbitCardGroupOutput}
      `,
      variables: { queryParams }
    })
    .then(res => res.data.getQbitCardGroupList);
};

/** 查询用户可见配置表数据 */
export const systemConfigs = async (queryParams: QueryParams): Promise<SystemConfigOutput> => {
  return await clients.core
    .query({
      query: gql`
        query systemConfigs($queryParams: QueryParams!) {
          systemConfigs(queryParams: $queryParams) {
            ...systemConfigOutput
          }
        }
        ${fSystemConfigOutput}
      `,
      variables: { queryParams }
    })
    .then(res => res.data.systemConfigs);
};
