import React from 'react'

const MovieCompanies = ({ movie }) => (
    <div className='img-companies'>
        {
            movie.production_companies.map(companies => {
                let ulrCompanies = "https://image.tmdb.org/t/p/w500" + companies.logo_path;
                return (
                    companies.logo_path !== null
                        ? <img key={companies.id} src={ulrCompanies} alt={companies.name} width={100} />
                        : ""
                )
            })
        }
    </div>
);

export default MovieCompanies
