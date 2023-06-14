
// 토큰 및 로그인 유저 데이터를 브라우저에 저장하는 함수
export const setLoginUserInfo = ({token, userName , role}) => {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('LOGIN_USERNAME', userName);
    localStorage.setItem('USER_ROLE', role);


};


// 로그인한 유저의 데이터 객체를 반환하는 함수

export const getLoginUserInfo = () => {
    return{
        token: localStorage.getItem('ACCESS_TOKEN'),
        username: localStorage.getItem('LOGIN_USERNAME'),
        role: localStorage.getItem('USER_ROLE')
    };
};

// 로그인 여부를 확인하는 함수
// 앞에 !! 를 붙여주면 논리식으로 변환된다. 토큰이 있으면 TRUE, 없으면 FALSE를 반환
export const isLogin = () => !!localStorage.getItem('ACCESS_TOKEN');