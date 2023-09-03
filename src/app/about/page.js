import { Grid, Button, Item, Box } from "@mui/material";
import Link from 'next/link';
const page = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item >
                    <Item>
                        <Box
                            sx={{
                                // width: 300,
                                // height: 300,
                                // backgroundColor: 'primary.dark',
                                // '&:hover': {
                                //     backgroundColor: 'primary.main',
                                //     opacity: [0.9, 0.8, 0.7],
                                // },
                            }}
                        >
                            <h1>
                                <span>just</span>
                                Write
                            </h1>
                            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        </Box>
                    </Item>
                </Grid>
                <Grid item >
                    <Item>
                        <Box
                            sx={{
                                // width: 300,
                                // height: 300,
                                // backgroundColor: 'primary.dark',
                                // '&:hover': {
                                //     backgroundColor: 'primary.main',
                                //     opacity: [0.9, 0.8, 0.7],
                                // },
                            }}
                        >
                            <p>Tell about your new experience</p>
                            <Link href="/sign-in">Sign in</Link>
                            <p>Don`t have a profile? Sign up!</p>
                            <Link href="/signup">Sign up</Link>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
};

export default page;