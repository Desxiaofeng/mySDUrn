import React, { useMemo } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
} from 'react-native';
import { useAppSelector, useAppDispatch,  redux_setFavorKit} from '../../store'
import { useTheme } from '@rneui/themed';
import { StackNavParamList } from '../../Root';
import { headComponentData } from '../../data'; 
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');


interface HeadComponentItem {
  name: string;
  img: string;
  style: string;
  path: keyof StackNavParamList;
  type: string;
  up: boolean; 
}


export default function MoreScreen(): React.JSX.Element {
    const favorKit = useAppSelector(state=>state.user.favorKit)
    const { theme } = useTheme();
    // const newFavorKit = 
    // useAppDispatch(redux_setFavorKit(newFavorKit))
    const head = favorKit.map(index => headComponentData[index]);
    
    
    const groupedItems = useMemo(() => {
        return headComponentData.reduce((acc, item) => {
            if (!acc[item.type]) {
                acc[item.type] = [];
            }
            acc[item.type].push(item);
            return acc;
        }, {} as { [type: string]: HeadComponentItem[] });
    }, [headComponentData]);
    const styles = StyleSheet.create({
        columnstyle:{
        flexDirection: 'row',
        marginVertical: 10, 
        width:'95%',
        flexWrap: 'wrap', 
        backgroundColor: theme.colors.white,
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'}})
    
    const TypeComponent = ({ items, type }: { items: HeadComponentItem[]; type: string }) => (
        <View style={styles.columnstyle}>
          {items.map((item, index) => (
            <View 
            key={index} style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5 ,
            width: (width - 15 * 5) / 5,
                }}>
              <Icon 
                name={item.img} 
                size={30} 
                color={typeof item.style === 'string' ? item.style : '#900'} 
              />
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>
      );
    
    return (
        <View style={{backgroundColor: theme.colors.secondary,justifyContent: 'center', alignItems: 'center' }}>
            <View style={{flexDirection: 'row',
                    flexWrap: 'wrap', 
                    backgroundColor: theme.colors.white,
                    marginVertical: 10, 
                    width:'95%',
                    borderRadius: 10,
                    justifyContent: head.length > 5?('flex-start'):('space-around'),
                    alignItems: 'center'
                    }}>{head.length > 0 ? (
                        head.map((item, index) => (
                    <View 
                        key={index} style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 5 ,
                        width: (width - 1 * 5) / 5,
                            }}>
                                <Icon name={item.img} 
                                size={30} 
                                color={typeof item.style === 'string' ? item.style : '#900'} />
                                <Text>{item.name}</Text> 
                            </View>
                            ))
                        ) : (
                            <Text>没有选择的项目</Text>
                        )
                        }
             </View>
             {Object.keys(groupedItems).map(type => (
                <TypeComponent key={type} items={groupedItems[type]} type={type} />
            ))}
         </View>
    );
}