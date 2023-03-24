import { Box, Grid, Stack, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import Chip from '../../atoms/Tag/index';
import {
  isAllLetters,
  PatientFormChips,
  PatientFormRadio,
  PatientFormTexts,
} from '../../../constants/constants';
import InputField from '../../atoms/InputField/index';
import RadioButton from '../../atoms/RadioButton/index';
import CheckboxBtn from '../../atoms/Checkbox/index';
import theme from '../../../theme/theme';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Icons from '../../atoms/Icon/index';
import { Dayjs } from 'dayjs';
import { createGlobalState } from 'react-use';

const selectedChip = {
  width: '69px',
  height: '32px',
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.secondary.main,
  color: theme.palette.grey[800],
};

const unselectedChip = {
  width: '69px',
  height: '32px',
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.secondary.light,
  color: theme.palette.secondary.contrastText,
};

const CheckboxStyle = {
  marginLeft : "-0.8rem !important"
}

const highText = {
  color: theme.palette.text.secondary,
};

const mediumText = {
  color: theme.palette.text.disabled,
};

const PatientFormBox = styled(Box)({
  maxWidth: '583px',
  minHeight: '560px',
  width: '100%',
  backgroundColor: theme.palette.grey[800],
  boxShadow: '0px 0px 12px rgba(233, 232, 237, 0.53)',
});

const PatientFormStack = styled(Stack)({
  maxWidth: '535px',
  paddingLeft: '24px',
  paddingRight: '24px',
  paddingTop: '24px',
});

const ChipsGrid = styled(Grid)({
  justifyContent: 'space-between',
  width: '93%',
  rowGap: '1rem',
});

const RadioGrid = styled(Grid)({
  marginLeft:"-0.8rem !important",
  gap: '23px',
});

const CalenderIcon = () => {
  return (
    <Box>
      <Icons src="whitecalendar.svg" width={"25"} height={"25"} alt={'date'}></Icons>
    </Box>
  );
};

export const AddPatientFormDate = createGlobalState<Dayjs | null>(null);
export const AddPatientFormRelation = createGlobalState<string>(PatientFormChips[0]);
export const AddPatientFormGender = createGlobalState<number>(-1);
export const AddPatientFormName = createGlobalState<string>('');


function AddPatientForm() {
  const [date, setDate] = AddPatientFormDate();
  const [chip, setChip] = AddPatientFormRelation();
  const [radio, setRadio] = AddPatientFormGender();
  const [name, setName] = AddPatientFormName();

  return (
    <PatientFormBox data-testid="patientform-container">
      <PatientFormStack spacing={4}>
        <Typography variant="subtitle1" style={highText}>
          {PatientFormTexts[0]}
        </Typography>
        <Stack spacing={2}>
          <Typography variant="overline" style={mediumText}>
            {PatientFormTexts[1]}
          </Typography>
          <ChipsGrid container>
            {PatientFormChips.map((value, key) => (
              <Grid item key={key}>
                <Chip
                  label={value} color={'default'}                  // testid={'pt-form-chips'}
                  style={value === chip ? selectedChip : unselectedChip}
                  onclick={() => {
                    setChip(value);
                  }}
                
                />
              </Grid>
            ))}
          </ChipsGrid>
        </Stack>
        <InputField
          label="Name"
          onChange={(e) => { isAllLetters(e.target.value) && setName(e.target.value); } }
          value={name} name={''}
          
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of Birth"
            value={date}
            components={{
              OpenPickerIcon: CalenderIcon,
            }}
            onChange={(newValue) => {
              setDate(newValue);
            }}
          />
        </LocalizationProvider>
        <Stack spacing={1}>
          <Typography variant="h6" style={mediumText}>
            {PatientFormTexts[2]}
          </Typography>
          <RadioGrid container>
            {PatientFormRadio.map((value, key) => (
              <Grid item key={key}>
                <RadioButton
                  checked={key === radio} name={''} value={''} label={''} onChange={undefined}
                />
                <Typography variant="caption">{value}</Typography>
              </Grid>
            ))}
          </RadioGrid>
        </Stack>
        <Box sx={CheckboxStyle}>
          <CheckboxBtn
          data-testid="checkbox"
            onChange={() => console.log('Check')}
            color={'secondary'} />
          <Typography variant="caption" style={mediumText}>
            {PatientFormTexts[3]}
          </Typography>
        </Box>
      </PatientFormStack>
    </PatientFormBox>
  );
}

export default AddPatientForm;