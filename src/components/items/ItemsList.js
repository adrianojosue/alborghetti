import { useSelector } from 'react-redux';
import { ItemsData } from './ItemsData';

export const ItemsList = () => {

    const { items } = useSelector( state => state.items );

    return (
        <>
            <section className="cards-grid">

                {
                    items.map( item => (

                        <div className="card-carousel_container" key={item.id}>
                            <ItemsData
                                key={item.id}
                                { ...item }
                            />
                        </div>
                    ))
                }
                
            </section>
        </>
    )
}
