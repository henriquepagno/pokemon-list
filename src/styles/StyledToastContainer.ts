import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import Colors from './Constants';

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
    min-height: 60px;
    border-radius: 8px;
    background: ${Colors.blue};
    box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.3);
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
    background-color: white;
  }
`;
