import User from '../../schemas/user';

const login = (req, res) => {
  console.log('login');

  return res.status(200).send({
    message: 'success',
  });
};

const findUser = async (req, res) => {
  try {
    const d = await User.find();
    console.log(d);

    return res.status(200).send({
      message: 'success',
    });
  } catch (e) {
    return res.status(500).send({
      message: e
    });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create({
      email: 'show3rg@gmail.com',
      password: 'qwer12#$',
      name: 'Park Sujin'
    });
    console.log(user);

    return res.status(200).send({
      message: 'success'
    });
  } catch (e) {
    return res.status(500).send({
      message: e
    });
  }
};

export {
  login,
  findUser,
  createUser,
}
