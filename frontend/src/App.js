import './App.css'
import React, { useEffect, useState } from 'react';

function App() {
  const [apiAnime, setApiAnime] = useState('')

  useEffect(() =>{
    fetch('http://127.0.0.1:5000/api/animes')
      .then((response) => response.json())
      .then((data2) => setApiAnime(data2))
  }, [])

  return (
    <div className="container">
      <div className='containerElement1'>
      <div className='cointainerImage'><img className='imagemBanner' src='/img/Banner.jpg' alt=''/></div>
        <div>
        <h1>{apiAnime[0].titulo}</h1>
        <dl>
            <dt>Sinopse:</dt>
            <dd>{apiAnime[0].sinopse}</dd>
            <dt>Gênero:</dt>
            <dd>{apiAnime[0].genero}</dd>
            <dt>Data de Lançamento:</dt>
            <dd>{apiAnime[0].dataDeLancamento}</dd>
            <dt>Personagens Principais:</dt>
            <dd>{apiAnime[0].personagensPrincipais}</dd>
            <dt>Temporada:</dt>
            <dd>{apiAnime[0].temporada}</dd>
          </dl>
        </div>
      </div>
      <div className='containerElement1'>
      <div className='cointainerImage'><img className='imagemBanner' src='/img/Banner2.jpg' alt=''/></div>
        <div>
        <h1>{apiAnime[1].titulo}</h1>
        <dl>
            <dt>Sinopse:</dt>
            <dd>{apiAnime[1].sinopse}</dd>
            <dt>Gênero:</dt>
            <dd>{apiAnime[1].genero}</dd>
            <dt>Data de Lançamento:</dt>
            <dd>{apiAnime[1].dataDeLancamento}</dd>
            <dt>Personagens Principais:</dt>
            <dd>{apiAnime[1].personagensPrincipais}</dd>
            <dt>Temporada:</dt>
            <dd>{apiAnime[1].temporada}</dd>
          </dl>
        </div>
      </div>
      <div className='containerElement1'>
      <div className='cointainerImage'><img className='imagemBanner' src='/img/Banner3.jpg' alt=''/></div>
        <div>
        <h1>{apiAnime[2].titulo}</h1>
        <dl>
            <dt>Sinopse:</dt>
            <dd>{apiAnime[2].sinopse}</dd>
            <dt>Gênero:</dt>
            <dd>{apiAnime[2].genero}</dd>
            <dt>Data de Lançamento:</dt>
            <dd>{apiAnime[2].dataDeLancamento}</dd>
            <dt>Personagens Principais:</dt>
            <dd>{apiAnime[2].personagensPrincipais}</dd>
            <dt>Temporada:</dt>
            <dd>{apiAnime[2].temporada}</dd>
          </dl>
        </div>
      </div>
      <div className='containerElement1'>
      <div className='cointainerImage'><img className='imagemBanner' src='/img/Banner4.jpg' alt=''/></div>
        <div>
        <h1>{apiAnime[3].titulo}</h1>
        <dl>
            <dt>Sinopse:</dt>
            <dd>{apiAnime[3].sinopse}</dd>
            <dt>Gênero:</dt>
            <dd>{apiAnime[3].genero}</dd>
            <dt>Data de Lançamento:</dt>
            <dd>{apiAnime[3].dataDeLancamento}</dd>
            <dt>Personagens Principais:</dt>
            <dd>{apiAnime[3].personagensPrincipais}</dd>
            <dt>Temporada:</dt>
            <dd>{apiAnime[3].temporada}</dd>
          </dl>
        </div>
      </div>
      <div className='containerElement1'>
        <div className='cointainerImage'><img className='imagemBanner' src='/img/Banner5.jpg' alt=''/></div>
        <div>
        <h1>{apiAnime[4].titulo}</h1>
        <dl>
            <dt>Sinopse:</dt>
            <dd>{apiAnime[4].sinopse}</dd>
            <dt>Gênero:</dt>
            <dd>{apiAnime[4].genero}</dd>
            <dt>Data de Lançamento:</dt>
            <dd>{apiAnime[4].dataDeLancamento}</dd>
            <dt>Personagens Principais:</dt>
            <dd>{apiAnime[4].personagensPrincipais}</dd>
            <dt>Temporada:</dt>
            <dd>{apiAnime[4].temporada}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default App;