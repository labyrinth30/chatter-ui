import {useGetMe} from "../../hooks/useGetMe";
import excludedRoutes from "../../constants/excluded-routes";

/**
 * Guard 컴포넌트는 라우팅 전 유저가 로그인 상태인지 확인하는 컴포넌트다.
 * 로그인 상태가 아니라면 로그인 페이지로 리다이렉트한다.
 */
interface GuardProps {
    children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
    // useGetMe hook을 사용하여 현재 로그인된 유저 정보를 가져온다.
    // data에는 me query의 결과가 담겨있다.
    const { data: user } = useGetMe();
    console.log(user);

    /**
     * excludedRoutes에 현재 경로가 포함되어 있는지 확인하여 포함되어 있으면 children
     * 렌더링을 하고, 그렇지 않으면 user가 존재하는지 확인하여 렌더링 여부를 결정한다.
     * user가 존재하면 children을 렌더링한다.
     * user가 존재하지 않으면 children을 렌더링하지 않는다.
     */
    return (
        <>
            {
                excludedRoutes.includes(window.location.pathname)
                    ? children
                    : user && children
            }
        </>
    )
}

export default Guard;
