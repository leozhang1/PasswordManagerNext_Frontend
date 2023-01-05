import React from 'react'

const Header = (props: any) => {
    return (
        <>
        <header>
            <h1 className="text-center">
                {props.title}
            </h1>
        </header>
        </>
    )
}

export default Header
