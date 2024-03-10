import { memo, useEffect, useMemo, useState } from 'react';
import './MoviePage.css';
import { data } from './data';

export const MoviePage = memo(({ id }) => {
  const movie = useMemo(() => data.list.find((item) => item.id === id), []);

  const [render, setRender] = useState(false)

  useEffect(() => {
    console.log(render);

    if (movie && !render) {
      window.webtor = window.webtor || [];

      window.webtor.push({
        id: 'player',
        // наш сервис
        baseUrl: 'http://138.68.74.87:30080',
        magnet: movie.magnet,
        on: function (e) {
          if (e.name == window.webtor.TORRENT_FETCHED) {
            console.log('Torrent fetched!', e.data);
          }
          if (e.name == window.webtor.TORRENT_ERROR) {
            console.log('Torrent error!');
          }
        },
        features: {
          // прогресс торрента
          // p2pProgress: false,
          autoSubtitles: true,
          continue: false,
          title: false,
          subtitles: false,
          settings: false,
          download: false,
          embed: false,
        },
        lang: 'en',
        i18n: {
          en: {
            common: {
              'prepare to play': 'Preparing Video Stream... Please Wait...',
            },
            stat: {
              seeding: 'Seeding',
              waiting: 'Client initialization',
              'waiting for peers': 'Waiting for peers',
              from: 'from',
            },
          },
        },
      });
      setRender(true)
    }
  }, [movie]);

  if (!movie) {
    return '404';
  }

  const { name, description, rate, image } = movie;

  return (
    <div className="wrap">
      <div className="wrap-center wrap-main">
        <div style={{ height: '60px' }}>
          <header className="header sticky-vis" id="header">
            <div className="header-in wrap-center fx-row fx-middle">
              <a
                href="/"
                className="logo"
                aria-label="Перейти на главную страницу лордфильм"
              >
                <img style={{ height: 50 }} src="/public/vite.svg" alt="" />
              </a>
              <div className="btn-menu">
                <span className="fa fa-bars"></span>
              </div>
              <ul className="hmenu fx-row to-mob">
                <li>
                  <a href="/">Фильмы</a>
                </li>
              </ul>
              <div className="search-wrap fx-1 to-mob"></div>
            </div>
          </header>
        </div>

        <div className="content">
          <main className="main">
            <div className="clearfix" id="in-full">
              <div id="dle-content">
                <article className="full ignore-select">
                  <div className="fmain">
                    <div className="fcols fx-row">
                      <div className="fleft fx-1 fx-row">
                        <div className="fleft-desc fx-1">
                          <h1>{name}</h1>
                          <div className="fdesc clearfix slice-this">
                            {description}
                          </div>
                        </div>
                        <div className="fleft-img fx-first">
                          <div className="fleft-img-in">
                            <div className="fposter img-wide">
                              <img src={image} width="200" height="280" />
                            </div>
                            <div className="flikes fx-row">
                              <div className="rate-plus ps" id="ps-50643">
                                <span className="fa fa-thumbs-up"></span>
                              </div>
                              <div className="slide-circle">
                                <canvas
                                  width="100"
                                  height="100"
                                ></canvas>
                                <div>
                                  {rate}
                                  <div>рейтинг</div>
                                </div>
                              </div>
                              <div className="rate-minus ms" id="ms-50643">
                                <span className="fa fa-thumbs-down"></span>
                              </div>
                            </div>
                            <div className="fvotes hidden">
                              <div className="hidden">
                                <span
                                  id="ratig-layer-50643"
                                  className="ignore-select"
                                >
                                  <span className="ratingtypeplusminus ignore-select ratingplus">
                                    +8
                                  </span>
                                </span>
                              </div>
                              <span id="vote-num-id-50643">24</span> голоса
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fplayer tabs-box">
                      <noindex>
                        <div className="tabs-b video-box visible">

                          {/* сюда рисуется плеер */}
                          <div id="player" className="webtor" />

                        </div>
                      </noindex>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </main>
        </div>

        <footer className="footer fx-row">
          <div className="ft-col ft-desc">
            <div className="ft-counter"></div>
          </div>
          <div className="ft-col ft-menu"></div>
          <div className="ft-col ft-menu"></div>
        </footer>
      </div>
    </div>
  );
});
