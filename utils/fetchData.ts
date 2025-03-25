export default async function fetchData<T>(url: string): Promise<T[]>{
    try {
        const res = await fetch(url)

        if (!res.ok) throw new Error("Failed to fetch experience");

        return await res.json()
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error
    }
}