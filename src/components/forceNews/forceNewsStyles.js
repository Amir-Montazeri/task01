import { makeStyles } from '@material-ui/core/styles';

const useForceNewsStyles = makeStyles({
  card: {
    position: 'relative',
    margin: '10px 7px',
    height: 160,
    width: 700,
    background: 'rgba(1, 1, 1, .1)',
    boxShadow: '0 0 2px rgba(231, 231, 231, 0.7)',
    borderRadius: 3,
    cursor: 'pointer',
    overflow: 'hidden'
  },
  contentCard: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '6px 30% 4px 10px',
    height: '100%',
    width: '100%',
    background: 'linear-gradient(to right, rgb(79, 31, 131) 50%, rgba(79, 31, 131, .1))',
    zIndex: 4,
  },
  bannerCard: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    zIndex: 3
  },
  tagButton: {
    fontSize: 11,
    fontWeight: '200'
  }
})

export default useForceNewsStyles;