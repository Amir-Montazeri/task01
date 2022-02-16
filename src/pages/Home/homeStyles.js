import { makeStyles } from '@material-ui/core/styles';

const useHomeStyles = makeStyles({
  title: {
    position: 'relative',
    margin: '15px 0',
    fontWeight: '400',
    textAlign: 'center',

    '&::before': {
      content: "''",
      position: 'absolute',
      bottom: -12,
      right: '50%',
      transform: 'translateX(50%)',
      width: '85%',
      height: 8,
      background: 'rgba(125, 204, 253, .4)',
      borderRadius: 13
    }
  }
});

export default useHomeStyles;