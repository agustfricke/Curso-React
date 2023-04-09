export function filterItems(items, query) {
    query = query.toLowerCase()
    return items.filter(item => 
        // Separamos los nombres en palabras con split
        // Y con some comprobamos si alguna palabra empieza con query
        item.name.split(' ').some(word => 
            word.toLowerCase().startsWith(query)))
}


export const names = [
    {id: 0, name: "John"},
    {id: 1, name: "Paul"},
    {id: 2, name: "George"},
    {id: 3, name: "Ringo"},
    {id: 4, name: "Pete"}
]
