interface HeadComponentItem {
    name: string;
    img: string;
    style?: string;
    path: string;
    type: string;
    up: boolean; 
  }
  
  export const headComponentData: HeadComponentItem[] = [
    // Study 类型的条目
    {
      name: '成绩查询', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path1', 
      type: 'study',
      up: true
    },
    {
      name: '考试安排', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path2', 
      type: 'study',
      up: false
    },
    {
      name: '教学评估', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path3', 
      type: 'study',
      up: false
    },
    {
      name: '历史课程', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path4', 
      type: 'study',
      up: false
    },
    {
      name: '教学计划', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path5', 
      type: 'study',
      up: false
    },
    {
      name: '蹭课助手', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path6', 
      type: 'study',
      up: false
    },
    {
      name: '作业管理', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path7', 
      type: 'study',
      up: false
    },
    {
      name: '教务', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path8', 
      type: 'study',
      up: false
    },

    // SchoolLife 类型的条目
    {
      name: '校车', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path9', 
      type: 'schoollife',
      up: false
    },
    {
      name: '自习室', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path10', 
      type: 'schoollife',
      up: false
    },
    {
      name: '图书馆', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path11', 
      type: 'schoollife',
      up: false
    },
    {
      name: '新闻资讯', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path12', 
      type: 'schoollife',
      up: false
    },
    {
      name: '校园流水', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path13', 
      type: 'schoollife',
      up: false
    },
    {
      name: '支援查询', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path14', 
      type: 'schoollife',
      up: false
    },
    {
      name: '宿舍电量', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path15', 
      type: 'schoollife',
      up: false
    },
    {
      name: '校内电话', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path16', 
      type: 'schoollife',
      up: false
    },
    {
      name: '校区地图', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path17', 
      type: 'schoollife',
      up: false
    },
    {
      name: '校历', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path18', 
      type: 'schoollife',
      up: false
    },
    {
      name: '校区天气', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path19', 
      type: 'schoollife',
      up: false
    },

    // Services 类型的条目
    {
      name: '出校申请', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path20', 
      type: 'services',
      up: false
    },
    {
      name: '身份证码', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path21', 
      type: 'services',
      up: false
    },
    {
      name: '心理咨询', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path22', 
      type: 'services',
      up: false
    },
    {
      name: '教务网站', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path23', 
      type: 'services',
      up: false
    },

    // Others 类型的条目
    {
      name: '近期活动', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path24', 
      type: 'others',
      up: false
    },
    {
      name: '辅修管理', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path25', 
      type: 'others',
      up: false
    },
    {
      name: '下载中心', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path26', 
      type: 'others',
      up: false
    },
    {
      name: '工具箱', 
      img: 'happy', 
      style: '#ec411c', // 新增图标颜色
      path: '/path27', 
      type: 'others',
      up: false
    },

    // 最后一项保持不变
    {
      name: '更多内容', 
      img: 'indent-more', 
      style: '#ec411c',
      path: '/path24', 
      type: 'more',
      up: true
    },
  ];