const baseResponse = {

    SUCCESS : {"isSuccess": true, "code": 1000, "message": "성공"},
    
    ERR_EXAMPLE : {"isSuccess": false, "code": 2000, "message": "에러 발생 예시"},

    LOGIN_EMPTY_EMAIL: {"isSuccess": false, "code": 2001, "message": "LOGIN EMPTY EMAIL"},
    LOGIN_EMTPY_PASSWORD: {"isSuccess":false,"code": 2002,"message": "LOGIN EMPTY PASSWORD"},
    LOGIN_NOT_JOIN: {"isSuccess":false,"code": 2003,"message": "ID가 존재하지 않습니다. 회원가입으로 이동해주세요"},
    LOGIN_NOT_PASSWORD:{"isSuccess":false,"code": 2004,"message": "PASSWORD가 일치하지 않습니다. 다른 PASSWORD를 입력해주세요"},

    SIGNUP_EMPTY_NAME: {"isSuccess": false, "code": 2005, "message": "SIGNUP EMPTY NAME"},
    SIGNUP_EMPTY_PASSWORD:{"isSuccess": false, "code": 2006, "message": "SIGNUP EMPTY PASSWORD"},
    SIGNUP_EMPTY_PART:{"isSuccess": false, "code": 2007, "message": "SIGNUP EMPTY PART"},
    SIGNUP_EMPTY_GITHUBID:{"isSuccess": false, "code": 2008, "message": "SIGNUP EMPTY GITHUBID"},
    SIGNUP_WRONG_LENGTH_PASSWORD:{"isSuccess": false, "code": 2009, "message": "비밀번호 자리수가 틀렸습니다. 4자리 비밀번호로 입력해주세요"},
    SIGNUP_EMPTY_BOARDID:{"isSuccess": false, "code": 2010, "message": "BOARD_ID가 넘어오지 않았습니다."},
}

export default baseResponse;