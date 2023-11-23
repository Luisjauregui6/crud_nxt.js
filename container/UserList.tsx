import { useGetUsersQuery } from '../app/api/userApi'
import { userAction } from '../app/slice/userSlice'
import { formAction } from '../app/slice/formSlice'
import { useDisclosure } from '@chakra-ui/react'
import { useAppDispatch } from '../app/hook'
import { memo, useCallback } from 'react'
import BackdropModal from './Modal'
import UserItem from './UserItem'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

const UserList = () => {
    const { isLoading, data } = useGetUsersQuery()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useAppDispatch()

    const deleteHandler = useCallback((Id: string) => {
        dispatch(userAction.deleteId(Id))
        onOpen()
    }, [dispatch, onOpen])

    const updateHandler = useCallback((Id: string) => {
        dispatch(formAction.showForm())
        dispatch(formAction.enableEditMode())
        const userSelectUpdate = data?.find(user => {
            return user._id === Id
        })
        if (userSelectUpdate) dispatch(userAction.userUpdateInfo(userSelectUpdate))
    }, [data, dispatch])

    if (isLoading) return <h2>...</h2>

    return (
        <>
            <BackdropModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <TableContainer width="100%" marginY={4} borderY="none solid #c9c9c9">
                <Table variant='striped' colorScheme="blackAlpha" size="lg">
                <Thead>
                        <Tr backgroundColor="blackAlpha.800">
                            <Th color="white">nombre</Th>
                            <Th color="white">apellidos</Th>
                            <Th color="white">email</Th>
                            <Th color="white">#</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.map(user => (
                            <UserItem
                                key={user._id}
                                {...user}
                                onDelete={deleteHandler}
                                onUpdate={updateHandler} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default memo(UserList)