import styled from 'styled-components';

import Colors from '../../styles/Constants';

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px 0px;

  tbody {
    td {
      border: transparent;
      vertical-align: top;
    }
    td:last-child {
      padding-left: 15px;
    }
  }

  thead {
    th {
      color: ${Colors.darkGray};
      text-align: start;
    }

    th:last-child {
      width: 25%;
      padding-left: 15px;
    }

    th.customWidth {
      width: 15%;
    }
  }
`;
