import { createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import { commonInputFieldTests } from '../../shared/input-field/InputField-test-utils'
import FrmsTextField from './FrmsTextField'

const localVue = createLocalVue()

localVue.use(Vuetify)
localVue.config.productionTip = false

describe('FrmsTextField.vue', () => {
  commonInputFieldTests({
    localVue,
    component: FrmsTextField,
    defaultProps: {
      id: 'text',
      label: 'Text',
      errormessages: '',
      type: 'input'
    }
  })
})
