const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://charlies-closet-dev.herokuapp.com/api'
  : 'http://localhost:8080/api';

const updateUser = (userId: string, token: string, userObj: any) => fetch(`${baseUrl}/users/${userId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(userObj),
});

const getAllBoxes = () => fetch(`${baseUrl}/boxes`);

const getBoxById = (id: string) => fetch(`${baseUrl}/boxes/${id}`);

interface UserType {
  name: string,
  email: string,
  priceId: string,
}

const createSubscription = (user: UserType, token: string) => fetch('http://localhost:8080/api/payments/create-subscription', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    name: user.name,
    email: user.email,
    priceId: user.priceId,
  }),
})

export {
  updateUser,
  getAllBoxes,
  getBoxById,
  createSubscription,
};
