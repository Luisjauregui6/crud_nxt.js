import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import MyButton from '../components/ButtonForm'
import { MyFormValue } from '../types/type'
import { memo } from 'react'
import {
    Tr,
    Td,
} from '@chakra-ui/react'

type UserItemProps = {
    onDelete: (Id: string) => void,
    onUpdate: (Id: string) => void,
}

const UserItem = (
    { _id,
        firstName,
        lastName,
        email,
        onDelete,
        onUpdate
    }: MyFormValue & UserItemProps) => {

    const deleteItem = (Id: any): void => {
        onDelete(Id)
    }

    const updateItem = (Id: any): void => {
        onUpdate(Id)
    }

    return (
        <Tr>
            <Td>{firstName}</Td>
            <Td>{lastName}</Td>
            <Td>{email}</Td>
            <Td>
                
            </Td>
            <Td>
                <DeleteIcon
                    marginRight={8}
                    fontSize={24}
                    cursor="pointer"
                    color="red.600"
                    onClick={() => deleteItem(_id)}
                />
                <EditIcon
                    onClick={() => updateItem(_id)}
                    fontSize={24}
                    cursor="pointer"
                    color="green" />
            </Td>
        </Tr>
    )
}

export default memo(UserItem)