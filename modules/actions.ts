/**
 *   IMPORTANT! 
 *   Every function must have arguments:
 *   @bot - instance of telegram bot
 *   @msg - user message info
 *   @callback_data (nullable) - callback dataobject 
 * 
 */

import { IInlineKeyboardMarkup } from "./scenarioTypes"
import Storage from "./Storage" 
import UsersPrivileges from "./UsersPrivileges"
import {ProductButton, 
    FirstProductButton, 
    LikeButton,
    DislikeButton, 
    AddProductButton,
    CategoryButton,
    AddCategoryButton } from './buttons'

import {BPM, BPMState} from './BPM'

const BPMEngine = new BPM()

export default {
    testAction: (bot, msg, callback_data = null) => {
        bot.sendMessage(msg.chat.id, 'Тырыпыры 8 дыры')
    }
}