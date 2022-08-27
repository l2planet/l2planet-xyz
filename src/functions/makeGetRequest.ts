export const makeGetRequest = async <T extends unknown>(url: string) => {
    try {
        const res = await fetch(url)
        if(!res.ok) return
        return await res.json() as T
    } catch {}
}