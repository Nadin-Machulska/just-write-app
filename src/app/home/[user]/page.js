'use client'
import UserPosts from "@/components/UserPosts";
import { useParams } from "next/navigation";


const page =  () => {
    const userNickname = useParams()
    console.log(userNickname);

    
    return (
        <div>
            <UserPosts userNickname={userNickname}/>
        </div>
    )
};

export default page;