export const login = (req, res) => {
  console.log('login');

  return res.status(200).send({
    message: 'success',
  });
};
