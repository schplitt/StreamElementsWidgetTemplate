/* eslint-disable ts/method-signature-style */

declare global {
  interface Window {
    addEventListener(
      type: 'onWidgetLoad',
      listener: (ev: EventTypeMap<TProvider>['onWidgetLoad']) => void,
      options?: boolean | AddEventListenerOptions
    ): void

    addEventListener(
      type: 'onEventReceived',
      listener: (ev: EventTypeMap<TProvider>['onEventReceived']) => void,
      options?: boolean | AddEventListenerOptions
    ): void

    addEventListener(
      type: 'onSessionUpdate',
      listener: (ev: EventTypeMap['onSessionUpdate']) => void,
      options?: boolean | AddEventListenerOptions
    ): void
  }
}

// TODO: Data from the input fields of the widget
interface FieldData {

}

export interface EventTypeMap {
  onWidgetLoad: OnWidgetLoadEvent
  onEventReceived: OnEventReceivedEvent
  onSessionUpdate: OnSessionUpdateEvent
}

export interface OnEventReceivedEvent extends BaseEvent {
  detail: TwitchEventDetails
}

/**
 * As per documentation, type is the same besides the type
 *
 * {@link https://dev.streamelements.com/docs/widgets-old/6707a030af0b9-custom-widget-events#on-session-update}
 */
export interface OnSessionUpdateEvent extends Omit<OnWidgetLoadEvent, 'type'> {
  type: 'onSessionUpdate'
}

interface OnWidgetLoadEvent<TFieldData extends Record<string, any> | undefined = undefined> extends BaseEvent {
  type: 'onWidgetLoad'
  detail: {
    channel: {
      apiToken: string
      avatar: string
      id: string
      providerId: string
      username: string
    }
    recents: {
      name: string
      createdAt: string
      type: string
    }[]
    currency: {
      code: string
      name: string
      symbol: string
    }
    overlay: {
      isEditorMode: boolean
      muted: boolean
    }
    fieldData: FieldData
  }
}

export interface TwitchData extends CommonData {
  /**
   * Name of latest follower
   */
  'follower-latest': {
    name: string
  }

  /**
   * Followers since session start
   */
  'follower-session': {
    count: number
  }

  /**
   * Followers this week
   */
  'follower-week': {
    count: number
  }

  /**
   * Followers this month
   */
  'follower-month': {
    count: number
  }

  /**
   * Followers goal
   */
  'follower-goal': {
    amount: number
  }

  /**
   * Total count of followers
   */
  'follower-total': {
    count: number
  }

  /**
   * Array of latest subscribers
   */
  'subscriber-latest': {
    name: string
    amount: number
    tier: string
    message: string
  }[]

  /**
   * Latest new sub
   */
  'subscriber-new-latest': {
    name: string
    amount: number
    message: string
  }

  /**
   * Latest resub
   */
  'subscriber-resub-latest': {
    name: string
    amount: number
    message: string
  }

  /**
   * Latest gifted sub
   */
  'subscriber-gifted-latest': {
    name: string
    amount: number
    message: string
    tier: string
    sender: string
  }

  /**
   * Subscribers since session start
   */
  'subscriber-session': {
    count: number
  }

  /**
   * Number of new subs during session
   */
  'subscriber-new-session': {
    count: number
  }

  /**
   * Number of resubs during session
   */
  'subscriber-resub-session': {
    count: number
  }

  /**
   * Number of gifted subs during session
   */
  'subscriber-gifted-session': {
    count: number
  }

  /**
   * Subscribers this week
   */
  'subscriber-week': {
    count: number
  }

  /**
   * Subscribers this month
   */
  'subscriber-month': {
    count: number
  }

  /**
   * Subscribers goal
   */
  'subscriber-goal': {
    amount: number
  }

  /**
   * Total count of subscribers
   */
  'subscriber-total': {
    count: number
  }

  /**
   * Subscriber points
   */
  'subscriber-points': {
    amount: number
  }

  /**
   * Latest gifter
   */
  'subscriber-alltime-gifter': {
    name: string
    amount: number
  }

