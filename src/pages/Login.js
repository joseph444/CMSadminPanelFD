import { Backdrop, Button, CircularProgress, Container, FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, Paper, TextField, Typography } from "@material-ui/core"
import { Visibility, VisibilityOff } from "@material-ui/icons"
import { useEffect, useState } from "react"

//css for this page
const useStyle = makeStyles(theme=>({
    backdrop:{
        background:'linear-gradient(to bottom, #56ccf2, #2f80ed);'
    },
    card:{
        width:300,
        paddingTop:theme.spacing(1),
        paddingBottom:theme.spacing(1)
    }
}))

const Login = (props)=>{
    const classes = useStyle()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [showPassword,setShowPassword] = useState(false)

    const [emailError,setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [loading,setLoading] = useState(false)

    //use effects

    useEffect(()=>{
        document.title="Admin-Login"
    },[]);

    const handleLogin = ()=>{
        setEmailError(null)
        setPasswordError(null)
        let flag = false
        if(email.trim().length===0){
            setEmailError("This field is required")
            flag = true
        }
        if(password.trim().length===0){
            setPasswordError("This field is required")
            flag = true
        }

        if(flag===true) return
        
        setLoading(true)
        setTimeout(()=>setLoading(false),5000)
    }

    const renderCard = ()=>{
        return(
            <Paper className={classes.card}>
            <Container>
                <Grid container direction="column" spacing={1}>
                    <Grid item>
                        <Typography variant="h6">Login</Typography>
                    </Grid>
                    <Grid item>
                        <TextField value={email} 
                        label="Email" fullWidth
                        variant="outlined" type="email"
                        error={emailError!==null} helperText={emailError||""}
                        onChange={(event)=>setEmail(event.currentTarget.value)}/>
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth variant="outlined" >
                            <InputLabel htmlFor="password" >Password</InputLabel>
                            <OutlinedInput
                                id="password" type={showPassword?'text':'password'}
                                error={passwordError!==null} 
                                value={password} onChange={(event)=>setPassword(event.currentTarget.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton onClick={()=>setShowPassword(!showPassword)}
                                            onMouseDown={(event)=>event.preventDefault()}
                                            edge="end">
                                                {showPassword?<Visibility/>:<VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                />
                            <FormHelperText error={passwordError!==null}>{passwordError||""}</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Button color="primary" variant="contained" onClick={handleLogin}>Login</Button>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
        );
    }

    return (
    <Backdrop open={true} className={classes.backdrop}>
        {loading?<CircularProgress/>:renderCard()}
    </Backdrop>
    )
}

export default Login