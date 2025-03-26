import { addBasePath } from "./isGIthubPage";

export default async function fetchData<T>(url: string): Promise<T[]>{
    try {
        const res = await fetch(`${addBasePath()}${url}`)

        if (!res.ok) throw new Error("Failed to fetch experience");

        return await res.json()
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error
    }
}