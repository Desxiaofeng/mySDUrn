interface HeadComponentItem {
    name: string;
    img: string;
    style?: string;
    path: string;
    type: string;
    up: boolean; // 添加此属性
  }
  
  export const headComponentData: HeadComponentItem[] = [
    // Study 类型的条目
    {
      name: '成绩查询', 
      img: 'happy', 
      style: '#ec411c',
      path: '/path1', 
      type: 'study',
      up: true
    },
    // {
    //   name: '考试安排', 
    //   img: 'image1.jpg', 
    //   path: '/path2', 
    //   type: 'study',
    //   up: false
    // },
    // {
    //   name: '教学评估', 
    //   img: 'image1.jpg', 
    //   path: '/path3', 
    //   type: 'study',
    //   up: false
    // },
    // {
    //   name: '历史课程', 
    //   img: 'image1.jpg', 
    //   path: '/path4', 
    //   type: 'study',
    //   up: false
    // },
    // {
    //   name: '教学计划', 
    //   img: 'image1.jpg', 
    //   path: '/path5', 
    //   type: 'study',
    //   up: false
    // },
    // {
    //   name: '蹭课助手', 
    //   img: 'image1.jpg', 
    //   path: '/path6', 
    //   type: 'study',
    //   up: false
    // },
    // {
    //   name: '作业管理', 
    //   img: 'image1.jpg', 
    //   path: '/path7', 
    //   type: 'study',
    //   up: false
    // },
    // {
    //   name: '教务', 
    //   img: 'image1.jpg', 
    //   path: '/path8', 
    //   type: 'study',
    //   up: false
    // },
  
    // SchoolLife 类型的条目
    {
      name: '校车', 
      img: 'image2.jpg', 
      path: '/path9', 
      type: 'schoollife',
      up: false
    },
    // {
    //   name: '自习室', 
    //   img: 'image2.jpg', 
    //   path: '/path10', 
    //   type: 'schoollife',
    //   up: false
    // },
    // {
    //   name: '图书馆', 
    //   img: 'image2.jpg', 
    //   path: '/path11', 
    //   type: 'schoollife',
    //   up: false
    // },
    // {
    //   name: '新闻资讯', 
    //   img: 'image2.jpg', 
    //   path: '/path12', 
    //   type: 'schoollife',
    //   up: false
    // },
    // {
    //   name: '校园流水', 
    //   img: 'image2.jpg', 
    //   path: '/path13', 
    //   type: 'schoollife',
    //   up: false
    // },
    // {
    //   name: '支援查询', 
    //   img: 'image2.jpg', 
    //   path: '/path14', 
    //   type: 'schoollife',
    //   up: false
    // },
    // {
    //   name: '宿舍电量', 
    //   img: 'image2.jpg', 
    //   path: '/path15', 
    //   type: 'schoollife',
    //   up: false
    // },
    // {
    //   name: '校内电话', 
    //   img: 'image2.jpg', 
    //   path: '/path16', 
    //   type: 'schoollife',
    //   up: false
    // },
    // {
    //   name: '校区地图', 
    //   img: 'image2.jpg', 
    //   path: '/path17', 
    //   type: 'schoollife',
    //   up: false
    // },
    // {
    //   name: '校历', 
    //   img: 'image2.jpg', 
    //   path: '/path18', 
    //   type: 'schoollife',
    //   up: false
    // },
    // {
    //   name: '校区天气', 
    //   img: 'image2.jpg', 
    //   path: '/path19', 
    //   type: 'schoollife',
    //   up: false
    // },
  
    // Services 类型的条目
    {
      name: '出校申请', 
      img: 'image3.jpg', 
      path: '/path20', 
      type: 'services',
      up: false
    },
    // {
    //   name: '身份证码', 
    //   img: 'image3.jpg', 
    //   path: '/path21', 
    //   type: 'services',
    //   up: false
    // },
    // {
    //   name: '心理咨询', 
    //   img: 'image3.jpg', 
    //   path: '/path22', 
    //   type: 'services',
    //   up: false
    // },
    // {
    //   name: '教务网站', 
    //   img: 'image3.jpg', 
    //   path: '/path23', 
    //   type: 'services',
    //   up: false
    // },
  
    // Others 类型的条目
    {
      name: '近期活动', 
      img: 'image4.jpg', 
      path: '/path24', 
      type: 'others',
      up: false
    },
    // {
    //   name: '辅修管理', 
    //   img: 'image4.jpg', 
    //   path: '/path25', 
    //   type: 'others',
    //   up: false
    // },
    // {
    //   name: '下载中心', 
    //   img: 'image4.jpg', 
    //   path: '/path26', 
    //   type: 'others',
    //   up: false
    // },
    // {
    //   name: '工具箱', 
    //   img: 'image4.jpg', 
    //   path: '/path27', 
    //   type: 'others',
    //   up: false
    // }

    {
      name: '更多内容', 
      img: 'indent-more', 
      style:'#ec411c',
      path: '/path24', 
      type: 'more',
      up: true
    },
  ];