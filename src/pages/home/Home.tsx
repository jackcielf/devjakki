import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const Home = () => {
  return (
    <section className="home">
      <img
        className="home__img"
        src="https://avatars.githubusercontent.com/u/103477156?v=4"
        alt="Avatar do @dev_jakki"
      />

      <div className="home__name">
        <h2>Jakki</h2>
        <em>@dev_jakki</em>
      </div>

      <div className="home__info">
        <p>👨‍💻 Software Enginner 👨‍💻</p>
        <p>✨ Creator content digital ✨</p>
        <p>😉 Conteúdos tech feitos com estilo! 😉</p>
      </div>

      <a 
        className="home__card main"
        href="https://github.com/jackcielf" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <p>✨ Itens para o setup ✨</p>
        <p>Itens que podem estar faltando no seu setup!</p>
      </a>

      <h4>
        <em>Indicações! 👇🏻</em>
      </h4>

      <a 
        className="home__card"
        href="https://app.rocketseat.com.br/cart/rocketseat-one?referral=devjakki&coupon=indicamgm&utm_source=platform&utm_medium=organic&utm_campaign=venda&utm_term=mgm&utm_content=indication-lp_one" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <p>Assine a Rocketseat (86% OFF) 🚀</p>
        <p>Conteúdos tech feitos com estilo!</p>
      </a>

      <a 
        className="home__card"
        href="https://inglescomagringaoficial.com.br/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <p>Aprenda inglês (82% OFF)</p>
        <p>Tenha mais oportunidades na gringa com um curso vitalício!</p>
      </a>

      <div className="home__contact">
        <a href="https://github.com/jackcielf" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a href="https://www.instagram.com/dev_jakki" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a href="mailto:jackcielfelix.dev@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </section>
  );
};
