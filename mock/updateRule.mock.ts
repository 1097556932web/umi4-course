// @ts-ignore
import { Request, Response } from 'express';

export default {
  'PUT /api/rule': (req: Request, res: Response) => {
    res.status(200).send({
      key: 74,
      disabled: true,
      href: 'https://umijs.org/',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      name: '曹涛',
      owner: 'Wilson',
      desc: '织象商清作合样格火有非行率张气就己。',
      callNo: 82,
      status: 71,
      updatedAt: 'CvzSc',
      createdAt: 'JiNjam',
      progress: 81,
    });
  },
};
