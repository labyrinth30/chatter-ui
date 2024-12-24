import {Link} from "react-router-dom";
import {Link as MUILink} from "@mui/material";
import Auth from "./Auth";
import {useCreateUser} from "../../hooks/useCreateUser";
import {useState} from "react";
import {extractErrorMessage} from "../../utils/errors";

const Signup = () => {
    // useCreateUser를 호출하여 반환된 값을 createUser에 할당한다.
    const [createUser] = useCreateUser();
    const [error, setError] = useState("");

    return (
        <Auth submitLabel="회원가입"
              error={error}
              onSubmit={async ({email, password}) => {
            try {
                await createUser({
                    variables: {
                        createUserInput: {
                            email,
                            password
                        },
                    },
                });
                setError("");
            } catch (err) {
                const errorMessage = extractErrorMessage(err);
                if (errorMessage) {
                    setError(errorMessage);
                    return;
                }
                setError("알 수 없는 오류가 발생했습니다.");
            }
        }}>
            <Link to="/login" style={{alignSelf: "center"}}>
                <MUILink>로그인 하러가기</MUILink>
            </Link>
        </Auth>
    )
};

export default Signup;