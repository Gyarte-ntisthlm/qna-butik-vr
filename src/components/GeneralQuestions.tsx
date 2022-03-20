import { Textarea } from '@mantine/core'
import React from 'react'

function GeneralQuestions() {
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
  )
}

export default GeneralQuestions