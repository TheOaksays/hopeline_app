import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView
} from "react-native";
import Svg, { Circle, Ellipse, Line, Path, Polygon, G } from "react-native-svg";

const PINK = "#FF008E";

function HopelineLogo({ size = 80 }: { size?: number }) {
  const s = size * 0.6;
  return (
    <View style={{ alignItems: "center", marginBottom: 10 }}>
      <Svg width={s} height={s} viewBox="0 0 60 60">
        <Polygon points="8,22 14,6 22,20" fill={PINK} />
        <Polygon points="11,20 14,10 20,20" fill="#ffb3d9" />
        <Polygon points="52,22 46,6 38,20" fill={PINK} />
        <Polygon points="49,20 46,10 40,20" fill="#ffb3d9" />
        <Ellipse cx="30" cy="32" rx="22" ry="20" fill={PINK} />
        <Ellipse cx="30" cy="34" rx="15" ry="13" fill="#ffb3d9" opacity="0.45" />
        <Ellipse cx="22" cy="29" rx="3.5" ry="4" fill="#fff" />
        <Ellipse cx="38" cy="29" rx="3.5" ry="4" fill="#fff" />
        <Ellipse cx="22.5" cy="29.5" rx="2" ry="2.5" fill="#1a1a1a" />
        <Ellipse cx="38.5" cy="29.5" rx="2" ry="2.5" fill="#1a1a1a" />
        <Circle cx="23.5" cy="28.5" r="0.7" fill="#fff" />
        <Circle cx="39.5" cy="28.5" r="0.7" fill="#fff" />
        <Polygon points="30,35 28,37 32,37" fill="#ff69b4" />
        <Path d="M28 37 Q30 40 32 37" stroke="#cc006f" strokeWidth="1" fill="none" />
      </Svg>
      <Text style={{ fontSize: size * 0.3, color: PINK, fontWeight: "bold" }}>hopeline</Text>
      <Text style={{ fontSize: 10, color: PINK, letterSpacing: 2 }}>YOUR WRITING SOLUTIONS</Text>
    </View>
  );
}

// --- UI Components สำหรับ Mobile ---
const InputField = ({ placeholder, secureTextEntry = false }: any) => (
  <TextInput
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    style={styles.input}
    placeholderTextColor="#999"
  />
);

const PrimaryButton = ({ label, onPress }: any) => (
  <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

// --- Component ปุ่ม Social ---
function SocialButtons() {
  return (
    <View style={{ flexDirection: "row", gap: 20, justifyContent: "center", marginTop: 15 }}>
      {/* Google Button */}
      <TouchableOpacity style={styles.socialBtn}>
        <Svg width="22" height="22" viewBox="0 0 48 48">
          <Path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <Path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <Path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <Path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </Svg>
      </TouchableOpacity>

      {/* Facebook Button */}
      <TouchableOpacity style={styles.socialBtn}>
        <Svg width="22" height="22" viewBox="0 0 32 32">
          <Path fill="#1877F2" d="M32 16C32 7.163 24.837 0 16 0S0 7.163 0 16c0 7.986 5.85 14.604 13.5 15.806V20.625H9.438V16H13.5v-3.562c0-4.01 2.389-6.225 6.044-6.225 1.75 0 3.581.313 3.581.313v3.938h-2.018c-1.988 0-2.607 1.234-2.607 2.5V16h4.438l-.709 4.625H18.5v11.181C26.15 30.604 32 23.986 32 16z"/>
        </Svg>
      </TouchableOpacity>

      {/* X Button */}
      <TouchableOpacity style={styles.socialBtn}>
        <Svg width="20" height="20" viewBox="0 0 1200 1227">
          <Path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="black"/>
        </Svg>
      </TouchableOpacity>
    </View>
  );
}

// --- หน้าจอหลัก ---
export default function App() {
  const [screen, setScreen] = useState("splash");

  if (screen === "splash") {
    return (
      <TouchableOpacity style={styles.splashContainer} onPress={() => setScreen("login")}>
        <View style={styles.logoCircle}>
          <HopelineLogo size={120} />
        </View>
        <Text style={{ color: "#fff", marginTop: 20 }}>Tap to continue</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.card}>
        <HopelineLogo size={100} />
        <Text style={styles.heading}>
          {screen === "login" ? "Login to your Account" : "Create your Account"}
        </Text>

        <InputField placeholder="Email" />
        <InputField placeholder="Password" secureTextEntry={true} />
        {screen === "register" && <InputField placeholder="Confirm Password" secureTextEntry={true} />}

        <PrimaryButton label={screen === "login" ? "Sign In" : "Sign Up"} />

        {/* เพิ่มข้อความและปุ่ม Social ตรงนี้ */}
        <Text style={{ textAlign: "center", color: "#bbb", marginTop: 20 }}>
          Or {screen === "login" ? "sign in" : "sign up"} with
        </Text>
        <SocialButtons />

        <TouchableOpacity onPress={() => setScreen(screen === "login" ? "register" : "login")}>
          <Text style={styles.footerText}>
            {screen === "login" ? "Don't have an account? " : "Already have an account? "}
            <Text style={{ color: PINK, fontWeight: "bold" }}>
              {screen === "login" ? "Sign Up" : "Sign In"}
            </Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  splashContainer: {
    flex: 1, backgroundColor: PINK, justifyContent: "center", alignItems: "center"
  },
  logoCircle: {
    backgroundColor: "#fff", padding: 40, borderRadius: 100, elevation: 10
  },
  card: { padding: 30, alignItems: "center" },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 20, color: "#333" },
  input: {
    width: "100%", backgroundColor: "#FFF0F7", padding: 15, borderRadius: 10, marginBottom: 15
  },
  primaryButton: {
    width: "100%", backgroundColor: PINK, padding: 15, borderRadius: 10, alignItems: "center",
    marginTop: 10, elevation: 5
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  footerText: { marginTop: 25, color: "#666", textAlign: "center" },
  socialBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#ffd6ec",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2, // เงาสำหรับ Android
    shadowColor: "#000", // เงาสำหรับ iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  }
});