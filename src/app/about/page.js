import { Grid, Item, Box } from "@mui/material";
import Link from 'next/link';
const page = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item >
                    <Item>
                        <Box
                        >
                            <h1>
                                <span>just</span>
                                Write
                            </h1>
                            <p>a</p>
                        </Box>
                    </Item>
                </Grid>
                <Grid item >
                    <Item>
                        <Box
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