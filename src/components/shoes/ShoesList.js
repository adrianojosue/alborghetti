import { useMemo } from 'react';

import { getShoesByGender } from '../../selectors/getShoesByGender';
import { ShoesCards } from './ShoesCards';

export const ShoesList = ({ gender }) => {

    const shoes = useMemo(() => getShoesByGender( gender ), [gender]);

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
