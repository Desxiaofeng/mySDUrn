import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// 定义样式
export const styles = StyleSheet.create({
    column: {
        flex: 1,
        flexDirection: 'row',
    },
    leftColumn: {
        backgroundColor: 'rgba(184, 107, 107, 0.7)', 
        flex: 1,
        flexDirection: 'column',
    },
    rightColumn: {
        backgroundColor: 'rgba(164, 139, 139, 0.27)', 
        flex: 10,
        flexDirection: 'column',
    },
    rightUp: {
        flex: 1,
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
        borderColor: '#000', // 设置边框颜色
        borderRadius: 0, // 可选：设置圆角边框
        // padding: 1, // 添加内边距以确保文本与边框之间有足够的间距
    },
    leftDownSection: {
        flex: 3, // 每个部分的基础高度
        justifyContent: 'center', // 垂直居中
        alignItems: 'center', // 水平居中
        borderWidth: 1, // 添加边框宽度
        borderColor: '#000', // 设置边框颜色
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
        borderColor: '#000',
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

export default function Curriculum() {
    return (
        <>
            <View style={styles.column}>
                <LeftColumnContent />
                <RightColumnContent />
            </View>
        </>
    );
}
