import { PlusOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, List, Typography } from "antd";
import React from "react";

const { Paragraph } = Typography;
const ListCard = () => {
    const list: any[] = [];
    for (let i = 1; i < 8; i++) {
        list.push({
            id: i,
            title: `卡片列表${i}`,
            description:
                '"Umi@4 实战教程，专门针对中后台项目零基础的朋友，不管你是前端还是后端，看完这个系列你也有能力合理“抗雷”，“顶坑”',
        });
    };
    const { Meta } = Card;
    
    return (
        <List
            rowKey="id"
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 4,
                xxl: 4,
            }}
            dataSource={[{}, ...list]}
            renderItem={item => {
                if (item && item.id) {
                    return (
                        <List.Item key={item.id}>
                            <Card
                                hoverable
                                actions={[
                                    <a key="option1">操作一</a>,
                                    <a key="option2">操作二</a>,
                                ]}>
                                <Meta avatar={
                                    <Avatar
                                        size={48}
                                        src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                                    />
                                }
                                    title={<a>{item.title}</a>}
                                    description={
                                        <Paragraph ellipsis={{ rows: 3 }}>
                                            {item.description}
                                        </Paragraph>
                                    }
                                />
                            </Card>
                        </List.Item>
                    )
                } else {
                    return (
                        <List.Item>
                            <Button type="dashed" style={{ width: "100%", height: "201px" }}>
                                <PlusOutlined />新增产品
                            </Button>
                        </List.Item>
                    )
                }
            }}
        />
    )
};

export default ListCard;