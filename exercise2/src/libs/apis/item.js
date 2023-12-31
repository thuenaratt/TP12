
var categoryApi = {
    async getCategoryItem() {
        const res = await fetch('http://localhost:3001/item/categorized-items',{
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json',
                Origin: 'http://localhost:8080'
            }
        })
        const result = await res.json();
        return result
    }
}

export default categoryApi