import { useAppDispatch, useAppSelector } from '../app/hook'
import { useDeleteUserMutation } from '../app/api/userApi'
import { userAction } from '../app/slice/userSlice'
import { Button, Text } from '@chakra-ui/react'
import { memo } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

function BackdropModal({ isOpen, onClose }: any) {
    const state = useAppSelector((state: { user: any }) => state.user)
    const dispatch = useAppDispatch()
    const [deleteUser, { isError }] = useDeleteUserMutation()

    const deleteApiRequest = () => {
        deleteUser(state.deleteId).unwrap()//delete api
            .then((result) => console.log("fulfilled", result))
            .catch((err) => console.error("Rejected", err))
        dispatch(userAction.removeDeleteId())
        onClose()
    }
    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='90%'
        />
    )

    return (
        <>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <OverlayTwo />
                <ModalContent>
                    <ModalHeader>borrar datos</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>¿seguro?</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose} marginRight={4}>cerrar</Button>
                        <Button onClick={deleteApiRequest} colorScheme="red">borrar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default memo(BackdropModal)