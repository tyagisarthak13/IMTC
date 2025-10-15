import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import sendEmail from "../utils/onboardingMail.js";

export const signup = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const randomPassword = uuidv4().slice(0, 8);
    const hashedPassword = await bcrypt.hash(randomPassword, 10);

    const newUser = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    const subject = "Welcome to IMTC Payments — Your Account is Ready!";

    const html = `
  <div style="margin:0; padding:0; background-color:#f4f6f8; font-family:'Helvetica Neue', Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px; margin:40px auto; background-color:#ffffff; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,0.05); overflow:hidden;">
      <tr>
        <td style="background-color:#0d47a1; padding:24px 0; text-align:center;">
          <img src="/icon_logo.png" alt="IMTC Payments" width="150" style="display:block; margin:0 auto;"/>
          <h1 style="color:#ffffff; font-size:22px; font-weight:600; margin:10px 0 0;">Welcome to IMTC Payments</h1>
        </td>
      </tr>

      <tr>
        <td style="padding:30px;">
          <h2 style="color:#0d47a1; margin-top:0;">Hi ${name},</h2>
          <p style="font-size:15px; color:#333333; line-height:1.6;">
            We’re thrilled to have you onboard! Your IMTC Payments account has been created successfully.
          </p>
          <p style="font-size:15px; color:#333333; line-height:1.6;">
            Here are your account details:
          </p>

          <div style="background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:15px; margin:15px 0;">
            <p style="margin:0; font-size:15px; color:#111827;">
              <strong>Login Email:</strong> ${email} <br/>
              <strong>Password:</strong> 
              <span style="background-color:#e0e7ff; color:#0d47a1; padding:4px 8px; border-radius:4px; font-weight:bold;">${randomPassword}</span>
            </p>
          </div>


          <p style="font-size:14px; color:#666666; line-height:1.6;">
            If you didn’t create this account or have any concerns, please contact our support team immediately at 
            <a href="mailto:support@imtcpayments.com" style="color:#0d47a1; text-decoration:none;">support@imtcpayments.com</a>.
          </p>

          <p style="font-size:15px; color:#333333; margin-top:30px;">
            Best Regards,<br/>
            <strong>IMTC Payments Team</strong>
          </p>
        </td>
      </tr>

      <tr>
        <td style="background-color:#f1f5f9; text-align:center; padding:15px;">
          <p style="margin:0; font-size:12px; color:#6b7280;">
            © ${new Date().getFullYear()} IMTC Payment Solutions LLP. All rights reserved.<br/>
            <a href="https://imtcpayments.com" style="color:#0d47a1; text-decoration:none;">imtcpayments.com</a>
          </p>
        </td>
      </tr>
    </table>
  </div>
`;

    await sendEmail(email, subject, html);

    res.status(201).json({
      message: "User created successfully. Check your email!",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const newPassword = uuidv4().slice(0, 8);
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    const subject = "Your New IMTC Payments Password";
    const html = `
  <div style="margin:0; padding:0; background-color:#f4f6f8; font-family:'Helvetica Neue', Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px; margin:40px auto; background-color:#ffffff; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,0.05); overflow:hidden;">
      <tr>
        <td style="background-color:#0d47a1; padding:24px 0; text-align:center;">
          <img src="/icon_logo.png" alt="IMTC Payments" width="150" style="display:block; margin:0 auto;"/>
          <h1 style="color:#ffffff; font-size:22px; font-weight:600; margin:10px 0 0;">Password Reset Successful</h1>
        </td>
      </tr>

      <tr>
        <td style="padding:30px;">
          <h2 style="color:#0d47a1; margin-top:0;">Hi ${user.name},</h2>
          <p style="font-size:15px; color:#333333; line-height:1.6;">
            Your IMTC Payments account password has been successfully reset.
          </p>

          <p style="font-size:15px; color:#333333; line-height:1.6;">
            Here are your new login details:
          </p>

          <div style="background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:15px; margin:15px 0;">
            <p style="margin:0; font-size:15px; color:#111827;">
              <strong>Login Email:</strong> ${user.email} <br/>
              <strong>New Password:</strong> 
              <span style="background-color:#e0e7ff; color:#0d47a1; padding:4px 8px; border-radius:4px; font-weight:bold;">${newPassword}</span>
            </p>
          </div>

          <p style="font-size:14px; color:#666666; line-height:1.6;">
            If you didn’t request a password reset, please contact our support team immediately at 
            <a href="mailto:support@imtcpayments.com" style="color:#0d47a1; text-decoration:none;">support@imtcpayments.com</a>.
          </p>

          <p style="font-size:15px; color:#333333; margin-top:30px;">
            Best Regards,<br/>
            <strong>IMTC Payments Team</strong>
          </p>
        </td>
      </tr>

      <tr>
        <td style="background-color:#f1f5f9; text-align:center; padding:15px;">
          <p style="margin:0; font-size:12px; color:#6b7280;">
            © ${new Date().getFullYear()} IMTC Payment Solutions LLP. All rights reserved.<br/>
            <a href="https://imtcpayments.com" style="color:#0d47a1; text-decoration:none;">imtcpayments.com</a>
          </p>
        </td>
      </tr>
    </table>
  </div>
`;

    await sendEmail(email, subject, html);

    res.status(200).json({ message: "New password sent to your email!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
