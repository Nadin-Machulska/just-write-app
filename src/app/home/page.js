'use client'
import HeaderIn from "@/components/HeaderIn";
import SideBar from "@/components/SideBar";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AllPosts from "@/components/AllPosts";
import UserPosts from "@/components/UserPosts";

const page = () => {
    const supabase = createClientComponentClient();

    const [title, setTitle] = useState('');
    const [postText, setPostText] = useState('');
    const [currentUserinfo, setCurrentUserInfo] = useState();
    const [currentUserEmail, setCurrentUserEmail] = useState();
    const [allPosts, setAllPosts] = useState()

    const getAudAndEmail = async () => {
        const { data: emailData, error: errorData } = await supabase.auth.getSession();

        const userEmail = emailData?.session?.user.email;
        const aud = emailData?.session?.user.aud;

        const { data: userData, error: userError } = await supabase
            .from('users')
            .select()
            .eq('email', userEmail)

        setCurrentUserInfo(userData[0])
        setCurrentUserEmail(userEmail)
    }

    getAudAndEmail();

    const savePost = async () => {
        const { error: usersPostsError } = await supabase
            .from('posts')
            .insert({
                email: currentUserEmail,
                post: postText,
                title: title,
                firstName: currentUserinfo?.firstName,
                lastName: currentUserinfo?.lastName,
                nickname: currentUserinfo?.nickname
            })
        console.log(usersPostsError);
        console.log(currentUserinfo);
    }
    const getAllPosts = async () => {
        const { data, error } = await supabase
            .from('posts')
            .select()
        setAllPosts(data);
    }
    getAllPosts();

    return (
        <>
            <HeaderIn />
            <AllPosts title={title} setTitle={setTitle} setPostText={setPostText} postText={postText} currentUserinfo={currentUserinfo} currentUserEmail={currentUserEmail} allPosts={allPosts} savePost={savePost} />
            {/* <UserPosts allPosts={allPosts} currentUserinfo={currentUserinfo} currentUserEmail={currentUserEmail}/> */}
            {/* <SideBar /> */}
        </>
    )
};

export default page;
