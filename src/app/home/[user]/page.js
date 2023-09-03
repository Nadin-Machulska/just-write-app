'use client'
import HeaderIn from "@/components/HeaderIn";
import UserPosts from "@/components/UserPosts";
import { useParams } from "next/navigation";


const page =  () => {
    const userNickname = useParams()

    
    return (
        <div>
            <HeaderIn/>
            <UserPosts userNickname={userNickname}/>
        </div>
    )
};

export default page;