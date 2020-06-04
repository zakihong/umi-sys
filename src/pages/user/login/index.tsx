import React, { FC } from 'react';
import { connect, Dispatch } from 'umi';
import { Row, Col } from 'antd';
import { ConnectState } from '@/models/connect';
import { StateType } from './model';
import LoginForm from './components/LoginForm';
import styles from './style.less';

export interface LoginLayoutProps {
  dispatch: Dispatch;
  userAndlogin: ConnectState;
  loading: boolean;
}

export interface SubmitValProps {
  username: string;
  password: string;
}

const Login: FC<LoginLayoutProps> = ({ dispatch }) => {
  function handleSubmit(values: SubmitValProps) {
    dispatch({
      type: 'userAndlogin/login',
      payload: {
        ...values,
      },
    });
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <div className={styles.loginRight}>
          <div className={styles.loginContent}>
            <Row>
              <Col span={24} className={styles.logo} style={{ textAlign: 'center' }}>
                <span style={{ fontSize: 22, fontWeight: 600, color: '#1abc9c' }}>
                  数据管理平台
                </span>
              </Col>
            </Row>
            <LoginForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  ({
    userAndlogin,
    loading,
  }: {
    userAndlogin: StateType;
    loading: {
      effects: {
        [key: string]: boolean;
      };
    };
  }) => ({
    userAndlogin,
    submitting: loading.effects['userAndlogin/login'],
  }),
)(Login);