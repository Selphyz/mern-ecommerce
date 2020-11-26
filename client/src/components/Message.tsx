import React from 'react';
import { Alert } from 'react-bootstrap';

interface MessageProps {
  variant: string;
  error?: string;
}
const Message: React.FC<MessageProps> = ({ variant, error }) => {
  return <Alert variant={variant}>{error}</Alert>;
};
Message.defaultProps = {
  variant: 'info',
};
export default Message;
