import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContacts } from "../../redux/contacts/operations"
import { selectError, selectIsLoading } from '../../redux/contacts/selectors'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactLis'
import SearchBar from '../../components/SearchBar/SearchBar'

export default function ContactsPage() {
  return
}