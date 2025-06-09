import { GetSubscriptionInfoByShortUuidCommand } from '@localzet/aura-backend-contract'

export interface IState {
    subscription: GetSubscriptionInfoByShortUuidCommand.Response['response'] | null
}
