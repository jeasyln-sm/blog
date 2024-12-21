enum ResponseCode {

    // HTTP Status 200
    SUCCESS = "Success.",

    // HTTP Stauts 400
    VALIDATION_FAILED = "Validation failed.F",
    DUPLICATE_EMAIL = "Duplicated email.",
    DUPLICATE_NICKNAME = "Duplicated nickname.",
    DUPLICATE_TEL_NUMBER = "Duplicated tel number.",
    NOT_EXISTED_USER = "No Existed User.",
    NOT_EXISTED_BOARD = "This board does not exist.",

    // HTTP Status 401
    SIGN_IN_FAIL = "SF",
    AUTHORIZATION_FAIL = "Authorization Failed.",

    // HTTP Status 403
    NO_PERMISSION = "No Permission.",

    // HTTP Status 500
    DATABASE_ERROR = "Database Error.",

}

export default ResponseCode;