import HeaderOut from "@/components/HeaderOut";
import { Grid,  Box } from "@mui/material";
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <HeaderOut/>
      <Grid container  justifyContent="space-around"
  alignItems="center" spacing={2}>
        <Grid item >
            <Box
              
            >
              <h1>
                <span>just</span>
                Write
              </h1>
              <p>Write, share, talk - you can everything here!</p>
            </Box>
        </Grid>
        <Grid item >
            <Box
              
            >
              <p>Tell about your new experience</p>
              <Link className="sign-link" href="/sign-in">Sign in</Link>
              <p>Don`t have a profile? Sign up!</p>
              <Link className="sign-link" href="/signup">Sign up</Link>
            </Box>
        </Grid>
      </Grid>
    </>
  )
}
