import { SegmentedControl, Textarea } from '@mantine/core'
import React from 'react'

function GeneralQuestions(props: any, form: any, setFormData: Function) {

  return (
    <>
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
          value={props.form.generalQuestions.anyImprovements}
          onChange={(e: any) => props.setFormData({ ...props.form, generalQuestions: { ...props.form.generalQuestions, anyImprovements: e.target.value } })}
        />
      </div>
      <div className='section'>
        {/*TODO:This might be reworked and or rephrased */}
        <Textarea
          placeholder="Your comment"
          label="How do you usually play VR?"
          description="Please describe way of playing VR; Are you observant of everything around you? Grab everything you see? Explore every corner of the room? Do you take 5 minutes looking at everything before you act? etc."
          radius="md"
          size="md"
          required
          autosize
          minRows={4}
          maxRows={6}
          value={props.form.generalQuestions.howDoYouPlay}
          onChange={(e: any) => props.setFormData({ ...props.form, generalQuestions: { ...props.form.generalQuestions, howDoYouPlay: e.target.value } })}
        />
      </div>
      <div className='radio-group'>
        <label htmlFor="experience" className='radio-label'>What is your experience level in VR?</label>
        <SegmentedControl id="experience" fullWidth color="blue" aria-required data={[
          { value: 'Veteran', label: 'Veteran (4+ years)' },
          { value: 'Intermediate', label: 'Intermediate (2-3 years)' },
          { value: 'Beginner', label: 'Beginner (0-1 years)' },
          { value: 'NeverPlayedBefore', label: 'Never Played before' },
        ]}
          value={props.form.generalQuestions.experience}
          onChange={(e: any) => {
            console.log(e);
            props.setFormData({ ...props.form, generalQuestions: { ...props.form.generalQuestions, experience: e } })
          }}
        />
      </div>
    </>
  )
}

export default GeneralQuestions