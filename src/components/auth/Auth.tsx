import {Button, Stack, TextField} from "@mui/material"
import {useState} from "react";

interface AuthProps {
    submitLabel: string;
    onSubmit: (credentials: { email: string, password: string }) => Promise<void>;
    children?: React.ReactNode;
    error?: string;
}

const Auth = ({submitLabel, onSubmit, children, error}: AuthProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Stack
            spacing={3}
            sx={{
                height: "100vh",
                maxWidth: {
                    xs: "70%",
                    md: "30%",
                },
                margin: "0 auto",
                justifyContent: "center"
            }}>
            <TextField type="email" label="이메일" variant="outlined" value={email}
                // error가 있으면 error를 true로 설정한다.
                // error가 ""이면 false, "비밀번호가 일치하지 않습니다"면 true가 되고, helperText에 에러 메시지가 표시된다.
                       error={!!error}
                       helperText={error}
                       onChange={(event) => setEmail(event.target.value)}
            />
            <TextField type="password" label="비밀번호" variant="outlined" value={password}
                       error={!!error}
                       helperText={error}
                       onChange={(event) => setPassword(event.target.value)}
            />
            <Button variant="contained" onClick={() => onSubmit({email, password})}> {submitLabel} </Button>
            {children}
        </Stack>
    )
}

export default Auth;