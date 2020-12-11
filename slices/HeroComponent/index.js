import React from 'react';
import { object, array, shape, string } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Image } from '../../components/'


const section = [
  'mx-auto',
  'bg-blue-500',
  'h-3/4vh',
  'relative'
].join(' ')

const image = [
  'max-h-full',
  'w-full',
  'absolute',
  'top-0',
  'left-0',
  'object-cover',
  'object-center'
].join(' ')

const body = [
  'absolute',
  'bottom-0',
  'left-0',
  'p-4'
].join(' ')

const h1 = [
  'text-white'
].join(' ')

const h2 = {
  color: '#8592e0',
};

const HeroComponent = ({ slice }) => (
  <section className={section}>
    <Image
      className={image}
      src={slice.primary.Image.url}
    />
    <div className={body}>
      <RichText
        render={slice.primary.title}/>
      { slice.primary.Subtitle && <RichText render={slice.primary.Subtitle}/> }
    </div>
  </section>
);

HeroComponent.propTypes = {
  slice: shape({
    primary: shape({
      Image: object.isRequired,
      title: array.isRequired,
      Subtitle: array,
      ImagePosition: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default HeroComponent;
