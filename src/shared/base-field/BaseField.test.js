import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'

import BaseField from './BaseField'

const localVue = createLocalVue()

localVue.use(Vuetify)
localVue.config.productionTip = false

describe('BaseField.vue', () => {
  const render = props => {
    return shallowMount(BaseField, {
      localVue,
      propsData: {
        id: 'mock-id',
        ...props
      }
    })
  }

  describe('label', () => {
    const id = 'mock-id-1'
    const label = 'this is the label value'

    it('does not render if prop not provided', () => {
      const wrapper = render()

      expect(wrapper.find('label.form-label').exists()).toBeFalsy()
    })

    it('renders provided label without error state', () => {
      const wrapper = render({ id, label })

      const labelElement = wrapper.find('label.form-label')
      expect(labelElement.classes('form-label--error')).toBeFalsy()
      expect(labelElement.attributes('for')).toBe(id)
      expect(labelElement.text()).toBe(label)
    })

    it('renders provided label with error state', () => {
      const wrapper = render({ id, label, errorMessages: ['This field is required'] })

      const labelElement = wrapper.find('label.form-label')
      expect(labelElement.classes('form-label--error')).toBeTruthy()
      expect(labelElement.attributes('for')).toBe(id)
      expect(labelElement.text()).toBe(label)
    })
  })

  describe('hint', () => {
    it('does not render if prop not provided', () => {
      const wrapper = render()

      expect(wrapper.find('label.form-label-hint').exists()).toBeFalsy()
    })

    it('renders provided hint', () => {
      const hint = 'This is the hint'
      const wrapper = render({ hint })

      expect(wrapper.find('label.form-label-hint').text()).toBe(hint)
    })
  })
})
