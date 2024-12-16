import React, { useState } from 'react'

const filters = [{
    name: "class",
    options: ["Destroyer", "Battleship", "Cruiser", "Submarine", "Aircraft Carrier"]
}, {
    name: "tier",
    options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]
}, {
    name: "nation",
    options: ["United States", "Japan", "France", "Germany", "The Netherlands", "Pan-European", "Pan-Asian", "Pan-American", "USSR", "UK", "Italy", "Spain", "Commonwealth"]
}, {
    name: "type",
    options: ["Tech Tree", "Premium", "Special", "Tech Tree"]
}]

const PostAttributes = ({ setPostAttributes }) => {
    const [errors, setErrors] = useState([]);
    const validateForm = (e) => {
        e.preventDefault();
        const title = document.getElementById('post_title')?.value;
        const description = document.getElementById('post_description')?.value;
        const author = document.getElementById('post_author')?.value;
        const newErrors = [];
        if (title == "") {
            newErrors.push("Please give your post a title")
        }
        if (description == "") {
            newErrors.push("Please give your post a brief description")
        }
        if (author == "") {
            newErrors.push("Please give your post an author name or alias")
        }
        if (newErrors.length === 0) {
            setPostAttributes();
        }
        setErrors(newErrors);
    }
    return (
        <form className='w-2/5 m-auto text-slate-100'>
            <div className='flex flex-col'>
                <label className='text-xl font-bold' htmlFor="post_title">Post Title</label>
                <input className='rounded p-2 mt-1' id="post_title" placeholder="your title..." />
            </div>
            <div className='mt-5 flex flex-col'>
                <label className='text-xl font-bold' htmlFor="post_description">Description</label>
                <input className='rounded p-2 mt-1' id="post_description" placeholder="A brief description..." />
            </div>
            <div className='mt-5 flex flex-col'>
                <label className='text-xl font-bold' htmlFor="post_ship">Ship Name</label>
                <input className='rounded p-2 mt-1' id="post_ship" placeholder="Leave this blank if your post isn't ship specific" />
            </div>
            <div className='mt-5 flex flex-col'>
                <label className='text-xl font-bold' htmlFor="post_author">Who wrote this post?</label>
                <input className='rounded p-2 mt-1' id="post_author" placeholder="your alias for this post..." />
            </div>
            <div className='mt-5 flex flex-col'>
                <span className='text-xl font-bold'>Post labels</span>
                <ul id='filter_list' className='flex justify-between flex-wrap'>
                    {filters.map((filter, key) =>
                        <li key={key} className='p-2 flex flex-col w-1/2'>
                            <span className='text-l font-bold'>{filter.name[0].toLocaleUpperCase() + filter.name.slice(1, filter.name.length)}</span>
                            <select className='p-1 rounded  text-slate-800'>{filter.options.map((option, subKey) => <option value={option} key={subKey}>{option}</option>)}</select>
                        </li>
                    )}
                </ul>
            </div>
            <div className='mt-5 flex flex-col'>
                <span className='text-red-700'>{errors.length != 0 ? errors[0] : null}</span>
                <button className='bg-emerald-500 hover:bg-emerald-400 text-white pt-1 pb-1 pr-3 pl-3 text-xl border-solid border-teal-900 border-1 rounded mt-1 w-1/5' onClick={validateForm}>Next</button>
            </div>
        </form>
    )
}

export default PostAttributes