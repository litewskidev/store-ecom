import PaymentButton from "../../Elements/PaymentButton/PaymentButton";
import './Home.scss';

const Home = () => {
  return(
    <section id="home">
      <div className="home__wrapper">
        <h1>CULTURE</h1>
        <PaymentButton />
      </div>
    </section>
  );
};

export default Home;
