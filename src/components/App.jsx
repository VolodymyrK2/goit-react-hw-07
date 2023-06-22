import css from './App.module.css'
import { RotatingTriangles } from 'react-loader-spinner'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactsList/ContactsList'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from "react"
import { fetchContacts } from 'redux/operations'
import { selectIsLoading, selectError } from 'redux/selectors'

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    return (
      <div className={css.phonebook}>
        <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContactForm/>
        <h2 className={css.contacts__title}>Contacts</h2>
        <Filter />
        {isLoading && <RotatingTriangles
           colors={['#51E5FF', '#7DE2D1', '#FF7E6B']}
           wrapperStyle={{position: 'absolute'}}
        />}
        {error && Notify.failure({error})}
        <ContactList/>
      </div>
    )
}
export default App