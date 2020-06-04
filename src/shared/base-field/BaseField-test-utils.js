export const commonBaseFieldTests = (render) => {
  describe('BaseField', () => {
    it('renders with provided props', () => {
      const mockProps = {
        id: 'base mock-id',
        label: 'base mock label',
        hint: 'base mock hint'
      }
      const wrapper = render(mockProps)

      const baseField = wrapper.find({ name: 'BaseField' })
      expect(baseField.props('id')).toBe(mockProps.id)
      expect(baseField.props('label')).toBe(mockProps.label)
      expect(baseField.props('hint')).toBe(mockProps.hint)
    })
  })
}
