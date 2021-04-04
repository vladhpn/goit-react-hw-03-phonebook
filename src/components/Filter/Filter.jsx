import PropTypes from 'prop-types';
import styles from './styles.module.scss'

const Filter = ({value, onChange}) => {
    return(<>
    <h2 className={styles.title}>Contacts</h2>  
     <label className={styles.label}>
       <span className={styles.text}>Find contacts by name</span> 
        
          <input className={styles.input} type='text' value={value} onChange={onChange} />
        
      </label> </>)}

      Filter.propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
      }

export default Filter;