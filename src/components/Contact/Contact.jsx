import { IoMdContact } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContactThunk(id));

  return (
    <li className={s.contact}>
      <div className={s.div}>
        <h3>
          <IoMdContact />
          {name}
        </h3>
        <p>
          <FaSquarePhone />
          {number}
        </p>
      </div>
      <button type="button" className={s.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
