import React, { useRef, useEffect } from 'react'

const useOutsideAlerter = (ref, onClickOutside) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref?.current && !ref?.current.contains(event?.target)) {
                onClickOutside()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, onClickOutside])
}

const OutsideAlerter = (props) => {
    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef, props?.onClickOutside)
    return <div ref={wrapperRef}>{props.children}</div>
}

export default OutsideAlerter
