import { Stepper, Button, Group, Title, Skeleton, Textarea, Slider, Text, RadioGroup, Radio } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
// import { CheckIcon } from '@modulz/radix-icons';

import { useRef, useState } from 'react';
import { useParams } from "react-router-dom";

// Components.
import { GeneralQuestions1, GeneralQuestions2 } from './components/Qst_GQ';
import { Room } from './components/Qst_Room';
import { OtherInformation } from './components/Qst_OtrInf';

import WellDone from './well_done.svg';

// Main stuff.
export default function Questionnaire(props:any) {
    const params = useParams();

    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 6 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const [loading, setLoading] = useState(false);

    const stepA = useRef();
    const stepB = useRef();
    const stepC = useRef();
    const stepD = useRef();


    // Firebase stuff
    const id = params.id ? params.id : "";
    const secret = params.secret ? params.secret : "";

    const notifications = useNotifications();
 

    
    // Depending on the order that the player got through during the event, stepC and A can switch places.
    // This is because the player can go through stepC first, then stepA or vise versa.
    const stepCRef = active === 3 ? stepA : stepC;
    const stepARef = active === 3 ? stepC : stepA;

    return (
        <div className="card">
            <Skeleton visible={loading}>
            
            <div className="section">
            <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                <Stepper.Step label="First Room">
                    <Room title="interactive system" rating={5} textRef={stepA} sliderRef={stepA} />
                </Stepper.Step>
                <Stepper.Step label="Second Room">
                    <Room title="mixed system" rating={4} textRef={stepB} sliderRef={stepB} />
                </Stepper.Step>
                <Stepper.Step label=" Room">
                    <Room title="3" rating={2} textRef={stepC} sliderRef={stepC} />
                </Stepper.Step>
                <Stepper.Step label="General questions">
                    <GeneralQuestions1 />
                </Stepper.Step>
                <Stepper.Step label="General questions">
                    <GeneralQuestions2 />
                </Stepper.Step>
                <Stepper.Step label="Other Information">
                    <OtherInformation />
                </Stepper.Step>
                <Stepper.Completed>
                    <Done />
                </Stepper.Completed>
            </Stepper>
            </div>
            <div className="section">
            <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group>
            </div>
            </Skeleton>

        </div>
    );
}

const Done = () => {
    return (
        <>
            <img src={WellDone} alt="Well Done!" style={{width: "50%", height: "50%", marginLeft:"25%", marginRight:"25%", padding: "1rem"}}/>
            <Title order={1} align="center">
                You are Done, Thank You!
            </Title>
            <Text align="center">
                You have completed the questionnaire. <br />
                If you have any questions go to the <a href="https://butik-vr.web.app/faq">FAQ page</a>.     
            </Text>
        </>
    );
};