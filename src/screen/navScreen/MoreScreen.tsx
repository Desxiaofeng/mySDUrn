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
                // <Button onPress={() => setIsChose((isChose)=>(!isChose))} title='+'/>
                <TouchableOpacity 
                    style={{backgroundColor:theme.colors.background}} 
                    onPress={() => setIsChose((isChose)=>(!isChose))}
                >
                    <Icon name="plus" size={15} color={theme.colors.black} iconStyle='solid'/>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

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
        columnstyle: {
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
        }
    })

    const TypeComponent = ({ items, type }: { items: HeadComponentItem[]; type: string }) => (
        <View style={styles.columnstyle}>
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
                    <View
                        key={index} style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 5,
                            paddingBottom: 2,
                            width: (width - 15 * 5) / 5,
                        }}>
                        <Icon
                            name={item.img as any}
                            iconStyle='solid'
                            size={30}
                            color={typeof item.style === 'string' ? item.style : '#900'}
                            style={{paddingBottom:5}}
                        />
                        <Text style={{color:theme.colors.grey1}}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>

    );

    return (
        (isChose)?(
            <ScrollView style={{backgroundColor: theme.colors.secondary}}>
            <View 
                style={{ 
                    flex:1, backgroundColor: theme.colors.secondary, 
                    justifyContent: 'flex-start', 
                    alignItems: 'center',
                    marginTop: 13,
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    backgroundColor: theme.colors.white,
                    marginVertical: 10,
                    width: '95%',
                    borderRadius: 10,
                    paddingTop: 4,
                    paddingBottom: 8,
                    justifyContent: head.length > 5 ? ('flex-start') : ('space-around'),
                    alignItems: 'center',
                }}>
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
                            <View
                                key={index} 
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: 5,
                                    width: (width - 15 * 5) / 5,
                                }}>
                                <Icon 
                                    name={item.img as any}
                                    iconStyle='solid'
                                    size={30}
                                    color={typeof item.style === 'string' ? item.style : '#900'} 
                                    style={{paddingBottom:5}}
                                />
                                <Text style={{color:theme.colors.black}}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text style={{color:theme.colors.black}}>没有选择的项目</Text>
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
        <View 
            style={{ 
                flex:1, 
                backgroundColor: theme.colors.secondary, 
                justifyContent: 'flex-start', 
                alignItems: 'center',
                marginTop: 13,
            }}
        >
            <View style={{
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
            }}>
                {head.length > 0 ? (
                    head.map((item, index) => (
                        <View
                            key={index} style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 5,
                                width: (width - 15 * 5) / 5,
                            }}>
                            <Icon 
                                name={item.img as any}
                                iconStyle='solid'
                                size={30}
                                color={theme.colors.grey0}
                                style={{paddingBottom:5}}
                            />
                            <Text style={{color:theme.colors.black}}>{item.name}</Text>
                        </View>
                    ))
                ) : (
                    <Text style={{color:theme.colors.black}}>没有选择的项目</Text>
                )}
            </View>
            {Object.keys(groupedItems).map(type => (
                <View key={type} style={styles.columnstyle}>
                    {groupedItems[type].map((item, index) => (
                        <View
                            key={index} 
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 5,
                                paddingBottom: 2,
                                width: (width - 15 * 5) / 5,
                            }}>
                            <Icon
                                name={item.img as any}
                                iconStyle='solid'
                                size={30}
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