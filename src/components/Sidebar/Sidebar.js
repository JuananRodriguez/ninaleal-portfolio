import React, { useState, useEffect } from 'react';

export const SIDEBAR_STATES = {
    'OPENING': 'OPENING',
    'CLOSING': 'CLOSING',
    'OPENED': 'OPENED',
    'CLOSED': 'CLOSED',
}

const SidebarPortal = ({
    className,
    position,
    onOpen,
    onClose,
    isOpen,
    children,
    withBlanket
}) => {
    const [status, setStatus] = useState(isOpen ? SIDEBAR_STATES.OPENED : SIDEBAR_STATES.CLOSED);

    const handleOpen = () => {
        if (status !== SIDEBAR_STATES.OPENED) {
            onOpen();
            setStatus(SIDEBAR_STATES.OPENING);
            setTimeout(() => setStatus(SIDEBAR_STATES.OPENED), 100)
        }
    }

    const handleClose = () => {
        if (status !== SIDEBAR_STATES.CLOSED) {
            onClose();
            setStatus(SIDEBAR_STATES.CLOSING);
            setTimeout(() => setStatus(SIDEBAR_STATES.CLOSED), 300)
        }
    }

    useEffect(() => { isOpen ? handleOpen() : handleClose(); }, [isOpen]);
    useEffect(() => {
        const BodyEl = document.querySelector('body');
        //console.log(status, 'status !== SIDEBAR_STATES.CLOSED', status !== SIDEBAR_STATES.CLOSED ? 'hidden' : undefined)
        if (BodyEl) {
            BodyEl.style.overflow = status !== SIDEBAR_STATES.CLOSED ? 'hidden' : '';
            return () => BodyEl.style.overflow = ''
        }
    }, [status]);

    return status !== SIDEBAR_STATES.CLOSED && (
        <div id={'sidebar'}>
            {withBlanket && <div className={'Sidebar-Blanket'} onClickCapture={onClose} />}
            <div className={`Sidebar-Wrapper ${status} ${position}`}>
                <div className={`Sidebar-Content ${className ? className :''}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

SidebarPortal.defaultProps = {
    position: 'right',
    withBlanket: true,
    isOpen: false,
    onOpen: () => { },
    onClose: () => { },
    rootId: 'root'
}

export default SidebarPortal;