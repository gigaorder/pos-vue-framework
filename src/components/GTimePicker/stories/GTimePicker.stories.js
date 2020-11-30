import { boolean, text, withKnobs, select, array, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import GTimePicker from '../GTimePicker'
import GTimePickerInput from '../GTimePickerInput'
import _ from 'lodash'

//
export default {
  title: 'GTimePicker',
  decorators: [withKnobs],
}

export const Index = () => ({
  components: { GTimePicker },
  props: {
    disabled: {
      type: Boolean,
      default: boolean('disabled', false)
    },
    readonly: {
      type: Boolean,
      default: boolean('readonly', false)
    },
    scrollable: {
      type: Boolean,
      default: boolean('scrollable', false),
    },
    useSeconds: {
      type: Boolean,
      default: boolean('useSeconds', false)
    },
    modelValue: {
      type: String,
      default: text('modelValue', '15:18:30')
    },
    width: { default: number('width', 300) },
    landscape: { default: boolean('landscape', false) },
    // color
    titleBgColor: {
      type: String,
      default: text('titleBgColor', null)
    },
    titleTextColor: {
      type: String,
      default: text('titleTextColor', null),
    },
    // clock
    clockWrapperColor: {
      type: String,
      default: text('clockWrapperColor', null)
    },
    clockFaceColor: {
      type: String,
      default: text('clockFaceColor', null)
    },
    clockNumberColor: {
      type: String,
      default: text('clockNumberColor', null)
    },
    clockSelectedNumberColor: {
      type: String,
      default: text('clockSelectedNumberColor', null)
    },
    clockHandColor: {
      type: String,
      default: text('clockHandColor', null)
    }
  },
  template: `
    <div style="display: flex;">
      <div>
        <h4>12 Hours</h4>
        <g-time-picker
            :disabled="disabled"
            :readonly="readonly"
            :scrollable="scrollable"
            :useSeconds="useSeconds"
            :modelValue="modelValue"
            :width="width"
            :landscape="landscape"
            :titleBgColor="titleBgColor"
            :titleTextColor="titleTextColor"
            :clockWrapperColor="clockWrapperColor"
            :clockFaceColor="clockFaceColor"
            :clockNumberColor="clockNumberColor"
            :clockSelectedNumberColor="clockSelectedNumberColor"
            :clockHandColor="clockHandColor"
        >
        </g-time-picker>
      </div>
      <div>
        <h4>24 Hours</h4>
        <g-time-picker
            :disabled="disabled"
            :readonly="readonly"
            :scrollable="scrollable"
            :useSeconds="useSeconds"
            :modelValue="modelValue"
            use24Hours
            :width="width"
            :landscape="landscape"
            :titleBgColor="titleBgColor"
            :titleTextColor="titleTextColor"
            :clockWrapperColor="clockWrapperColor"
            :clockFaceColor="clockFaceColor"
            :clockNumberColor="clockNumberColor"
            :clockSelectedNumberColor="clockSelectedNumberColor"
            :clockHandColor="clockHandColor"
        >
        </g-time-picker>
      </div>
    </div>
  `,
})

export const gTimePickerInput = () => ({
  components: { GTimePicker, GTimePickerInput },
  props: {
    // time picker
    disabled: { type: Boolean, default: boolean('disabled', false) },
    readonly: { type: Boolean, default: boolean('readonly', false) },
    scrollable: { type: Boolean, default: boolean('scrollable', false), },
    useSeconds: { type: Boolean, default: boolean('useSeconds', false) },
    modelValue: { type: String, default: text('modelValue', null) },
    landscape: { default: boolean('landscape', false) },
    titleBgColor: { type: String, default: text('titleBgColor', null) },
    titleTextColor: { type: String, default: text('titleTextColor', null), },
    clockWrapperColor: { type: String, default: text('clockWrapperColor', null) },
    clockFaceColor: { type: String, default: text('clockFaceColor', null) },
    clockNumberColor: { type: String, default: text('clockNumberColor', null) },
    clockSelectedNumberColor: { type: String, default: text('clockSelectedNumberColor', null) },
    clockHandColor: { type: String, default: text('clockHandColor', null) },
    // g-text-field
    label: { default: text('Input label', 'Label') },
    filled: { default: boolean('filled', false) },
    solo: { default: boolean('solo', false) },
    outlined: { default: boolean('outlined', false) },
    flat: { default: boolean('flat', false) },
    dense: { default: boolean('dense', false) },
    rounded: { default: boolean('rounded', false) },
    shaped: { default: boolean('shaped', false) },
    required: { default: boolean('required', false)},
  },
  template: `
    <g-time-picker-input
        :disabled="disabled"
        :readonly="readonly"
        :scrollable="scrollable"
        :useSeconds="useSeconds"
        :modelValue="modelValue"
        :landscape="landscape"
        :titleBgColor="titleBgColor"
        :titleTextColor="titleTextColor"
        :clockWrapperColor="clockWrapperColor"
        :clockFaceColor="clockFaceColor"
        :clockNumberColor="clockNumberColor"
        :clockSelectedNumberColor="clockSelectedNumberColor"
        :clockHandColor="clockHandColor"
        :label="label"
        :filled="filled"
        :solo="solo"
        :outlined="outlined"
        :flat="flat"
        :dense="dense"
        :rounded="rounded"
        :shaped="shaped"
    />
      
    <g-time-picker-input
        use24Hours
        :disabled="disabled"
        :readonly="readonly"
        :scrollable="scrollable"
        :useSeconds="useSeconds"
        :modelValue="modelValue"
        :landscape="landscape"
        :titleBgColor="titleBgColor"
        :titleTextColor="titleTextColor"
        :clockWrapperColor="clockWrapperColor"
        :clockFaceColor="clockFaceColor"
        :clockNumberColor="clockNumberColor"
        :clockSelectedNumberColor="clockSelectedNumberColor"
        :clockHandColor="clockHandColor"
        :label="label"
        :filled="filled"
        :solo="solo"
        :outlined="outlined"
        :flat="flat"
        :dense="dense"
        :rounded="rounded"
        :shaped="shaped"
    />
  `
})
