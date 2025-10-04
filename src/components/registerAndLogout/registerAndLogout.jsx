import { useEffect } from "react"
import SignInAndSignUpPage from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component"


export function RegisterAndLogout() {
    useEffect(() => {
        localStorage.clear()
    }, [])
    return <SignInAndSignUpPage />
}