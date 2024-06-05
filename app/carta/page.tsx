import { getProducts } from '@/api/api'

export default async function restaurantMenu(){
    const data = await getProducts()
    if (Array.isArray(data)) {
        return (
            <div>
                <h1>Menú del Restaurante</h1>
                <ul>
                    {data.map((prod,idx) => (
                        <div key={idx}>
                            <li>{prod.title}</li>
                            <li>{prod.description}</li>
                        </div>
                    ))}
                </ul>
            </div>
        );
    } else {
        return <div>Error: No se pudo cargar el menú del restaurante.</div>;
    }
}