import { Feedback } from './Feedback';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Feedback />
    </div>
  );
};
