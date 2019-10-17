import { createLocalVue, mount } from '@vue/test-utils'
import plugin from '@vue/composition-api'
import GDatePickerMonthTable from '../GDatePickerMonthTable';

describe('GDatePicker/Table/GDatePickerMonthTable.js', () => {
  let mountFunction

  const localVue = createLocalVue()
  localVue.use(plugin)

  beforeEach(() => {
    mountFunction = (options) => {
      return mount(GDatePickerMonthTable, {
        localVue,
        ...options
      })
    }
  })

  it('should render component and match snapshot', () => {
    const wrapper = mountFunction({
      propsData: {
        tableDate: '2005',
        current: '2005-05',
        value: '2005-11',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component and match snapshot (multiple)', () => {
    const wrapper = mountFunction({
      propsData: {
        tableDate: '2005',
        current: '2005-05',
        value: ['2005-11', '2005-10'],
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should emit event when month button is clicked', () => {
    const wrapper = mountFunction({
      propsData: {
        tableDate: '2005',
        current: '2005-05',
        value: '2005-11',
      },
    })

    const input = jest.fn()
    wrapper.vm.$on('input', input)

    wrapper.findAll('tbody button').at(0).trigger('click')
    expect(input).toHaveBeenCalledWith('2005-01')
  })

  it('should not emit event when disabled month button is clicked', () => {
    const wrapper = mountFunction({
      propsData: {
        tableDate: '2005',
        current: '2005-05',
        value: '2005-11',
        allowedDates: () => false,
      },
    })

    const input = jest.fn()
    wrapper.vm.$on('input', input)

    wrapper.findAll('tbody button').at(0).trigger('click')
    expect(input).not.toHaveBeenCalled()
  })

  it('should emit tableDate event when scrolled and scrollable', () => {
    const wrapper = mountFunction({
      propsData: {
        tableDate: '2005',
        scrollable: true,
      },
    })

    const tableDate = jest.fn()
    wrapper.vm.$on('update:table-date', tableDate)

    wrapper.trigger('wheel')
    expect(tableDate).toHaveBeenCalledWith('2006')
  })

  it('should not emit tableDate event when scrolled and not scrollable', () => {
    const wrapper = mountFunction({
      propsData: {
        tableDate: '2005',
      },
    })

    const tableDate = jest.fn()
    wrapper.vm.$on('update:table-date', tableDate)

    wrapper.trigger('wheel')
    expect(tableDate).not.toHaveBeenCalled()
  })

  it('should render component with events (array) and match snapshot', () => {
    const wrapper = mountFunction({
      propsData: {
        tableDate: '2005',
        events: ['2005-07', '2005-11'],
        eventColor: 'red',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with events (function) and match snapshot', () => {
    const wrapper = mountFunction({
      propsData: {
        tableDate: '2005',
        events: date => date === '2005-07' || date === '2005-11',
        eventColor: 'red',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with events colored by object and match snapshot', () => {
    const wrapper = mountFunction({
      propsData: {
        tableDate: '2005',
        events: ['2005-07', '2005-11'],
        eventColor: { '2005-07': 'red', '2005-11': 'blue lighten-1' },
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with events colored by function and match snapshot', () => {
    const wrapper = mountFunction({
      propsData: {
        tableDate: '2005',
        events: ['2005-07', '2005-11'],
        eventColor: date => ({ '2005-07': 'red', '2005-11': 'blue lighten-1' }[date]),
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
