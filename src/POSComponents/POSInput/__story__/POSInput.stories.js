import {text, withKnobs, number} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions'
import PosTextField from "../POSTextField";
import GIcon from "../../../components/GIcon/GIcon";

export default {
    title: 'POSInput',
    decorators: [withKnobs],
}

export const POSTextField = () => ({
    components: {PosTextField, GIcon},
    props: {},
    template: `<div><pos-text-field value=""
                               label="Name"
                               placeholder="Dadd text">
                                 <template #prependContent>
                                   Prepend
                                 </template>
                                 <template v-slot:prepend="{onClick}">
                                   <g-icon>close</g-icon>
                                 </template>
                               </pos-text-field>
               </div>`
})