import { Container, HumidityContainer, HumidityText, TemperatureContainer } from "./styles";
import bgImg from "./../../assets/bgImg.jpg"
import { StatusBar, Text } from "react-native";
import { useEffect, useState } from "react";

import { db, ref, onValue } from "./../../../firebase"

export function Home() {
    const [temp, setTemp] = useState(0);
    const [humid, setHumid] = useState(0);

    useEffect(() => {
        const data = ref(db);

        onValue(data, (snapshot) => {
            setTemp(snapshot.val().temp)
            setHumid(snapshot.val().humid)
        });
    }, [db])

    const formatedTemp = Math.round(temp)
    const formatedHumid = Math.round(humid)

    return (
        <Container
            source={bgImg}
        >
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <TemperatureContainer
                style={{ fontFamily: "Montserrat_400Regular" }}
            >
                {formatedTemp}ºC
            </TemperatureContainer>
            <HumidityContainer>
                <Text style={{ color: "white", fontSize: 20, fontFamily: "Montserrat_400Regular" }} >
                    Humidade
                </Text>
                <HumidityText style={{ fontFamily: "Montserrat_400Regular" }}>
                    {formatedHumid}%
                </HumidityText>
            </HumidityContainer>



        </Container>
    )
}