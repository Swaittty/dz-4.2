import { Card, Avatar, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserCard = ({ user }) => {
    const { name, age, city, active, img } = user;

    return (
        <Card style={{ width: 300, margin: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Avatar size={64} src={img} icon={<UserOutlined />} />
                <div>
                    <h3 style={{ margin: 0 }}>{name}</h3>
                    <p style={{ margin: '5px 0', color: '#666' }}>Возраст: {age}</p>
                    <p style={{ margin: '5px 0', color: '#666' }}>Город: {city}</p>

                    <Tag color={active ? 'green' : 'red'}>
                        {active ? 'Активен' : 'Неактивен'}
                    </Tag>
                </div>
            </div>
        </Card>
    );
};

export default UserCard;