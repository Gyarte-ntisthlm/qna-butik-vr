import { Textarea, Image, Text } from '@mantine/core'
import React from 'react'

function Room(form: any, place: any, setFormData: Function) {

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
      <Text size="xs"> In game you rated this a: {form.form.mixedRoom.rating}/5</Text>
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
        onChange={(e: any) => form.setFormData({ ...form.form, interactiveRoom: { ...form.form.interactiveRoom, text: e.target.value } })}
        minRows={4}
        maxRows={6} />
      <Text size="xs"> In game you rated this a: {form.form.interactiveRoom.rating}/5</Text>

    </>);
  }

  function guiRoom(): JSX.Element {
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
        onChange={(e: any) => form.setFormData({ ...form.form, guiRoom: { ...form.form.guiRoom, text: e.target.value } })}
        minRows={4}
        maxRows={6}
      />
      <Text size="xs"> In game you rated this a: {form.form.guiRoom.rating}/5</Text>

    </>);
  }

  let referenceImageURL = "";

  function getRoom(): JSX.Element {
    if (form.form.order === "int-gui" && form.place === 0) { referenceImageURL = ""; return interactiveRoom(); }

    if (form.form.order === 'gui-int' && form.place === 0) { referenceImageURL = ""; return guiRoom(); }

    if (form.form.order === 'gui-int' && form.place === 2) { referenceImageURL = ""; return interactiveRoom(); }

    if (form.form.order === 'int-gui' && form.place === 2) { referenceImageURL = ""; return guiRoom(); }

    referenceImageURL = "";
    return mixedRoom();
  }

  return (
    <>
      <div className='room'>
        {getRoom()}
      </div>
      <Image
        width={'100%'}
        height={'19rem'}
        style={{ marginTop: '1rem' }}
        src={referenceImageURL}
        withPlaceholder
      />
    </>
  )
}



export default Room