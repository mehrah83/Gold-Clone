import styled from "styled-components";
import { ButtonOutline } from "../styles/ButtonOutline";
import { FilterItems } from "../Items/FilterItems";
import { useState } from "react";

const Wrapper = styled.section`
  .button-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 4rem;

    .btn {
      padding: 0.8rem 4rem;
      border-radius: 3rem;
      font-weight: 900;
      font-size: 1.8rem;

      &:active{
        background: ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.black};
      }
    }
  }
  picture {
    width: 100%;
    height: 100%;
    img {
      max-width: 37rem;
      object-fit: inherit;
      height: 24.7rem;
    }
  }

  @media (max-width: ${({theme}) => theme.media.largeDevice}) {
    .grid-three-column{
      grid-template-columns: repeat(2,1fr);

      iframe{
        width: 100%;
        height: 100%;
      }
    }
  }
  @media (max-width: 700px) {
    .grid-three-column{
      grid-template-columns: repeat(1,1fr);

      img{
        max-width: 100%;
        height: auto;
      } 
    }

    .button-group{
      .btn{
        padding: 0.8rem 3rem;
    font-size: 1.5rem;
      }
    }
  }
`;
const FilterSection = () => {
 const [items, setItems] = useState(FilterItems);
  const filterItem = (categItem) => {
   const updatedItems = FilterItems.filter((currElem) => {
      return currElem.category === categItem;
   }) 
   setItems(updatedItems);
  }

  return (
    <>
      <Wrapper className="section">
        <div className="container">
          <div className="button-group">
            <ButtonOutline onClick={() => setItems(FilterItems)}  className="btn">All</ButtonOutline>
            <ButtonOutline onClick={() => filterItem("image")} className="btn">Images</ButtonOutline>
            <ButtonOutline onClick={() => filterItem("video")} className="btn">Videos</ButtonOutline>
          </div>
          <div className="grid grid-three-column">
            {items.map((currElem) => {
              const {id, src} = currElem;
              return (
                <>
                  <div key={id}>
                    {src.includes("youtube") ? (
                      <iframe
                        width="370"
                        height="247"
                        src={src}
                        title={`YouTube Video ${id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    ) : (
                      <picture>
                        <img src={src} alt={`Image-${id}`} />
                      </picture>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default FilterSection;
