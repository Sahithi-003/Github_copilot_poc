export const SAMPLE = 'Sample';
export const CARD_HOLDER = 'Card Holder';
export const EXPIRES = 'Expires';
export const BASE_URL = '/assets/images/';
export enum Svg {
  PayPal = 'PayPal.svg',
  GooglePay = 'GooglePay.svg',
  NetBanking = 'NetBanking.svg',
}
export const CardPaymentHeader = 'Card Details';
export const ADD_CARD = 'Add Card';
export const options = [
  {
    icon: Svg.PayPal,
    value: 'paypal',
    label: 'Pay Pal',
  },
  {
    icon: Svg.GooglePay,
    value: 'googlepay',
    label: 'Google Pay',
  },
  {
    icon: Svg.NetBanking,
    value: 'netbanking',
    label: 'Net Banking',
  },
];
export const PaymentOptionsHeader = 'Other Payment Options';

export const isAllLetters = (text: string) => {
    const regex = /^[A-Za-z]+$/;
  
    if (text.match(regex)) return true;
    else return false;
  };

  export const PatientFormChips = [
    'Myself',
    'Mother',
    'Father',
    'Son',
    'Daughter',
    'Others',
  ];
  
  export const PatientFormRadio = ['Male', 'Female', 'Others'];

  export const PatientFormTexts = [
    'Add Patient Details',
    'Booking for whom',
    'Gender',
    'Save details for future',
  ];
