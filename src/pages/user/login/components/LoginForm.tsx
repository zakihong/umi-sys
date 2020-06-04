import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Loading } from '@/models/connect';
import { connect } from 'umi';
interface LoginFormProps {
  loading: boolean | undefined;
  onSubmit: (key: { username: string; password: string }) => void;
}

const LoginForm: FC<LoginFormProps> = ({ onSubmit, loading }) => {
  const onFinish = (values: any): void => {
    onSubmit(values);
  };
  return (
    <Form name="login-form" onFinish={onFinish}>
      <Form.Item
        label="账号"
        name="username"
        rules={[{ required: true, message: '请输入您的账号!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[
          { required: true, message: '请输入密码' },
          { min: 6, message: '密码最少6位数' },
          { max: 18, message: '密码最多18位数' },
          {
            pattern: new RegExp('^\\w+$', 'g'),
            message: '账号必须字母或数字',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          autoComplete="off"
          placeholder="请输入密码"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
          {loading ? '登录中' : '登录'}
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = ({ loading }: { loading: Loading }) => ({
  loading: loading.models.login,
});

export default connect(mapStateToProps)(LoginForm);
