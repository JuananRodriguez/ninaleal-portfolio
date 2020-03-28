export default ({
                    open,
                    position
                }) =>

    Object.values({

        open: open ? 'open' : 'close',
        position: position === 'right' ? 'right' : 'left'

    }).join(' ')