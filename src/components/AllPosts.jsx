'use client'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
import { useState, useContext, createContext } from 'react';
import Link from 'next/link';

// const AllPostsContext = createContext();

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const AllPosts = ({ title, postText, currentUserinfo, currentUserEmail, allPosts, savePost, setTitle, setPostText }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

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
                    : console.log('user isn`t an author')
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
                        // margin="dense"
                        // id="name"
                        // type="text"
                        // fullWidth
                        // variant="standard"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    <input
                        name="post"
                        autoFocus
                        // margin="dense"
                        // id="name"
                        // type="text"
                        // fullWidth
                        // variant="standard"
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
                        {/* <AllPostsContext.Provider value={{data}}>
                            <div AllPostsContext={AllPostsContext}> */}
                        <Link abc={'abc'} href={`/home/${post.nickname}`}>
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
                        {/* </div>
                        </AllPostsContext.Provider> */}
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {post.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {post.post}
                            </Typography>
                        </CardContent>
                        {/* <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions> */}
                        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>
                    </CardContent>
                </Collapse> */}
                    </Card>
                })
            }
        </>

    )
};

export default AllPosts;