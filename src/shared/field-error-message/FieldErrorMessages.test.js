import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'

import FieldErrorMessage from './FieldErrorMessage'

const localVue = createLocalVue()

localVue.use(Vuetify)
localVue.config.productionTip = false

describe('FieldErrorMessage.vue', () => {
  const render = props => {
    return shallowMount(FieldErrorMessage, {
      localVue,
      propsData: props
    })
  }

  it('does not render messages if not provided', () => {
    const wrapper = render()

    expect(wrapper.find('.message').exists()).toBeFalsy()
  })

  it('renders error message', () => {
    const message = 'This field is required'
    const wrapper = render({ messages: [message] })

    expect(wrapper.find('.message').text()).toBe(message)
  })
})
