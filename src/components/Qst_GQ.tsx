import { Title, Textarea, RadioGroup, Radio } from "@mantine/core";

export const GeneralQuestions1 = () => {
    return (
        <>
            <Title order={2}>General Questions : Text based</Title>
        <div className='section'>
                <Textarea
                placeholder="Your comment"
                label="Any improvements?"
                description="Please let us know if you have any suggestions for us to improve the experience."
                radius="md"
                size="md"
                required
                autosize
                minRows={4}
                maxRows={6}
                />
        </div>
        <div className='section'>
                <Textarea
                placeholder="Your comment"
                label="How do you usually play VR?"
                description="Please describe way of playing VR; Are you observant of everything around you? Grab everything you see? Explore every corner of the room? Do you take 5 minutes looking at everything before yoy act? etc."
                radius="md"
                size="md"
                required
                autosize
                minRows={4}
                maxRows={6}
                />
        </div>
    </>
    );
};

export const GeneralQuestions2 = () => {
    return (
        <> 
            <Title order={2}>General Questions : Multiple Choice</Title>

            <RadioGroup
                className='radio-group'
                label="What system do you prefer?"
                description="Please select the system you prefer to play with."
                required
                style={ { width: '100%', } }
                size="md"

                >
                <Radio value="react">GUI / Billboard</Radio>
                <Radio value="svelte">Mixed</Radio>
                <Radio value="ng">Realistic / Intractable</Radio>
            </RadioGroup>

            <RadioGroup
                className='radio-group'
                label="Does the realistic / interactive shop system feel usable?"
                description="Please select the system you prefer to play with."
                required
                style={ { width: '100%', } }
                size="md"

                >
                <Radio value="react">Yes</Radio>
                <Radio value="svelte">Maybe</Radio>
                <Radio value="ng">No</Radio>
                <Radio value="ng">I don't know</Radio>
            </RadioGroup>

            <RadioGroup
                className='radio-group'
                label="Does the mixed shop system feel usable?"
                description="Please select the system you prefer to play with."
                required
                style={ { width: '100%', } }
                size="md"

                >
                <Radio value="react">Yes</Radio>
                <Radio value="svelte">Maybe</Radio>
                <Radio value="ng">No</Radio>
                <Radio value="ng">I don't know</Radio>
            </RadioGroup>

            <RadioGroup
                className='radio-group'
                label="Does the GUI / billboard shop system feel usable?"
                description="Please select the system you prefer to play with."
                required
                style={ { width: '100%', } }
                size="md"

                >
                <Radio value="react">Yes</Radio>
                <Radio value="svelte">Maybe</Radio>
                <Radio value="ng">No</Radio>
                <Radio value="ng">I don't know</Radio>
            </RadioGroup>

            <RadioGroup
                className='radio-group'
                label="What shop system would you find most useful in other VR games?"
                description="Please select the system you prefer to play with."
                required
                style={ { width: '100%', } }
                size="md"

                >
                <Radio value="react">GUI / Billboard</Radio>
                <Radio value="svelte">Mixed</Radio>
                <Radio value="ng">Realistic / Intractable</Radio>
            </RadioGroup>

            <Textarea
                className='radio-group'
                placeholder="Your comment"
                label="(Optional) Regarding the previous question, Elaborate?"
                description="Please elaborate on your answer. This is optional but it helps us get a better understanding of the answers."
            >

            </Textarea>
    </>
    );
};