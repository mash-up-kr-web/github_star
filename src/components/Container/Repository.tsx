import React from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import { IRepo } from '../../store/interface/repo';

export const Repository = (props: any) => {
  const { sortedData } = props.repository;
  if (isEmpty(sortedData)) return null;

  return (
    <StyledTable>
      <tbody>
        {
          sortedData.map((value: IRepo, key: number) => {
            return (
              <tr key={key}>
                <td>{value.name}</td>
                <td>{value.stargazers_count}</td>
              </tr>
            )
          })
        }
      </tbody>
    </StyledTable>
  )
};

const StyledTable = styled.table`
    width: 100%;
    border: 1px solid #444444;
    border-collapse: collapse;

    tr, td {
      border: 1px solid #444444;
    }
`;