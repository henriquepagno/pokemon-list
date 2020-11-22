import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast-container {
  }
  .Toastify__toast {
  }
  .Toastify__toast--error {
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
    height: 100px;
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;
