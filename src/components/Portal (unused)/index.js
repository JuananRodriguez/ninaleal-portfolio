import { createPortal } from 'react-dom';
import usePortal from './usePortal';

const Portal = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(
    children,
    target,
  );
};

export default Portal;
export {
    usePortal
}