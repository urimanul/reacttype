import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'グリッド',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
  },
  {
    title: 'ウィジェット',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'カウンター',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'パノラマ',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: '収穫量',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: '製品',
    path: '/product',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'ユーザークリデンシャル',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'ホテル情報',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'ホテル情報',
        path: '/Messages/Messages1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '平均気温',
        path: '/Messages/Messages2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'スピード',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: '顔認証',
    path: '/facerec',
    icon: <IoIcons.IoMdPerson />
  }
];
