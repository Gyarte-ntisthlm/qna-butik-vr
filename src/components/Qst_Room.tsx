import { Title, Textarea, Slider, Text } from "@mantine/core";

export const Room = (props: {title: string, rating: number, textRef:any, sliderRef:any}) => {
    return (
        <>
            <Title order={2}>The {props.title} Room</Title>
            <div className='section'>
                <Textarea
                placeholder="Your comment"
                label="Room Evaluation"
                description="Please describe your thoughts of the first room you entered."
                radius="md"
                size="md"
                required
                autosize
                minRows={4}
                maxRows={6}
                />
            </div>
            <div className='section'>
            <Title order={4}>
                How would you rate this room?
            </Title>
            <Text>In the game you rated this {props.rating}/5, is that still correct? If not, correct it now.</Text>
            <Slider
                radius="md"
                defaultValue={props.rating}
                min={1}
                max={5}
                step={1}
                ref={props.sliderRef}
                marks={[
                    { value: 1, label: '1' },
                    { value: 2, label: '2' },
                    { value: 3, label: '3' },
                    { value: 4, label: '4' },
                    { value: 5, label: '5' },
                ]}
            />
            </div>
        </>
    );  
};
