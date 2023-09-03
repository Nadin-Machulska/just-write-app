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
              <h1 className="logo-text">
                <span>just</span>
                Write
              </h1>
              <p className="logo-title">Write, share, talk - become an Author or comment other people thoughts!</p>
            </Box>
        </Grid>
        <Grid item >
            <Box
              
            >
              <p  className="btn-label">Tell about your new experience</p>
              <Link className="sign-link" href="/sign-in">Sign in</Link>
              <p className="btn-label">Don`t have a profile? Sign up!</p>
              <Link className="sign-link" href="/signup">Sign up</Link>
            </Box>
        </Grid>
      </Grid>
    </>
  )
}
