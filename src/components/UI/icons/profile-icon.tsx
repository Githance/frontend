import { FC } from 'react';

type Props = { active?: boolean };

const ProfileIcon: FC<Props> = ({ active }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill={active ? '#5D5FEF' : '#999999'}
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm.036 17.661H6.837c0-3.749 3.292-3.748 4.023-4.728l.084-.447c-1.027-.52-1.751-1.774-1.751-3.24 0-1.933 1.257-3.5 2.807-3.5s2.807 1.567 2.807 3.5c0 1.454-.712 2.7-1.725 3.228l.096.508c.801.933 3.984.994 3.984 4.68h-5.126Z"
      />
    </svg>
  );
};
export default ProfileIcon;
