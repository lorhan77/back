const { usuarioModel } = require('../models/usuario');

exports.getusuario = async (req, res) => {
  try {
    const usuarios = await usuarioModel.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getoneusuario = async (req, res) => {
  try {
    const user = await usuarioModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createusuario = async (req, res) => {
  try {
    const newUser = await usuarioModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateusuario = async (req, res) => {
  try {
    const updatedUser = await usuarioModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteusuario = async (req, res) => {
  try {
    const deletedUser = await usuarioModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json({ message: "Usuário excluído com sucesso" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getoneusuarioCPF = async (req, res) => {
  try {
    const cpf = parseInt(req.params.id); // CPF a ser pesquisado
    const user = await usuarioModel.findOne({ cpf: cpf }); // Procura usuário por CPF
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.loginUsuario = async (req, res) => {
  try {
    const email = req.body.email; // email a ser pesquisado 
    const senha = req.body.senha; // senha a ser pesquisado
    const userLogin = await usuarioModel.find({ email: email, senha: senha }); // Procura usuário por email
    if (!userLogin) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json(userLogin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


