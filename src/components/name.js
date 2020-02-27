import React from "react";
import styled, { css } from "styled-components";

const Base = styled.a`
  font-size: 25pt;
  font-family: 'Pacifico', cursive;
  display: flex;
  margin: 20px auto;
  width: fit-content;
  white-space: nowrap;
  height: 50px;
  // transition-property: transform;
  // transition-duration: 0.8s;

  &:hover {
    cursor: pointer;
    // -webkit-text-fill-color: transparent;
    // -webkit-background-clip: text;
    // background-image: url(https://media.giphy.com/media/l41YcGT5ShJa0nCM0/giphy.gif);
    text-decoration: none;
    // -webkit-transform:rotate(354deg);
  }

  ${props =>
    props.dark &&
    css`
      color: #444;
    `}

  ${props =>
    props.block &&
    css`
      display: block;
    `}

  ${props =>
    props.small &&
    css`
      font-size: 1em;
    `}

  ${props =>
    props.big &&
    css`
      font-size: 2em;
    `}
`;
const Base2 = styled.p`
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 43px;
  padding-left: 58px;
  font-weight: 200;
`;

class Name extends React.Component {
  render() {
    return (
      <>
        <Base {...this.props}>Rafał Kiszło</Base>
        {/* <Base2>Trener personalny</Base2> */}
      </>
    );
  }
}

export default Name;
