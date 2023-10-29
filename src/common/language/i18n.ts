import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import EN from '@/common/language/locales/en.json'
import PL from '@/common/language/locales/pl.json'

i18n.use(initReactI18next).init({
   lng: 'en',
   resources: {
      en: { translation: EN },
      pl: { translation: PL },
   },
})

export default i18n
