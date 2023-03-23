import React from 'react';
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  styled,
  Typography,
} from '@mui/material';
import RadioButton from '../../atoms/RadioButton';
import theme from '../../../theme/theme';
import { Svg } from '../../../constants/constants';
import Image from '../../atoms/Icon';
import Icon from '../../atoms/Icon';

interface PaymentProps {
  icon: Svg;
  value: string;
  label: string;
}

export interface PaymentOptionsProps {
  options: Array<PaymentProps>;
}

const DivContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const RadioBtn = styled(RadioButton)({
  color: theme.palette.grey[300],
  '&.Mui-checked': {
    color: theme.palette.secondary.main,
  },
  fontSize: theme.spacing(4.25),
});

const FormControlOption = styled(FormControl)({
  width: '24.16vw',
  minWidth: theme.spacing(105),
});

const DivItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const TypographyItem = styled(Typography)({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(2),
});

const PaymentOptions = (props: PaymentOptionsProps) => {
  return (
    <FormControlOption data-testid="paymentoptions">
      <RadioGroup defaultValue="googlepay">
        {props.options.map((option, key) => {
          return (
            <DivContainer key={key}>
              <DivItem>
                <Icon src={option.icon} alt={"text"} width="24px" height="24px" />
                <TypographyItem variant="caption">
                  {option.label}
                </TypographyItem>
              </DivItem>
              <FormControlLabel
                value={option.value}
                control={<RadioBtn name={''} value={''} label={''} checked={false} onChange={undefined} />}
                label={undefined}
                labelPlacement="start"
              />
            </DivContainer>
          );
        })}
      </RadioGroup>
    </FormControlOption>
  );
};

export default PaymentOptions;
