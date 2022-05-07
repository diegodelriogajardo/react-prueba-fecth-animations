import React from 'react';
import {ActivityIndicator} from 'react-native';
import styles from '../Styles/Contenedor';
const Loading = () => {
  return (
    <ActivityIndicator size="large" color="#00ff00" style={styles.loading} />
  );
};

export default Loading;
