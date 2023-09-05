import React from 'react';
import { checkToken } from '../../utilities/users-service';

import './OrderHistoryPage.css';

const OrderHistoryPage = () => {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  return (
    <div>
      <h1>Order History</h1>

      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );
};

export default OrderHistoryPage;
