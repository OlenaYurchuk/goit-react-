import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.wrap}>
      <div>
        <p><FaUser /> {name}</p>
        <p><FaPhone /> {number}</p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}