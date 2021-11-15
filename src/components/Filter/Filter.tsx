import styles from './styles.module.scss'

type FilterType = {
  value: string
  onChange(event:React.ChangeEvent<HTMLInputElement>):void
}

const Filter = ({value, onChange}:FilterType ) => {
    return(<>
    <h2 className={styles.title}>Contacts</h2>  
     <label className={styles.label}>
       <span className={styles.text}>Find contacts by name</span> 
        
          <input className={styles.input} type='text' value={value} onChange={onChange} />
        
      </label> </>)}

export default Filter;