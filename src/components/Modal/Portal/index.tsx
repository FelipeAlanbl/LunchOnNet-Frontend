import { createPortal } from 'react-dom'

function Portal({ children }: { children: JSX.Element }) {
    return createPortal(children, document.getElementById("modal-root")!)
}

export default Portal