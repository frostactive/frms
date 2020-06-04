import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Multiselect from 'vue-multiselect'

import { commonBaseFieldTests } from '../base-field/BaseField-test-utils'
import SelectField from './SelectField'

const localVue = createLocalVue()

localVue.use(Vuetify)
localVue.config.productionTip = false

describe('SelectField.vue', () => {
  const render = props => {
    return shallowMount(SelectField, {
      localVue,
      propsData: {
        id: 'mock-id',
        label: 'mock label',
        value: 'mock value',
        items: ['value1', 'value2'],
        ...props
      }
    })
  }

  commonBaseFieldTests(render)

  describe('multiselect', () => {
    const renderAndGetMultiselect = props => {
      const wrapper = render(props)
      return wrapper.find(Multiselect)
    }

    it('renders with defaults', () => {
      const multiselect = renderAndGetMultiselect()

      expect(multiselect.props()).toEqual(expect.objectContaining({
        disabled: false,
        showLabels: false
      }))
      expect(multiselect.attributes('label')).toBeUndefined()
      expect(multiselect.attributes('track-by')).toBeUndefined()
      expect(multiselect.attributes('multiple')).toBeUndefined()
      expect(multiselect.attributes()).toEqual(expect.objectContaining({
        id: 'mock-id',
        name: 'mock-id',
        options: 'value1,value2',
        value: 'mock value',
        class: 'mock-id'
      }))
    })

    it('renders error state', () => {
      const multiselect = renderAndGetMultiselect({ errorMessages: ['This field is required'] })

      expect(multiselect.classes()).toEqual(['invalid', 'mock-id'])
    })

    it('renders disabled state', () => {
      const multiselect = renderAndGetMultiselect({ disabled: true })

      expect(multiselect.props('disabled')).toBeTruthy()
    })

    it('renders with multiple select mode', () => {
      const multiselect = renderAndGetMultiselect({ multiple: true })

      expect(multiselect.attributes('multiple')).toBeTruthy()
    })

    it('renders with label and track by if provided', () => {
      const itemLabelKey = 'label'
      const itemValueKey = 'value'
      const multiselect = renderAndGetMultiselect({ itemLabelKey, itemValueKey })
      expect(multiselect.attributes('label')).toBe(itemLabelKey)
      expect(multiselect.attributes('trackby')).toBe(itemValueKey)
    })
  })

  describe('FieldErrorMessage', () => {
    const renderAndGetFieldErrorMessage = props => {
      const wrapper = render(props)
      return wrapper.find({ name: 'FieldErrorMessage' })
    }

    it('renders with no error message', () => {
      const fieldErrorMessage = renderAndGetFieldErrorMessage()

      expect(fieldErrorMessage.props('messages')).toEqual([])
    })

    it('renders with error message', () => {
      const errorMessages = ['This is a required field']
      const fieldErrorMessage = renderAndGetFieldErrorMessage({ errorMessages })

      expect(fieldErrorMessage.props('messages')).toEqual(errorMessages)
    })
  })
})
