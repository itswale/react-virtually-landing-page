import carSvg from '../../images/svg-1.svg';
import piggybankSvg from '../../images/piggybank.svg'; 
import secureDataSvg from '../../images/secure_data.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: carSvg,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false 
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: piggybankSvg,
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true 
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headline: 'Creating an account is extremely easy',
    description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: 'Start Now',
    imgStart: false,
    img: secureDataSvg,
    alt: 'Paper',
    dark: false,
    primary: false,
    darkText: true 
};