import React, { useMemo } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { useAppSelector, useAppDispatch, redux_setFavorKit } from '../../store'
import { useTheme } from '@rneui/themed';
import { StackNavParamList } from '../../Root';
import { headComponentData } from '../../data';
import Icon from '@react-native-vector-icons/fontawesome6';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

interface HeadComponentItem {
    index:number;
    name: string;
    img: string;
    style: string;
    path: keyof StackNavParamList;
    type: string;
    up: boolean;
}
export default function MoreScreen(): React.JSX.Element {
    const favorKit = useAppSelector(state => state.user.favorKit);
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const [isChose, setIsChose] = React.useState(false);
    
    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity 
                    style={{backgroundColor:theme.colors.background}} 
                    onPress={() => setIsChose((isChose)=>(!isChose))}
                    hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                >
                    <Icon name={isChose?'floppy-disk':'gears' as any} size={21} color={theme.colors.black} iconStyle='solid'/>
                </TouchableOpacity>
            ),
        });
    }, [navigation, isChose]);

    // dispatch(redux_setFavorKit([]))
    const { theme } = useTheme();
    // dispatch(redux_setFavorKit(newFavorKit))
    const head: HeadComponentItem[] = favorKit.map(index => {
        headComponentData[index].up = true;
        return headComponentData[index]
    });
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
        columnStyle:{
            flexDirection: 'row',
            marginVertical: 10,
            width: '95%',
            flexWrap: 'wrap',
            backgroundColor: theme.colors.white,
            borderRadius: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop: 4,
            paddingBottom: 8,
        },
        outSideStyle:{ 
            flex:1,
            backgroundColor: theme.colors.secondary,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 13,
        },
        topStyle:{
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: theme.colors.white,
            marginVertical: 10,
            width: '95%',
            borderRadius: 10,
            justifyContent: head.length > 5 ? ('flex-start') : ('space-around'),
            alignItems: 'center',
            paddingTop: 4,
            paddingBottom: 8,
        },
        inBoxTopStyle:{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
            width: (width - 15 * 5) / 5,
        },
        inBoxButtomStyle:{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
            paddingTop: 4,
            paddingBottom: 2,
            width: (width - 15 * 5) / 5,
        }
    })

    const TypeComponent = ({ items }: { items: HeadComponentItem[]; type: string }) => (
        <View style={styles.columnStyle}>
            {items.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        if (item.up){
                            return;
                        }
                        const newFavorKit = favorKit.slice();
                        newFavorKit.push(item.index);
                        dispatch(redux_setFavorKit(newFavorKit));
                    }}
                >
                    <View key={index} style={styles.inBoxButtomStyle}>
                        <Icon
                            name={item.img as any}
                            iconStyle='solid'
                            size={28}
                            color={theme.colors.grey1}
                            style={{paddingBottom:5}}
                        />
                        <Text 
                            style={{ 
                                position: 'absolute', 
                                top: -9, 
                                right: 8,
                                color: theme.colors.black,
                                fontSize: 17,
                            }}
                        >+</Text>
                        <Text style={{color:theme.colors.grey1}}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        (isChose)?(
            <ScrollView style={{backgroundColor: theme.colors.secondary}}>
            <View style={styles.outSideStyle}>
                <View style={styles.topStyle}>
                    {head.length > 0 ? (
                    head.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                const newFavorKit_ = favorKit.filter(val => val !== item.index)
                                headComponentData[item.index].up = false;
                                dispatch(redux_setFavorKit(newFavorKit_));
                            }}
                        >
                            <View key={index} style={styles.inBoxTopStyle}>
                                <Icon 
                                    name={item.img as any}
                                    iconStyle='solid'
                                    size={28}
                                    color={theme.colors.grey1} 
                                    style={{paddingBottom:5}}
                                />
                                <Text 
                                    style={{
                                        position: 'absolute', 
                                        top: -9, 
                                        right: 6,
                                        color: theme.colors.black,
                                        fontSize: 17,
                                    }}
                                >×</Text>
                                <Text style={{color:theme.colors.black}}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                ) : (
                    <View style={{marginVertical:6}}>
                     <Text style={{color:theme.colors.black}}>没有选择的项目</Text>
                    </View>
                )
                    }
                </View>
                {Object.keys(groupedItems).map(type => (
                    <TypeComponent key={type} items={groupedItems[type]} type={type} />
                ))}
        </View>
        </ScrollView>
    ):(
        <ScrollView style={{backgroundColor: theme.colors.secondary}}>
        <View style={styles.outSideStyle}>
            <View style={styles.topStyle}>
                {head.length > 0 ? (
                    head.map((item, index) => (
                        <View
                            key={index} 
                            style={styles.inBoxTopStyle}>
                            <Icon 
                                name={item.img as any}
                                iconStyle='solid'
                                size={28}
                                color={theme.colors.grey0}
                                style={{paddingBottom:5}}
                            />
                            <Text style={{color:theme.colors.black}}>{item.name}</Text>
                        </View>
                    ))
                ) : (
                    <View style={{marginVertical:6}}>
                        <Text style={{color:theme.colors.black}}>没有选择的项目</Text>
                    </View>
                )}
            </View>
            {Object.keys(groupedItems).map(type => (
                <View key={type} style={styles.columnStyle}>
                    {groupedItems[type].map((item, index) => (
                        <View key={index} style={styles.inBoxButtomStyle}>
                            <Icon
                                name={item.img as any}
                                iconStyle='solid'
                                size={28}
                                color={theme.colors.grey0}
                                style={{paddingBottom:5}}
                            />
                            <Text style={{color:theme.colors.grey1}}>{item.name}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </View>
        </ScrollView>
    ));
}