'use client'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from 'react';
import { Grid } from '@mui/material';

const UserPosts = ({ userNickname }) => {
    const supabase = createClientComponentClient();
    const [currentUserPosts, setCurrentUserPosts] = useState()
    const [currentUserName, setCurrentUserName] = useState()

    const fetchAllUserPosts = async () => {
        const { data: postsData, error: postsError } = await supabase
            .from('posts')
            .select()
            .eq('nickname', userNickname.user)
        setCurrentUserPosts(postsData)

        const { data: nameData, error: nameError } = await supabase
            .from('posts')
            .select()
            .eq('nickname', userNickname.user)
        setCurrentUserName(nameData[0])
    }
    fetchAllUserPosts()
    return (
        <div className='container'>
            <h1>{currentUserName?.firstName} {currentUserName?.lastName}</h1>
            <Grid container spacing={2}>
                {
                    currentUserPosts?.map(post => {
                        return <Grid item xs={6}>
                            <Card sx={{ maxWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {post.title}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {post.post}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Comment</Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    })
                }
            </Grid>
        </div>
    )
};

export default UserPosts;