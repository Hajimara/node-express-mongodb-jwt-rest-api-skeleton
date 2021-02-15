
export const login = (req, res, next) => {
  console.log('login');

  return res.status(200).send({
      message: 'success'
  });
};
