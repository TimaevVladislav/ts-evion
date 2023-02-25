import React from 'react'
import {posts} from "../store/posts"

export default function Post() {
    return (
        <div className="container px-[235px] mx-auto ">
            {posts.map(post => (
                <div className="row" key={post.key}>
                    <h1 className="text-start text-[#FF0F7A] text-[30px] font-bold pt-[30px] pb-[30px]">{post.heading}</h1>
                    <p>{post.title}</p>
                </div>
            ))}
        </div>
    )
}
