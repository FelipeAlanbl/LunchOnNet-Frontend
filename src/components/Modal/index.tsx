import React, { useEffect } from 'react'
import Portal from './Portal'
import { Overlay, Dialog } from './style'

function Modal({children, open, onClose, title}:{children: JSX.Element, open: boolean, onClose: () => void, title: string}) {

    useEffect(()=>{
        function onEsc(e: any) {
            if(e.keyCode === 27) {
                onClose();
            }

        }
        window.addEventListener('keydown', onEsc);

        return () => {
            window.removeEventListener('keydown', onEsc);
        }
    }, [onClose]);

    if(!open) return null;

    function onOverlayClick() {
        onClose();
    }

    function onDialogClick(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
    }

  return (
    <Portal>
        <Overlay onClick={onOverlayClick}>
            <Dialog onClick={e => onDialogClick(e)}>
                <div className='modal-title'>
                    {title}
                </div>
                {children}
            </Dialog>
        </Overlay>
    </Portal>
  )
}

export default Modal;