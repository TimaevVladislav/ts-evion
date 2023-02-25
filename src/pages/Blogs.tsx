import React from 'react'
import Post from "../components/Post"
import Footer from "../components/Footer"
import { Heading } from '../components/Heading'

export default function Blogs() {
    return (
        <div className="bg-[#FCFE00] h-auto">
            <Heading heading="10 Fascinating Facts About Latvia" title="While most people have heard of Latvia, they are unaware of all the things that make the country a true treasure. Situated along the beautiful Baltic Sea between Estonia and Lithuania, Latvia boasts immaculate coastlines, vast stretches of untouched wilderness, and charming cities known for great food, even greater people, and some of the best free internet connectivity in the world! Read on to discover ten fascinating facts about one of Europe’s hidden gems." />
            <Post />
            <Footer />
        </div>
    )
}
