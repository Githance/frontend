import { StatusType } from '~/api/api-types';

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
