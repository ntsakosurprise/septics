
import Settings from './settings/settings'
import SettingsModal from './modal/modal'

let action = function(e){

    e.preventDefault()
    console.log('THE ACTION IS CALLED ONCLICK')
    console.log(this)
    return(
        this.display
    )

}
const primaryFeatures = [


    {
        name: 'settings',
        icon: 'Settings',
        display: SettingsModal,
        action: action
    },
    {
        name: 'chats',
        icon: 'Chats',
        display: Settings
    },
    {
        name: 'notifications',
        icon: 'Notifications',
        display: Settings
    },
    {
        name: 'contacts',
        icon: 'Contacts',
        display: Settings
    },
    {
        name: 'calls',
        icon: 'Calls',
        display: Settings
    },
    {
        name: 'add',
        icon: 'Add',
        display: Settings
    }
]

export default {primaryFeatures}