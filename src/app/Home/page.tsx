import './page.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1 className="main-heading">
          Welcome, I am
        </h1>
        <h2 className="name-heading">
          Sumbal Naz
        </h2>
        <p className="about-me">
          Passionate about coding and software development.
          I aim to turn ideas into innovative and elegant solutions.
        </p>
        <button className="btn-home">
            View Profile
        </button>
      </div>
      <div className="home-image">
        <div className="img-container">
          <div className="img-box"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
