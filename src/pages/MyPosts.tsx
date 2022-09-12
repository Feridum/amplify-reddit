import {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Post} from "../models";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {ArticleItemCollection} from "../ui-components";


const fetchPosts = async (ownerId: string) => {
    console.log({ownerId});
    return DataStore.query(Post, c => c.owner("eq", ownerId));
}

export const MyPosts = ()=>{
    const { user } = useAuthenticator((context) => [context.user]);
    const [posts, setPosts] = useState<Post[] | undefined>(undefined)

    useEffect( ()=>{
        const initPosts = async ()=>{
            if(user.username) {
                const fetchedPosts = await fetchPosts(user.username);
                setPosts(fetchedPosts)
            }
        }
        console.log(user.username);

        if(user.username){
            initPosts();
        }
    }, [user.username])


    if(!posts){
        return <div>Loading ....</div>
    }

    return (<div>
        <ArticleItemCollection items={posts}/>
    </div>)
}