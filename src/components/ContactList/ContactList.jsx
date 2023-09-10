import { StyledButton } from "./ContactList.styled"
export const ContactList = ({filteredContacts, deleteContact}) => {
    return (<ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <StyledButton onClick={() => deleteContact(contact.id)}>
              Delete
            </StyledButton>
          </li>
        ))}
      </ul>)
}