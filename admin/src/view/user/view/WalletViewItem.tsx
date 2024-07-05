import React from 'react';
import Roles from 'src/security/roles';
import Spinner from 'src/view/shared/Spinner';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserStatut from 'src/view/user/view/UserStatut';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import moment from 'moment';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VipViewItem from 'src/view/vip/view/VipViewItem';

function WalletViewItem(props) {
  const { user, loading } = props;

  if (loading || !user) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <Row
        style={{
          paddingBottom: '10px',
        }}
      >
      
        <Col sm={4}>
          <TextViewItem
            label={i18n('Wallet Address')}
            value={user.erc20}
          />
        </Col>
        <Col sm={4}>
          <TextViewItem
            label={i18n('Wallet Address')}
            value={user.trc20}
          />
        </Col>
        <Col sm={4}>
          <TextViewItem
            label={i18n('Balance')}
            value={user.balance}
          />
        </Col>
      </Row>
      <Row
        style={{
          paddingBottom: '10px',
        }}
      >
      
        <Col sm={4}>
          <VipViewItem
            label={i18n('VIP')}
            value={user.vip}
          />
        </Col>
       
      </Row>
   


 

   
    </ViewWrapper>
  );
}

export default WalletViewItem;
