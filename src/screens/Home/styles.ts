import styled from "styled-components/native";


export const Container = styled.ImageBackground`
    flex: 1;
    align-items: left;
    padding: 200px 50px 60px 50px;;
    justify-content: space-between;
`

export const TemperatureContainer = styled.Text`
    color: white;
    font-size: 100px;
`

export const HumidityText = styled.Text`
    color: lightgray;
    font-size: 35px;
`

export const HumidityContainer = styled.View`
    border: 1px solid lightgray;
    border-radius: 8px;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`
