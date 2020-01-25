import React from 'react';

import pic1 from '../../images/pic01.jpg';
import pic2 from '../../images/pic02.jpg';
import pic3 from '../../images/pic03.jpg';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      href: '/#',
      image: pic1,
      heading: 'Sed ipsum dolor',
      description: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: pic2,
      heading: 'Feugiat consequat',
      description: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: pic3,
      heading: 'Ultricies aliquam',
      description: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
  ];

  const [features] = React.useState(FEATURES);

  return (
    <section id="one" className="wrapper style2 spotlights">
       {features.map(feature => <Feature key={feature.heading} {...feature} />)}
    </section>
  );
}

export default Features;
