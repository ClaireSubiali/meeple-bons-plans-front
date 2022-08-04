import "./style.scss";
function actuCard () {
  return(
<div className="pseudo-body">
      {/*L'actu la plus grande */}
     
      <article className="card-main">
        <h2 className="Title-big">Titre</h2>
        <time className="date-dig">14/02/2012</time>
        <p className="description-actu-big">
          Lorem ipsum dolor sit amet. Aut molestiae et ullam delectus qui iste
          error 33 eligendi culpa et explicabo numquam. Eum incidunt sint qui
          dolores consectetur soluta necessitatibus est voluptatem earum aut
          voluptatem fugit eum cumque dolorem.*/
          </p>
          </article>*/
    
          {/*le contener qui contient les actus de taille normal */}
          <div className="contener-card-medium">
            {/*une card actus de taille standard */}
    
            <article className="card-medium">
              <h2 className="Title-big">Titre</h2>
              <time className="date-dig">14/02/2012</time>
              <p className="description-actu-Medium">
                Lorem ipsum dolor sit amet. Aut molestiae et ullam delectus qui iste
                error 33 eligendi culpa et explicabo numquam. Eum incidunt sint qui
                dolores consectetur soluta necessitatibus est voluptatem earum aut
                voluptatem fugit eum cumque dolorem.
              </p>
            </article>
    
          </div>
    
          {/*le menu pour faire defiler les pages */}
          <div className="menu-page">
            <button className="button-previous" type="button">
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <span className="page-number" >1</span>
            <button className="button-next" type="button">
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
  )
};

export default actuCard;
