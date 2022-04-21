import { RadioGroup, Radio, Textarea, SegmentedControl } from '@mantine/core';
import React, { useEffect } from 'react';

function GeneralQuestions2(props: any, form: any, setFormData: Function) {

    return (
        <>
            <div className='radio-group'>
                <label htmlFor="interactive-usa" className='radio-label'>Does the realistic / interactive shop system feel usable?</label>
                <SegmentedControl id="interactive-usa" fullWidth color="blue" aria-required data={[
                    { value: 'yes', label: 'Yes' },
                    { value: 'maybe', label: 'Maybe' },
                    { value: 'no', label: 'No' },
                    { value: 'idk', label: "I Don't know" },
                ]}
                    value={'yes'}
                    onChange={(e: any) => {
                        props.setFormData({ ...props.props, generalQuestions2: { ...props.props.generalQuestions2, interactiveUsability: e } })
                    }}
                />
            </div>

            <div className='radio-group'>
                <label htmlFor="mixed-usa" className='radio-label'>Does the mixed shop system feel usable?</label>
                <SegmentedControl id="mixed-usa" fullWidth color="blue" aria-required data={[
                    { value: 'yes', label: 'Yes' },
                    { value: 'maybe', label: 'Maybe' },
                    { value: 'no', label: 'No' },
                    { value: 'idk', label: "I Don't know" },
                ]}
                    value={'yes'}
                    onChange={(e: any) => {
                        props.setFormData({ ...props.props, generalQuestions2: { ...props.props.generalQuestions2, mixedUsability: e } })
                    }}
                />
            </div>
            
            <div className='radio-group'>
                <label htmlFor="real-usa" className='radio-label'>Does the GUI / billboard shop system feel usable?</label>
                <SegmentedControl id="real-usa" fullWidth color="blue" aria-required data={[
                    { value: 'yes', label: 'Yes' },
                    { value: 'maybe', label: 'Maybe' },
                    { value: 'no', label: 'No' },
                    { value: 'idk', label: "I Don't know" },
                ]}
                    value={'yes'}
                    onChange={(e: any) => {
                        props.setFormData({ ...props.props, generalQuestions2: { ...props.props.generalQuestions2, guiUsability: e } })
                    }}
                />
            </div>

            <div className='radio-group' style={{marginTop:"4rem"}}>
                <label htmlFor="system" className='radio-label'>What system do you prefer?</label>
                <SegmentedControl id="system" fullWidth color="blue" aria-required data={[
                    { value: 'interactive', label: 'Realistic / Intractable' },
                    { value: 'mixed', label: 'Mixed' },
                    { value: 'gui', label: 'GUI / Billboard' }
                ]}
                    value={'interactive'}
                    onChange={(e: any) => {
                        props.setFormData({ ...props.props, generalQuestions2: { ...props.props.generalQuestions2, system: e } })
                    }}
                />
            </div>
            
            <div className='radio-group'>
                <label htmlFor="system2" className='radio-label'>What shop system would you find most useful in other VR games?</label>
                <SegmentedControl id="system2" fullWidth color="blue" aria-required data={[
                    { value: 'interactive', label: 'Realistic / Intractable' },
                    { value: 'mixed', label: 'Mixed' },
                    { value: 'gui', label: 'GUI / Billboard' }
                ]}
                value={'interactive'}
                    onChange={(e: any) => {
                        props.setFormData({ ...props.props, generalQuestions2: { ...props.props.generalQuestions2, preference: e } })
                    }}
                />
            </div>

            <Textarea
                className='radio-group'
                placeholder="Your comment"
                label="(Optional) Regarding the previous question, Elaborate?"
                description="Please elaborate on your answer. This is optional but it helps us get a better understanding of the answers."

                value={props.props.generalQuestions2.preferenceElaboration}
                onChange={(e: any) => props.setFormData({ ...props.props, generalQuestions2: { ...props.props.generalQuestions2, preferenceElaboration: e.target.value } })}
            >

            </Textarea>
        </>
    )
}

export default GeneralQuestions2;