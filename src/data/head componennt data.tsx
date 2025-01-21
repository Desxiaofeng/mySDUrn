import { StackNavParamList } from "../Root";

interface HeadComponentItem {
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
      name: '成绩查询', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: true
    },
    {
      name: '考试安排', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: false
    },
    {
      name: '教学评估', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: false
    },
    {
      name: '历史课程', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: false
    },
    {
      name: '教学计划', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: false
    },
    {
      name: '蹭课助手', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: false
    },
    {
      name: '作业管理', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: false
    },
    {
      name: '教务', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'study',
      up: false
    },
  
    // SchoolLife 类型的条目
    {
      name: '校车', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      name: '自习室', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      name: '图书馆', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      name: '新闻资讯', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      name: '校园流水', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      name: '支援查询', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      name: '宿舍电量', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      name: '校内电话', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      name: '校区地图', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      name: '校历', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
    {
      name: '校区天气', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'schoollife',
      up: false
    },
  
    // Services 类型的条目
    {
      name: '出校申请', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'services',
      up: false
    },
    {
      name: '身份证码', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'services',
      up: false
    },
    {
      name: '心理咨询', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'services',
      up: false
    },
    {
      name: '教务网站', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'services',
      up: false
    },
  
    // Others 类型的条目
    {
      name: '近期活动', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'others',
      up: false
    },
    {
      name: '辅修管理', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'others',
      up: false
    },
    {
      name: '下载中心', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'others',
      up: false
    },
    {
      name: '工具箱', 
      img: 'happy', 
      style: '#ec411c',
      path: 'More', 
      type: 'others',
      up: false
    },
  
    // 最后一项保持不变
    {
      name: '更多内容', 
      img: 'indent-more', 
      style: '#ec411c',
      path: 'More', 
      type: 'more',
      up: true
    },
  ];
