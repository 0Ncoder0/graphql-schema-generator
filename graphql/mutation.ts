import { gql } from "@apollo/client/core";
import { clients } from "@/apollo";

import {
  bankAccount as fBankAccount,
  user as fUser,
  outboundTransfer as fOutboundTransfer,
  batchCreateQbitCardOutput as fBatchCreateQbitCardOutput,
  qbitCard as fQbitCard
} from "./fragment";

import {
  CreateBankAccountInput,
  BankAccount,
  UpdateStatusDto,
  SignUpDto,
  User,
  UserInputUpdate,
  UserInput,
  VerCodeBase,
  CheckVerCode,
  SetPayPwdDto,
  UpdatePayPwdDto,
  InputInviteCode,
  CreateOutboundTransferInput,
  OutboundTransfer,
  BatchCreateQbitCardInput,
  BatchCreateQbitCardOutput,
  IncreaseQbitCarLimitInput,
  DecreaseQbitCarLimitInput,
  SuspendQbitCardInput,
  EnableQbitCarLimitInput,
  UpdateQbitCardInput,
  QbitCard,
  UpdateTermsAndConditionsInput,
  LoginDto
} from "./interface";

/** 创建收款人的银行账号 */
export const bankAccount = async (data: CreateBankAccountInput): Promise<BankAccount> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation bankAccount($data: CreateBankAccountInput!) {
          bankAccount(data: $data) {
            ...bankAccount
          }
        }
        ${fBankAccount}
      `,
      variable: { data }
    })
    .then(res => res.data.bankAccount);
};

/** 提交收款方审核状态 */
export const updateBankAccountStatus = async (data: UpdateStatusDto): Promise<boolean> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation updateBankAccountStatus($data: UpdateStatusDto!) {
          updateBankAccountStatus(data: $data)
        }
      `,
      variable: { data }
    })
    .then(res => res.data.updateBankAccountStatus);
};

/** 注册 */
export const register = async (data: SignUpDto): Promise<User> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation register($data: SignUpDto!) {
          register(data: $data) {
            ...user
          }
        }
        ${fUser}
      `,
      variable: { data }
    })
    .then(res => res.data.register);
};

/** 登出 */
export const logout = async (): Promise<boolean> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation logout {
          logout
        }
      `,
      variable: {}
    })
    .then(res => res.data.logout);
};

/** 更新用户部分字段 */
export const updateUser = async (data: UserInputUpdate): Promise<boolean> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation updateUser($data: UserInputUpdate!) {
          updateUser(data: $data)
        }
      `,
      variable: { data }
    })
    .then(res => res.data.updateUser);
};

/** 更新用户部分字段 */
export const updateUserNoId = async (data: UserInput): Promise<User> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation updateUserNoId($data: UserInput!) {
          updateUserNoId(data: $data) {
            ...user
          }
        }
        ${fUser}
      `,
      variable: { data }
    })
    .then(res => res.data.updateUserNoId);
};

/** 发送注册验证码 */
export const sendVerifCode = async (data: VerCodeBase): Promise<boolean> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation sendVerifCode($data: VerCodeBase!) {
          sendVerifCode(data: $data)
        }
      `,
      variable: { data }
    })
    .then(res => res.data.sendVerifCode);
};

/** 验证验证码 */
export const checkVerifCode = async (data: CheckVerCode): Promise<boolean> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation checkVerifCode($data: CheckVerCode!) {
          checkVerifCode(data: $data)
        }
      `,
      variable: { data }
    })
    .then(res => res.data.checkVerifCode);
};

/** 设置交易密码 */
export const setPayPwd = async (data: SetPayPwdDto): Promise<boolean> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation setPayPwd($data: SetPayPwdDto!) {
          setPayPwd(data: $data)
        }
      `,
      variable: { data }
    })
    .then(res => res.data.setPayPwd);
};

/** 修改交易密码 */
export const updatePayPwd = async (data: UpdatePayPwdDto): Promise<boolean> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation updatePayPwd($data: UpdatePayPwdDto!) {
          updatePayPwd(data: $data)
        }
      `,
      variable: { data }
    })
    .then(res => res.data.updatePayPwd);
};

