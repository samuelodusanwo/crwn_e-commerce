import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, partnerButton, registerBtn, ...otherProps }) => (
    <button
        className={`${isGoogleSignIn ? "google-sign-in" : ""} ${inverted ? "inverted" : ""} ${partnerButton ? "partner-button" : ""} ${registerBtn ? "registerBtn" : ""} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
)

export default CustomButton;