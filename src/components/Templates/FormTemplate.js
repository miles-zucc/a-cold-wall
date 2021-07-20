import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  ${props => `
      display: block;
      margin-bottom: 5px;
      ${props.theme.typography.title};
  `}
`;

export const Error = styled.span`
  ${props => `
    color: ${props.theme.colors.error};
    ${props.theme.typography.navigation}
  `}
`;

export const Input = styled.input`
  ${props => `
    background-image: none;
    box-shadow: none;
    box-shadow: none;
    outline: 0;
    background: none;
    border-style: solid;
    border-width: 1px;
    padding: 2px 0 2px 10px;
    appearance: none;
    border-radius: 0;
    -webkit-appearance: none;
    
    border-color: ${
      props.error ? props.theme.colors.error : props.theme.colors.body
    };
    color: ${props.error ? props.theme.colors.error : props.theme.colors.body};

    display: block;
    margin-bottom: 5px;
    text-align: left;
    ${props.theme.typography.navigation}

  `}
`;

export const Submit = styled(Input)`
  ${props => `
    padding: 2.5px 5px;
    background: ${props.theme.colors.body};
    color: ${props.theme.colors.bodyInverted};
    cursor: pointer;
    border-radius: 0;
    -webkit-appearance: none;

    &:hover {
      background: ${props.theme.colors.buttonHover};
    }

  `}
`;
