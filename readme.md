# graphql 转 typescript

年少轻狂时做的，现在知道用现成的了

## 将 Graphql 转成以下结构

### enum

```ts
/** CurrencyEnum */
export enum CurrencyEnum {
  /** USD */
  USD = "USD",
  /** CNY */
  CNY = "CNY",
  /** EUR */
  EUR = "EUR",
  /** GBP */
  GBP = "GBP"
}
```

### fragment

```ts
/** Address */
export const address = gql`
  fragment address on Address {
    # 地址栏第一行
    addressLine1
    # 地址栏第二行
    addressLine2
    # 城市
    city
    # 州或省
    state
    # ISO_3166-1 二位字母代码， 如CN, US等
    country
    # 邮编
    postalCode
  }
`;
```

### interface

```ts
/** Address */
export interface Address {
  /** 地址栏第一行 */
  addressLine1: string;
  /** 地址栏第二行 */
  addressLine2?: string;
  /** 城市 */
  city: string;
  /** 州或省 */
  state: string;
  /** ISO_3166-1 二位字母代码， 如CN, US等 */
  country: string;
  /** 邮编 */
  postalCode?: string;
}
```

## mutation

```ts
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
      variables: { data }
    })
    .then(res => res.data.login);
};
```

## query

```ts
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
```
