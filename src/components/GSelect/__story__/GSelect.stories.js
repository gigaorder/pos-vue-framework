import {boolean, number, text, withKnobs} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions'

//
export default {
  title: 'GSelect',
  decorators: [withKnobs],
}

export const GSelectSingle = () => ({
  components: {GSelect},
  props: {
    label: {default: text('Input label', 'Label')},
    placeholder: {default: text('Input placeholder', '')},
    filled: {default: boolean('filled', false)},
    solo: {default: boolean('solo', false)},
    outlined: {default: boolean('outlined', false)},
    flat: {default: boolean('flat', false)},
    rounded: {default: boolean('rounded', false)},
    shaped: {default: boolean('shaped', false)},
    clearable: {default: boolean('clearable', false)},
    hint: {default: text('hint', 'Hint')},
    persistent: {default: boolean('persistent', false)},
    counter: {type: [String, Number], default: number('counter', 25)},
    itemText: {default: text('itemText', 'text')},
    itemValue: {default: text('itemText', 'value')},
    chips: {default: boolean('chips', false)},
    smallChips: {default: boolean('smallChips', false)},
    mandatory: {default: boolean('mandatory', false)},
  },
  data() {
    return {
      items: [
        {text: 'Jason Oner', value: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {text: 'Ranee Carlson', value: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {text: 'Cindy Baker', value: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
        {text: 'Ali Connors', value: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      ],
      selected: null
    }
  },
  template: `
<div data-app>
	<g-select
			width="100%"
			:items="items"
			v-model="selected"
	>
	</g-select>
</div>
`,
})
export const GSelectSingleWithValidate = () => ({
  components: {GSelect},
  props: {
    label: {default: text('Input label', 'Label')},
    placeholder: {default: text('Input placeholder', '')},
    filled: {default: boolean('filled', false)},
    solo: {default: boolean('solo', false)},
    outlined: {default: boolean('outlined', false)},
    flat: {default: boolean('flat', false)},
    rounded: {default: boolean('rounded', false)},
    shaped: {default: boolean('shaped', false)},
    clearable: {default: boolean('clearable', false)},
    hint: {default: text('hint', 'Hint')},
    persistent: {default: boolean('persistent', false)},
    counter: {type: [String, Number], default: Number('counter', 25)},
    itemText: {default: text('itemText', 'text')},
    itemValue: {default: text('itemText', 'value')},
    chips: {default: boolean('chips', false)},
    mandatory: {default: boolean('mandatory', false)},
  },
  data() {
    return {
      items: [
        {text: 'Jason Oner', value: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {text: 'Ranee Carlson', value: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {text: 'Cindy Baker', value: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
        {text: 'Ali Connors', value: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      ],
      selected: null,
      rules: {
        required: value => !!value || 'Required',
        counter: value => value.length > 4 || 'Min 5 characters',
        max: value => value.length < 10 || 'Max 9 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail'
        }
      },
    }
  },
  template: `
<div data-app>
	<g-select
			width="100%"
			:items="items"
			:item-text="itemText"
			:item-value="itemValue"
			:label="label"
			:clearable="clearable"
			:filled="filled"
			:solo="solo"
			:outlined="outlined"
			:flat="flat"
			:rounded="rounded"
			:shaped="shaped"
			:hint="hint"
			:persistent="persistent"
			:counter="counter"
			:placeholder="placeholder"
			:chips="chips"
			:rules="[rules.required, rules.counter, rules.max]"
			v-model="selected"
	>
	</g-select>
</div>
`,
})

export const GSelectMultiple = () => ({
  components: {GSelect},
  props: {
    label: {default: text('Input label', 'Label')},
    placeholder: {default: text('Input placeholder', '')},
    allowDuplicates: {type: Boolean, default: boolean('allow duplicates', true)},
    chips: {default: boolean('chips', false)},
    itemText: {default: text('itemText', 'text')},
    itemValue: {default: text('itemText', 'value')},
    clearable: {default: boolean('clearable', false)},
  },
  data() {
    return {
      items: [
        {text: 'Jason Oner', value: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {text: 'Ranee Carlson', value: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {text: 'Cindy Baker', value: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
        {text: 'Ali Connors', value: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      ],
      selected: []
    }
  },
  template: `
<div data-app>
	<g-select
			:items="items"
			:item-text="itemText"
			:item-value="itemValue"
			:chips="chips"
			:label="label"
			:placeholder="placeholder"
			:clearable="clearable"
			multiple
			:allow-duplicates="allowDuplicates"
			:menuProps="{closeOnContentClick : true}"
			v-model="selected">
	</g-select>
</div>`
})
export const GSelectMultipleNotAllowDuplicates = () => ({
  components: {GSelect},
  props: {
    label: {default: text('Input label', 'Label')},
    placeholder: {default: text('Input placeholder', '')},
    allowDuplicates: {type: Boolean, default: boolean('allow duplicates', false)},
    chips: {default: boolean('chips', true)},
    smallChips: {default: boolean('smallChips', true)},
    itemText: {default: text('itemText', 'text')},
    itemValue: {default: text('itemText', 'value')},
    clearable: {default: boolean('clearable', false)},
  },
  data() {
    return {
      items: [
        {text: 'Jason Oner', value: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {text: 'Ranee Carlson', value: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {text: 'Cindy Baker', value: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
        {text: 'Ali Connors', value: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      ],
      selected: []
    }
  },
  template: `
<div data-app>
	<g-select
			:items="items"
			:item-text="itemText"
			:item-value="itemValue"
			:chips="chips"
			:smallChips="smallChips"
			:label="label"
			:placeholder="placeholder"
			:clearable="clearable"
			multiple
			:allow-duplicates="allowDuplicates"
			v-model="selected">
	</g-select>
</div>`
})
export const GSelectSearchableSingleSelect = () => ({
  components: {GSelect},
  props: {
    label: {default: text('Input label', 'Label')},
    placeholder: {default: text('Input placeholder', '')},
    itemText: {default: text('itemText', 'text')},
    itemValue: {default: text('itemText', 'value')},
    mandatory: {default: boolean('mandatory', false)},
    chips: {default: boolean('chips', false)},
    smallChips: {default: boolean('smallChips', false)},
    clearable: {default: boolean('clearable', false)},
  },
  data() {
    return {
      items: [
        {text: 'Jason Oner', value: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {text: 'Ranee Carlson', value: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {text: 'Cindy Baker', value: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
        {text: 'Ali Connors', value: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      ],
      selected: null
    }
  },
  template: `
<div data-app><g-select
		:items="items"
		:item-text="itemText"
		:item-value="itemValue"
		:label="label"
		:chips="chips"
		:smallChips="smallChips"
		:mandatory="mandatory"
		:clearable="clearable"
		v-model="selected"
		searchable>
</g-select></div>`,
})
export const GSelectSearchableMultipleSelect = () => ({
  components: {GSelect},
  props: {
    label: {default: text('Input label', 'Label')},
    placeholder: {default: text('Input placeholder', '')},
    itemText: {default: text('itemText', 'text')},
    itemValue: {default: text('itemText', 'value')},
    clearable: {default: boolean('clearable', false)},
    chips: {default: boolean('chips', false)},
    smallChips: {default: boolean('smallChips', false)},
  },
  data() {
    return {
      items: [
        {text: 'Jason Oner', value: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {text: 'Ranee Carlson', value: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {text: 'Cindy Baker', value: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
        {text: 'Ali Connors', value: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      ],
      selected: null
    }
  },
  template: `
<div data-app><g-select
		:items="items"
		:item-text="itemText"
		:item-value="itemValue"
		:label="label"
		:clearable="clearable"
		:chips="chips"
		:smallChips="smallChips"
		v-model="selected"
		multiple
		searchable>
</g-select></div>`,
})
export const GSelectSearchableMultipleSelectAllowduplicates = () => ({
  components: {GSelect},
  props: {
    label: {default: text('Input label', 'Label')},
    placeholder: {default: text('Input placeholder', '')},
    itemText: {default: text('itemText', 'text')},
    itemValue: {default: text('itemText', 'value')},
    clearable: {default: boolean('clearable', false)},
    smallChips: {default: boolean('smallChips', false)},
  },
  data() {
    return {
      items: [
        {text: 'Jason Oner', value: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {text: 'Ranee Carlson', value: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {text: 'Cindy Baker', value: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
        {text: 'Ali Connors', value: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      ],
      selected: null
    }
  },
  template: `
<div data-app><g-select
		:items="items"
		:item-text="itemText"
		:item-value="itemValue"
		:label="label"
		:clearable="clearable"
		:smallChips="smallChips"
		allow-duplicates
		v-model="selected"
		multiple
		searchable>
</g-select></div>`,
})
export const GSelectPrependAndAppendItem = () => ({
  components: {GSelect, GListItem, GListItemContent, GListItemText},
  data() {
    return {
      items: [
        {title: 'Jason Oner', prepend: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {title: 'Ranee Carlson', prepend: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {title: 'Cindy Baker', prepend: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
        {title: 'Ali Connors', prepend: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      ],
      selected: null
    }
  },
  template: `
<div data-app><g-select :items="items" item-text="title" item-value="title" label="Display list" return-object v-model="selected">
	<template v-slot:prepend-item>
		<g-list-item>
			<g-list-item-content>
				<g-list-item-text>Prepend Item</g-list-item-text>
			</g-list-item-content>
		</g-list-item>
	</template>
	<template v-slot:append-item>
		<g-list-item>
			<g-list-item-content>
				<g-list-item-text>Append Item</g-list-item-text>
			</g-list-item-content>
		</g-list-item>
	</template>

</g-select></div>`
})
export const GSelectItemSlot = () => ({
  components: {GSelect, GListItem, GListItemContent, GListItemAction, GIcon},
  data() {
    return {
      items: [
        {name: 'Jason Oner', prepend: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'},
        {name: 'Ranee Carlson', prepend: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {name: 'Cindy Baker', prepend: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
        {name: 'Ali Connors', prepend: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      ],
      selected: null
    }
  },
  template: `
<div data-app>
   {{selected}}
      <g-select :items="items" item-text="name" item-value="prepend" label="Display list" multiple clearable allowDuplicates
						v-model="selected">
         <template v-slot:itemInList="{item, isSelected}">
             <g-list-item :value="item" >
                 <g-list-item-content>
                 {{item.name}}
                </g-list-item-content>
                <g-list-item-action>
                <g-icon v-show="isSelected">check</g-icon>
                </g-list-item-action>
            </g-list-item>
          </template>
      </g-select>
    </div>`
})

export const test2 = () => ({
  components: {},
  setup() {
    return () => (
        <g></g>
    )
  }
})

// testing
import Vue from 'vue/dist/vue.common.js'

import GCheckbox from "../../GCheckbox/GCheckbox";
import GTextField from "../../GInput/GTextField";
import GListItem from "../../GList/GListItem";
import {GListItemText, GListItemContent, GListItemSubText} from "../../GList/GListFunctionalComponent";
import GDivider from "../../GLayout/GDivider";
import GSelect from "../GSelect";
import { GListItemAction } from '../..';
import GIcon from '../../GIcon/GIcon';

describe('test', function () {
  it('should', function () {
    const vm = new Vue(test1()).$mount();
// your expect here
  })
})
