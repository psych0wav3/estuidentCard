import { Dimensions, StyleSheet } from 'react-native'; 

const {width} = Dimensions.get('screen');

export const style = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  menu: {
    flexDirection: 'row',
    height: '8%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  logo: { 
    width: 300, 
    height: 50, 
    resizeMode: 'contain'
  },
  content: {
    backgroundColor: 'lightgray',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '95%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainCard: {
    width: width - 100,
    height: '85%',
    borderRadius: 8,
    paddingHorizontal: '8%',
    paddingVertical: '5%',
  },
  logoWhite: {
    width: '25%', 
    height: '25%', 
    resizeMode: 'contain'
  },
  linear: {
    borderRadius: 8,
  },
  warningText: {
    transform: [{ rotate: '90deg'}],
    color: 'white',
    fontSize: 8,
    position: 'absolute',
    right: -75,
    top: 120,

  }
})