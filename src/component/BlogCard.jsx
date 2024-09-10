import React from 'react'
import preview from '../img/illustration-article.svg'
import avatar from '../img/image-avatar.webp'

const BlogCard = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-6">
        <div className="p-6 bg-white rounded-2xl border-black border-r-8 border-b-8 border-l-2 border-t-2">
            <div className="flex mb-6">
                <img className='rounded-xl' src={preview} />
            </div>
            <div className="mb-4">
                <span className="bg-blogYellow rounded py-1 px-2 font-Figtree font-bold">Learning</span>
            </div>
            <div className="mb-4 font-Figtree">
                Published 21 Dec 2023
            </div>
            <h1 className="mb-4 font-Figtree font-bold text-2xl">HTML and CSS Foundations</h1>
            <p className="text-sm mb-6 font-Figtree text-lg text-blogGray500">
                These languages are the backbone of every<br/>
                 website, defining structure, content, <br/>
                 and presentation.
            </p>
            <div className='flex items-center'>
                <img className='w-10 mr-4' src={avatar} alt='Avatar'/>
                <span className="text-blue">Greg Hooper</span>
            </div>
        </div>
    </div>
  )
}

export default BlogCard
