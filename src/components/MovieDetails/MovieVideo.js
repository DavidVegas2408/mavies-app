import React from 'react'

const MovieVideo = ({ movieTrailers }) => (
    <div className="video-responsive">
        {
            movieTrailers.map(trailer => {
                return (
                    <div key={trailer.id}>
                        <p key={trailer.key} className='title-video' >{trailer.name}</p>
                        <iframe
                            width="100%"
                            height="480"
                            src={`https://www.youtube.com/embed/${trailer.key}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={trailer.name}
                        />
                    </div>
                )
            })
        }
    </div>
)

export default MovieVideo
