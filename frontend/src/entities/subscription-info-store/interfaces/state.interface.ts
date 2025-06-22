import { GetSubscriptionInfoByShortUuidCommand } from '@localzet/aura-contract'

export interface IState {
    subscription: GetSubscriptionInfoByShortUuidCommand.Response['response'] | null
}