  /**
   * Latest host
   */
  'host-latest': {
    name: string
    amount: number
  }

  /**
   * Latest raid
   */
  'raid-latest': {
    name: string
    amount: number
  }

  /**
   * Cheers since session start
   */
  'cheer-session': {
    amount: number
  }

  /**
   * Cheers this week
   */
  'cheer-week': {
    amount: number
  }

  /**
   * Cheers this month
   */
  'cheer-month': {
    amount: number
  }

  /**
   * Total amount of cheers
   */
  'cheer-total': {
    amount: number
  }

  /**
   * Number of cheer events
   */
  'cheer-count': {
    count: number
  }

  /**
   * Cheer goal
   */
  'cheer-goal': {
    amount: number
  }

  /**
   * Latest cheer event
   */
  'cheer-latest': {
    name: string
    amount: number
  }

  /**
   * Top cheer since session start
   */
  'cheer-session-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top cheer in past week
   */
  'cheer-weekly-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top cheer in past month
   */
  'cheer-monthly-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top cheer all time
   */
  'cheer-alltime-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top cheerer since session start
   */
  'cheer-session-top-donator': {
    amount: number
    name: string
  }

  /**
   * Top cheerer in past week
   */
  'cheer-weekly-top-donator': {
    amount: number
    name: string
  }

  /**
   * Top cheerer in past month
   */
  'cheer-monthly-top-donator': {
    amount: number
    name: string
  }

  /**
   * Top cheerer all time
   */
  'cheer-alltime-top-donator': {
    amount: number
    name: string
  }

  /**
   * Latest hypetrain event
   */
  'hypetrain-latest': {
    active: number
    amount: number
    level: number
    levelChanged: number
    name: string
    type: string
  }

  /**
   * Latest hypetrain top contributors
   */
  'hypetrain-latest-top-contributors': any[]

  /**
   * Hypetrain level goal
   */
  'hypetrain-level-goal': {
    amount: number
  }

  /**
   * Hypetrain level progress
   */
  'hypetrain-level-progress': {
    amount: number
    percent: number
  }

  /**
   * Total hypetrain amount
   */
  'hypetrain-total': {
    amount: number
  }
}

interface TwitchFollowerEventDetails extends CommonDetails {
  listener: 'follower-latest'
  event: {
    $$hashKey: string
    /**
     * Image URL
     */
    avatar: string
    displayName: string
    name: string
    /**
     * Name of the event on the streaming service (e.g. Twitch)
     */
    originalEventName: string
    /**
     * The id provided by the streaming service (e.g. Twitch)
     */
    providerId: string

    sessionTop: boolean
    type: 'follower'
  }
}

interface TwitchSubscriberEventDetails extends CommonDetails {
  listener: 'subscriber-latest'
  event: {
    $$hashKey: string

    amount: number

    message?: string

    tier?: 'prime' | '1000' | '2000' | '3000'

    /**
     * Image URL
     */
    avatar: string
    displayName: string
    name: string
    /**
     * Name of the event on the streaming service (e.g. Twitch)
     */
    originalEventName: 'subscriber-latest'
    /**
     * The id provided by the streaming service (e.g. Twitch)
     */
    providerId: string

    sessionTop: boolean
    type: 'subscriber'
    _id: string

    /**
     * Flag to indicate that the event is a gifted subscription
     */
    gifted?: true
    /**
     * Name of the sender of the gifted subscription
     * Present only if `gifted` is `true`
     */
    sender?: string

    /**
     * Flag to indicate that the event is a community gift
     */
    isCommunityGift?: true
  }
}

interface TwitchTipEventDetails extends CommonDetails {
  listener: 'tip-latest'
  event: {
    amount: number
    /**
     * Image URL
     */
    avatar: string
    displayName: string

    isGifted?: false

    message?: string
    name: string
    originalEventName: string

    providerId: string
    sessionTop: boolean
    type: 'tip'
    _id: string
  }
}

