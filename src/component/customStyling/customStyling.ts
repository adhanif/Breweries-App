import { Button, styled } from '@mui/material';

export const CustomizedButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '3px 10px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#a16213',
  borderColor: '#a16213',

  '&:hover': {
    backgroundColor: '#CA8A04',
    borderColor: '#CA8A04',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export const CustomizedButtonMedium = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '7px 15px',
  border: '1px solid',

  lineHeight: 1.5,
  backgroundColor: '#a16213',
  borderColor: '#a16213',

  '&:hover': {
    backgroundColor: '#CA8A04',
    borderColor: '#CA8A04',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
