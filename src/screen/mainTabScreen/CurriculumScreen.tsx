import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground
} from 'react-native';
import { LeftColumnContent, RightColumnContent } from '../../component/mainTab/curriculum';

const styles = StyleSheet.create({
    background: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    column: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    leftColumn: {
      backgroundColor: 'rgba(184, 107, 107, 0.7)', 
      flex: 0.2,
    },
    rightColumn: {
      backgroundColor: 'rgba(164, 139, 139, 0.27)', 
      flex: 1.4,
    },
  });

export default function ScheduleScreen(): React.JSX.Element {
    return (
        <>
           <ImageBackground 
              source={require('../../assets/qwq.png')}
               style={styles.background}
               >
               <View style={[styles.column, styles.leftColumn]}>
                    <LeftColumnContent/>
                </View>

                <View style={[styles.column, styles.rightColumn]}>
                    <RightColumnContent/>
                </View>
            </ImageBackground>
       </>
    );
}