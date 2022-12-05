import { useMemo } from 'react';

import { getShoesByGender } from '../../selectors/getShoesByGender';
import { ShoesCards } from './ShoesCards';

export const ShoesList = ({ type }) => {

    const shoes = useMemo(() => getShoesByGender( type ), [ type ]);

    return (
        <>
            <section className="cards-grid">

                {
                    shoes.map( shoe => (

                        <div className="card-carousel_container" key={shoe.id}>
                            <ShoesCards
                                key={shoe.id}
                                { ...shoe }
                            />
                        </div>
                    ))
                }
                
            </section>
        </>
    )
}
