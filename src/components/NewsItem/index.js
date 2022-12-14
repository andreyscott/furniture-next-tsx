import styled from "styled-components";
export const Card = styled.article`
  width: 100%;
  position: relative;
  border-radius: 22px;
  background-color: rgb(244, 245, 248);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;
export const CardHeader = styled.div``;
export const CardBody = styled.div`
  padding: 22px 20px 32px;
  
  p {
    color: rgb(71, 71, 71);
    margin-bottom: 0.5rem;
  }
`;
export const CardImgContainer = styled.figure`
  padding-top: 62%;
  display: block;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  margin: 0px;
  border-radius: 22px;

`;
export const CardImg = styled.img`
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 100%;
  height: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  border-radius: 22px;
`;
export const CardTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: 600;
  a {
    color: rgb(33, 33, 33);
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
export const CardAuthor = styled.div`
  display: flex;
  margin-bottom: 15px;
  font-size: 13px;
  font-weight: 500;
  gap: 0.4rem;
  a {
    color: rgb(71, 71, 71);
    margin-right: 1rem;
  }
  a:hover {
    color: #f49034;
  }
`;
