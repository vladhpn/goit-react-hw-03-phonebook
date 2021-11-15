import { useState } from "react";
import styles from '../Form/styles.module.scss';

const Form = ({onSubmit}) => {

const [name, setName] = useState('')
const [number, setNumber] = useState('')

  const updateName = (event) => {
    setName(event.target.value)
  }

  const updateNumber = (event) => {
    setNumber(event.target.value)
  }

     const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(name, number)
        setName('')
        setNumber('')
      };
      
        return(<>
        
            <h1 className={styles.title}>Phone book</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.label}>
                <span className={styles.text}>Name</span>
                <input className={styles.input}
                  type='text'
                  name='name'
                  value={name}
                  onChange={updateName}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                />
              </label>
              <label className={styles.label}>
                <span className={styles.text}>Phone</span>
                <input className={styles.input}
                  type='tel'
                  name='number'
                  value={number}
                  onChange={updateNumber}
                  pattern='(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})'
                  title='Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +'
                  required
                />
              </label>
              <button className={styles.button} type='submit'><span className={styles.content}>Add contact</span> </button>
            </form>
            
          </>)
    }

export default Form;