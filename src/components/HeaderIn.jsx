'use client'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from 'next/navigation';

const HeaderIn = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const signOutUser = async() => {
    const { error } = await supabase.auth.signOut()
    router.push('/')
  }
 return (
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            Jwrite
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            All Posts
          </Typography>
          <Button onClick={signOutUser} color="inherit">SignOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
)
};

export default HeaderIn;