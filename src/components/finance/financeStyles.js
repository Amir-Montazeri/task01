import { makeStyles } from '@material-ui/core/styles';

const useFinanceStyles = makeStyles({
  card: {
    margin: 15,
    boxShadow: '0 0 10px rgba(1, 1, 1, .3)',
    border: '1px solid rgba(209, 209, 209, .2)',
    borderRadius: 6,
    background: 'rgba(255, 255, 255, .1)',
    overflow: 'hidden'
  },
  banner: {
    position: 'relative',
    padding: 10,
    maxWidth: '70%',
    height: '100%',
    color: '#fff',
    background: 'linear-gradient(to right, rgba(67, 24, 113, 1) 60%, rgba(67, 24, 113, .1))',
    boxShadow: '10px -2px 15px -4px rgba(4, 0, 128, .13)',
    zIndex: 5
  },
  sizes: {
    maxWidth: '95vw',
    height: 320,

    ["@media (max-width: 380px)"]: {
      height: 200
    }
  },
  bottomFields: {
    padding: 5,
    width: '49%',
    color: '#fff'
  }
});

export default useFinanceStyles;