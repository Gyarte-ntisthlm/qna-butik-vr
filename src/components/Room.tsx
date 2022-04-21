import { Textarea, Image, Text } from '@mantine/core'
import React from 'react'

function Room(form: any, place: any, setFormData: Function) {

  function Mixed(): JSX.Element {
    return (<>
      <Textarea
        placeholder="Your comment"
        label={form.form.Mixed.title}
        description={form.form.Mixed.description}
        radius="md"
        size="md"
        required
        autosize
        value={form.form.Mixed.text}
        onChange={(e: any) => form.setFormData({ ...form.form, Mixed: { ...form.form.Mixed, text: e.target.value } })}
        minRows={4}
        maxRows={6} />
      <Text size="xs"> In game you rated this a: {form.form.Mixed.rating}/3</Text>
    </>);
  }

  function Interactive(): JSX.Element {
    return (<>
      <Textarea
        placeholder="Your comment"
        label={form.form.Interactive.title}
        description={form.form.Interactive.description}
        radius="md"
        size="md"
        required
        autosize
        value={form.form.Interactive.text}
        onChange={(e: any) => form.setFormData({ ...form.form, Interactive: { ...form.form.Interactive, text: e.target.value } })}
        minRows={4}
        maxRows={6} />
      <Text size="xs"> In game you rated this a: {form.form.Interactive.rating}/3</Text>

    </>);
  }

  function GUI(): JSX.Element {
    return (<>
      <Textarea
        placeholder="Your comment"
        label={form.form.GUI.title}
        description={form.form.GUI.description}
        radius="md"
        size="md"
        required
        autosize
        value={form.form.GUI.text}
        onChange={(e: any) => form.setFormData({ ...form.form, GUI: { ...form.form.GUI, text: e.target.value } })}
        minRows={4}
        maxRows={6}
      />
      <Text size="xs"> In game you rated this a: {form.form.GUI.rating}/3</Text>

    </>);
  }

  let referenceImageURL = "";

  function getRoom(): JSX.Element {
    if (form.form.order === "int-gui" && form.place === 0) { referenceImageURL = ""; return Interactive(); }

    if (form.form.order === 'gui-int' && form.place === 0) { referenceImageURL = ""; return GUI(); }

    if (form.form.order === 'gui-int' && form.place === 2) { referenceImageURL = ""; return Interactive(); }

    if (form.form.order === 'int-gui' && form.place === 2) { referenceImageURL = ""; return GUI(); }

    referenceImageURL = "";
    return Mixed();
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