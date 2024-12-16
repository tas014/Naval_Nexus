import { useState } from "react"
import PostAttributes from "./PostAttributes"
import PostContent from './PostContent'
import { createPost } from "@/fb/database"
import { VscLoading } from "react-icons/vsc";
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";

const CreatePost = () => {
    const [postAttributes, setPostAttributes] = useState({});
    const [canEdit, setCanEdit] = useState(false);
    const [pendingRes, setPendingRes] = useState(false);
    const [resType, setResType] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const createPostAttributes = () => {
        setCanEdit(true);
        const tags = document.querySelectorAll('#filter_list select');
        const title = document.getElementById('post_title')?.value;
        const description = document.getElementById('post_description')?.value;
        const author = document.getElementById('post_author')?.value;
        const ship_name = document.getElementById('post_ship')?.value;
        const tagsData = {
            class: tags[0].value,
            tier: tags[1].value,
            nation: tags[2].value,
            type: tags[3].value
        }
        const newPostData = {
            author,
            title,
            description,
            ship_name,
            tags: tagsData,
            upvotes: 0,
            downvotes: 0
        }
        setPostAttributes(newPostData);
    }
    const createPostContent = content => {
        setShowModal(true);
        const postData = { ...postAttributes };
        postData.tabs = content;
        setPostAttributes(postData);
        const postPromise = createPost(postData);
        setPendingRes(true);
        postPromise.then(() => {
            setPendingRes(false);
            setResType(1);
            setTimeout(() => {
                setShowModal(false);
                setResType(0);
            }, 2000);
        }).catch(() => {
            setPendingRes(false);
            setResType(-1);
            setTimeout(() => {
                setShowModal(false);
                setResType(0);
            }, 2000);
        })
    }
    return (
        <section className="w-4/5 mt-20 m-auto flex flex-col justify-center h-full relative">
            <h1 className="text-3xl font-bold mb-5 text-slate-200">Create Post</h1>
            <div className="bg-slate-100/25 min-h-70 flex justify-center align-center flex-wrap rounded pt-4 pb-4">
                {canEdit ? <PostContent setContent={createPostContent} /> : <PostAttributes setPostAttributes={createPostAttributes} />}
            </div>
            <div id="promise_modal" className={`modal ${showModal ? "flex" : "hidden"} w-full h-full absolute top-0 left-0 bg-slate-900/75 justify-center content-center flex-wrap`}>
                <div className="flex justify-center flex-col flex-wrap items-center p-8 bg-slate-300 rounded-xl">
                    {pendingRes ? <VscLoading className="text-slate-200 text-3xl animate-spin" /> : (resType === 1 ? <CiCircleCheck className="text-emerald-500 text-4xl" /> : <CiCircleRemove className="text-red-500 text-4xl" />)}
                    <span className={`text-2xl mt-3 ${resType === 1 ? "text-emerald-500" : "text-red-500"}`}>{!pendingRes ? (resType === 1 ? "Your post has been created!" : "There was a problem creating your post...") : ""}</span>
                </div>
            </div>
        </section>
    )
}

export default CreatePost