/** 创建邀请码 */
export const creatInviteCode = async (data: InputInviteCode): Promise<boolean> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation creatInviteCode($data: InputInviteCode!) {
          creatInviteCode(data: $data)
        }
      `,
      variable: { data }
    })
    .then(res => res.data.creatInviteCode);
};

/** 删除指定邀请码 */
export const deleteInviteCode = async (codeId: string): Promise<boolean> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation deleteInviteCode($codeId: String!) {
          deleteInviteCode(codeId: $codeId)
        }
      `,
      variable: { codeId }
    })
    .then(res => res.data.deleteInviteCode);
};

/** 创建出账交易记录 */
export const outboundTransfer = async (data: CreateOutboundTransferInput): Promise<OutboundTransfer> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation outboundTransfer($data: CreateOutboundTransferInput!) {
          outboundTransfer(data: $data) {
            ...outboundTransfer
          }
        }
        ${fOutboundTransfer}
      `,
      variable: { data }
    })
    .then(res => res.data.outboundTransfer);
};

/** 批量新开量子卡,接口商户和admin都能访问 */
export const batchCreateQbitCard = async (data: BatchCreateQbitCardInput): Promise<BatchCreateQbitCardOutput[]> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation batchCreateQbitCard($data: BatchCreateQbitCardInput!) {
          batchCreateQbitCard(data: $data) {
            ...batchCreateQbitCardOutput
          }
        }
        ${fBatchCreateQbitCardOutput}
      `,
      variable: { data }
    })
    .then(res => res.data.batchCreateQbitCard);
};

/** 增加额度,共享的卡额度不需要 */
export const increaseQbitCardLimit = async (data: IncreaseQbitCarLimitInput): Promise<boolean> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation increaseQbitCardLimit($data: IncreaseQbitCarLimitInput!) {
          increaseQbitCardLimit(data: $data)
        }
      `,
      variable: { data }
    })
    .then(res => res.data.increaseQbitCardLimit);
};

/** 减少额度 */
export const decreaseQbitCardLimit = async (data: DecreaseQbitCarLimitInput): Promise<boolean> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation decreaseQbitCardLimit($data: DecreaseQbitCarLimitInput!) {
          decreaseQbitCardLimit(data: $data)
        }
      `,
      variable: { data }
    })
    .then(res => res.data.decreaseQbitCardLimit);
};

/** 冻结卡 */
export const suspendQbitCard = async (data: SuspendQbitCardInput): Promise<string[]> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation suspendQbitCard($data: SuspendQbitCardInput!) {
          suspendQbitCard(data: $data)
        }
      `,
      variable: { data }
    })
    .then(res => res.data.suspendQbitCard);
};

/** 解冻卡 */
export const enableQbitCard = async (data: EnableQbitCarLimitInput): Promise<boolean> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation enableQbitCard($data: EnableQbitCarLimitInput!) {
          enableQbitCard(data: $data)
        }
      `,
      variable: { data }
    })
    .then(res => res.data.enableQbitCard);
};

/** 更新量子卡 */
export const updateQbitCard = async (data: UpdateQbitCardInput): Promise<QbitCard> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation updateQbitCard($data: UpdateQbitCardInput!) {
          updateQbitCard(data: $data) {
            ...qbitCard
          }
        }
        ${fQbitCard}
      `,
      variable: { data }
    })
    .then(res => res.data.updateQbitCard);
};

/** 更新量子卡平台条款 */
export const updateTermsAndConditions = async (data: UpdateTermsAndConditionsInput): Promise<string> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation updateTermsAndConditions($data: UpdateTermsAndConditionsInput!) {
          updateTermsAndConditions(data: $data)
        }
      `,
      variable: { data }
    })
    .then(res => res.data.updateTermsAndConditions);
};

/** 更新用户KY状态 */
export const updateKyInfo = async (): Promise<boolean> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation updateKyInfo {
          updateKyInfo
        }
      `,
      variable: {}
    })
    .then(res => res.data.updateKyInfo);
};

/** 登录 */
export const login = async (data: LoginDto): Promise<User> => {
  return await clients.core
    .mutate({
      mutation: gql`
        mutation login($data: LoginDto!) {
          login(data: $data) {
            ...user
          }
        }
        ${fUser}
      `,
      variable: { data }
    })
    .then(res => res.data.login);
};
