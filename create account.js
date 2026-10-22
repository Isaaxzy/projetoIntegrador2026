export async function register(email, password, confirmPassword) {
    if (password !== confirmPassword) {
        return { success: false, message: 'Passwords do not match.' }
    }

    try {
        const response = await fetch('http://localhost:3000/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json()

        if (!response.ok || data.error) {
            return {
                success: false,
                message: data.error || 'Could not create the account.'
            }
        }

        return {
            success: true,
            message: data.message || 'Account created successfully.'
        }
    } catch {
        return {
            success: false,
            message: 'Unable to connect to the server.'
        }
    }
}