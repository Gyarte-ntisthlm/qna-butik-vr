import { forwardRef } from 'react';
import { Group, Avatar, Text, Select } from '@mantine/core';
import europe from '../images/europe.svg';
import na from '../images/north-america.svg';
import africa from '../images/africa.svg';
import oceania from '../images/oceania.svg';
import japan from '../images/asia.svg';
import sa from '../images/south-america.svg';

const data = [
  {
    image: europe,
    label: 'Europe',
    value: 'europe',
  },
  {
    image: na,
    label: 'North America',
    value: 'north-america',
  },
  {
    image: japan,
    label: 'Asia',
    value: 'asia',
  },
  {
    image: africa,
    label: 'Africa',
    value: 'africa',
  },
  {
    image: oceania,
    label: 'Oceania',
    value: 'oceania',
  },
  {
    image: sa,
    label: 'South America',
    value: 'south-america',
  },
];

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  label: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />
        <div>
          <Text size="sm">{label}</Text>
        </div>
      </Group>
    </div>
  )
);

function OtherInformation(props:any, form:any, setFormData:Function) {
  return (
    <>
      <div className='section'>
        <Text size="md">
          This is completely optional and play a very little role in the final report. This is used to better sort the data in an eventual publication.
        </Text>
      </div>
      <Select
        label="What is your age?"
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        transition="pop-top-left"
        transitionDuration={80}
        transitionTimingFunction="ease"
        data={['13-17', '18-24', '25-34', '35-44', '45-54', '55-64', '65+']}
        defaultValue={props.props.otherInformation.age}
        onChange={(e) => { props.setFormData({...props.props, otherInformation:{ ...props.props.otherInformation, age: e }})}}
      />
      <Select
        style={{ marginTop: '2rem' }}
        label="What is your region?"
        placeholder="Pick one"
        itemComponent={SelectItem}
        data={data}
        searchable
        maxDropdownHeight={400}
        nothingFound="Nothing here"
        transition="pop-top-left"
        transitionDuration={80}
        transitionTimingFunction="ease"
        defaultValue={props.props.otherInformation.region}
        onChange={(e) => { props.setFormData({...props.props, otherInformation:{ ...props.props.otherInformation, region: e }})}}
      />
    </>
  )
}

export default OtherInformation
