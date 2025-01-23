import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '@rneui/themed';
// 定义样式

export default function Curriculum() {
    const { theme } = useTheme();
    const styles = StyleSheet.create({
        leftColumn: {
            backgroundColor: theme.colors.grey3, 
            flex: 0.8,
            flexDirection: 'column',
        },
        rightColumn: {
            backgroundColor: theme.colors.grey5, 
            flex: 10,
            flexDirection: 'column',
        },
        rightUp: {
            flex: 0.8,
            flexDirection: 'row',
        },
        rightDown:{
            flex: 15,
            flexDirection: 'row',
        },
        UpSection: {
            flex: 1, // 每个部分的基础高度
            justifyContent: 'center', // 垂直居中
            alignItems: 'center', // 水平居中
            borderWidth: 1, // 添加边框宽度
            borderColor: theme.colors.grey0, // 设置边框颜色
            borderRadius: 0, // 可选：设置圆角边框
            // padding: 1, // 添加内边距以确保文本与边框之间有足够的间距
        },
        leftDownSection: {
            flex: 3, // 每个部分的基础高度
            justifyContent: 'center', // 垂直居中
            alignItems: 'center', // 水平居中
            borderWidth: 1, // 添加边框宽度
            borderColor: theme.colors.grey0, // 设置边框颜色
            borderRadius: 0, // 可选：设置圆角边框
            // padding: 1, // 添加内边距以确保文本与边框之间有足够的间距
        },
        sectionText: {
            fontSize: 24, // 调整字体大小
            fontWeight: 'bold', // 加粗字体
            textAlign: 'center', // 居中文本
        },
        DownSection: {
            flex: 1, // 默认所有竖栏等高
            flexDirection: 'column', // 子元素垂直排列
        },
        DownSubSection:{
            flex: 1, // 横栏等宽
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: theme.colors.grey0,
        },
    });
    // 左侧内容组件
    const LeftColumnContent = () => (
        <>
        <View style={styles.leftColumn}>
            <View style={styles.rightUp}>
                <View style={styles.UpSection}></View>
            </View>
            <View style={styles.rightDown}>
                <View style={styles.DownSection}>
                    {[...Array(5)].map((__, subIndex) => (
                        <View key={`${subIndex}`} style={styles.DownSubSection}>
                        </View>
                    ))}
                </View>
            </View>
        </View>
        </>
    );
    
    const RightColumnContent = () => (
        <>
        <View style={styles.rightColumn}>
            <View style={styles.rightUp}>
                    {[...Array(7)].map((_, index) => (
                        <View key={`first-${index}`} style={styles.UpSection}>
                        </View>
                    ))}
            </View>
            <View style={styles.rightDown}>
            {[...Array(7)].map((_, index) => (
                <View key={`right-${index}`} style={styles.DownSection}>
                    {[...Array(5)].map((__, subIndex) => (
                        <View key={`${index}-${subIndex}`} style={styles.DownSubSection}>
                        </View>
                    ))}
                </View>
            ))}
            </View>
        </View>
        </>
    );
    
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor:theme.colors.secondary,
        }}>
            <LeftColumnContent />
            <RightColumnContent />
        </View>
    );
}