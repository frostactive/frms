import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'

import { commonBaseFieldTests } from '../base-field/BaseField-test-utils'
import InputField from './InputField'

const localVue = createLocalVue()

localVue.use(Vuetify)
localVue.config.productionTip = false

describe('InputField.vue', () => {
  const { VTextField } = localVue.options.components

  const render = props => {
    return shallowMount(InputField, {
      localVue,
      propsData: {
        id: 'mock-id',
        label: 'mock label',
        value: 'mock value',
        ...props
      }
    })
  }

  commonBaseFieldTests(render)

  it('renders input with correct style', () => {
    const wrapper = render()

    const inputField = wrapper.find(VTextField)
    expect(inputField.attributes('outline')).toBe('')
    expect(inputField.attributes('single-line')).toBe('')
  })

  it('renders text field with provided props', () => {
    const mockProps = {
      id: 'mock-id',
      value: 'mock value'
    }
    const wrapper = render(mockProps)

    const inputField = wrapper.find(VTextField)
    expect(inputField.attributes('id')).toBe(mockProps.id)
    expect(inputField.attributes('name')).toBe(mockProps.id)
    expect(inputField.attributes('class')).toBe(mockProps.id)
    expect(inputField.attributes('disabled')).toBeFalsy()
    expect(inputField.attributes('value')).toBe(mockProps.value)
  })

  it('renders disabled state', () => {
    const wrapper = render({ disabled: true })

    expect(wrapper.find(VTextField).attributes('disabled')).toBeTruthy()
  })

  it('renders error state correctly', () => {
    const errorMessages = ['this field is required']
    const wrapper = render({ errorMessages })

    expect(wrapper.find({ name: 'BaseField' }).props('errorMessages')).toEqual(errorMessages)
    expect(wrapper.find({ name: 'BaseField' }).attributes('errormessages')).toBe(errorMessages[0])
  })
})
