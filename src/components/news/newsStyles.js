import { makeStyles } from '@material-ui/core/styles';

const useNewsStyles = makeStyles({
  banner: {
    height: '230px',
    width: '100vw',
    display: 'flex',
    background: '#000'
  },
  content: {
    height: '100%',
    width: '75%',
    background: 'red'
  },
  cover: {
    height: '100%',
    width: '25%',
    background: 'blue'
  }
});

export default useNewsStyles;