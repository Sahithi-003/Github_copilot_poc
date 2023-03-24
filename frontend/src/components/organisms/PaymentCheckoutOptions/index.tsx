//Can't create this component using copilot
import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../theme/theme';
import {
  CardPaymentHeader,
  options,
  PaymentOptionsHeader,
} from '../../../constants/constants';
import CreditCard from '../../molecules/Creditcard';
import IconWithButton from '../../molecules/IconButton';
import PaymentOptions from '../../molecules/PaymentOptions';

const PaymentHeaderContainer = styled(Grid)({});

const GridContainer = styled(Grid)({
  width: theme.spacing(120.5),
  height: '65.30vh',
  padding: theme.spacing(6),
  borderRadius: theme.spacing(2),
  boxShadow: '0px 0px 26px rgba(233, 232, 237, 0.5)',
  background: theme.palette.grey[800],
});

const CheckoutPaymentOptions = () => {
  return (
    <GridContainer container>
      <Grid item xs={12} md={12}>
        <PaymentHeaderContainer container rowGap={8} alignItems={'center'}>
          <Grid item>
            <Typography
              variant="subtitle1"
              color={theme.palette.text.secondary}
            >
              {CardPaymentHeader}
            </Typography>
          </Grid>
          <Grid item marginLeft={'auto'}>
            <IconWithButton icon={'Add.svg'} text={'add button'}/>
          </Grid>
          <Grid item xs={12} md={12}>
            <CreditCard
              cardHolder={'Yessie'}
              cardNumber={'1244 1234 1345 3255'}
              expiry={'02/25'}
            />
          </Grid>
        </PaymentHeaderContainer>
      </Grid>
      <Grid item xs={12} md={12}>
        <Grid container rowGap={2}>
          <Grid item xs={12} md={12}>
            <Typography variant="body1" color={theme.palette.text.primary}>
              {PaymentOptionsHeader}
            </Typography>
          </Grid>
          <Grid item>
            <PaymentOptions options={options} />
          </Grid>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default CheckoutPaymentOptions;
