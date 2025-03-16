export function login(email: string, password: string): Promise<{ email: string }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                reject(new Error("Correo electrónico inválido"));
            } else if (password.length < 6) {
                reject(new Error("La contraseña debe tener al menos 6 caracteres"));
            } else {
                if (email === "user@example.com" && password === "password123") {
                    resolve({ email });
                } else {
                    reject(new Error("Correo electrónico o contraseña incorrectos"));
                }
            }
        }, 1000);
    });
}