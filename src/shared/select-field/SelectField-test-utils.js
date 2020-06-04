import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'

const localVue = createLocalVue()

localVue.use(Vuetify)
localVue.config.productionTip = false

const mockProps = {
  id: 'mock-id',
  label: 'mock-label',
  hint: 'mock-hint',
  value: null
}

const createRenderAndGetSelectField = component => props => {
  const wrapper = shallowMount(component, {
    localVue,
    propsData: {
      ...mockProps,
      ...props
    }
  })
  return wrapper.find({ name: 'SelectField' })
}

const commonSelectFieldTests = (renderAndGetSelectField) => {
  describe('SelectField', () => {
    it('renders with provided props', () => {
      const selectField = renderAndGetSelectField()

      expect(selectField.props('value')).toBeNull()
      expect(selectField.attributes()).toEqual(expect.objectContaining({
        id: mockProps.id,
        label: mockProps.label,
        hint: mockProps.hint,
        'errormessages': ''
      }))
    })

    it('renders with error state', () => {
      const errorMessage = 'This field is required'
      const selectField = renderAndGetSelectField({ errormessages: [errorMessage] })

      expect(selectField.attributes('errormessages')).toEqual(errorMessage)
    })
  })
}

export const createCommonTestsAndGetRenderer = component => {
  const renderAndGetSelectField = createRenderAndGetSelectField(component)
  commonSelectFieldTests(renderAndGetSelectField)

  return renderAndGetSelectField
}
