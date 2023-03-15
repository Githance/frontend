import React, { FC } from "react";

type Props = {type: 'default' | 'active'}

const NotificationIcon: FC<Props> = ({ type }) => {
  switch (type) {
    case "default":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="#999"
            d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm0 18.636a1.56 1.56 0 0 1-1.56-1.56h3.12a1.56 1.56 0 0 1-1.56 1.56Zm5.271-3.124c0 .577-.468.615-1.044.615H7.773c-.577 0-1.044-.038-1.044-.615v-.1c0-.414.244-.77.594-.938l.331-2.86a4.348 4.348 0 0 1 3.452-4.254V6.25a.894.894 0 0 1 1.788 0v1.11a4.347 4.347 0 0 1 3.452 4.254l.332 2.86c.35.17.593.524.593.939v.099Z"
          />
        </svg>
      );
    case "active":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="#5D5FEF"
            d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm0 18.636a1.56 1.56 0 0 1-1.56-1.56h3.12a1.56 1.56 0 0 1-1.56 1.56Zm5.271-3.124c0 .577-.468.615-1.044.615H7.773c-.577 0-1.044-.038-1.044-.615v-.1c0-.414.244-.77.594-.938l.331-2.86a4.348 4.348 0 0 1 3.452-4.254V6.25a.894.894 0 0 1 1.788 0v1.11a4.347 4.347 0 0 1 3.452 4.254l.332 2.86c.35.17.593.524.593.939v.099Z"
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

export default NotificationIcon