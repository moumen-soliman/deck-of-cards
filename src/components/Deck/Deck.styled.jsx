import styled from 'styled-components';

export const CardsContainer = styled.div`
    width: 100%;
    grid-template-columns: repeat(12, 1fr);
    display: grid;
`;

export const CardHolder = styled.div`
    display: flex;
    width: 48px;
    height: 80px;
    background-color: ${({theme}) => theme.colors.powderWhite};
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.colors.black};
    margin: 16px;
    padding: 4px;
    color: ${({theme, currentSuit}) =>  currentSuit === "♣︎" || currentSuit === "♠︎" ? theme.colors.black : theme.colors.red};
`;

export const CardNumber = styled.div`
    display: flex;
    font-size: ${({theme, position}) => position == 'center' ? theme.fontSizes.large : '1'};
    flex-grow: ${({position}) => position == 'center' ? 'unset' : '1'};
    flex-flow: ${({position}) => position == 'center' ? 'unset' : 'column nowrap'};
    align-items: ${({position}) => position == 'center' ? 'center' : 'flex-start'};
    transform: ${({position}) => position == 'bottom' ? 'rotate(-180deg)' : 'rotate(0deg)'};
`;

export const CardVal = styled.div`
    font-size: ${({theme}) => theme.fontSizes.medium};
`;

export const CardSuit = styled.div`
    font-size: ${({theme}) => theme.fontSizes.small};
`;

export const Button = styled.button`
    background: white;
    color: ${({theme}) => theme.colors.black};
    border-radius: 5px;
    border: 0;
    box-shadow: 0;
    padding: 10px 20px;
    cursor: pointer;    
    font-size: ${({theme}) => theme.fontSizes.large};
`;
  