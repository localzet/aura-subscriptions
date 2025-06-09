import { GetSubscriptionInfoByShortUuidCommand } from '@localzet/backend-contract'

export interface IState {
    subscription: GetSubscriptionInfoByShortUuidCommand.Response['response'] | null
}
