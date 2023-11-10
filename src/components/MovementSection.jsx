import styled from "styled-components";

const Wrapper = styled.section`
.common-heading{
  text-align: center;
  margin-bottom: 2rem;
  span{
    color: ${({theme}) => theme.colors.black};
  }
}
p{
  font-size: 1.8rem;
  margin-bottom: 2rem;
}

@media (max-width: 500px) {
  .container{
    p{
      text-align: center;
    }
  }
}
`;

const MovementSection = () => {
  return (
    <>
     <Wrapper className="section">
     <div className="container">
     <h2 className="common-heading"><span>JOIN</span> THE MOVEMENT</h2>
      <p>Gold Gym has become the largest co-ed gym chain in the world with over 700+ clubs in 27 countries, across 6 continents serving more than 2 million customers. Gold’s Gym India started in the year 2002 in Mumbai. The Year 2021 marked the 19th Anniversary of Gold’s Gym India. 150+ active Gold’s Gym clubs in India and a few more under construction. Multiple gym formats – Regular, Express and Activ <b>fitness centres.</b></p>
      <p>Presence in 95+ cities and 25 states. 60+ years of presence in the health and fitness industry, Gold’s Gym is a <b>best franchises to own.</b></p>
      <p>Gold’s Gym has been leading the fitness movement and redefining strength since 1965 when Joe Gold opened the original Gold’s Gym in Venice, California. Long before the modern-day health club existed, the original Gold’s Gym featured three simple ingredients: The best equipment, a passion for fitness and an unparalleled dedication to results. It was an instant hit.</p>
     </div>
      </Wrapper> 
    </>
  )
}

export default MovementSection;
