package com.smsm.board_back.common;

public interface ResponseMessage {

    // HTTP Status 200
    String SUCCESS = "Success.";

    // HTTP Stauts 400
    String VALIDATION_FAILED = "Validation failed.F";
    String DUPLICATE_EMAIL = "Duplicated email.";
    String DUPLICATE_NICKNAME = "Duplicated nickname.";
    String DUPLICATE_TEL_NUMBER = "Duplicated tel number.";
    String NOT_EXISTED_USER = "No Existed User.";
    String NOT_EXISTED_BOARD = "This board does not exist.";

    // HTTP Status 401
    String SIGN_IN_FAIL = "SF";
    String AUTHORIZATION_FAIL = "Authorization Failed.";

    // HTTP Status 403
    String NO_PERMISSION = "No Permission.";

    // HTTP Status 500
    String DATABASE_ERROR = "Database Error.";
    
}
