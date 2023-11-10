import styled from "styled-components"
import { ButtonOutline } from "../styles/ButtonOutline";

const Wrapper = styled.section`
padding: 6rem;
background: ${({theme}) => theme.colors.primary};
.container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .common-heading{
    color: ${({theme}) => theme.colors.black};
}
p{
    color: ${({theme}) => theme.colors.black};
    font-weight: 500;
}
.btn{
    color: ${({theme}) => theme.colors.black};
    border: 0.2rem solid ${({theme}) => theme.colors.black};
    font-weight: 900;
    font-size: 1.6rem;
    padding: 1.2rem 3rem;
}
}

@media (max-width: ${({theme}) => theme.media.mobile}){
    .container{
        flex-wrap: wrap;
        gap: 3rem;
        align-items: center;
        justify-content: center;

        .common-heading{
            text-align: center;
        }
        p{
            text-align: center;
        }
    }
}
`;
const SubsribeSection = () => {
  return (
    <>
     <Wrapper>
        <div className="container">
            <div>
            <h2 className="common-heading">Join this month and get 2 months FREE</h2>
        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
            </div>
        <ButtonOutline className="btn">Join Today</ButtonOutline>
        </div>
        </Wrapper> 
    </>
  )
}

export default SubsribeSection
