import { RadioGroup, Radio, Textarea } from '@mantine/core';
import React from 'react';

function GeneralQuestions2() {
    return (
        <> 
        <RadioGroup
            className='radio-group'
            label="What system do you prefer?"
            description="Please select the system you prefer to play with."
            required
            style={ { width: '100%', } }
            size="md"

            >
            <Radio value="gui">GUI / Billboard</Radio>
            <Radio value="mixed">Mixed</Radio>
            <Radio value="interactive">Realistic / Intractable</Radio>
        </RadioGroup>

        <RadioGroup
            className='radio-group'
            label="Does the realistic / interactive shop system feel usable?"
            description="Please select the system you prefer to play with."
            required
            style={ { width: '100%', } }
            size="md"

            >
            <Radio value="yes">Yes</Radio>
            <Radio value="maybe">Maybe</Radio>
            <Radio value="no">No</Radio>
            <Radio value="idk">I don't know</Radio>
        </RadioGroup>

        <RadioGroup
            className='radio-group'
            label="Does the mixed shop system feel usable?"
            description="Please select the system you prefer to play with."
            required
            style={ { width: '100%', } }
            size="md"

            >
            <Radio value="yes">Yes</Radio>
            <Radio value="maybe">Maybe</Radio>
            <Radio value="no">No</Radio>
            <Radio value="idk">I don't know</Radio>
        </RadioGroup>

        <RadioGroup
            className='radio-group'
            label="Does the GUI / billboard shop system feel usable?"
            description="Please select the system you prefer to play with."
            required
            style={ { width: '100%', } }
            size="md"

            >
            <Radio value="yes">Yes</Radio>
            <Radio value="maybe">Maybe</Radio>
            <Radio value="no">No</Radio>
            <Radio value="idk">I don't know</Radio>
        </RadioGroup>

        <RadioGroup
            className='radio-group'
            label="What shop system would you find most useful in other VR games?"
            description="Please select the system you prefer to play with."
            required
            style={ { width: '100%', } }
            size="md"

            >
            <Radio value="gui">GUI / Billboard</Radio>
            <Radio value="mixed">Mixed</Radio>
            <Radio value="interactive">Realistic / Intractable</Radio>
        </RadioGroup>

        <Textarea
            className='radio-group'
            placeholder="Your comment"
            label="(Optional) Regarding the previous question, Elaborate?"
            description="Please elaborate on your answer. This is optional but it helps us get a better understanding of the answers."
        >

        </Textarea>
</>
    )
  }

export default GeneralQuestions2;