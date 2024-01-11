import { User } from "../models/userSchema.js";

export const registerProfile = async (req, res) => {
  const { fname, email, website, about } = req.body;
  if (!fname || !email || !website || !about) {
    return res.status(400).json({
      message: "please filled all criteria",
      success: "false",
    });
  }

  try {
    const isMatch = await User.findOne({ email });
    if (isMatch) {
      return res.status(404).json({
        success: false,
        message: "user already exists",
      });
    }

    let user = await User.create({
      fname,
      email,
      website,
      about,
    });

    return res.status(200).json({
      success: true,
      message: "user save succesfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const search = req.query.search || "";
    const query = {
      fname: { $regex: search, $options: "i" },
    };

    const alluser = await User.find(query);
    return res.status(200).json({
      success: true,
      message: "all user retriving",
      alluser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "no user retrived",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: false,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { fname, email, website, about } = req.body;
  if (!fname || !email || !website || !about) {
    return res.status(400).json({
      message: "please filled all criteria",
      success: "false",
    });
  }
  try {
    const findUser = await User.findOneAndUpdate(
      {
        _id: id,
      },
      { fname, email, website, about },
      { new: true }
    );

    await findUser.save();
    res
      .status(200)
      .json({ success: true, message: "succesfully updated user" });
  } catch (error) {
    console.log(error);
  }
};

export const singleuser = async (req, res) => {
  const { id } = req.params;

  try {
    const ismatch = await User.findOne({ _id: id });

    res
      .status(200)
      .json({ success: true, message: "user succesfully find", user: ismatch });
  } catch (error) {
    console.log(error);
  }
};
