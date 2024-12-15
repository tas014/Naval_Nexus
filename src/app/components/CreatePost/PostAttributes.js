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
        <form>
            <div>
                <label htmlFor="post_title">Post Title</label>
                <input id="post_title" placeholder="your title..." />
            </div>
            <div>
                <label htmlFor="post_description">Description</label>
                <input id="post_description" placeholder="A brief description..." />
            </div>
            <div>
                <label htmlFor="post_ship">Ship Name</label>
                <input id="post_ship" placeholder="Leave this blank if your post isn't ship specific" />
            </div>
            <div>
                <label htmlFor="post_author">Who wrote this post?</label>
                <input id="post_author" placeholder="your alias for this post..." />
            </div>
            <div>
                <span>Post labels</span>
                <ul id='filter_list'>
                    {filters.map((filter, key) =>
                        <li key={key}>
                            <span>{filter.name}</span>
                            <select>{filter.options.map((option, subKey) => <option value={option} key={subKey}>{option}</option>)}</select>
                        </li>
                    )}
                </ul>
            </div>
            <div>
                <span>{errors.length != 0 ? errors[0] : null}</span>
                <button onClick={validateForm}>Next</button>
            </div>
        </form>
    )
}

export default PostAttributes