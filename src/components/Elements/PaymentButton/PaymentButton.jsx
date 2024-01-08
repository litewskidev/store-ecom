import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import './PaymentButton.scss';

const PaymentButton = () => {
  const navigate = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const paymentRequest = async() => {
      try {
        await axios.post(
          'http://localhost:8888/api/payments', {
            tokenId: stripeToken.id,
            amount: 2000
          }
        )
        navigate('/success');
      }
      catch(err) {
        console.log(err);
      }
    }
    stripeToken && paymentRequest();
  }, [stripeToken, navigate]);

  return(
    <div className='payment__wrapper'>
      <StripeCheckout
      name = 'CULTURE'
      billingAddress
      shippingAddress
      description = 'Your Total is $20'
      amount = {2000}
      token = {onToken}
      stripeKey= 'pk_test_51OW3nTJWn5wRQhhV9zEz7B9N3SKMO3uECMeUG0bOrQy6aEab6435eKkZTOpz1NPBA2FGJfLfobMJsIoaIbuGoVhx0076K47mNM'

      >
        <button className='payment__btn'>
          <p>PAY NOW</p>
        </button>
      </StripeCheckout>
    </div>
  );
};

export default PaymentButton;
