import './List.css';
import { data } from './data';

export const List = () => {
  return (
    <div className="wrap">
      <div className="wrap-center wrap-main">
        <div style={{ height: '70px' }}>
          <header className="header" id="header">
            <div className="header-in wrap-center fx-row fx-middle">
              <a
                href="/"
                className="logo"
                aria-label="Перейти на главную страницу лордфильм"
              >
                <img style={{ height: 50}} src="/public/vite.svg" alt="" />
              </a>
              <div className="btn-menu">
                <span className="fa fa-bars"></span>
              </div>
              <ul className="hmenu fx-row to-mob">
                <li>
                  <a href="">Фильмы</a>
                </li>
              </ul>
              <div className="search-wrap fx-1 to-mob"></div>
            </div>
          </header>
        </div>

        <div className="content">
          <main className="main">
            <div className="sect">
              <div className="sect-cont sect-items clearfix">
                <div id="dle-content">
                  {new Array(10).fill('').map(() => (
                    <>
                      {data.list.map((item) => (
                        <div key={item.id} className="th-item">
                          <a className="th-in with-mask" href={`/${item.id}`}>
                            <div className="th-img img-resp-vert">
                              <img
                                src={item.image}
                                alt="Аватар: Легенда об Аанге (2024)"
                                className=""
                              />
                            </div>
                            <div className="th-desc">
                              <div className="th-title">{item.name}</div>
                              <div className="th-rates fx-row">
                                <div
                                  className="th-rate th-rate-kp"
                                  data-text="kp"
                                >
                                  <span>{item.rate}</span>
                                </div>
                              </div>
                            </div>
                            <div className="th-mask fx-col fx-center fx-middle anim">
                              <span className="fa fa-play"></span>
                            </div>
                          </a>
                        </div>
                      ))}
                    </>
                  ))}
                </div>
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
};
