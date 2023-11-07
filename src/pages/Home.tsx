import i18n from '@/common/language/i18n'
import useGetPosts from '@/hooks/useGetAllPosts'
import useLanguage from '@/hooks/useLanguage'
import useTheme from 'hooks/useTheme'
import { Language, Theme } from 'store/slices/appSlice'

const Home = () => {
   const { theme, setCurrentTheme } = useTheme()
   const { language, setCurrentLanguage } = useLanguage()
   const { getPosts, posts } = useGetPosts()

   const toggleTheme = () => {
      setCurrentTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)
   }

   const toggleLanguage = () => {
      setCurrentLanguage(language === Language.EN ? Language.PL : Language.EN)
   }
   console.log(posts)
   return (
      <div>
         <div> Current theme is {theme}</div>
         <button onClick={toggleTheme}>Switch Theme</button>

         <div>{i18n.t('greeting')}</div>
         <button onClick={toggleLanguage}>Toggle language</button>
         <button onClick={getPosts}>Get posts</button>
      </div>
   )
}

export default Home
