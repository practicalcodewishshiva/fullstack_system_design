import {
  Dialog,
  DialogContent,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import QRCode from "react-qr-code";

// import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router";

export default function PaytmLogin({ open, onClose }) {
//   const navigate = useNavigate();
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [validData, setValidData] = useState({
    email: "",
    password: "",
  });
  // const handleMobileNumber = (e) => {
  //   setPhoneNumber(e.target.value);
  // };
  // console.log(phoneNumber);

  // const handleOtp = async () => {
  //   if (phoneNumber.length < 10) {
  //     alert("Enter your Mobile Number");
  //   }
  //   try {
  //     const result = await axios.post("http://localhost:5000/loginpaytm", {
  //       phoneNumber,
  //     });
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleOtp = () => {
  //   if(!)
  // }
  const handleInput = (e) => {
    const { name, value } = e.target;
    setValidData((prev) => ({ ...prev, [name]: value }));
  };
  const handleOtp = () => {
    if (!validData.email || !validData.password) {
      alert("Enter valid Email / Valid Pasword");
      return;
    }
    try {
      alert("Login Success");
      setValidData({ email: "", password: "" });
      // setTimeout(() => {
      onClose();
      //   navigate("/dashboard");
      // }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent sx={{ position: "relative", p: 4 }}>
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        {/* Title */}
        <Typography variant="h5" fontWeight={600} mb={3} align="center">
          Login with your Paytm account
        </Typography>

        {/* Mobile Input */}
        <TextField
          name="email"
          fullWidth
          placeholder="Enter Email"
          variant="outlined"
          sx={{ mb: 3 }}
          onChange={handleInput}
        />
        <TextField
          name="password"
          fullWidth
          placeholder="Enter Password"
          variant="outlined"
          sx={{ mb: 3 }}
          onChange={handleInput}
        />

        {/* Get OTP Button */}
        <Button
          // {!validData.email && !validData.password?disbled:""}
          fullWidth
          size="large"
          variant="contained"
          sx={{
            backgroundColor: "#9bdcff",
            color: "#fff",
            py: 1.5,
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#7ccdf8",
            },
          }}
          onClick={handleOtp}
        >
          Get OTP
        </Button>

        {/* Divider */}
        <Divider sx={{ my: 4 }} />

        {/* QR Login */}
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography fontWeight={600}>OR Login through QR Code</Typography>
            <Typography color="primary" sx={{ cursor: "pointer" }}>
              click here
            </Typography>
          </Box>

          <QRCode value="https://youtube.com/login" size={90} />
        </Box>

        {/* App Download */}
        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="text.secondary" mb={2}>
          To create an account download Paytm App
        </Typography>

        <Box display="flex" gap={2}>
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            height={40}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Play Store"
            height={40}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
