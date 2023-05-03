export type StatusType = 'idea' | 'vacancy' | 'in_progress' | 'closed';

export const checkStatusCard = (status: StatusType) => {
  switch (status) {
    case 'idea':
      return 'Идея';
    case 'vacancy':
      return 'Идёт набор';
    case 'in_progress':
      return 'В процессе';
    case 'closed':
      return 'Завершён';
  }
};