interface TwitchCheerEventDetails extends CommonDetails {
  listener: 'cheer-latest'
  event: {
    amount: number
    /**
     * Image URL
     */
    avatar: string
    displayName: string
    message: string
    name: string
    originalEventName: 'cheer-latest'
    providerId: string
    sessionTop: boolean
    type: 'cheer'
    _id: string
  }
}

interface TwitchRaidEventDetails extends CommonDetails {
  listener: 'raid-latest'
  event: {
    amount: number
    gifted?: boolean

    /**
     * Image URL
     */
    avatar: string
    displayName: string
    name: string
    message?: string
    originalEventName: 'raid-latest'
    providerId: string
    sessionTop: boolean
    type: 'raid'
    _id: string
  }
}

interface TwitchMessageEventDetails extends CommonDetails {
  listener: 'message'
  event: {
    service: 'twitch'
    /**
     * Contains html converted message if it includes emotes
     */
    renderedText: string
    data: {
      channel: string
      displayColor: `#${string}`
      displayName: string
      nick: string
      emotes: {
        type: 'twitch'
        /**
         * At what position in the message the emote starts
         */
        start: number
        /**
         * At what position in the message the emote ends
         */
        end: number
        gif: boolean
        id: string
        name: string
        /**
         * Urls to the emote image
         */
        urls: {
          [key: number]: string
        }
      }[]
      isAction: boolean
      msgId: string
      /**
       * What tags the message had
       * Also includes the user's badges
       */
      tags: {
        'id'?: string
        'badge-info': string
        /**
         * What badges the user has
         */
        'badges': string
        'client-nonce': string
        'color': `#${string}`
        'display-name': string
        /**
         * If the message sent was only emotes
         * Not present if the message was not only emotes
         */
        'emote-only'?: '1'
        'emotes': string
        'first-msg': '0' | '1'
        'flags': string
        'mod': '0' | '1'

        'returningChatter': '0' | '1'
        'room-id': string
        'subscriber': '0' | '1'
        'tmi-sent-ts': string
        'turbo': '0' | '1'
        'user-id': string
        'user-type': string
      }
      /**
       * The concrete message sent
       */
      text: string
      /**
       * Timestamp of when the message was sent
       */
      time: number
      userId: string

      badges: TwitchBadge[]
    }
  }
}

interface BroadCasterBadge {
  description: 'Broadcaster'
  type: 'broadcaster'
  url: string
  version: string
}

interface ModeratorBadge {
  description: 'Moderator'
  type: 'moderator'
  url: string
  version: string
}

interface PartnerBadge {
  description: 'Verified'
  type: 'partner'
  url: string
  version: string
}

interface SubscriberBadge {
  description: 'Subscriber'
  type: 'subscriber'
  url: string
  version: string
}

type TwitchBadge = BroadCasterBadge | ModeratorBadge | PartnerBadge | SubscriberBadge

export type TwitchEventDetails = TwitchMessageEventDetails | TwitchTipEventDetails | TwitchFollowerEventDetails | TwitchSubscriberEventDetails | TwitchCheerEventDetails | TwitchRaidEventDetails

export type TwitchEventMap = {
  [key in TwitchEventDetails['listener']]: Extract<TwitchEventDetails, { listener: key }>
}

export interface CommonData {
  /**
   * Latest tip event
   */
  'tip-latest': {
    name: string
    amount: number
  }

  /**
   * Top tip since session start
   */
  'tip-session-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top tip in past week
   */
  'tip-weekly-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top tip in past month
   */
  'tip-monthly-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top tip all time
   */
  'tip-alltime-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top tipper since session start
   */
  'tip-session-top-donator': {
    amount: number
    name: string
  }

  /**
   * Top tipper in past week
   */
  'tip-weekly-top-donator': {
    amount: number
    name: string
  }

  /**
   * Top tipper in past month
   */
  'tip-monthly-top-donator': {
    amount: number
    name: string
  }

  /**
   * Top tipper all time
   */
  'tip-alltime-top-donator': {
    amount: number
    name: string
  }

  /**
   * Sum of all donations since session start
   */
  'tip-session': {
    amount: number
  }

