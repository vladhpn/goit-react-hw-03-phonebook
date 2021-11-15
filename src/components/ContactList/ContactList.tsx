import styles from './styles.module.scss'
import { IContacts } from '../../interfaces';

type ContactsListType = {
    contacts: IContacts[]
    onDeleteContact(id:string): void
}

const ContactList = ({contacts, onDeleteContact }:ContactsListType) =>{return (<>
    <ul className={styles.list} >{contacts.map(({id, name, number}) => <li key={id} className={styles.item}>
        <p>{name}:</p>
        <p>{number}</p>
        <button className={styles.button} onClick={()=> onDeleteContact(id)}>Delete</button>
        </li>)}
        </ul> </>);
    } 

export default ContactList;
