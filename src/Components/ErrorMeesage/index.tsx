import React, { ReactElement } from 'react'
import './style.scss'
interface Props {
    text: string
}

export default function ErrorMeesage({ text }: Props): ReactElement {
    return (
        <div className="error">
            <p>{text}</p>
        </div>
    )
}
