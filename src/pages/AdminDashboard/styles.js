import styled from 'styled-components';

export const Container = styled.main`
  width: 95%;
  max-width: 1100px;
  margin: 40px auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  gap: 20px;
  width: 100%;

  h2 { 
    color: var(--text-h); 
    margin: 0; 
    font-size: 1.3rem; 
  }

  @media (min-width: 768px) {
    h2 { font-size: 2rem; }
  }
`;

export const CreateBtn = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  display: block;
  white-space: nowrap;
  
  &:hover { 
    filter: brightness(1.1); 
  }
`;

export const TableWrapper = styled.div`
  background-color: var(--code-bg);
  border-radius: 12px;
  border: 1px solid var(--border);
  overflow: hidden;
  width: 100%;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 768px) {
    thead { 
      display: none; 
    }

    tr {
      display: block;
      border-bottom: 2px solid var(--border);
      padding: 15px 10px;
      &:last-child { border-bottom: none; }
    }

    td {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 5px;
      text-align: right;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);

      &:last-child { border-bottom: none; }

      &::before {
        content: attr(data-label);
        font-weight: bold;
        color: var(--accent);
        text-transform: uppercase;
        font-size: 0.75rem;
        text-align: left;
        margin-right: 10px;
      }
    }
  }

  @media (min-width: 769px) {
    th {
      padding: 20px;
      color: var(--text-h);
      text-align: left;
      background-color: rgba(255, 255, 255, 0.03);
      border-bottom: 2px solid var(--border);
    }

    td {
      padding: 18px 20px;
      color: var(--text);
      border-bottom: 1px solid var(--border);
    }
  }
`;

export const StatusBadge = styled.span`
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  background: rgba(0,0,0,0.2);
  color: ${props => props.published ? '#28a745' : '#ffc107'};
  display: inline-block;
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
`;

const BaseActionBtn = styled.button`
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 0.85rem;
  display: inline-block;
  white-space: nowrap;
  
  &:hover { 
    filter: brightness(1.2); 
  }
`;

export const EditBtn = styled(BaseActionBtn)` 
  background-color: var(--accent); 
`;

export const DeleteBtn = styled(BaseActionBtn)` 
  background-color: #dc3545; 
`;