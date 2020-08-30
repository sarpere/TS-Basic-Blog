import React, { ReactElement, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Post } from '../../store/post/types'
import './style.scss'

export default function PostContent(props: Post): ReactElement {
    const {imagePath, title, content } = props
    return (
        <div className="PostContainer">
            <img src={`./${imagePath}`} />
            <p className="title">{title}</p>
            <ReactMarkdown source={content} />
        </div>
    )
}
