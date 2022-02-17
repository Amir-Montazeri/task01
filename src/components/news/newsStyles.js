import { makeStyles } from '@material-ui/core/styles';

const useNewsStyles = makeStyles({
  banner: {
    margin: '5px auto',
    width: '95vw',
    display: 'flex',
    justifyContent: 'space-between',
    background: 'rgba(255, 255, 255, .15)',
    boxShadow: '0 0 3px #fff',
    borderRadius: 3,
    overflow: 'hidden'
  },
  content: {
    padding: 5,
    height: 230,
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 5
  },
  cover: {
    height: 230,
    width: '25%',
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: 4
  },
  tagButton: {
    fontSize: 11,
    fontWeight: '200',
    marginRight: 3
  }
});

export default useNewsStyles;