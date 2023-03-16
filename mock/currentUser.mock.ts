// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/currentUser': (req: Request, res: Response) => {
    res.status(200).send({
      name: '范强',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      userid: 'f8e8a81e-8D5A-8d20-f1db-93CbfB09D00B',
      email: 'x.nvndxxx@nyyw.ck',
      signature: '型比场般图声观连办单铁线到。',
      title: '据维算手严对具算精消广认完断动。',
      group: '创新科技组',
      tags: [
        { key: 1, label: '专注设计' },
        { key: 2, label: '健身达人' },
        { key: 3, label: '健身达人' },
        { key: 4, label: '海纳百川' },
        { key: 5, label: '大长腿' },
        { key: 6, label: '健身达人' },
        { key: 7, label: '川妹子' },
        { key: 8, label: '爱好广泛' },
        { key: 9, label: '健身达人' },
        { key: 10, label: '健身达人' },
        { key: 11, label: '算法工程师' },
        { key: 12, label: 'IT 互联网' },
        { key: 13, label: '爱好广泛' },
        { key: 14, label: '川妹子' },
      ],
      notifyCount: 91,
      unreadCount: 77,
      country: '印度',
      access: '铁为制认角论个确会布处部取入专用产题。',
      geographic: { province: { label: '甘肃省', key: 15 }, city: { label: '大庆市', key: 16 } },
      address: '浙江省 舟山市 嵊泗县',
      phone: '11155935767',
    });
  },
};
