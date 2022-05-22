import { useState } from 'react'

function useModal(){

    const [modalOpened, setModalOpened] = useState(false);

    function onClose(){
        setModalOpened(!modalOpened);
    }

    return {modalOpened, setModalOpened, onClose}
}

export default useModal;