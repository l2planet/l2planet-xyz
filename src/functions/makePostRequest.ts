export const makePostRequest = async <T extends unknown>(url: string, body: string) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body
        })
        if(!res.ok) return
        return await res.json() as T
    } catch {}
}