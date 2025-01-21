import {TabNavParamList} from '../Root';
import {StackNavParamList} from '../Root';
export const data = {
    user:{
        name: '喜羊羊',
        id: '114514,'
    },
    poem:{
        spring: '人来鸟不惊',
        summer: '小荷才露尖尖角，早有蜻蜓立上头',
        autumn: '潦水尽而寒潭清，烟光凝而暮山紫',
        winter: '蓦然雪化，且静候飞雪再临之时',
    },
    init: { 
      tab: 'Tab' as keyof StackNavParamList, 
      home: 'Home' as keyof TabNavParamList,
    },
}