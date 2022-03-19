import { Textarea } from '@mantine/core'
import React, { useEffect } from 'react'

function Room( form: any, place: any, setFormData: Function ) {

    useEffect(() => {
        console.log(setFormData, form.setFormData)
    }, [])
    function mixedRoom(): JSX.Element {
    return (<>
      <Textarea
        placeholder="Your comment"
        label={form.form.mixedRoom.title}
        description="Please describe your thoughts of the first room you entered."
        radius="md"
        size="md"
        required
        autosize
        value={form.form.mixedRoom.text}
        onChange={(e: any) => form.setFormData({ ...form.form, mixedRoom: { ...form.form.mixedRoom, text: e.target.value } })}
        minRows={4}
        maxRows={6} />
    </>);
  }

    function interactiveRoom(): JSX.Element {
    return (<>
      <Textarea
        placeholder="Your comment"
        label={form.form.interactiveRoom.title}
        description="Please describe your thoughts of the first room you entered."
        radius="md"
        size="md"
        required
        autosize
        value={form.form.interactiveRoom.text}
        onChange={(e: any) => form.setFormData({ ...form.form, interactiveRoom: { ...form.form.interactiveRoom ,text: e.target.value } })}
        minRows={4}
        maxRows={6} />
    </>);
  }

    function guiRoom():JSX.Element {
      return (<>
        <Textarea
            placeholder="Your comment"
            label={form.form.guiRoom.title}
            description="Please describe your thoughts of the first room you entered."
            radius="md"
            size="md"
            required
            autosize
            value={form.form.guiRoom.text}
            onChange={(e: any) => form.setFormData({ ...form.form, guiRoom:{ ...form.form.guiRoom, text: e.target.value }})}
            minRows={4}
            maxRows={6}
        />
      </>); 
    }

    function getRoom(): JSX.Element {
        if (form.form.order === "int-gui" && form.place === 0)
          return interactiveRoom();
        else if (form.form.order === 'gui-int' && form.place === 0)
          return guiRoom();
        else if (form.form.order === 'gui-int' && form.place === 2)
          return interactiveRoom();
        else if (form.form.order === 'int-gui' && form.place === 2)
            return guiRoom();
        else return mixedRoom();
    }

    return (
      <>
        <div className='room'>
          { getRoom() }
        </div>
      </>
    )
}



export default Room