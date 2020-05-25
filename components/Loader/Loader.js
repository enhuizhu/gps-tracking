import React from 'react';
import { connect } from 'react-redux';
import { Modal, View, ActivityIndicator, StyleSheet } from 'react-native';

export const Loader = props => {
  const {
    loading
  } = props;

  console.log('loading', loading);

  return (<Modal 
    transparent={true}
    animationType={'none'}
    visible={loading}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={loading} />
        </View>
      </View>
    </Modal>)
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

{/* <Modal visible={loading}></Modal> */}

const mapStateToProps = (state) => ({
  loading: state.loader
});

export default connect(mapStateToProps)(Loader);
