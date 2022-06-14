import { useAuth } from "../../hooks/auth";
import { GoogleButton, HistoryIcon, UserInfo, UserInfoButton } from "./styles";
import { X as CloseIcon } from "phosphor-react";
import googleSvg from "../../assets/google.svg";
import { Link } from "react-router-dom";

export function SocialSignInButton() {
  const { user, signInWithGoogle, signOut } = useAuth();

  return (
    <>
      {!user ? (
        <GoogleButton onClick={signInWithGoogle}>
          <img src={googleSvg} alt="Entrar com Google" /> Entrar com Google
        </GoogleButton>
      ) : (
        <UserInfo>
          <Link to="/history">
            <HistoryIcon size={28} weight="fill" />
          </Link>
          <UserInfoButton>
            <img src={`${user.photo}`} alt="Foto do usuário" />
            {user.name}
            <CloseIcon size={16} onClick={signOut} />
          </UserInfoButton>
        </UserInfo>
      )}
    </>
  );
}