  /**
   * Sum of all donations this week
   */
  'tip-week': {
    amount: number
  }

  /**
   * Sum of all donations this month
   */
  'tip-month': {
    amount: number
  }

  /**
   * Sum of all donations all time
   */
  'tip-total': {
    amount: number
  }

  /**
   * Number of tip events
   */
  'tip-count': {
    count: number
  }

  /**
   * Donation goal
   */
  'tip-goal': {
    amount: number
  }

  /**
   * Merch orders goal progress
   */
  'merch-goal-orders': {
    amount: number
  }

  /**
   * Merch items goal progress
   */
  'merch-goal-items': {
    amount: number
  }

  /**
   * Merch total goal progress
   */
  'merch-goal-total': {
    amount: number
  }

  /**
   * Latest merch event
   */
  'merch-latest': {
    amount: number
    items: any[]
    name: string
  }

  /**
   * Recent followers
   */
  'follower-recent': Array<{
    name: string
    createdAt: string
    type: string
  }>

  /**
   * Recent subscribers
   */
  'subscriber-recent': any[]

  /**
   * Recent hosts
   */
  'host-recent': any[]

  /**
   * Recent raids
   */
  'raid-recent': any[]

  /**
   * Recent cheers
   */
  'cheer-recent': any[]

  /**
   * Recent tips
   */
  'tip-recent': any[]

  /**
   * Recent merch events
   */
  'merch-recent': any[]

  /**
   * Top charity campaign donation all time
   */
  'charityCampaignDonation-alltime-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top charity campaign donator all time
   */
  'charityCampaignDonation-alltime-top-donator': {
    amount: number
    name: string
  }

  /**
   * Latest charity campaign donation
   */
  'charityCampaignDonation-latest': {
    amount: number
    name: string
  }

  /**
   * Top charity campaign donation in past month
   */
  'charityCampaignDonation-monthly-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top charity campaign donator in past month
   */
  'charityCampaignDonation-monthly-top-donator': {
    amount: number
    name: string
  }

  /**
   * Recent charity campaign donations
   */
  'charityCampaignDonation-recent': any[]

  /**
   * Top charity campaign donation since session start
   */
  'charityCampaignDonation-session-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top charity campaign donator since session start
   */
  'charityCampaignDonation-session-top-donator': {
    amount: number
    name: string
  }

  /**
   * Top charity campaign donation in past week
   */
  'charityCampaignDonation-weekly-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top charity campaign donator in past week
   */
  'charityCampaignDonation-weekly-top-donator': {
    amount: number
    name: string
  }

  /**
   * Top cheer purchase all time
   */
  'cheerPurchase-alltime-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top cheer purchase donator all time
   */
  'cheerPurchase-alltime-top-donator': {
    amount: number
    name: string
  }

  /**
   * Latest cheer purchase
   */
  'cheerPurchase-latest': {
    amount: number
    name: string
  }

  /**
   * Top cheer purchase in past month
   */
  'cheerPurchase-monthly-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top cheer purchase donator in past month
   */
  'cheerPurchase-monthly-top-donator': {
    amount: number
    name: string
  }

  /**
   * Recent cheer purchases
   */
  'cheerPurchase-recent': any[]

  /**
   * Top cheer purchase since session start
   */
  'cheerPurchase-session-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top cheer purchase donator since session start
   */
  'cheerPurchase-session-top-donator': {
    amount: number
    name: string
  }

  /**
   * Top cheer purchase in past week
   */
  'cheerPurchase-weekly-top-donation': {
    amount: number
    name: string
  }

  /**
   * Top cheer purchase donator in past week
   */
  'cheerPurchase-weekly-top-donator': {
    amount: number
    name: string
  }

  /**
   * Latest purchase
   */
  'purchase-latest': {
    amount: number
    avatar: string
    items: any[]
    message: string
    name: string
  }
}

export interface BaseEvent extends Event {
  currentTarget: Window
  srcElement: Window
  target: Window
}

export interface CommonDetails {
  listener: string
  event: Record<string, any>
}
