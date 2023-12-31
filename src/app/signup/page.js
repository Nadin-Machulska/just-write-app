'use client'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm, Controller } from "react-hook-form"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from 'next/navigation';

const SignUp = () => {
    const router = useRouter();

    const supabase = createClientComponentClient();

    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            author: false,
            select: {},
        },
    })
    const onSubmit = async (data) => {
        await supabase.auth.signUp({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
        })

            const { error: usersError } = await supabase
            .from('users')
            .insert({
                firstName: data.firstName,
                lastName: data.lastName,
                author: data.author,
                email: data.email,
                nickname: data.nickname
            })

        }
    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box onSubmit={handleSubmit(onSubmit)} component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name='firstName'
                                    control={control}
                                    render={({ field }) => <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        {...field}
                                    />}
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name='lastName'
                                    control={control}
                                    render={({ field }) => <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        {...field}
                                    />} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name='nickname'
                                    control={control}
                                    render={({ field }) => <TextField
                                        required
                                        fullWidth
                                        id="nickname"
                                        label="Nickname"
                                        name="nickname"
                                        autoComplete="your nick name"
                                        {...field}
                                    />} />
                            </Grid>

                            <Grid item xs={12}>
                                <Controller
                                    name='email'
                                    control={control}
                                    render={({ field }) => <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        {...field}
                                    />}
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name='password'
                                    control={control}
                                    render={({ field }) => <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        {...field}
                                    />}
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <Controller 
                                control={control}
                                name='author'
                                    render={ ({field}) => <Checkbox value="allowExtraEmails" color="primary" 
                                    label="I am Author"
                                    {...field}
                                    /> 
                                   } 
                                />
                                <span>I am Author</span>
                            </Grid>
                        </Grid>
                        <Button
                            onClick={() => router.push('/home')}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/sign-in" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
    )
};

export default SignUp;