import { Container, Content, ContentTitle, DescriptionBox, Text } from "./elements"


export const DesciptionContainer = () => {
    return (
        <Container>
            <DescriptionBox size={100}>
                <ion-icon name="pencil-outline"></ion-icon>
                <Content>
                    <ContentTitle>Brief</ContentTitle>
                    <Text>Complete <p>brief writing or simple guidance </p> on what to incude, we've got you covered. </Text>
                </Content>
            </DescriptionBox>

            <DescriptionBox size={95}>
                <ion-icon name="people-outline"></ion-icon>
                <Content>
                    <ContentTitle>Search</ContentTitle>
                    <Text>In-depth agency search covering; <p>criteria matching</p>, door knocking and due-dilligence vetting.</Text>
                </Content>
            </DescriptionBox>

            <DescriptionBox size={90} border={'#339af0'}>
                <ion-icon name="people-outline"></ion-icon>
                <Content>
                    <ContentTitle color={'#339af0'}>Pitch</ContentTitle>
                    <Text>Comprehensive <p>pitch management</p>, including comms, diary management and pitch hosting.</Text>
                </Content>
            </DescriptionBox>
        </Container>
    )
}