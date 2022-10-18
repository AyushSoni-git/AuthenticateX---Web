import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Accuracy',
    text: 'These systems have almost no false acceptance rates (FAR) compared to unimodal biometric systems. False acceptance rates are the performance metrics of biometric systems. It defines the occurrences when the system fails to match an existing pattern stored in the database or falsely matches it to a pattern found in the database. Since multimodal biometric systems use more than one physiological feature such as fingerprints, palm vein pattern or Iris patterns to verify an individual, the level of accuracy is undoubtedly high.',
  },
  {
    title: 'Enhanced recognition and security',
    text: 'Secondary advantage of employing a multimodal biometric system is its higher threshold recognition capabilities. Even if one of the system identifiers fails matching a particular behavioral/physiological trait, it can use the other traits to identify the individual.',
  },
  {
    title: 'Universality',
    text: 'In some cases, certain people cannot provide a standalone biometric credential due to physical disabilities. But a multimodal biometric system can take any other form of biometric credential for authentication.',
  },
  {
    title: 'Spoof attacks',
    text: 'Multimodal or unimodal, both are vulnerable to spoofing activities, where hackers attempt to spoof the biometric trait of an enrolled user to get access to sensitive data. By employing integrated iris sensors or fingerprint scanners with liveness detection, spoofing activities can be eradicated.',
  },
  {
    title: 'Rectified noisy data',
    text: 'Sometimes the data acquired during authentication could vary compared to the input data during enrolment, due to misplacement of a finger which affects the matching procedure. With Multimodal biometric systems, noisy data and intra-class variations can be rectified by using multiple biometric data for verification.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Yes, Unimodal Authentication is all great, but Multimodal Authentication is better.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
