'use client'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import { useState} from 'react';
import Link from 'next/link';

const theme = useTheme();
const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
const AllPosts = ({ title, postText, currentUserinfo, currentUserEmail, allPosts, savePost, setTitle, setPostText }) => {

    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            {
                currentUserinfo?.author ?
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Create post
                    </Button >
                    :  null
            }
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Hey, what`s up?
                    </DialogContentText>
                    <input
                        name="title"
                        autoFocus
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    <input
                        name="post"
                        autoFocus
                        value={postText}
                        onChange={(e) => { setPostText(e.target.value) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={savePost}>Save</Button>
                </DialogActions>
            </Dialog>
            {
                allPosts?.map(post => {
                    return <Card sx={{ maxWidth: 345 }}>
                        <Link  href={`/home/${post.nickname}`}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={`${post.firstName} ${post.lastName}`}
                                subheader={`${post.created_at}`}
                            />

                        </Link>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {post.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {post.post}
                            </Typography>
                        </CardContent>
                    </Card>
                })
            }
        </>

    )
};

export default AllPosts;