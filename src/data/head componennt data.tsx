import { StackNavParamList } from "../Root";

interface HeadComponentItem {
    index: number;
    name: string;
    img: string;
    style: string;
    path: keyof StackNavParamList;
    type: string;
    up: boolean; 
  }
  
  export const headComponentData: HeadComponentItem[] = [
    // Study 类型的条目
    {
      index: 0, 
      name: '成绩查询', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: true
    },
    {
      index: 1,
      name: '考试安排', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: false
    },
    {
      index: 2,
      name: '教学评估', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: false
    },
    {
      index: 3,
      name: '历史课程', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: false
    },
    {
      index: 4,
      name: '教学计划', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: false
    },
    {
      index: 5,
      name: '蹭课助手', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: false
    },
    {
      index: 6,
      name: '作业管理', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: false
    },
    {
      index: 7,
      name: '教务', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: false
    },

    // SchoolLife 类型的条目
    {
      index: 8,
      name: '校车', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      index: 9,
      name: '自习室', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      index: 10,
      name: '图书馆', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      index: 11,
      name: '新闻资讯', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      index: 12,
      name: '校园流水', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      index: 13,
      name: '支援查询', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      index: 14,
      name: '宿舍电量', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      index: 15,
      name: '校内电话', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      index: 16,
      name: '校区地图', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      index: 17,
      name: '校历', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      index: 18,
      name: '校区天气', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },

    // Services 类型的条目
    {
      index: 19,
      name: '出校申请', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'services',
      up: false
    },
    {
      index: 20,
      name: '身份证码', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'services',
      up: false
    },
    {
      index: 21,
      name: '心理咨询', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'services',
      up: false
    },
    {
      index: 22,
      name: '教务网站', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'services',
      up: false
    },

    // Others 类型的条目
    {
      index: 23,
      name: '近期活动', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'others',
      up: false
    },
    {
      index: 24,
      name: '辅修管理', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'others',
      up: false
    },
    {
      index: 25,
      name: '下载中心', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'others',
      up: false
    },
    {
      index: 26,
      name: '工具箱', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'others',
      up: false
    }
];