import { shallowMount } from '@vue/test-utils'

export const commonInputFieldTests = ({ localVue, component, defaultProps, expectedMask }) => {
  let maskMock

  const renderAndGetInputField = props => {
    let options = { localVue, propsData: props }
    if (expectedMask) {
      maskMock = jest.fn()
      options.directives = { mask: maskMock }
    }
    const wrapper = shallowMount(component, options)
    return wrapper.find({ name: 'InputField' })
  }

  describe('InputField', () => {
    it('renders input field with default values', () => {
      const inputField = renderAndGetInputField()

      expect(inputField.attributes()).toEqual(defaultProps)
    })

    it('renders with provided props', () => {
      const mockProps = {
        ...defaultProps,
        id: 'another-id',
        label: 'another-label',
        hint: 'another-hint',
        disabled: true,
        value: 'mock value'
      }
      const errorMessage = 'This field is required'
      const inputField = renderAndGetInputField({
        ...mockProps,
        errormessages: [errorMessage]
      })
      expect(inputField.attributes()).toEqual({
        ...mockProps,
        disabled: 'true',
        'errormessages': errorMessage
      })
    })

    if (expectedMask) {
      it('sets the mask format', () => {
        renderAndGetInputField()

        const { rawName, value } = maskMock.mock.calls[0][1]
        expect(rawName).toBe('v-mask')
        expect(value).toBe(expectedMask)
      })
    }
  })
}
