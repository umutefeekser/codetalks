export default function (errorCode) {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Geçersiz email."
        
        case "auth/email-already-in-use":
            return "Bu email zaten kullanılıyor."

        case "auth/user-not-found":
            return "Kullanıcı bulunamadı."

        case "auth/invalid-credential":
            return "Email yada şifre hatalı."

        case "auth/weak-password":
            return "Şifre zayıf."
    
        default:
            return errorCode
    }
}